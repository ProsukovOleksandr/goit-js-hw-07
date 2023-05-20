import { galleryItems } from "./gallery-items.js";
// Change code below this line
let listEl = document.querySelector(".gallery");
console.log(listEl);
let listItemEl;
let galleryCollection = galleryItems.map(
  ({ preview, original, description }) => {
    listItemEl = `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"src="${preview}" data-source="${original}" alt="${description}"/> </a></li>`;

    return listItemEl;
  }
);

listEl.insertAdjacentHTML("beforeend", galleryCollection.join(""));

function onClicked(){
  listEl.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG')
    {
      return event.target;
    }
    const largeImg = event.target.dataset.source;
    openModal(largeImg);
  });
}
function closeModal(instance){
  if(instance){
    instance.close();
  }
}
function openModal(imgUrl){
  let instance = null;
  let imgEl= `<img src="${imgUrl}">`;
  instance = basicLightbox.create(imgEl,{
    onClose: closeModal(instance),
  });
  instance.show();
};

onClicked(galleryCollection);
console.log(galleryItems);
