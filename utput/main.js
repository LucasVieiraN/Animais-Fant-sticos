/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js/main.js":
/*!*************************!*\
  !*** ./main.js/main.js ***!
  \*************************/
/***/ (() => {

eval("(()=>{\"use strict\";function t(t,e,n){const o=document.documentElement,c=\"data-outside\";function a(s){t.contains(s.target)||(t.removeAttribute(c),e.forEach((t=>{o.removeEventListener(t,a)})),n())}t.hasAttribute(c)||(e.forEach((t=>{setTimeout((()=>o.addEventListener(t,a)))})),t.setAttribute(c,\"\"))}function e(){let t;document.querySelectorAll(\"[data-numero]\").forEach((t=>{const e=+t.innerText,n=Math.floor(e/50);let o=0;const c=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))}),50*Math.random())})),t=new MutationObserver((function(n){n[0].target.classList.contains(\"ativo\")&&(t.disconnect(),e())}));const n=document.querySelector(\".numeros\");t.observe(n,{attributes:!0})}!function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute(\"href\");document.querySelector(e).scrollIntoView({behavior:\"smooth\",block:\"start\"})}document.querySelectorAll('.js-menu a[href^=\"#\"]').forEach((e=>{e.addEventListener(\"click\",t)}))}(),function(){const t=document.querySelectorAll(\".js-scroll\"),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add(\"ativo\"):t.classList.contains(\"ativo\")&&t.classList.remove(\"ativo\")}))}t.length&&(window.addEventListener(\"scroll\",n),n())}(),function(){const t=document.querySelectorAll(\".js-accordion dt\"),e=\"ativo\";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener(\"click\",n)})))}(),function(){const t=document.querySelectorAll(\".js-tabmenu li\"),e=document.querySelectorAll(\".js-tabcontent section\");t.length&&e.length&&(e[0].classList.add(\"ativo\"),t.forEach(((t,n)=>{t.addEventListener(\"click\",(()=>{!function(t){e.forEach((t=>{t.classList.remove(\"ativo\")})),e[t].classList.add(\"ativo\")}(n)}))})))}(),function(){const t=document.querySelector('[data-modal=\"abrir\"]'),e=document.querySelector('[data-modal=\"fechar\"]'),n=document.querySelector('[data-modal=\"container\"]');function o(t){t.preventDefault(),n.classList.toggle(\"ativo\")}t&&e&&n&&(t.addEventListener(\"click\",o),e.addEventListener(\"click\",o),n.addEventListener(\"click\",(function(t){t.target===this&&o(t)})))}(),function(){const t=document.querySelectorAll(\"[data-tooltip]\"),e={handleEvent(t){this.tooltipbox.style.top=`${t.pageY+20}'px'`,this.tooltipbox.style.left=`${t.pageX+20}'px'`}},n={handleEvent(){this.tooltipbox.remove(),this.element.removeEventListener(\"mouseleave\",n),this.element.removeEventListener(\"mousemove\",e)}};function o(){const t=function(t){const e=document.createElement(\"div\"),n=t.getAttribute(\"aria-label\");return e.classList.add(\"tooltip\"),e.innerText=n,document.body.appendChild(e),e}(this);e.tooltipbox=t,this.addEventListener(\"mousemove\",e),n.tooltipbox=t,n.element=this,this.addEventListener(\"mouseleave\",n)}t.forEach((t=>{t.addEventListener(\"mouseover\",o)}))}(),function(){function e(e){e.preventDefault(),this.classList.add(\"active\"),t(this,[\"touchstart\",\"click\"],(()=>{this.classList.remove(\"active\")}))}document.querySelectorAll(\"[data-dropdown]\").forEach((t=>{[\"touchstart\",\"click\"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu=\"button\"]'),n=document.querySelector('[data-menu=\"list\"]'),o=[\"click\",\"touchstart\"];function c(){n.classList.add(\"active\"),e.classList.add(\"active\"),t(n,o,(()=>{n.classList.remove(\"active\"),e.classList.remove(\"active\")}))}e&&o.forEach((t=>{e.addEventListener(t,c)}))}(),function(){const t=document.querySelector(\"[data-semana]\"),e=t.dataset.semana.split(\",\").map(Number),n=t.dataset.horario.split(\",\").map(Number),o=new Date,c=o.getDay(),a=o.getHours(),s=-1!==e.indexOf(c),i=a>=n[0]&&a<n[1];s&&i&&t.classList.add(\"aberto\")}(),async function(t){try{const t=await fetch(\"./animaisapi.json\"),n=await t.json(),o=document.querySelector(\".numeros-grid\");n.forEach((t=>{const e=function(t){const e=document.createElement(\"div\");return e.classList.add(\"numero-animal\"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),e()}catch(t){console.log(t)}}(),fetch(\"https://blockchain.info/ticker\").then((t=>t.json())).then((t=>{document.querySelector(\".btc-preco\").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),e(),console.log()})();\n\n//# sourceURL=webpack://animais-fantasticos/./main.js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js/main.js"]();
/******/ 	
/******/ })()
;