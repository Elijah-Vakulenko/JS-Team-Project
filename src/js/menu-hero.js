import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.acord-album-list', {
    duration: 400,
    showMultiple: false,
    elementClass: 'acord-album-item',
    triggerClass: 'acord-title-arrow',
    panelClass: 'acord-img-description',
    activeClass: 'acord-album-item-active',
    openOnInit: [0]
  });