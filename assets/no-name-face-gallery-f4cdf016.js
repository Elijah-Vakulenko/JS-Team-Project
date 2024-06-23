import{S as i}from"./vendor-5d6e4026.js";const a=[{url:"../img/gellary/no-name-face/135855.jpg",description:""},{url:"../img/gellary/no-name-face/Yeah2.jpg",description:""},{url:"../img/gellary/no-name-face/Yeah3.jpg",description:""},{url:"../img/gellary/stanley-climbfall/promo.jpg",description:""},{url:"../img/gellary/stanley-climbfall/09-lifehouse-082007.jpg",description:""},{url:"../img/gellary/stanley-climbfall/Amsterdam12.jpg",description:""},{url:"../img/gellary/stanley-climbfall/band055.jpg",description:""},{url:"./img/gellary/stanley-climbfall/seanrick.jpg",description:""}];let e=document.querySelector(".gallery");const r=a.map(function(l){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${l.url}">
      <img class="gallery-image" src="${l.url}" alt="${l.description}" title="${l.description}">
    </a>
  </li>`}),n=`${r.join("")}`;e.innerHTML=n;e=new i(".gallery a",{captionDelay:250});
//# sourceMappingURL=no-name-face-gallery-f4cdf016.js.map
