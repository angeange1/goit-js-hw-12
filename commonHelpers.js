import{a as h,i as u,S as y}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(o){L();const r=new URLSearchParams({key:"43138394-89c4115d2b9d73778d19dc685",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",page:o,per_page:15}),e="https://pixabay.com"+"/api/";return(await h.get(e,{searchParams:r})).data}function b(o){o.length||u.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="";const r=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:d,comments:f,downloads:m})=>`<li class="image-item">
      <a href="${e}">
        <img
          src="${s}"
          data-source="${e}"
          alt="${t}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${i}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${d}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${f}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${m}</b></p>
          </li>
        </ul>
      </a>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.querySelector("ul");let n;const L=()=>{p.style.display="flex"},c=document.querySelector("form"),S=document.querySelector("input"),p=document.querySelector(".loader");p.style.display="none";c.addEventListener("submit",o=>{o.preventDefault(),n=S.value.trim(),n!==""?(g(n).then(r=>b(r.hits)).catch(r=>console.log(r)),c.reset()):(l.innerHTML="",u.info({message:"Please fill the field"}))});
//# sourceMappingURL=commonHelpers.js.map
