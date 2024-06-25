import{i as s,a as i,b as o,c as a,d as r}from"./assets/4-94b6c6c8.js";/* empty css                      */import{S as t}from"./assets/vendor-3431c698.js";const n="/Lifehouse.ua/assets/1-eb80f01d.jpg",l="/Lifehouse.ua/assets/2-0c1f1725.jpg",c="/Lifehouse.ua/assets/3-8f82f13e.jpg",u="/Lifehouse.ua/assets/4-9aa2a2e9.jpg",g="/Lifehouse.ua/assets/5-1bdedf42.jpg",m="/Lifehouse.ua/assets/12-31f22434.jpg";console.log(s);const p=[{url:s,description:"Jason Wade"},{url:i,description:"Sergio, Jason and Rick"},{url:o,description:"Jason, Sergio and Rick"},{url:n,description:"Lifehouse on the truck"},{url:a,description:"Lifehouse on the truck"},{url:l,description:"Jason, Sergio and brothers Woolstenhulme"},{url:c,description:"Amsterdam"},{url:u,description:"Photoshot"},{url:g,description:"Sean and Rick"},{url:r,description:"Stairs"},{url:m,description:"Stairs"}],d=document.querySelector(".gallery"),f=p.map(function(e){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
  </li>`}),h=`${f.join("")}`;d.innerHTML=h;new t(".gallery a",{captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
