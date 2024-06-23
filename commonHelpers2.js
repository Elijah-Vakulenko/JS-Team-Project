import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{S as i}from"./assets/vendor-4bfe436b.js";const a=[{url:"./img/gallery/no-name-face/135855.jpg",description:"Jason Wade"},{url:"../img/gallery/no-name-face/Yeah2.jpg",description:"Sergio, Jason and Rick"},{url:"./img/gallery/no-name-face/Yeah3.jpg",description:"Jason, Sergio and Rick"},{url:"../img/gallery/stanley-climbfall/promo.jpg",description:"Lifehouse on the truck"},{url:"./img/gallery/stanley-climbfall/09-lifehouse-082007.jpg",description:"Jason, Sergio and brothers Woolstenhulme"},{url:"../img/gallery/stanley-climbfall/Amsterdam12.jpg",description:"Amsterdam"},{url:"./img/gallery/stanley-climbfall/band055.jpg",description:"Photoshot"},{url:"../img/gallery/stanley-climbfall/seanrick.jpg",description:"Sean and Rick"}];let e=document.querySelector(".gallery");const r=a.map(function(l){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${l.url}">
      <img class="gallery-image" src="${l.url}" alt="${l.description}" title="${l.description}">
    </a>
  </li>`}),n=`${r.join("")}`;e.innerHTML=n;e=new i(".gallery a",{captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
