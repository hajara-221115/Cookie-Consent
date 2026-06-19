(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`modal`),t=document.getElementById(`modal-close-btn`),n=document.getElementById(`consent-form`),r=document.getElementById(`modal-text`),i=document.getElementById(`decline-btn`),a=document.getElementById(`modal-choice-btns`);setTimeout(function(){e.style.display=`inline`},1500),t.addEventListener(`click`,function(){e.style.display=`none`}),i.addEventListener(`mouseenter`,function(){a.classList.toggle(`modal-btns-reverse`)}),n.addEventListener(`submit`,function(e){e.preventDefault();let i=new FormData(n).get(`fullName`);r.innerHTML=`
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`,setTimeout(function(){document.getElementById(`upload-text`).innerText=`
        Making the sale...`},1500),setTimeout(function(){document.getElementById(`modal-inner`).innerHTML=`
        <h2>Thanks <span class="modal-display-name">${i}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.jpg">
        </div>
    `,t.disabled=!1},3e3)});