(()=>{"use strict";const e=()=>{let e=document.querySelector("div#content");e.innerHTML="";let t=document.createElement("div");t.setAttribute("class","d-flex home flex-column poppins p-3");let a=document.createElement("p");a.innerText="Microverse Restaurant is one of the most awarded restaurants in the world",t.appendChild(a);let n=document.createElement("p");n.innerText="Check it out some of our tasteful meals",t.appendChild(n),e.appendChild(t);let s=document.createElement("div");s.setAttribute("class","meals");let i=document.createElement("img");i.setAttribute("src","../dist/assets/images/dan-gold.jpg"),i.setAttribute("alt","Salads"),i.setAttribute("class","image-meal"),s.appendChild(i);let l=document.createElement("img");l.setAttribute("src","../dist/assets/images/rachel-park.jpg"),l.setAttribute("alt","Desserts"),l.setAttribute("class","image-meal"),s.appendChild(l),e.appendChild(s)},t=()=>{e()},a=e=>{let t=document.createElement("li"),a=document.createElement("a");return a.setAttribute("href","#"),a.setAttribute("data-id",e),a.innerText=e,a.setAttribute("class","nav-link active"),t.appendChild(a),t.setAttribute("class","nav-item"),t};e(),(()=>{let e=document.querySelector("header"),n=document.createElement("h4");n.innerText="Restaurante Microverse",n.setAttribute("class","d-flex justify-content-between align-items-center px-5");let s=document.createElement("ul");s.setAttribute("class","poppins nav nav-tabs"),s.appendChild(a("Home")),s.appendChild(a("About")),s.appendChild(a("Recipes")),e.appendChild(s),document.querySelector('a[data-id="Home"]').addEventListener("click",t),document.querySelector('a[data-id="About"]').addEventListener("click",t),document.querySelector('a[data-id="Recipes"]').addEventListener("click",t)})()})();