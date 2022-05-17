import getElement from "./getElement.js";

let quantity = getElement(".quantity");

let count = 1;
quantity.textContent = count;
const maxQuantity = 12;
const minQuantity = 1;

const buttonFunction = (button) => {
  button.dataset.button === "plus" ? count++ : count--;
  if (count >= maxQuantity) {
    count = maxQuantity;
  }
  if (count <= minQuantity) {
    count = minQuantity;
  }
};

const listenToButtons = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttonFunction(button);
      quantity.textContent = count;
    });
  });
};

export default listenToButtons;
