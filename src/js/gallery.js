// Импортируем изображения из папок 1-8
import img1_1 from './img/gallery/1/1.jpg';
import img1_2 from './img/gallery/1/2.jpg';
import img1_3 from './img/gallery/1/3.jpg';
import img1_4 from './img/gallery/1/4.jpg';

import img2_1 from './img/gallery/2/1.jpg';
import img2_2 from './img/gallery/2/2.jpg';
import img2_3 from './img/gallery/2/3.jpg';
import img2_4 from './img/gallery/2/4.jpg';
import img2_5 from './img/gallery/2/5.jpg';

import img3_1 from './img/gallery/3/1.jpg';
import img3_2 from './img/gallery/3/2.jpg';
import img3_3 from './img/gallery/3/3.jpg';
import img3_4 from './img/gallery/3/4.jpg';
import img3_5 from './img/gallery/3/5.jpg';
import img3_6 from './img/gallery/3/6.jpg';
import img3_7 from './img/gallery/3/7.jpg';

import img4_1 from './img/gallery/4/1.jpg';
import img4_2 from './img/gallery/4/2.jpg';
import img4_3 from './img/gallery/4/3.jpg';

import img5_1 from './img/gallery/5/1.jpg';
import img5_2 from './img/gallery/5/2.jpg';
import img5_3 from './img/gallery/5/3.jpg';
import img5_4 from './img/gallery/5/4.jpg';
import img5_5 from './img/gallery/5/5.jpg';
import img5_6 from './img/gallery/5/6.jpg';

import img6_1 from './img/gallery/6/1.jpg';
import img6_2 from './img/gallery/6/2.jpg';
import img6_3 from './img/gallery/6/3.jpg';
import img6_4 from './img/gallery/6/4.jpg';
import img6_5 from './img/gallery/6/5.jpg';
import img6_6 from './img/gallery/6/6.jpg';
import img6_7 from './img/gallery/6/7.jpg';
import img6_8 from './img/gallery/6/8.png';
import img6_9 from './img/gallery/6/9.png';
import img6_10 from './img/gallery/6/10.png';

import img7_1 from './img/gallery/7/1.jpg';
import img7_2 from './img/gallery/7/2.jpg';
import img7_3 from './img/gallery/7/3.jpg';
import img7_4 from './img/gallery/7/4.jpg';
import img7_5 from './img/gallery/7/5.jpg';
import img7_6 from './img/gallery/7/6.jpg';
import img7_7 from './img/gallery/7/7.jpg';
import img7_8 from './img/gallery/7/8.jpg';
import img7_9 from './img/gallery/7/9.jpg';
import img7_10 from './img/gallery/7/10.jpg';
import img7_11 from './img/gallery/7/11.jpg';
import img7_12 from './img/gallery/7/12.jpg';
import img7_13 from './img/gallery/7/13.jpg';
import img7_14 from './img/gallery/7/14.jpg';

import img8_1 from './img/gallery/8/1.jpg';
import img8_2 from './img/gallery/8/2.jpg';
import img8_3 from './img/gallery/8/3.jpg';
import img8_4 from './img/gallery/8/4.jpg';
import img8_5 from './img/gallery/8/5.jpg';
import img8_6 from './img/gallery/8/6.jpg';
import img8_7 from './img/gallery/8/7.jpg';
import img8_8 from './img/gallery/8/8.jpg';
import img8_9 from './img/gallery/8/9.jpg';
import img8_10 from './img/gallery/8/10.jpg';
import img8_11 from './img/gallery/8/11.jpg';
import img8_12 from './img/gallery/8/12.jpg';

// Создаем массив с объектами изображений
const images = [
  // Папка 1
  { url: img1_1, description: '' },
  { url: img1_2, description: '' },
  { url: img1_3, description: '' },
  { url: img1_4, description: '' },
  // Папка 2
  { url: img2_1, description: '' },
  { url: img2_2, description: '' },
  { url: img2_3, description: '' },
  { url: img2_4, description: '' },
  { url: img2_5, description: '' },
  // Папка 3
  { url: img3_1, description: '' },
  { url: img3_2, description: '' },
  { url: img3_3, description: '' },
  { url: img3_4, description: '' },
  { url: img3_5, description: '' },
  { url: img3_6, description: '' },
  { url: img3_7, description: '' },
  // Папка 4
  { url: img4_1, description: '' },
  { url: img4_2, description: '' },
  { url: img4_3, description: '' },
  // Папка 5
  { url: img5_1, description: '' },
  { url: img5_2, description: '' },
  { url: img5_3, description: '' },
  { url: img5_4, description: '' },
  { url: img5_5, description: '' },
  { url: img5_6, description: '' },
  // Папка 6
  { url: img6_1, description: '' },
  { url: img6_2, description: '' },
  { url: img6_3, description: '' },
  { url: img6_4, description: '' },
  { url: img6_5, description: '' },
  { url: img6_6, description: '' },
  { url: img6_7, description: '' },
  { url: img6_8, description: '' },
  { url: img6_9, description: '' },
  { url: img6_10, description: '' },
  // Папка 7
  { url: img7_1, description: '' },
  { url: img7_2, description: '' },
  { url: img7_3, description: '' },
  { url: img7_4, description: '' },
  { url: img7_5, description: '' },
  { url: img7_6, description: '' },
  { url: img7_7, description: '' },
  { url: img7_8, description: '' },
  { url: img7_9, description: '' },
  { url: img7_10, description: '' },
  { url: img7_11, description: '' },
  { url: img7_12, description: '' },
  { url: img7_13, description: '' },
  { url: img7_14, description: '' },
  // Папка 8
  { url: img8_1, description: '' },
  { url: img8_2, description: '' },
  { url: img8_3, description: '' },
  { url: img8_4, description: '' },
  { url: img8_5, description: '' },
  { url: img8_6, description: '' },
  { url: img8_7, description: '' },
  { url: img8_8, description: '' },
  { url: img8_9, description: '' },
  { url: img8_10, description: '' },
  { url: img8_11, description: '' },
  { url: img8_12, description: '' },
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
