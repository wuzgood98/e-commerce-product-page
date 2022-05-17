import getElement from "./getElement.js";

// main page gallery
export class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...document.querySelectorAll(".thumbnail-img")];
    // target
    this.thumbnailImages = getElement(".thumbnails");
    this.mainImage = getElement(".product-img");

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("thumbnail-img")) {
          this.displayMainImage(e.target, this.list);
          this.chooseImage(e);
        }
      }.bind(this)
    );
  }

  displayMainImage(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.mainImage.innerHTML = list
      .map(function (image) {
        return `<img
                src="${image.src}"
                alt="${image.title}"
                class="${
                  selectedImage.dataset.id === image.dataset.id
                    ? "thumbnail-img selected"
                    : "thumbnail-img"
                }"
                data-id="${image.dataset.id}"
              />`;
      })
      .join("");
  }

  setMainImage(selectedImage) {
    this.mainImage.src = selectedImage.src;
  }

  chooseImage(e) {
    if (e.target.classList.contains("thumbnail-img")) {
      const selected = this.thumbnailImages.querySelector(".selected");
      selected.classList.remove("selected");
      this.setMainImage(e.target);
      e.target.classList.add("selected");
    }
  }
}

// modal gallery
export class ModalGallery {
  constructor(element) {
    this.container = element;
    this.list = [...document.querySelectorAll(".product-img")];
    // target
    this.modalImages = getElement(".modal-images");
    this.modal = getElement(".modal");
    this.mainImage = getElement(".main-img");
    this.closeBtn = getElement(".close-modal-btn");
    this.nextBtn = getElement(".gallery-next");
    this.prevBtn = getElement(".gallery-prev");

    // bind functions
    this.closeModal = this.closeModal.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("product-img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img
              src="${image.src}"
              title="${image.title}"
              data-id="${image.dataset.id}"
              alt="${image.title}"
              class="${
                selectedImage.dataset.id === image.dataset.id
                  ? "modal-img selected"
                  : "modal-img"
              }"
            />`;
      })
      .join("");
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
  }

  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }

  setMainImage(selectedImage) {
    this.mainImage.src = selectedImage.src;
  }

  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }

  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }

  chooseImage(e) {
    if (e.target.classList.contains("modal-img")) {
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");
      this.setMainImage(e.target);
      e.target.classList.add("selected");
    }
  }
}

// mobile view gallery
export class Slide {
  button;
  constructor(button) {
    this.button = button;
    // target
    this.slides = getElement(".main-product");

    this.button.addEventListener(
      "click",
      function () {
        button.dataset.carouselButton === "next"
          ? this.nextImage()
          : this.prevImage();
      }.bind(this)
    );
  }

  nextImage() {
    const selected = this.slides.querySelector("[data-active]");
    const next = selected.nextElementSibling || this.slides.firstElementChild;
    selected.removeAttribute("data-active");
    next.setAttribute("data-active", "true");
  }

  prevImage() {
    const selected = this.slides.querySelector("[data-active]");
    const prev =
      selected.previousElementSibling || this.slides.lastElementChild;
    selected.removeAttribute("data-active");
    prev.setAttribute("data-active", "true");
  }
}
