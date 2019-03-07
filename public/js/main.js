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
  }); // to check if they have a form open

  var formOpen = false; // hide all forms at first so we can slide in when needed

  $('.edit-form').hide();
  $('.comment-form').hide(); // hide all comments at first, user has to press show comments button to see.

  $('.comments').hide(); // toggle for checking if its slid down or up

  var slideToggle = false; // when they click a button on their post

  $('#posts').on('click', function (e) {
    // get element clicked
    var target = $(e.target); // get current forms

    var edit_form = target.parent().parent().parent().find('.edit-form');
    var comment_form = target.parent().parent().parent().find('.comment-form'); // check if clicked element is close edit form button

    if (target.hasClass('close-form') && formOpen === true) {
      target.parent().parent().slideUp();
      formOpen = false; // check if any forms are open
    } else if (formOpen === true) {//alert('Please close form before trying to open another.');
      // check if clicked element is edit button
    } else if (target.hasClass('edit-button') && formOpen === false) {
      edit_form.slideDown();
      formOpen = true; // if they click the comment button
    } else if (target.hasClass('comment-button') && formOpen === false) {
      comment_form.slideDown();
      formOpen = true; // if they click the delete comment button
    } else if (target.hasClass('delete-comment')) {
      // get comment id
      var comment_id = target.attr('comment-id');
      $.ajax({
        url: '/posts/comment/' + comment_id,
        type: 'DELETE',
        success: function success(data) {
          console.log(data);
        },
        error: function error(xhr, status, _error2) {
          console.log(status + " = " + _error2);
        }
      });
    } // if they click the show comments button
    else if (target.hasClass('show-comments')) {
        var comments = target.parent().children('.comments');
        var showComments = target.parent().children('.show-comments');
        var commentsCount = target.parent().children('.comments-count').text();
        commentsCount = parseInt(commentsCount);

        if (comments.is(':hidden')) {
          comments.slideDown();
          slideToggle = true;

          if (commentsCount > 1) {
            showComments.text("hide all ".concat(commentsCount, " comments"));
          } else if (commentsCount === 1) {
            showComments.text("hide comment");
          }
        } else if (comments.is(':visible')) {
          comments.slideUp();
          slideToggle = false;

          if (commentsCount > 1) {
            showComments.text("show all ".concat(commentsCount, " comments"));
          } else if (commentsCount === 1) {
            showComments.text("show comment");
          }
        }
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