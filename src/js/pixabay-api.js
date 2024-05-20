import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = '43980055-7b6f3c9bb35f6313f62cf8461';
const BASE_URL = 'https://pixabay.com/api/';
export const fetchPhotos = searchImage => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
};