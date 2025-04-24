import { getImagesByQuery, errorMess } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
  btnRender,
  hideLoader,
  containerGallery,
} from './js/render-functions';

const form = document.querySelector('.form');

let page = 1;
let searchText = '';
async function handleSearch(event) {
  event.preventDefault();
  searchText = event.target.elements['search-text'].value.trim();
  page = 1;
  if (!searchText) {
    hideLoader();
    errorMess('Please enter your search request');
    form.reset();
    return;
  }
  form.reset();
  try {
    showLoader();
    const data = await getImagesByQuery(searchText, page);
    clearGallery();
    createGallery(data.hits);
    if (Math.ceil(data.totalHits / 15) === page) {
      hideLoader();
      hideLoadMoreButton();
      errorMess("We're sorry, but you've reached the end of search results.");
      return;
    }
    if (data.hits.length === 0) {
      hideLoadMoreButton();
      hideLoader();
      errorMess(
        `Sorry, there are no images matching your search ${searchText}. Please try again!`
      );
      return;
    }
    showLoadMoreButton();
  } catch (error) {
    errorMess(error.message);
  } finally {
    hideLoader();
  }
}
async function onLoadMore() {
  hideLoadMoreButton();
  page++;
  try {
    showLoader();
    const data = await getImagesByQuery(searchText, page);
    createGallery(data.hits);
    scrollCard();
    if (Math.ceil(data.totalHits / 15) === page) {
      errorMess("We're sorry, but you've reached the end of search results.");
      return;
    }
    showLoadMoreButton();
  } catch (error) {
    errorMess(error);
  } finally {
    hideLoader();
  }
}
function scrollCard() {
  const height =
    containerGallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
form.addEventListener('submit', handleSearch);
btnRender.addEventListener('click', onLoadMore);
