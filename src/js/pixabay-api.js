import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { hideLoader, hideLoadMoreButton } from './render-functions';
import pathIcon from '../img/img-error.svg';

export async function getImagesByQuery(query, page = 1) {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49627447-226236558cbc7cecdfe012b55',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return data;
}

export function errorMess(message) {
  iziToast.error({
    title: `${message}`,
    position: 'topRight',
    backgroundColor: '#ef4040',
    titleSize: '16px',
    titleLineHeight: '1.5',
    titleColor: '#fafafb',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    progressBarColor: '#B51B1B',
    maxWidth: '432px',
    iconUrl: pathIcon,
  });
}
