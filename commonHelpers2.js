import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{S as s}from"./assets/vendor-4bfe436b.js";const a="/Lifehouse.ua/assets/135855-309185be.jpg",i="/Lifehouse.ua/assets/Yeah2-83e5a503.jpg",o="/Lifehouse.ua/assets/Yeah3-53ed440e.jpg",t="/Lifehouse.ua/assets/promo-9aa2a2e9.jpg",r="/Lifehouse.ua/assets/09-lifehouse-082007-eb80f01d.jpg",n="/Lifehouse.ua/assets/Amsterdam12-0c1f1725.jpg",l="/Lifehouse.ua/assets/band055-8f82f13e.jpg",c="/Lifehouse.ua/assets/seanrick-1bdedf42.jpg",u=[{url:a,description:"Jason Wade"},{url:i,description:"Sergio, Jason and Rick"},{url:o,description:"Jason, Sergio and Rick"},{url:t,description:"Lifehouse on the truck"},{url:r,description:"Jason, Sergio and brothers Woolstenhulme"},{url:n,description:"Amsterdam"},{url:l,description:"Photoshot"},{url:c,description:"Sean and Rick"}],g=document.querySelector(".gallery"),p=u.map(function(e){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
  </li>`}),m=`${p.join("")}`;g.innerHTML=m;new s(".gallery a",{captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
