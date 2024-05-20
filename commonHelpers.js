import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=o=>o.reduce((s,{tags:t,webformatURL:n,largeImageURL:e,likes:r,views:a,comments:u,downloads:d})=>s+`<li class="photo-container">
    <a href=${e} class="card-link js-card-link">
        <img class="photo" src="${n}" alt="${t}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${r}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${a}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${u}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${d}</span>
        </div>
    </div>
</li>
    `,""),p="43980055-7b6f3c9bb35f6313f62cf8461",m="https://pixabay.com/api/",h=o=>{const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:12});return fetch(`${m}?${s}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})},i=document.querySelector(".gallery"),y=document.querySelector(".search-form"),l=document.querySelector(".loader");function g(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(i.innerHTML="",s==="")return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),h(s).then(t=>{t.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=f(t.hits),new SimpleLightbox(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>console.log(t)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}y.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
