import{S as f,a as d,i as s}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".loader"),c=document.querySelector(".gallery");function p(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:n,downloads:u})=>`<li class="card">
                    <a href="${i}">
                        <img src="${r}" alt="${a}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${e}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${t}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${n}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${u}
                            </li>
                        </ul>
                    </a>
                </li>`).join("")}function m(){c.innerHTML=""}function h(){l.classList.add("hidden")}function g(){l.classList.remove("hidden")}function y(){new f(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function b(o){return d.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits.length===0?(s.error({title:"Sorry, there are no images matching your search query.Please try again!",position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"}),[]):r.data.hits).catch(r=>(s.error({title:`${r.message}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:"../img/img-error.svg"}),[])).finally(()=>{h()})}const L=document.querySelector(".form");function x(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();m(),g(),b(r).then(i=>{i&&i.length>0&&(c.innerHTML=p(i),y())}).catch(i=>{console.error("Error fetching images:",i)})}L.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
