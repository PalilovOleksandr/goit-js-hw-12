import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { showLoader } from './render-functions';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49627447-226236558cbc7cecdfe012b55',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query.Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleSize: '16px',
          titleLineHeight: '1.5',
          titleColor: '#fafafb',
          transitionIn: 'bounceInLeft',
          transitionOut: 'fadeOutRight',
          progressBarColor: '#B51B1B',
          maxWidth: '432px',
          iconUrl: '../img/img-error.svg',
        });
        return [];
      }
      return response.data.hits;
    })
    .catch(error => {
      iziToast.error({
        title: `${error.message}`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleSize: '16px',
        titleLineHeight: '1.5',
        titleColor: '#fafafb',
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight',
        progressBarColor: '#B51B1B',
        maxWidth: '432px',
        iconUrl: '../img/img-error.svg',
      });
      return [];
    })
    .finally(() => {
      showLoader();
    });
}
