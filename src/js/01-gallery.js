// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// galleryContainer.style.list-style = "none";


const createGalleryMarkup = (items) => {
    return items.map((item) => {
        const { preview, original, description } = item;
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}"/>
                </a>
            </li>`

    }).join("");
}

const renderGallery = () => {
    galleryContainer.innerHTML = createGalleryMarkup(galleryItems)
};
renderGallery();
// console.log(galleryContainer);


new SimpleLightbox('.gallery a');


//  new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionPosition: 'bottom',
//   captionData: 'alt'
// });










