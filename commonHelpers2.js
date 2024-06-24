import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{S as i}from"./assets/vendor-4bfe436b.js";const s="/Lifehouse.ua/assets/1-309185be.jpg",o="/Lifehouse.ua/assets/2-f3fb8dee.jpg",a="/Lifehouse.ua/assets/3-83e5a503.jpg",t="/Lifehouse.ua/assets/1-eb80f01d.jpg",r="/Lifehouse.ua/assets/2-0c1f1725.jpg",n="/Lifehouse.ua/assets/3-8f82f13e.jpg",c="/Lifehouse.ua/assets/4-9aa2a2e9.jpg",l="/Lifehouse.ua/assets/5-1bdedf42.jpg",u="/Lifehouse.ua/assets/4-53ed440e.jpg",g="/Lifehouse.ua/assets/12-31f22434.jpg";console.log(s);const p=[{url:s,description:"Jason Wade"},{url:o,description:"Sergio, Jason and Rick"},{url:a,description:"Jason, Sergio and Rick"},{url:t,description:"Lifehouse on the truck"},{url:r,description:"Jason, Sergio and brothers Woolstenhulme"},{url:n,description:"Amsterdam"},{url:c,description:"Photoshot"},{url:l,description:"Sean and Rick"},{url:u,description:"Stairs"},{url:g,description:"Stairs"}],d=document.querySelector(".gallery"),m=p.map(function(e){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
  </li>`}),f=`${m.join("")}`;d.innerHTML=f;new i(".gallery a",{captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
