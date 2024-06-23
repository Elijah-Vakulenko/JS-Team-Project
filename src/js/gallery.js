const images = [
    {
        url: './img/gallery/no-name-face/135855.jpg',
        description: 'Jason Wade',
    },
    {
         url: '../img/gallery/no-name-face/Yeah2.jpg',
        description: 'Sergio, Jason and Rick',
    },
    {
        url: '.../img/gallery/no-name-face/Yeah3.jpg',
        description: 'Jason, Sergio and Rick',
    },
    {
         url: '/img/gallery/stanley-climbfall/promo.jpg',
        description: 'Lifehouse on the truck',
    },
    {
         url: '../img/gallery/stanley-climbfall/09-lifehouse-082007.jpg',
        description: 'Jason, Sergio and brothers Woolstenhulme',
    },
    {
         url: '../img/gallery/stanley-climbfall/Amsterdam12.jpg',
        description: 'Amsterdam',
    },
    {
         url: '../img/gallery/stanley-climbfall/band055.jpg',
        description: 'Photoshot',
    },
    {
         url: '../img/gallery/stanley-climbfall/seanrick.jpg',
        description: 'Sean and Rick',
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