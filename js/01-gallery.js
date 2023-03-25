import { galleryItems } from "./gallery-items.js";
// Change code below this line

//! gallery find
const gallery = document.querySelector(".gallery");

//! markup create
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

//! event listener

gallery.addEventListener("click", openBigImage);

//! functions

function openBigImage(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.getAttribute(
      "data-source"
    )}" alt="${event.target.getAttribute("alt")}" />`
  );
  instance.show();
}
