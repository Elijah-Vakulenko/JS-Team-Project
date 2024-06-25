import Swiper from 'swiper/bundle';
import 'swiper/css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import img1_1 from '../img/gallery/1/1.jpg';
import img1_2 from '../img/gallery/1/2.jpg';
import img1_3 from '../img/gallery/1/3.jpg';
import img1_4 from '../img/gallery/1/4.jpg';
import img1_5 from '../img/gallery/1/5.jpg';

const images = [

  { url: img1_1, description: 'Jason Wade' },
  { url: img1_2, description: 'guys on the stairs' },
  { url: img1_3, description: 'Sergio, Jason and Rick' },
  { url: img1_4, description: 'Jason, Sergio and Rick' },
  { url: img1_5, description: 'Lifehouse' },
]

const render = images.map(image => `
<li class="swiper-slide">
<a class="gallery-link" href="${image.url}">
      <img class="gallery-image" src="${image.url}" alt="${image.description}" title="${image.description}">
    </a>
</li>
`).join('');

document.getElementById('nnf-gallery').innerHTML = render;
    
  new Swiper('.swiper', {
      direction: 'horizontal',
      speed: 750,
      spaceBetween: 10,
      slidesPerView: 1,

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
       simulateTouch: true,
      touchRatio: 1,
      grabCursor: true,
      slideToClickedSlide: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 1,
      },
  });
          
 document.addEventListener('DOMContentLoaded', () => {
  new SimpleLightbox('.gallery-link', {
    captionDelay: 250,
  });
});