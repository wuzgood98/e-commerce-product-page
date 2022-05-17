import getElement from "./getElement.js";

const cartAlert = getElement(".cart-alert");
const displayAlert = (alertText) => {
  cartAlert.textContent = alertText;
  cartAlert.classList.add("cart-alert-active");
  setTimeout(() => {
    cartAlert.classList.remove("cart-alert-active");
  }, 2000);
};

export default displayAlert;
