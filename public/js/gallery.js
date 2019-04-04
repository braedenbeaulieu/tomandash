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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/gallery.js":
/*!*********************************!*\
  !*** ./resources/js/gallery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // error handling
  var error_message = $('<p></p>').attr('class', 'error-message').hide();
  var hasImageSelected = false;
  var hasDescription = false;
  var hasTags = false; // if you click the submit button and its type is button

  $('.upload-image-submit').on('click', function () {
    if ($(this).attr('type') === 'button') {
      // if hasTags is false send error
      if (hasTags === false) {
        error_message.text('You must select at least one tag.').appendTo($('.tags-container')).hide().fadeIn();
      } // if hasImageSelected is false send error


      if (hasDescription === false) {
        error_message.text('You must write an image description.').appendTo($('.description-image')).hide().fadeIn();
      } // if hasImageSelected is false send error


      if (hasImageSelected === false) {
        error_message.text('You must select an image.').appendTo($('.upload-image-container')).hide().fadeIn();
      }
    }
  }); // everytime you go to upload an image set these to false

  $('.upload-image-button').on('click', function () {
    hasImageSelected = false;
    hasDescription = false;
    hasTags = false;
  }); // when you arent logged in

  $('.cant-upload').on('click', function () {
    error_message.text('You must log in to upload an image.').appendTo($('.cant-upload').parent()).hide().fadeIn();
  }); // when you click the upload image in the modal to find an image, check if theres an image there

  $('.upload-image-container').on('click', function () {
    hasImageSelected = true; // check if both things are true

    if (hasDescription === true && hasImageSelected === true && hasTags === true) {
      $('.upload-image-submit').attr('type', 'submit');
    }
  }); // when they click off of textarea, check if it's populated

  $('.image-description').on('blur', function () {
    if ($(this).val()) {
      hasDescription = true;
    } // check if both things are true


    if (hasDescription === true && hasImageSelected === true && hasTags === true) {
      $('.upload-image-submit').attr('type', 'submit');
    }
  }); // when they select a tag

  $('.tags-container').on('click', function (e) {
    if ($(e.target).prop("checked") === true) {
      hasTags = true;
    } else if ($(e.target).prop("checked") === false) {
      hasTags = false;
    } // check if both things are true


    if (hasDescription === true && hasImageSelected === true && hasTags === true) {
      $('.upload-image-submit').attr('type', 'submit');
    }
  }); // masonry stuff

  var $grid = $('.grid').imagesLoaded(function () {
    // init Masonry after all images have loaded
    $grid.masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  }); // dealing with tags

  $('#filter a').on('click', function (e) {
    // get the li
    var target = $(e.target).parents(); // turn on highlight

    target.addClass('highlight'); // if any other sibling has the class

    if (target.siblings().hasClass('highlight')) {
      // remove it
      target.siblings().removeClass('highlight');
    }

    var filterName = $(this).text().toLowerCase().replace(' ', '-'); // show the edit and delete buttons we hid

    if (filterName === "all") {
      $('.d-none').show().removeClass('d-none');
      $('.picture a').attr('data-lightbox', 'gallery');
      $('.edit-delete-image').show();
      $grid.masonry('layout');
    } else {
      $('.picture').each(function () {
        // if doesnt have the class of the filtername
        if (!$(this).hasClass(filterName)) {
          // hide the element and hide the edit and delete button
          $(this).hide().addClass('d-none');
          $(this).siblings('.edit-delete-image').hide(); // find the a and make the lightbox = ''

          $(this).find('a').attr('data-lightbox', '');
        } // if it does
        else {
            // remove the class
            $(this).siblings('.edit-delete-image').show();
            $(this).show().removeClass('d-none');
            $(this).find('a').attr('data-lightbox', 'gallery'); // reset the grid

            $grid.masonry('layout');
          }
      });
    }

    return false;
  });
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }); // AJAX for edit and delete image

  $('.grid').on('click', function (e) {
    var target = $(e.target);

    if (target.hasClass('delete-image-button')) {
      var image_id = target.parent().parent().parent().attr('id');
      console.log('delete button ' + image_id);
      $.ajax({
        url: '/CAKE/public/gallery/' + image_id,
        type: 'delete',
        data: {
          image_id: image_id
        },
        success: function success() {
          target.parent().parent().parent().hide().addClass('d-none');
          $grid.masonry('layout');
        },
        error: function error(xhr, status, _error) {
          console.log(status + " = " + _error);
        }
      });
      $grid.masonry('layout');
    }
  });
});

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./resources/js/gallery.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Braeden/Library/Mobile Documents/com~apple~CloudDocs/Filing Cabinet/web stuff/school.nosync/CAKE/resources/js/gallery.js */"./resources/js/gallery.js");


/***/ })

/******/ });