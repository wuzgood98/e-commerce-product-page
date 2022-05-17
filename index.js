import listenToButtons from "./src/quantity.js";
import displayDefault from "./src/default.js";
import addToCartClicked from "./src/cart.js";
import checkoutButtonClicked from "./src/checkOut.js";
import getElement from "./src/getElement.js";
import { Gallery, ModalGallery, Slide } from "./src/gallery.js";

const quantityButtons = [...document.querySelectorAll("[data-button]")];
export const cartIcon = getElement(".cart");
export const checkoutButton = getElement(".checkout-btn");

const itemsContainer = getElement(".items-container");
export default itemsContainer;

const start = () => {
  listenToButtons(quantityButtons);
  displayDefault(itemsContainer);

  checkoutButton.addEventListener("click", checkoutButtonClicked);

  const addToCart = getElement(".add-to-cart");
  addToCart.addEventListener("click", (e) => {
    addToCartClicked(e, itemsContainer);
  });

  // gallery
  new Gallery(getElement(".thumbnails"));
  new ModalGallery(getElement(".main-product"));
  new Slide(getElement(".next"));
  new Slide(getElement(".prev"));

  const cartItemsContainer = getElement(".cart-items-container");

  cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
  });

  const menuIcon = getElement("#menu-toggle");
  menuIcon.addEventListener("click", () => {
    navBar.classList.add("show-link");
  });

  const navBar = getElement(".links-center");
  navBar.addEventListener("click", (e) => {
    e.currentTarget === e.target && navBar.classList.remove("show-link");
  });

  const closeLinkButton = getElement(".close-btn");
  closeLinkButton.addEventListener("click", () => {
    navBar.classList.remove("show-link");
  });
};

window.addEventListener("DOMContentLoaded", start);
