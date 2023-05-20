import { galleryItems } from "./gallery-items.js";
// Change code below this line
let listEl = document.querySelector(".gallery");
console.log(listEl);
let listItemEl;
let galleryCollection = galleryItems.map(
  ({ preview, original, description }) => {
    listItemEl = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
    return listItemEl;
  }
);
listEl.insertAdjacentHTML("beforeend", galleryCollection.join(""));
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
  disableScroll: false,
});
console.log(galleryItems);
