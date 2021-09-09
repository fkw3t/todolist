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

/***/ "./app/src/app.ts":
/*!************************!*\
  !*** ./app/src/app.ts ***!
  \************************/
/***/ (() => {

eval("// import 'bootstrap/dist/css/bootstrap.css';\nconst adicionarButton = document.querySelector('#adicionarItem');\nconst inputValue = document.querySelector('#inputItem');\nconst listaItens = document.querySelector('#listaItens');\nconst listaItensChecked = document.querySelector('#listaItensChecked');\nconst criarItem = (event) => {\n    event.preventDefault();\n    const item = document.createElement('li');\n    const itemValue = `<p class='content'>${inputValue.value}</p>`;\n    item.innerHTML = itemValue;\n    item.appendChild(criarButtonCheck(event));\n    item.appendChild(criarButtonDelete(event));\n    listaItens.appendChild(item);\n    inputValue.value = null;\n    inputValue.focus();\n};\nconst criarButtonCheck = (event) => {\n    event.preventDefault();\n    const buttonCheck = document.createElement('button');\n    buttonCheck.id = \"checkButton\";\n    buttonCheck.innerText = \"check/uncheck\";\n    buttonCheck.addEventListener('click', checkUncheckItem);\n    return buttonCheck;\n};\nconst checkUncheckItem = (event) => {\n    event.preventDefault();\n    const checkButton = event.target;\n    const item = checkButton.parentElement;\n    if (item.parentElement.id == \"listaItens\") {\n        listaItensChecked.appendChild(item);\n    }\n    else {\n        listaItens.appendChild(item);\n    }\n};\nconst criarButtonDelete = (event) => {\n    event.preventDefault();\n    const deleteButton = document.createElement('button');\n    deleteButton.id = \"excluirButton\";\n    deleteButton.innerText = \"delete\";\n    deleteButton.addEventListener('click', deleteItem);\n    return deleteButton;\n};\nconst deleteItem = (event) => {\n    event.preventDefault();\n    const deleteButton = event.target;\n    const item = deleteButton.parentElement;\n    item.remove();\n};\nadicionarButton.addEventListener('click', criarItem);\n\n\n//# sourceURL=webpack://to-do-list/./app/src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/src/app.ts"]();
/******/ 	
/******/ })()
;