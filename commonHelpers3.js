import{i,a as r,b as s,c as a}from"./assets/4-87ef7953.js";/* empty css                      */import{A as t,a as l,S as n}from"./assets/vendor-3431c698.js";new t(".acord-album-list",{duration:400,showMultiple:!1,elementClass:"acord-album-item",triggerClass:"acord-title-arrow",panelClass:"acord-img-description",activeClass:"acord-album-item-active",openOnInit:[0]});const o=[{url:i,description:"Jason Wade"},{url:r,description:"guys on the stairs"},{url:s,description:"Sergio, Jason and Rick"},{url:a,description:"Jason, Sergio and Rick"}],d=o.map(e=>`
<li class="swiper-slide">
<a class="gallery-link" href="${e.url}">
      <img class="gallery-image" src="${e.url}" alt="${e.description}" title="${e.description}">
    </a>
</li>
`).join("");document.getElementById("nnf-gallery").innerHTML=d;new l(".swiper",{direction:"horizontal",speed:750,spaceBetween:10,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:10},1280:{slidesPerView:5,spaceBetween:10}},simulateTouch:!0,touchRatio:1,grabCursor:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1}});document.addEventListener("DOMContentLoaded",()=>{new n(".gallery-link",{captionDelay:250})});
//# sourceMappingURL=commonHelpers3.js.map
