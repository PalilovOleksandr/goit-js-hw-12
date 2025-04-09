import { getImagesByQuery, errorMess } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  setLightbox,
} from './js/render-functions';

const form = document.querySelector('.form');
function handleSearch(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();
  clearGallery();
  showLoader();

  getImagesByQuery(searchText)
    .then(images => {
      if (images && images.length > 0) {
        createGallery(images);
        setLightbox();
      }
    })
    .catch(error => {
      return errorMess(error);
    });
}

form.addEventListener('submit', handleSearch);
