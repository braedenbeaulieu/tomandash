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
  // found on the internet https://stackoverflow.com/questions/39350918/how-to-delete-record-in-laravel-5-3-using-ajax-request
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  }); // to check if they have a form open

  var formOpen = false; // hide all forms at first so we can slide in when needed

  $('.edit-form').hide();
  $('.comment-form').hide(); // hide all comments at first, user has to press show comments button to see.
  // $('.comments').hide();

  $('.show-comments').hide(); // toggle for checking if its slid down or up

  var slideToggle = false; // when they click a button on their post

  $('#posts').on('click', function (e) {
    // get element clicked
    var target = $(e.target); // get current forms

    var edit_form = target.parent().parent().parent().find('.edit-form');
    var comment_form = target.parent().parent().parent().find('.comment-form'); // check if clicked element is close edit form button

    if (target.hasClass('close-form') && formOpen === true) {
      target.parent().parent().slideUp();
      formOpen = false;
    } // when they click delete post button
    else if (target.hasClass('delete-post')) {
        console.log('delete post'); // get comment id

        var post_id = target.attr('id');
        $.ajax({
          url: '/CAKE/public/posts/' + post_id,
          type: 'delete',
          data: {
            post_id: post_id
          },
          success: function success(response) {
            target.parent().parent().parent().parent().slideUp();
          },
          error: function error(xhr, status, _error) {
            console.log(status + " = " + _error);
          }
        });
      } // when they click the edit post button
      else if (target.hasClass('edit-post')) {
          // get info
          var textarea = target.parent().parent().children('textarea');
          var edited_post = textarea.val();
          var user_id = target.parent().parent().children('input').attr('value');

          var _post_id = target.attr('id');

          if (edited_post.length === 0 || edited_post === " " || edited_post === "  " || edited_post === "   ") {
            alert('cant be empty');
          } else {
            // info to fake change the post body
            var current_post = target.parent().parent().siblings('div').children('.post-body');
            console.log("".concat(current_post.text())); // call PostController with all data (goes from here to web.php, then to the controller)

            $.ajax({
              url: '/CAKE/public/posts/' + _post_id,
              type: 'put',
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
              data: {
                post_id: _post_id,
                user_id: user_id,
                body: edited_post
              },
              success: function success(response) {
                // delete words in text area, slide up form, and fake change the post body
                current_post.text(edited_post);
                textarea.val(edited_post);
                target.parent().parent().slideUp();
                formOpen = false;
                console.log(response);
              },
              error: function error(xhr, status, _error2) {
                console.log(status + " = " + _error2);
              }
            });
          }
        } // when they click the create comment button
        else if (target.hasClass('create-comment')) {
            // gather info for database
            var comment_name = $('#whos-logged-in').text();
            var comment_body = target.parent().parent().children('.comment-body');

            var _post_id2 = target.parent().parent().children('.post-id').attr('value');

            var _user_id = target.parent().parent().children('.user-id').attr('value');

            if (comment_body.val().length === 0 || comment_body.val() === " " || comment_body.val() === "  " || comment_body.val() === "   ") {
              alert('cant be empty');
            } else {
              // select element to place teh fake comment into
              var comments = target.parent().parent().parent().children('.comments'); // call PostCommentController with all data (goes from here to web.php, then to the controller)

              $.ajax({
                url: '/CAKE/public/posts/comment',
                type: 'post',
                data: {
                  user_id: _user_id,
                  post_id: _post_id2,
                  body: comment_body.val()
                },
                success: function success(response) {
                  // create fake comment to show so we wont have to refresh the page
                  var fake_comment = $('<div></div>').attr('class', 'comment'); // comment container

                  var fake_comment_img = $('<img>').attr({
                    class: 'comment-pic',
                    src: 'https://fillmurray.com/50/50'
                  });
                  var fake_comment_words = $('<div></div>').attr('class', 'comment-words');
                  var fake_comment_name = $('<p></p>').attr('class', 'comment-name').text(comment_name);
                  var fake_comment_body = $('<p></p>').attr('class', 'comment-body').text(comment_body.val());
                  var fake_delete_comment_container = $('<form></form>').attr('class', 'delete-comment-container');
                  var fake_delete_comment = $('<input>').attr({
                    class: 'delete-comment',
                    id: response.id,
                    type: 'button',
                    value: 'Delete'
                  }); // put it all together

                  fake_comment_words.append(fake_comment_name, fake_comment_body);
                  fake_delete_comment_container.append(fake_delete_comment);
                  fake_comment.append(fake_comment_img, fake_comment_words, fake_delete_comment_container); // plant the fake comment, slide the form up and delete the words inside the form

                  comments.prepend(fake_comment);
                  target.parent().parent().slideUp();
                  formOpen = false;
                  comment_body.val('');
                },
                error: function error(xhr, status, _error3) {
                  console.log(status + " = " + _error3);
                }
              });
            }
          } // check if any forms are open
          else if (formOpen === true) {} //alert('Please close form before trying to open another.');
            // check if clicked element is edit button
            // if they click the edit form burron
            else if (target.hasClass('edit-button') && formOpen === false) {
                edit_form.slideDown();
                formOpen = true;
              } // if they click the comment form button
              else if (target.hasClass('comment-button') && formOpen === false) {
                  comment_form.slideDown();
                  formOpen = true;
                } // if they click the delete comment button
                else if (target.hasClass('delete-comment')) {
                    // get comment id
                    var comment_id = target.attr('id');
                    $.ajax({
                      url: '/CAKE/public/posts/comment/' + comment_id,
                      type: 'delete',
                      data: {
                        comment_id: comment_id
                      },
                      success: function success(response) {
                        console.log(response);
                        target.parent().parent().slideUp();
                      },
                      error: function error(xhr, status, _error4) {
                        console.log(status + " = " + _error4);
                      }
                    });
                  } // if they click the show comments button
                  else if (target.hasClass('show-comments')) {
                      var _comments = target.parent().children('.comments');

                      var showComments = target.parent().children('.show-comments');
                      var commentsCount = target.parent().children('.comments-count').text();
                      commentsCount = parseInt(commentsCount);

                      if (_comments.is(':hidden')) {
                        _comments.slideDown();

                        slideToggle = true;

                        if (commentsCount > 1) {
                          showComments.text("hide all ".concat(commentsCount, " comments"));
                        } else if (commentsCount === 1) {
                          showComments.text("hide comment");
                        }
                      } else if (_comments.is(':visible')) {
                        _comments.slideUp();

                        slideToggle = false;

                        if (commentsCount > 1) {
                          showComments.text("show all ".concat(commentsCount, " comments"));
                        } else if (commentsCount === 1) {
                          showComments.text("show comment");
                        }
                      }
                    } // when you click on the like button
                    else if (target.hasClass('like')) {
                        // gather info
                        var _post_id3 = target.attr('id');

                        var likes = target.parent().parent().children('.like-counter');
                        var like_button = target; // call PostLikeController with all data (goes from here to web.php, then to the controller)

                        $.ajax({
                          url: '/CAKE/public/posts/like',
                          type: 'post',
                          data: {
                            post_id: _post_id3
                          },
                          success: function success() {
                            // change like to unlike (class too) and increment the likes counter
                            like_button.attr({
                              class: 'unlike-button buttons unlike',
                              value: 'Unlike'
                            });
                            likes.text(parseInt(likes.text()) + 1);
                          },
                          error: function error(xhr, status, _error5) {
                            console.log(status + " = " + _error5);
                          }
                        });
                      } // when you click on the unlike button
                      else if (target.hasClass('unlike')) {
                          // gather info
                          var _post_id4 = target.attr('id');

                          var _likes = target.parent().parent().children('.like-counter');

                          var unlike_button = target; // call PostLikeController with all data (goes from here to web.php, then to the controller)

                          $.ajax({
                            url: '/CAKE/public/posts/like/' + _post_id4,
                            type: 'delete',
                            data: {
                              post_id: _post_id4
                            },
                            success: function success() {
                              // change unlike to like (class too) and decrement the likes counter
                              unlike_button.attr({
                                class: 'like-button buttons like',
                                value: 'Like'
                              });

                              _likes.text(parseInt(_likes.text()) - 1);
                            },
                            error: function error(xhr, status, _error6) {
                              console.log(status + " = " + _error6);
                            }
                          });
                        }
  }); // when they click in the .create-post button

  $('.create-post').on('click', function () {
    var target = $('.create-post'); // get info

    var textarea = target.siblings('textarea');
    var post_body = textarea.val();
    var whos_logged_in = $('#whos-logged-in');
    var user_id = whos_logged_in.attr('class');
    var user_name = whos_logged_in.text(); // check if textarea is empty

    if (post_body.length === 0 || post_body === " " || post_body === "  " || post_body === "   ") {
      alert('cant be empty');
    } else {
      $.ajax({
        url: '/CAKE/public/posts',
        type: 'post',
        data: {
          user_id: user_id,
          body: post_body
        },
        success: function success(response) {
          // info to create fake post
          var fake_post = $('<div></div>').attr('class', 'post');
          var fake_post_img = $('<img>').attr({
            class: 'profile-pic',
            src: 'https://fillmurray.com/50/50'
          });
          var fake_div = $('<div></div>');
          var fake_post_author = $('<p></p>').attr('class', 'author').text(user_name);
          var fake_post_body = $('<p></p>').attr('class', 'post-body').text(response.body);
          var fake_comment_like = $('<div></div>').attr('id', 'comment-like');
          var fake_like_counter = $('<p></p>').attr('class', 'like-counter').text('0');
          var fake_like_form = $('<form></form>');
          var fake_like_button = $('<input>').attr({
            class: 'like-button buttons like',
            id: response.id,
            type: 'button',
            value: 'Like'
          });
          var fake_comment_button = $('<input>').attr({
            class: 'comment-button buttons',
            type: 'button',
            value: 'Comment'
          });
          var fake_edit_button = $('<input>').attr({
            class: 'edit-button buttons',
            id: response.id,
            type: 'button',
            value: 'Edit'
          });
          var fake_delete_form = $('<form></form>').attr('class', 'delete-button');
          var fake_delete_button = $('<input>').attr({
            class: 'buttons delete-post',
            id: response.id,
            type: 'button',
            value: 'Delete'
          });
          var fake_comments_div = $('<div></div>').attr('class', 'comments');
          var fake_hidden_edit_form = $('<form></form>').attr({
            class: 'comment-edit-form edit-form',
            style: 'display: none;'
          });
          var fake_hidden_edit_form_input = $('<input>').attr({
            type: 'text',
            value: user_id,
            hidden: 'true'
          });
          var fake_hidden_edit_form_textarea = $('<textarea></textarea>').val(response.body).attr('type', 'text');
          var fake_hidden_edit_form_div = $('<div></div').attr('class', 'comment-edit-form-buttons');
          var fake_hidden_edit_form_div_button = $('<input>').attr({
            type: 'button',
            value: 'Edit',
            class: 'edit-post',
            id: response.id
          });
          var fake_hidden_edit_form_div_close = $('<input>').attr({
            type: 'button',
            value: 'X',
            class: 'close-form'
          });
          var fake_hidden_comment_form = $('<form></form>').attr({
            class: 'comment-edit-form comment-form',
            style: 'display: none;'
          });
          var fake_hidden_comment_form_user_id = $('<input>').attr({
            class: 'user-id',
            type: 'text',
            value: user_id,
            hidden: 'true'
          });
          var fake_hidden_comment_form_post_id = $('<input>').attr({
            class: 'post-id',
            type: 'text',
            value: response.id,
            hidden: 'true'
          });
          var fake_hidden_comment_form_textarea = $('<textarea></textarea>').val('').attr({
            class: 'comment-body',
            type: 'text'
          });
          var fake_hidden_comment_form_div = $('<div></div').attr('class', 'comment-edit-form-buttons');
          var fake_hidden_comment_form_div_button = $('<input>').attr({
            type: 'button',
            value: 'Comment',
            class: 'create-comment',
            id: 'create-comment'
          });
          var fake_hidden_comment_form_div_close = $('<input>').attr({
            type: 'button',
            value: 'X',
            class: 'close-form'
          }); // put it all together

          fake_like_form.append(fake_like_button);
          fake_delete_form.append(fake_delete_button);
          fake_comment_like.append(fake_like_counter, fake_like_form, fake_comment_button, fake_edit_button, fake_delete_form);
          fake_div.append(fake_post_author, fake_post_body, fake_comment_like);
          fake_hidden_comment_form_div.append(fake_hidden_comment_form_div_button, fake_hidden_comment_form_div_close);
          fake_hidden_comment_form.append(fake_hidden_comment_form_user_id, fake_hidden_comment_form_post_id, fake_hidden_comment_form_textarea, fake_hidden_comment_form_div);
          fake_hidden_edit_form_div.append(fake_hidden_edit_form_div_button, fake_hidden_edit_form_div_close);
          fake_hidden_edit_form.append(fake_hidden_edit_form_input, fake_hidden_edit_form_textarea, fake_hidden_edit_form_div);
          fake_post.append(fake_post_img, fake_div, fake_hidden_edit_form, fake_hidden_comment_form, fake_comments_div); // place the comment before the top post

          $('#posts').prepend(fake_post); // clear the textarea

          textarea.val('');
        },
        error: function error(xhr, status, _error7) {
          console.log(status + " = " + _error7);
        }
      });
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