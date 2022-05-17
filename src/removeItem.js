import displayDefault from "./default.js";
import itemsContainer from "../index.js";
import { removeCheckoutButton } from "./checkoutBtn.js";
import displayAlert from "./displayAlert.js";
import displayCartNumber from "./displayCartNumber.js";
import getElement from "./getElement.js";

const deleteItem = (event) => {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  displayDefault(itemsContainer);
  // edit this
  const numberOfItems = getElement(".cart");
  let length = 0;
  numberOfItems.setAttribute("data-number", `${length}`);
  displayCartNumber(numberOfItems);
  removeCheckoutButton();
  displayAlert("Item removed from cart");
};

export default deleteItem;
