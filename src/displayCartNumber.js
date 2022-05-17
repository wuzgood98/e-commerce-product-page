function displayCartNumber(element) {
  element.dataset.number >= 1
    ? element.classList.add("cart-number-active")
    : element.classList.remove("cart-number-active");
}

export default displayCartNumber;
