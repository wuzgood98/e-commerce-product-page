import displayCartItems from "./displayCartItems.js";
import displayAlert from "./displayAlert.js";
import { addCheckout } from "./checkoutBtn.js";

/**
 * We're grabbing the image, title, price, and quantity of the item that was clicked, and then we're
 * passing those values to the displayCartItems function
 * @param event - the event that triggered the function
 * @param container - the container where the cart items will be displayed
 */
const addToCartClicked = (event, container) => {
  let button = event.target;
  let shopItem = button.parentElement.parentElement.parentElement;
  const image = shopItem.querySelectorAll(".slide")[0].querySelector("img").src;
  const title = shopItem
    .querySelectorAll("section.description")[0]
    .querySelector(".heading").textContent;
  const price = shopItem
    .querySelectorAll("section.description")[0]
    .querySelector(".current-price")
    .textContent.replace("$", "");
  const quantity = shopItem
    .querySelectorAll("section.description")[0]
    .querySelector(".quantity").textContent;
  let total = parseFloat(price * quantity).toFixed(2);
  displayCartItems(image, title, quantity, price, total, container);
  addCheckout();
  displayAlert("Item added to cart");
};

export default addToCartClicked;
