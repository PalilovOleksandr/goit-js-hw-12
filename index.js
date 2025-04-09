import{S as f,a as p,i as m}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".loader"),c=document.querySelector(".gallery");document.querySelector(".btn-render");function h(n){const o=n.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:i,comments:u,downloads:d})=>`<li class="card">
                    <a href="${s}">
                        <img src="${t}" alt="${e}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${r}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${i}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${u}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${d}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");c.insertAdjacentHTML("beforeend",o)}function g(){c.innerHTML=""}function y(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}function L(){new f(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}async function $(n,o=1){try{const t=await p.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:`${o}`}});return t.data.hits.length===0?a(`Sorry, there are no images matching your search ${n}. Please try again!`):(b(),t.data.hits)}catch(t){return a(t)}}function a(n){m.error({title:`${n}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"})}const x=document.querySelector(".form");function S(n){n.preventDefault();const o=n.target.elements["search-text"].value.trim();g(),y(),$(o).then(t=>{t&&t.length>0&&(h(t),L())}).catch(t=>a(t))}x.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
