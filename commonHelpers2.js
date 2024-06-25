import{i as s,a as i,b as o,c as a}from"./assets/4-87ef7953.js";/* empty css                      */import{S as r}from"./assets/vendor-3431c698.js";const t="/Lifehouse.ua/assets/1-eb80f01d.jpg",n="/Lifehouse.ua/assets/2-0c1f1725.jpg",l="/Lifehouse.ua/assets/3-8f82f13e.jpg",c="/Lifehouse.ua/assets/4-9aa2a2e9.jpg",u="/Lifehouse.ua/assets/5-1bdedf42.jpg",g="/Lifehouse.ua/assets/12-31f22434.jpg";console.log(s);const m=[{url:s,description:"Jason Wade"},{url:i,description:"Sergio, Jason and Rick"},{url:o,description:"Jason, Sergio and Rick"},{url:t,description:"Lifehouse on the truck"},{url:n,description:"Jason, Sergio and brothers Woolstenhulme"},{url:l,description:"Amsterdam"},{url:c,description:"Photoshot"},{url:u,description:"Sean and Rick"},{url:a,description:"Stairs"},{url:g,description:"Stairs"}],p=document.querySelector(".gallery"),d=m.map(function(e){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
  </li>`}),f=`${d.join("")}`;p.innerHTML=f;new r(".gallery a",{captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
