const baseUrl = 'https://pixabay.com/api/';
const key = '13417145-d0c367819415b077de5e950e3';

export default function getImages(str) {
  return fetch(`${baseUrl}?key=${key}&q=${str}&image_type=photo`)
  .then(res => res.json())
  .catch(err => console.error(err));
}