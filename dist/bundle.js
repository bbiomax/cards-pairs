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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("let radios = document.querySelectorAll('.radio-button');\nlet gameLevel;\n\nconst startButton = document.querySelector('.start-button');\n\nstartButton.addEventListener('click', () => {\n    for (let index = 0; index < radios.length; index++) {\n        if (radios[index].checked) {\n            gameLevel = radios[index].value;\n            break;\n        }\n    }\n\n    console.log(gameLevel);\n\n    if (gameLevel === 'Первый уровень') {\n        window.location = './level.html';\n    } else if (gameLevel === 'Второй уровень') {\n        window.location = './level.html';\n    } else if (gameLevel === 'Третий уровень') {\n        window.location = './level.html';\n    }\n});\n\n\n//# sourceURL=webpack://cards-pairs/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;