(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const o=document.querySelector(".media-menu"),i=document.querySelector(".burger-menu"),u=document.querySelector(".close-menu"),l=document.querySelector(".for-close-1"),d=document.querySelector(".for-close-2"),m=document.querySelector(".for-close-3"),a=document.querySelector(".for-close-4"),f=document.querySelector(".for-close-5");i.addEventListener("click",()=>{o.classList.toggle("is-open-menu")});u.addEventListener("click",()=>{o.classList.remove("is-open-menu")});l.addEventListener("click",()=>{o.classList.remove("is-open-menu")});d.addEventListener("click",()=>{o.classList.remove("is-open-menu")});m.addEventListener("click",()=>{o.classList.remove("is-open-menu")});a.addEventListener("click",()=>{o.classList.remove("is-open-menu")});f.addEventListener("click",()=>{o.classList.remove("is-open-menu")});const p=document.querySelector(".scroll-up");window.addEventListener("scroll",function(){p.classList.toggle("is-open-scroll",window.scrollY>500)});
//# sourceMappingURL=commonHelpers.js.map
