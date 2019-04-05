
// !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=68)}({68:function(e,t,n){e.exports=n(69)},69:function(e,t){$(document).ready(function(){$("#guestname2").hide(),$("#guestname3").hide(),$("#guestname4").hide(),$("#guestname5").hide(),$("#guests").change(function(){console.log;var e=+$("#guests").val(),t=$("#guestname2"),n=$("#guestname3"),o=$("#guestname4"),r=$("#guestname5");switch(console.log(e),e){case 2:t.show();break;case 3:t.show(),n.show();break;case 4:t.show(),n.show(),o.show();break;case 5:t.show(),n.show(),o.show(),r.show();break;default:console.log("asdad")}}),$(".fa-question-circle").tooltip()})}});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/rsvp.js":
/*!******************************!*\
  !*** ./resources/js/rsvp.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // RSVP Guests
  $('#guestname2').hide();
  $('#guestname3').hide();
  $('#guestname4').hide();
  $('#guestname5').hide();
  $('#guests').change(function () {
    console.log;
    var guests = +$('#guests').val();
    var guest2 = $('#guestname2');
    var guest3 = $('#guestname3');
    var guest4 = $('#guestname4');
    var guest5 = $('#guestname5');
    console.log(guests);

    switch (guests) {
      case 2:
        guest2.show();
        break;

      case 3:
        guest2.show();
        guest3.show();
        break;

      case 4:
        guest2.show();
        guest3.show();
        guest4.show();
        break;

      case 5:
        guest2.show();
        guest3.show();
        guest4.show();
        guest5.show();
        break;

      default:
        console.log('asdad');
        break;
    } //let guests = $(this).children("option:selected").val();
    //
    //
    // $('#guestname2').addClass('hidden').prop('disabled', true);
    // $('#guestname3').addClass('hidden').prop('disabled', true);
    // $('#guestname4').addClass('hidden').prop('disabled', true);
    // $('#guestname5').addClass('hidden').prop('disabled', true);
    //
    // if (guests >= 2) { $('#guestname2').removeClass('hidden').prop('disabled', false); }
    // if (guests >= 3) { $('#guestname3').removeClass('hidden').prop('disabled', false); }
    // if (guests >= 4) { $('#guestname4').removeClass('hidden').prop('disabled', false); }
    // if (guests >= 5) { $('#guestname5').removeClass('hidden').prop('disabled', false); }

  }); // for tooltip

  $('.fa-question-circle').tooltip();
});

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./resources/js/rsvp.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Braeden/Library/Mobile Documents/com~apple~CloudDocs/Filing Cabinet/web stuff/school.nosync/CAKE/resources/js/rsvp.js */"./resources/js/rsvp.js");


/***/ })

/******/ });
