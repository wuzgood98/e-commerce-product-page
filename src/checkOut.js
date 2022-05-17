import itemsContainer from "../index.js";
import { removeCheckoutButton } from "./checkoutBtn.js";
import displayDefault from "./default.js";
import { cartIcon } from "../index.js";

const checkoutButtonClicked = () => {
  while (itemsContainer.hasChildNodes()) {
    itemsContainer.removeChild(itemsContainer.firstChild);
  }
  cartIcon.classList.remove("cart-number-active");
  removeCheckoutButton();
  displayDefault(itemsContainer);
  alert("Thanks for shopping with us!");
};

export default checkoutButtonClicked;
