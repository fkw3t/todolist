/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/css/style.css":
/*!*******************************!*\
  !*** ./app/src/css/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://to-do-list/./app/src/css/style.css?");

/***/ }),

/***/ "./app/src/app.ts":
/*!************************!*\
  !*** ./app/src/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ \"./app/src/css/style.css\");\n// import 'bootstrap/dist/css/bootstrap.css';\n\nconst adicionarButton = document.querySelector('#adicionarItem');\nconst inputValue = document.querySelector('#inputItem');\nconst listaItens = document.querySelector('#listaItens');\nconst listaItensChecked = document.querySelector('#listaItensChecked');\nconst criarItem = (event) => {\n    event.preventDefault();\n    const item = document.createElement('li');\n    const itemValue = `<p class='content'>${inputValue.value}</p>`;\n    item.innerHTML = itemValue;\n    item.appendChild(criarButtonCheck(event));\n    item.appendChild(criarButtonDelete(event));\n    listaItens.appendChild(item);\n    inputValue.value = null;\n    inputValue.focus();\n};\nconst criarButtonCheck = (event) => {\n    event.preventDefault();\n    const buttonCheck = document.createElement('button');\n    buttonCheck.id = \"checkButton\";\n    buttonCheck.innerText = \"CHECK/UNCHECK\";\n    buttonCheck.addEventListener('click', checkUncheckItem);\n    return buttonCheck;\n};\nconst checkUncheckItem = (event) => {\n    event.preventDefault();\n    const checkButton = event.target;\n    const item = checkButton.parentElement;\n    if (item.parentElement.id == \"listaItens\") {\n        listaItensChecked.appendChild(item);\n    }\n    else {\n        listaItens.appendChild(item);\n    }\n};\nconst criarButtonDelete = (event) => {\n    event.preventDefault();\n    const deleteButton = document.createElement('button');\n    deleteButton.id = \"deleteButton\";\n    deleteButton.innerText = \"DELETE\";\n    deleteButton.addEventListener('click', deleteItem);\n    return deleteButton;\n};\nconst deleteItem = (event) => {\n    event.preventDefault();\n    const deleteButton = event.target;\n    const item = deleteButton.parentElement;\n    item.remove();\n};\nadicionarButton.addEventListener('click', criarItem);\n\n\n//# sourceURL=webpack://to-do-list/./app/src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/src/app.ts");
/******/ 	
/******/ })()
;