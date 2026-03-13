const productsBtn = document.getElementById("mobile-products-toggle");
const productsMenu = document.getElementById("mobile-products-menu");
const productsArrow = document.getElementById("mobile-products-arrow");

productsBtn.addEventListener("click", () => {

    productsMenu.classList.toggle("hidden");

    productsArrow.classList.toggle("rotate-180");

});