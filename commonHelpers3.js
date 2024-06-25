import{i,a as s,b as r,d as a,c as t}from"./assets/4-94b6c6c8.js";/* empty css                      */import{A as o,a as l,S as n}from"./assets/vendor-3431c698.js";new o(".acord-album-list",{duration:400,showMultiple:!1,elementClass:"acord-album-item",triggerClass:"acord-title-arrow",panelClass:"acord-img-description",activeClass:"acord-album-item-active",openOnInit:[0]});const d=[{url:i,description:"Jason Wade"},{url:s,description:"guys on the stairs"},{url:r,description:"Sergio, Jason and Rick"},{url:a,description:"Jason, Sergio and Rick"},{url:t,description:"Lifehouse"}],c=d.map(e=>`
<li class="swiper-slide">
<a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
</li>
`).join("");document.getElementById("nnf-gallery").innerHTML=c;new l(".swiper",{direction:"horizontal",speed:750,spaceBetween:10,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:10}},simulateTouch:!0,touchRatio:1,grabCursor:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}});document.addEventListener("DOMContentLoaded",()=>{new n(".gallery-link",{captionDelay:250})});
//# sourceMappingURL=commonHelpers3.js.map
