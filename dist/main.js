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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/styles.css */ \"./src/assets/css/styles.css\");\n\nvar pushButton = document.querySelector('#push');\nvar unshiftButton = document.querySelector('#unshift');\nvar insertAtButton = document.querySelector('#insertAt');\nvar popButton = document.querySelector('#pop');\nvar shiftButton = document.querySelector('#shift');\nvar removeAtButton = document.querySelector('#removeAt');\nvar arrayLabel = document.querySelector('label');\nvar fieldSetAdd = document.querySelector('#addItem');\nvar fieldSetRemove = document.querySelector('#removeItem');\nvar referenceArray = [];\nvar arrEmojis = ['💩', '👽', '🤖', '😸', '👹', '👾'];\n//const arrEmojis = [`0x1F480`, '0x1F383', '0x1F47B', '0x2B50', '0x1F525', '👾']; \n\nvar labelContent;\nvar count = 0;\nvar indexAdd = document.createElement('input');\nindexAdd.type = 'number';\nindexAdd.min = 0;\nindexAdd.max = 0;\nvar indexRemove = document.createElement('input');\nindexRemove.type = 'number';\nindexRemove.min = 0;\nindexRemove.max = 0;\nfieldSetAdd.appendChild(indexAdd);\nfieldSetRemove.appendChild(indexRemove);\nvar adjustValues = function adjustValues(arr) {\n  indexAdd.max = arr.length - 1;\n  indexRemove.max = arr.length - 1;\n  indexAdd.value = 0;\n  indexRemove.value = 0;\n  count += 1;\n};\npushButton.addEventListener('click', function () {\n  // labelContent =  arrayLabel.innerText.substring(0, arrayLabel.innerText.length - 1);\n\n  count === arrEmojis.length ? count = 0 : '';\n\n  // (referenceArray.length === 0) ?\n  //     arrayLabel.innerText = `${labelContent}${(arrEmojis[count])}]` :\n  //     arrayLabel.innerText = `${labelContent}, ${(arrEmojis[count])}]`;\n\n  referenceArray.push(arrEmojis[count]);\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\nunshiftButton.addEventListener('click', function () {\n  // labelContent = arrayLabel.innerText.substring(1, arrayLabel.innerText.length);\n\n  count === arrEmojis.length ? count = 0 : '';\n\n  // (referenceArray.length === 0) ?\n  //     arrayLabel.innerText = `[${(arrEmojis[count])}${labelContent}` :\n  //     arrayLabel.innerText = `[${(arrEmojis[count])}, ${labelContent}`;\n\n  referenceArray.unshift(arrEmojis[count]);\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\npopButton.addEventListener('click', function () {\n  referenceArray.pop();\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\nshiftButton.addEventListener('click', function () {\n  referenceArray.shift();\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\ninsertAtButton.addEventListener('click', function () {\n  count === arrEmojis.length ? count = 0 : '';\n  referenceArray.splice(indexAdd.value, 0, \" \".concat(arrEmojis[count]));\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\nremoveAtButton.addEventListener('click', function () {\n  referenceArray.splice(indexRemove.value, 1);\n  arrayLabel.innerText = \"[\".concat(referenceArray.join(', '), \"]\");\n  adjustValues(referenceArray);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/css/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;