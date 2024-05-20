//import SimpleLightbox from 'simplelightbox';
//import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkupFunction } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';
const imagesContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');


function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
    imagesContainer.innerHTML = '';
    






  if (searchQuery === '') {
      return iziToast.error({
        title:'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    }
    


  imagesContainer.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  fetchPhotos(searchQuery)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
          iziToast.error({
            title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        }
        

        imagesContainer.innerHTML = createMarkupFunction(imagesData.hits);
        
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
       
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}



searchForm.addEventListener('submit', onSearch);