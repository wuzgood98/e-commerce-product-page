import { checkoutButton } from "../index.js";
export const removeCheckoutButton = () => {
  checkoutButton.classList.remove("checkout-active");
};

export const addCheckout = () => {
  checkoutButton.classList.add("checkout-active");
};
