import{S as x,a as S,i as $}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=document.querySelector(".loader"),f=document.querySelector(".gallery"),h=document.querySelector(".btn-render");function p(e){const r=e.map(({webformatURL:n,largeImageURL:l,tags:t,likes:o,views:c,comments:v,downloads:w})=>`<li class="card">
                    <a href="${l}">
                        <img src="${n}" alt="${t}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${o}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${c}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${v}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${w}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");f.insertAdjacentHTML("beforeend",r),M()}function B(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function s(){m.classList.add("hidden")}function M(){new x(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}async function b(e,r=1){const{data:n}=await S.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});if(n.hits.length===0){i(`Sorry, there are no images matching your search ${e}. Please try again!`),L(),s();return}else return n}function i(e){$.error({title:`${e}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"})}const u=document.querySelector(".form");let a=1,d="";async function C(e){if(e.preventDefault(),d=e.target.elements["search-text"].value.trim(),a=1,!d){s(),i("Please enter your search request"),u.reset();return}u.reset();try{g();const r=await b(d,a);if(B(),p(r.hits),Math.ceil(r.totalHits/15)===a){s(),i("We're sorry, but you've reached the end of search results.");return}s(),y()}catch(r){if(r.message==="Cannot read properties of undefined (reading 'hits')"){s();return}i(r.message)}}async function O(){L(),a++;try{g();const e=await b(d,a);if(p(e.hits),q(),s(),Math.ceil(e.totalHits/15)===a){i("We're sorry, but you've reached the end of search results.");return}y()}catch(e){i(e)}}function q(){const e=f.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}u.addEventListener("submit",C);h.addEventListener("click",O);
//# sourceMappingURL=index.js.map
