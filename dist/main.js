(()=>{"use strict";const e=()=>{const e=document.querySelector("div#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("class","d-flex article flex-column poppins p-3");const n=document.createElement("p");n.innerText="Microverse Restaurant is one of the most awarded restaurants in the world",t.appendChild(n);const a=document.createElement("p");a.innerText="Check it out some of our tasteful meals",t.appendChild(a),e.appendChild(t);const s=document.createElement("div");s.setAttribute("class","meals");const c=document.createElement("img");c.setAttribute("src","../dist/assets/images/dan-gold.jpg"),c.setAttribute("alt","Salads"),c.setAttribute("class","image-meal"),s.appendChild(c);const i=document.createElement("img");i.setAttribute("src","../dist/assets/images/rachel-park.jpg"),i.setAttribute("alt","Desserts"),i.setAttribute("class","image-meal"),s.appendChild(i),e.appendChild(s)},t=(e,t)=>{const n=document.createElement("li"),a=document.createElement("a");return a.setAttribute("href","#"),a.setAttribute("data-id",e),a.innerText=e,a.setAttribute("class","nav-link active"),n.appendChild(a),n.setAttribute("class",t),n},n=()=>{e()},a=()=>{(()=>{const e=document.querySelector("div#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("class","d-flex article flex-column poppins p-3");const n=document.createElement("p");n.innerText="Microverse Restaurant was founded in 2010 by Marcelo Araujo",t.appendChild(n);const a=document.createElement("p");a.innerText="The main principle is to make meals that bring to people love inside a plate",t.appendChild(a),e.appendChild(t)})()},s=()=>{(()=>{const e=document.querySelector("div#content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("class","d-flex article flex-column poppins p-3");const a=document.createElement("h4");a.innerText="Contact us through our social media links",n.appendChild(a);const s=document.createElement("ul");s.setAttribute("class","poppins nav nav-tabs"),s.appendChild(t("Instagram","fa fa-instagram")),s.appendChild(t("Twitter","fa fa-twitter")),s.appendChild(t("Facebook","fa fa-facebook")),n.appendChild(s),e.appendChild(n)})()};e(),(()=>{const e=document.querySelector("header"),c=document.createElement("h4");c.innerText="Restaurante Microverse",c.setAttribute("class","d-flex justify-content-between align-items-center px-5");const i=document.createElement("ul");i.setAttribute("class","poppins nav nav-tabs"),i.appendChild(t("Menu","nav-item")),i.appendChild(t("About","nav-item")),i.appendChild(t("Contact","nav-item")),e.appendChild(i),document.querySelector('a[data-id="Menu"]').addEventListener("click",n),document.querySelector('a[data-id="About"]').addEventListener("click",a),document.querySelector('a[data-id="Contact"]').addEventListener("click",s)})()})();