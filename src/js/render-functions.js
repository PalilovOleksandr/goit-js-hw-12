import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loader');

export const containerGallery = document.querySelector('.gallery');
const btnRender = document.querySelector('.btn-render');
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card">
                    <a href="${largeImageURL}">
                        <img src="${webformatURL}" alt="${tags}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${likes}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${views}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${comments}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${downloads}
                            </li>
                        </ul>
                    </a>
                </li>`
    )
    .join('');
  containerGallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  containerGallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
export function setLightbox() {
  const gallery = new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionsData: 'alt',
    captionDelay: '250',
  });
  gallery.refresh();
}

export function showLoadMoreButton() {
  btnRender.classList.add('hidden');
}
export function hideLoadMoreButton() {
  btnRender.classList.remove('hidden');
}
