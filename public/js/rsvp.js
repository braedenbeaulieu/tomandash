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
  var p = 'CAKE';
  $('.cant-go').hide();
  $('#guestname2').hide();
  $('#guestname3').hide();
  $('#guestname4').hide();
  $('#guestname5').hide();
  var guests = 1;
  $('#guests').change(function () {
    var cant_go = $('.cant-go');
    guests = +$('#guests').val();
    var guest1 = $('#guestname01');
    var guest2 = $('#guestname2');
    var guest3 = $('#guestname3');
    var guest4 = $('#guestname4');
    var guest5 = $('#guestname5');
    $('#guestname02').val('');
    $('#guestname03').val('');
    $('#guestname04').val('');
    $('#guestname05').val('');

    switch (guests) {
      case 0:
        cant_go.show();
        guest2.hide();
        guest3.hide();
        guest4.hide();
        guest5.hide();
        break;

      case 1:
        cant_go.hide();
        guest2.hide();
        guest3.hide();
        guest4.hide();
        guest5.hide();
        break;

      case 2:
        cant_go.hide();
        guest2.show();
        guest3.hide();
        guest4.hide();
        guest5.hide();
        break;

      case 3:
        cant_go.hide();
        guest2.show();
        guest3.show();
        guest4.hide();
        guest5.hide();
        break;

      case 4:
        cant_go.hide();
        guest2.show();
        guest3.show();
        guest4.show();
        guest5.hide();
        break;

      case 5:
        cant_go.hide();
        guest2.show();
        guest3.show();
        guest4.show();
        guest5.show();
        break;

      default:
        break;
    }
  }); // for tooltip

  $('.fa-question-circle').tooltip(); // errors
  // error message

  var error_message = $('<p></p>').attr('class', 'error-message').hide(); // variables to check if all fields are good

  var hasFullName = false;
  var hasGuest2 = false;
  var hasGuest3 = false;
  var hasGuest4 = false;
  var hasGuest5 = false;
  var hasPassCode = false; // on submit button, check if all values are true, if not do error checking
  // check if name is filled out

  if ($('#guestname01').val()) {
    hasFullName = true;
    error_message.fadeOut();
  }

  $('#guestname01').on('blur', function () {
    if ($(this).val()) {
      hasFullName = true;
      error_message.fadeOut();
    } else if (!$(this).val()) {
      hasFullName = false;
    }
  }); // ---------------------------
  // check if all extra guests are filled out

  $('#guestname02').on('blur', function () {
    if ($(this).val()) {
      hasGuest2 = true;
      error_message.fadeOut();
    } else if (!$(this).val()) {
      hasGuest2 = false;
    }
  });
  $('#guestname03').on('blur', function () {
    if ($(this).val()) {
      hasGuest3 = true;
      error_message.fadeOut();
    } else if (!$(this).val()) {
      hasGuest3 = false;
    }
  });
  $('#guestname04').on('blur', function () {
    if ($(this).val()) {
      hasGuest4 = true;
      error_message.fadeOut();
    } else if (!$(this).val() == null) {
      hasGuest4 = false;
    }
  });
  $('#guestname05').on('blur', function () {
    if ($(this).val()) {
      hasGuest5 = true;
      error_message.fadeOut();
    } else if (!$(this).val() == null) {
      hasGuest5 = false;
    }
  }); // ---------------------------------------
  // check if passcode is filled out and correct

  $('#passcode').on('blur', function () {
    if ($(this).val() === p) {
      hasPassCode = true;
      error_message.fadeOut();
    } else if ($(this).val() !== p) {
      hasPassCode = false;
    }
  }); // -------------------------------------------

  $('.send-rsvp').on('click', function () {
    if ($(this).attr('type') === 'button') {
      switch (guests) {
        case 0:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true) {
            $('#rsvp-form').submit();
          }

          break;

        case 1:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true) {
            $('#rsvp-form').submit();
          }

          break;

        case 2:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasGuest2 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true && hasGuest2 === true) {
            $('#rsvp-form').submit();
          }

          break;

        case 3:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasGuest3 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
          }

          if (hasGuest2 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true) {
            $('#rsvp-form').submit();
          }

          break;

        case 4:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasGuest4 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname4')).hide().fadeIn();
          }

          if (hasGuest3 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
          }

          if (hasGuest2 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true && hasGuest4 === true) {
            $('#rsvp-form').submit();
          }

          break;

        case 5:
          if (hasPassCode === false) {
            error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
          }

          if (hasGuest5 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname5')).hide().fadeIn();
          }

          if (hasGuest4 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname4')).hide().fadeIn();
          }

          if (hasGuest3 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
          }

          if (hasGuest2 === false) {
            error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
          }

          if (hasFullName === false) {
            error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
          }

          if (hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true && hasGuest4 === true && hasGuest5 === true) {
            $('#rsvp-form').submit();
          }

          break;

        default:
          break;
      }
    }
  });
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