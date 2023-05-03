import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageList = document.querySelector('.gallery');
const imagesListItem = createGalleryImagesList(galleryItems);

imageList.insertAdjacentHTML('beforeend', imagesListItem);
imageList.addEventListener('click', onImageLClick)

function onImageClick(items) {
    return items
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
} 
    
console.log(galleryItems);
