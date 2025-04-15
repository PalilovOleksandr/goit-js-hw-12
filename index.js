import{S as x,a as S,i as $}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const m=document.querySelector(".loader"),u=document.querySelector(".gallery"),f=document.querySelector(".btn-render");function p(e){const o=e.map(({webformatURL:n,largeImageURL:a,tags:t,likes:r,views:s,comments:v,downloads:w})=>`<li class="card">
                    <a href="${a}">
                        <img src="${n}" alt="${t}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${r}
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
                </li>`).join("");u.insertAdjacentHTML("beforeend",o),M()}function B(){u.innerHTML=""}function g(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}function M(){new x(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function y(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}async function L(e,o=1){const{data:n}=await S.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});if(n.hits.length===0){l(`Sorry, there are no images matching your search ${e}. Please try again!`),c(),h();return}else return n}function l(e){$.error({title:`${e}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"})}const b=document.querySelector(".form");let i=1,d="";async function O(e){e.preventDefault(),d=e.target.elements["search-text"].value.trim(),i=1,b.reset();try{g();const o=await L(d,i);B(),p(o.hits),Math.ceil(o.totalHits/i)>i&&y(),h()}catch(o){console.log(o.message)}}async function C(){i++;try{g(),c();const e=await L(d,i);p(e.hits),y(),q(),Math.ceil(e.totalHits/15)===i&&(l("We're sorry, but you've reached the end of search results."),c()),h()}catch(e){l(e)}}function q(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}b.addEventListener("submit",O);f.addEventListener("click",C);
//# sourceMappingURL=index.js.map
