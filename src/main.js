import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  containerGallery,
  setLightbox,
} from './js/render-functions';
const form = document.querySelector('.form');
function handleSearch(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();
  clearGallery();
  hideLoader();

  getImagesByQuery(searchText)
    .then(images => {
      if (images && images.length > 0) {
        containerGallery.innerHTML = createGallery(images);
        setLightbox();
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}

form.addEventListener('submit', handleSearch);
