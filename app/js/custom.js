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

/***/ "./app/js/_init.js":
/*!*************************!*\
  !*** ./app/js/_init.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/config/jquery.validation-default */ \"./app/js/component/config/jquery.validation-default.js\");\n/* harmony import */ var _component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/config/avifWebpBackground */ \"./app/js/component/config/avifWebpBackground.js\");\n/* harmony import */ var _component_config_masks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/config/masks */ \"./app/js/component/config/masks.js\");\n/* harmony import */ var _component_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/wow */ \"./app/js/component/wow.js\");\n/* harmony import */ var _component_forms_js_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/forms/js_wizard */ \"./app/js/component/forms/js_wizard.js\");\n/* harmony import */ var _component_forms_js_formSMS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/forms/js_formSMS */ \"./app/js/component/forms/js_formSMS.js\");\n\n\n\n\n\n\n\n(function ($, window, document) {\n  $(function () {\n    (0,_component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_component_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_component_config_masks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_component_wow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_component_forms_js_wizard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_component_forms_js_formSMS__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    $(\"body\").css(\"opacity\", 1);\n  });\n})(window.jQuery, window, document);\n\n//# sourceURL=webpack://myproject/./app/js/_init.js?");

/***/ }),

/***/ "./app/js/component/config/avifWebpBackground.js":
/*!*******************************************************!*\
  !*** ./app/js/component/config/avifWebpBackground.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function htmlClass(attr) {\n    document.documentElement.classList.add(attr);\n  }\n\n  var avif = new Image();\n  avif.src = \"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=\";\n\n  avif.onload = function () {\n    htmlClass(\"avif\");\n  };\n\n  avif.onerror = function () {\n    checkWebp(function (isWebp) {\n      if (isWebp) {\n        htmlClass(\"webp\");\n        return;\n      }\n\n      htmlClass(\"jpng\");\n    });\n  };\n\n  function checkWebp(cbFn) {\n    var img = new Image();\n\n    img.onload = function () {\n      var result = img.width > 0 && img.height > 0;\n      cbFn(result);\n    };\n\n    img.onerror = function () {\n      cbFn(false);\n    };\n\n    img.src = \"data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==\";\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/avifWebpBackground.js?");

/***/ }),

/***/ "./app/js/component/config/jquery.validation-default.js":
/*!**************************************************************!*\
  !*** ./app/js/component/config/jquery.validation-default.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"cleanupForm\": () => (/* binding */ cleanupForm)\n/* harmony export */ });\nvar holder = \".js_formGroup\";\nvar error = \"has-error\";\nvar valid = \"has-valid\";\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var valid_message = \"Please enter a valid\";\n  var provide_message = \"Please provide a valid\";\n  jQuery.validator.setDefaults({\n    errorElement: \"label\",\n    errorClass: \"error\",\n    focusInvalid: false,\n    errorPlacement: function errorPlacement(error, element) {\n      $(element).closest(holder).append(error);\n    },\n    highlight: function highlight(element, errorClass, validClass) {\n      var fieldWrap = $(element).closest(holder);\n      fieldWrap.addClass(error).removeClass(valid);\n      $(element).addClass(errorClass);\n    },\n    unhighlight: function unhighlight(element, errorClass, validClass) {\n      var fieldWrap = $(element).closest(holder);\n      fieldWrap.removeClass(error).addClass(valid);\n      $(element).removeClass(errorClass);\n    },\n    rules: {\n      first_name: {\n        required: true,\n        minlength: 2\n      },\n      last_name: {\n        required: true,\n        minlength: 2\n      },\n      email_address: {\n        required: true,\n        email: true\n      },\n      phone_home: {\n        required: true,\n        minlength: 17\n      },\n      optCheck: {\n        required: true\n      },\n      //wizard fields:\n      firstname: {\n        required: true,\n        minlength: 2\n      },\n      lastname: {\n        required: true,\n        minlength: 2\n      },\n      email: {\n        required: true,\n        email: true\n      },\n      phone: {\n        required: true,\n        minlength: 17\n      },\n      state: {\n        required: true\n      },\n      optCheck0: {\n        required: true\n      }\n    },\n    messages: {\n      first_name: {\n        minlength: valid_message + ' first name.'\n      },\n      last_name: {\n        minlength: valid_message + ' last name.'\n      },\n      phone_home: {\n        minlength: provide_message + ' phone number.'\n      },\n      //wizard fields:\n      firstname: {\n        minlength: valid_message + ' first name.'\n      },\n      lastname: {\n        minlength: valid_message + ' last name.'\n      },\n      phone: {\n        minlength: provide_message + ' phone number.'\n      }\n    }\n  });\n}\nfunction cleanupForm($form) {\n  var $inputs = $form.find('input');\n  var $selects = $form.find('select');\n  $inputs.each(function (i, input) {\n    var $input = $(input);\n\n    if ($input.is('[type=checkbox]') || $input.is('[type=radio]')) {\n      $input.prop('checked', false);\n      return;\n    }\n\n    $input.val('');\n  });\n  $selects.val('');\n  $form.find('.js_formGroup').removeClass(valid);\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/jquery.validation-default.js?");

/***/ }),

/***/ "./app/js/component/config/masks.js":
/*!******************************************!*\
  !*** ./app/js/component/config/masks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ masks)\n/* harmony export */ });\nfunction masks() {\n  $('[data-phone-mask]').mask('+1 (000) 000 0000');\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/masks.js?");

/***/ }),

/***/ "./app/js/component/config/stateClasses.js":
/*!*************************************************!*\
  !*** ./app/js/component/config/stateClasses.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIVE\": () => (/* binding */ ACTIVE),\n/* harmony export */   \"LOADING\": () => (/* binding */ LOADING),\n/* harmony export */   \"COMPLETED\": () => (/* binding */ COMPLETED),\n/* harmony export */   \"DISABLED\": () => (/* binding */ DISABLED)\n/* harmony export */ });\nvar ACTIVE = 'is-active';\nvar LOADING = 'is-loading';\nvar COMPLETED = 'is-completed';\nvar DISABLED = 'is-disabled';\n\n//# sourceURL=webpack://myproject/./app/js/component/config/stateClasses.js?");

/***/ }),

/***/ "./app/js/component/forms/js_formSMS.js":
/*!**********************************************!*\
  !*** ./app/js/component/forms/js_formSMS.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formSMS)\n/* harmony export */ });\n/* harmony import */ var _config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/jquery.validation-default */ \"./app/js/component/config/jquery.validation-default.js\");\n/* harmony import */ var _config_stateClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/stateClasses */ \"./app/js/component/config/stateClasses.js\");\n\n\nfunction formSMS() {\n  var $forms = $('.js_formSMS');\n  if (!$forms.length) return;\n  $forms.submit(function (e) {\n    e.preventDefault();\n    var $form = $(e.target);\n    if (!$form.valid()) return;\n    var $toggler = $form.find('[type=submit]');\n    $toggler.addClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.LOADING);\n    setTimeout(function () {\n      alert('Request has been success sended!');\n      (0,_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__.cleanupForm)($form);\n      $toggler.removeClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.LOADING);\n    }, 2000);\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/forms/js_formSMS.js?");

/***/ }),

/***/ "./app/js/component/forms/js_wizard.js":
/*!*********************************************!*\
  !*** ./app/js/component/forms/js_wizard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wizard)\n/* harmony export */ });\n/* harmony import */ var _config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/jquery.validation-default */ \"./app/js/component/config/jquery.validation-default.js\");\n/* harmony import */ var _config_stateClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/stateClasses */ \"./app/js/component/config/stateClasses.js\");\n\n\nvar target = '.js_wizard';\nfunction wizard() {\n  var $forms = $('.js_formQuiz');\n  $forms.submit(function (e) {\n    e.preventDefault();\n    var $toggler = $forms.find('[type=submit]');\n    var $form = $(this);\n    if (!$form.valid()) return;\n    $toggler.addClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.LOADING);\n    setTimeout(function () {\n      alert('Request submited');\n      (0,_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__.cleanupForm)($forms);\n      $toggler.removeClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.LOADING);\n    }, 2000);\n  });\n  wiz();\n}\n\nfunction wiz() {\n  var $wizards = $(target);\n  if (!$wizards.length) return;\n  var $next = $wizards.find('.js_next');\n  $next.click(function (e) {\n    e.preventDefault();\n    var $form = $(this).closest('form');\n    if (!$form.valid()) return;\n    var $nextWiz = $(\"\".concat(target, \":not(.\").concat(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.COMPLETED, \"):not(.\").concat(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.ACTIVE, \")\"));\n\n    if (!$nextWiz.length) {\n      $form.submit();\n      return;\n    }\n\n    $(\"\".concat(target, \".\").concat(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.ACTIVE)).removeClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.ACTIVE).addClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.COMPLETED);\n    $nextWiz.addClass(_config_stateClasses__WEBPACK_IMPORTED_MODULE_1__.ACTIVE);\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/forms/js_wizard.js?");

/***/ }),

/***/ "./app/js/component/wow.js":
/*!*********************************!*\
  !*** ./app/js/component/wow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wow)\n/* harmony export */ });\nfunction wow() {\n  var wow = new WOW({\n    boxClass: 'js_animate',\n    animateClass: 'animated',\n    offset: 0,\n    mobile: true\n  });\n  wow.init();\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/wow.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/_init.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=custom.js.map
