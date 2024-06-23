const images = [
    {
        url: '../img/gellary/no-name-face/135855.jpg',
        description: '',
    },
    {
         url: '../img/gellary/no-name-face/Yeah2.jpg',
        description: '',
    },
    {
        url: '../img/gellary/no-name-face/Yeah3.jpg',
        description: '',
    },
    {
         url: '../img/gellary/stanley-climbfall/promo.jpg',
        description: '',
    },
    {
         url: '../img/gellary/stanley-climbfall/09-lifehouse-082007.jpg',
        description: '',
    },
    {
         url: '../img/gellary/stanley-climbfall/Amsterdam12.jpg',
        description: '',
    },
    {
         url: '../img/gellary/stanley-climbfall/band055.jpg',
        description: '',
    },
    {
         url: '../img/gellary/stanley-climbfall/seanrick.jpg',
        description: '',
    },
];

let gallery = document.querySelector(".gallery");


const imagesImport = images.map(function (image) {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.url}">
      <img class="gallery-image" src="${image.url}" alt="${image.description}" title="${image.description}">
    </a>
  </li>`
});

const imageCollection = `${imagesImport.join('')}`;
gallery.innerHTML = imageCollection;

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});