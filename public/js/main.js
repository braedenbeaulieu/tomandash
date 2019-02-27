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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // when they click post
  $('.post-button').on('click', function () {
    var id = $(this).attr('id');
    $.ajax({
      url: '/cake/public/posts/create',
      type: 'get',
      data: {
        post: post
      },
      success: function success(data) {
        if (data == 'commented') {
          $('#comment-body').val("");
        }
      },
      error: function error(xhr, status, _error) {
        console.log(status + " = " + _error);
      }
    });
  }); // when they click a button on their post
  // check if they've clicked edit because we will want to only show one edit at a time

  var alreadyClickedEdit = false; // hide all forms at first so we can slide in when needed

  $('.edit-form').hide();
  $('#posts').on('click', function (e) {
    // get element clicked
    var target = $(e.target);
    var edit_form = target.parent().parent().parent().find('form'); // check if clicked element is edit button

    if (target.hasClass('edit-button') && alreadyClickedEdit === false) {
      alreadyClickedEdit = true; // get all post information

      var post_id = target.attr('id');
      var post_user_id = target.parent().parent().find('.author').attr('id');
      var post_body = target.parent().parent().find('#post-body').text();
      console.log("".concat(post_id, " ").concat(post_user_id, " ").concat(post_body));
      edit_form.slideDown(); // create form with inputs and display it on screen for editing
      // let form = $('<form></form>');
      // let edit_button = $('<input>');
      // let edit_body = $('<input>');
      // let container = target.parent().parent().parent();
      // edit_body.attr({name:'body', type:'text', value:post_body});
      // edit_button.attr({name:'button', type:'button', value:'Make Change'});
      // form.attr({method:'post', action:'https://cake.scweb.ca/CAKE/public/posts', id:'edit-form'});
      // form.append(edit_body, edit_button);
      // form.appendTo(container);
    } else if (target.hasClass('edit-button') && alreadyClickedEdit === true) {
      edit_form.slideUp();
      alreadyClickedEdit = false;
    }
  });
});

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Braeden/Library/Mobile Documents/com~apple~CloudDocs/Filing Cabinet/web stuff/school.nosync/CAKE/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/Braeden/Library/Mobile Documents/com~apple~CloudDocs/Filing Cabinet/web stuff/school.nosync/CAKE/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });