const productListEl = document.getElementById("product-list");
const navSearchEl = document.getElementById("nav-search");
const navListEl = document.getElementById("nav-list");

const categoryToggleBtn = document.getElementById("categories-toggle");
const brandToggleBtn = document.getElementById("brands-toggle");

const categoryAccordion = document.getElementById("category-accordion");
const brandAccordion = document.getElementById("brand-accordion");

const categorySearchToggle = document.getElementById("category-search");
const brandSearchToggle = document.getElementById("brand-search");

const sortBy1 = document.getElementById("sort-by-1");
const sortBy2 = document.getElementById("sort-by-2");

async function getAllProducts() {
  const res = await fetch("./productList.json");

  const data = await res.json();

  return data;
}

async function showProducts() {
  const products = await getAllProducts();

  products.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.classList.add("product-card");
    productEl.innerHTML = `
        <div class="product-card-content">
            <div class="product-img">
            <img
                src="${product.img}"
                alt="product-img"
            />
            <button class="btn config-btn">Configure</button>
            </div>
            <h2 class="product-title">${product.title}</h2>
            <p class="product-details">${product.description}</p>
        </div>
        `;

    productListEl.appendChild(productEl);
  });
}

showProducts();

// console.log("print");

// Event functions

function toggleBtn(el) {
  if (el.classList.contains("fa-minus")) {
    el.classList.remove("fa-minus");
    el.classList.add("fa-plus");
  } else {
    el.classList.remove("fa-plus");
    el.classList.add("fa-minus");
  }
}

function toggleSearch(el, value) {
  if (el.lastElementChild.hasAttribute("value")) {
    el.lastElementChild.removeAttribute("value");
  } else {
    el.lastElementChild.setAttribute("value", value);
  }
}

// Event listeners

navSearchEl.addEventListener("click", () => {
  navSearchEl.classList.toggle("show");

  //   navListEl.lastElementChild.classList.toggle("invisible");
});

categoryToggleBtn.addEventListener("click", () => {
  toggleBtn(categoryToggleBtn);
  categoryAccordion.classList.toggle("hide");
});

brandToggleBtn.addEventListener("click", () => {
  toggleBtn(brandToggleBtn);
  brandAccordion.classList.toggle("hide");
});

categorySearchToggle.addEventListener("click", () => {
  categorySearchToggle.classList.toggle("focus");
  toggleSearch(categorySearchToggle, "Jersey");
});

brandSearchToggle.addEventListener("click", () => {
  brandSearchToggle.classList.toggle("focus");
  toggleSearch(brandSearchToggle, "Jersey");
});

sortBy1.addEventListener("click", () => {
  sortBy1.classList.toggle("onclick");
  console.log("fuck");
});

sortBy2.addEventListener("click", () => {
  sortBy2.classList.toggle("onclick");
  console.log("fuck");
});
