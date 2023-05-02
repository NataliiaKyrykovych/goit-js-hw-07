import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageList = document.querySelector('.gallery');
const imageListItem = createGalleryImageList(galleryItems);

imageList.addEventListener('click', onImageListClick)

function onImageListClick(event) {
    console.log(event.target);
}




console.log(galleryItems);
