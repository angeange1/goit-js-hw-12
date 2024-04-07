import{a as q,i as d,S as v}from"./assets/vendor-b2578120.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();async function m(){P();const r={key:"43138394-89c4115d2b9d73778d19dc685",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",page:n,per_page:15},s="https://pixabay.com"+"/api/",e=await q.get(s,{params:r});return I(),e.data}function f(r){r.length||d.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"});const t=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:i,views:S,comments:w,downloads:M})=>`<li class="image-item">
      <a href="${e}">
        <img
          src="${s}"
          data-source="${e}"
          alt="${o}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${i}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${S}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${w}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${M}</b></p>
          </li>
        </ul>
      </a>
    </li>`).join("");l.insertAdjacentHTML("beforeend",t),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.querySelector("ul");let a;const P=()=>{u.style.display="flex"},I=()=>{u.style.display="none"},p=document.querySelector("form"),O=document.querySelector("input"),u=document.querySelector(".loader"),h=document.querySelector(".loadmore-btn"),g=document.querySelector(".loading-more");let n=1,T=15,y;u.style.display="none";p.addEventListener("submit",$);async function $(r){if(r.preventDefault(),b(),n=1,a=O.value.trim(),l.innerHTML="",a!=="")try{const t=await m(a,n);y=Math.ceil(t.totalHits/T),f(t.hits),L(),p.reset()}catch(t){console.log(t)}else l.innerHTML="",d.info({message:"Please fill the field"})}h.addEventListener("click",E);async function E(){try{n+=1,x();const r=await m(a,n);D(),f(r.hits)}catch(r){console.log(r)}_(),L()}function L(){n>y?(d.error({message:"We're sorry, but you've reached the end of search results"}),b()):N()}function N(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function x(){g.classList.remove("hidden")}function D(){g.classList.add("hidden")}function _(){const t=document.querySelector(".image-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
