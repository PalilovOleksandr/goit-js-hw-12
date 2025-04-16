import{S as x,a as S,i as $}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const p=document.querySelector(".loader"),h=document.querySelector(".gallery"),m=document.querySelector(".btn-render");function g(e){const r=e.map(({webformatURL:i,largeImageURL:l,tags:t,likes:o,views:s,comments:v,downloads:w})=>`<li class="card">
                    <a href="${l}">
                        <img src="${i}" alt="${t}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${o}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${s}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${v}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${w}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");h.insertAdjacentHTML("beforeend",r),M()}function B(){h.innerHTML=""}function y(){p.classList.remove("hidden")}function a(){p.classList.add("hidden")}function M(){new x(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function L(){m.classList.remove("hidden")}function u(){m.classList.add("hidden")}async function b(e,r=1){const{data:i}=await S.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});if(i.hits.length===0){c(`Sorry, there are no images matching your search ${e}. Please try again!`),u(),a();return}else return i}function c(e){$.error({title:`${e}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"})}const f=document.querySelector(".form");let n=1,d="";async function C(e){if(e.preventDefault(),d=e.target.elements["search-text"].value.trim(),n=1,!d){a(),c("Please enter your search request"),f.reset();return}f.reset();try{y();const r=await b(d,n);B(),g(r.hits),Math.ceil(r.totalHits/15)===n&&u(),L(),a()}catch(r){if(r.message==="Cannot read properties of undefined (reading 'hits')"){a();return}c(r.message)}}async function O(){n++;try{y(),u();const e=await b(d,n);g(e.hits),L(),q(),Math.ceil(e.totalHits/15)===n&&(c("We're sorry, but you've reached the end of search results."),u()),a()}catch(e){c(e)}}function q(){const e=h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}f.addEventListener("submit",C);m.addEventListener("click",O);
//# sourceMappingURL=index.js.map
