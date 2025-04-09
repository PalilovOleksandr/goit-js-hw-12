import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loader');

export const containerGallery = document.querySelector('.gallery');
export function createGallery(images) {
  return images
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
}

export function clearGallery() {
  containerGallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('hidden');
}

export function hideLoader() {
  loader.classList.remove('hidden');
}
export function setLightbox() {
  const gallery = new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionsData: 'alt',
    captionDelay: '250',
  });
  gallery.refresh();
}
