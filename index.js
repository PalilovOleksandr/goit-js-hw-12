import{S as v,a as x,i as B}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const p=document.querySelector(".loader"),f=document.querySelector(".gallery"),h=document.querySelector(".btn-render");function m(e){const r=e.map(({webformatURL:n,largeImageURL:l,tags:t,likes:o,views:c,comments:b,downloads:w})=>`<li class="card">
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
                                <span class="bold">Comments</span>${b}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${w}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");f.insertAdjacentHTML("beforeend",r),S()}function M(){f.innerHTML=""}function C(){p.classList.remove("hidden")}function s(){p.classList.add("hidden")}function S(){new v(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function g(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}const $="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e";async function y(e,r=1){const{data:n}=await x.get("https://pixabay.com/api/",{params:{key:"49627447-226236558cbc7cecdfe012b55",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});if(n.hits.length===0){i(`Sorry, there are no images matching your search ${e}. Please try again!`),L(),s();return}else return n}function i(e){B.error({title:`${e}`,position:"topRight",backgroundColor:"#ef4040",titleSize:"16px",titleLineHeight:"1.5",titleColor:"#fafafb",transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",progressBarColor:"#B51B1B",maxWidth:"432px",iconUrl:$})}const u=document.querySelector(".form");let a=1,d="";async function H(e){if(e.preventDefault(),d=e.target.elements["search-text"].value.trim(),a=1,!d){s(),i("Please enter your search request"),u.reset();return}u.reset();try{C();const r=await y(d,a);if(M(),m(r.hits),Math.ceil(r.totalHits/15)===a){s(),i("We're sorry, but you've reached the end of search results.");return}s(),g()}catch(r){if(r.message==="Cannot read properties of undefined (reading 'hits')"){s();return}i(r.message)}}async function O(){L(),a++;try{C();const e=await y(d,a);if(m(e.hits),F(),s(),Math.ceil(e.totalHits/15)===a){i("We're sorry, but you've reached the end of search results.");return}g()}catch(e){i(e)}}function F(){const e=f.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}u.addEventListener("submit",H);h.addEventListener("click",O);
//# sourceMappingURL=index.js.map
