import displayCartNumber from "./displayCartNumber.js";
import getElement from "./getElement.js";

const updateCartItemsQuantity = (quantity) => {
  const numberOfItems = getElement(".cart");
  numberOfItems.setAttribute("data-number", `${quantity}`);
  displayCartNumber(numberOfItems);
};

export default updateCartItemsQuantity;
