import image1 from './img/gallery/no-name-face/135855.jpg';
import image2 from './img/gallery/no-name-face/Yeah2.jpg';
import image3 from './img/gallery/no-name-face/Yeah3.jpg';
import image4 from './img/gallery/stanley-climbfall/promo.jpg';
import image5 from './img/gallery/stanley-climbfall/09-lifehouse-082007.jpg';
import image6 from './img/gallery/stanley-climbfall/Amsterdam12.jpg';
import image7 from './img/gallery/stanley-climbfall/band055.jpg';
import image8 from './img/gallery/stanley-climbfall/seanrick.jpg';
import image9 from './img/gallery/no-name-face/stairs.jpg';

const images = [
  {
    url: image1,
    description: 'Jason Wade',
  },
  {
    url: image2,
    description: 'Sergio, Jason and Rick',
  },
  {
    url: image3,
    description: 'Jason, Sergio and Rick',
  },
  {
    url: image4,
    description: 'Lifehouse on the truck',
  },
  {
    url: image5,
    description: 'Jason, Sergio and brothers Woolstenhulme',
  },
  {
    url: image6,
    description: 'Amsterdam',
  },
  {
    url: image7,
    description: 'Photoshot',
  },
  {
    url: image8,
    description: 'Sean and Rick',
  },
  {
    url: image9,
    description: 'Stairs',
  },
];

const gallery = document.querySelector(".gallery");

const imagesImport = images.map(function (image) {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.url}">
      <img class="gallery-image" src="${image.url}" alt="${image.description}" title="${image.description}">
    </a>
  </li>`;
});

const imageCollection = `${imagesImport.join('')}`;
gallery.innerHTML = imageCollection;

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
