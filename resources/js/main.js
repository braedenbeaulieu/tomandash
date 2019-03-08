$(document).ready(function () {

    // found on the internet https://stackoverflow.com/questions/39350918/how-to-delete-record-in-laravel-5-3-using-ajax-request
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // to check if they have a form open
    let formOpen = false;

    // hide all forms at first so we can slide in when needed
    $('.edit-form').hide();
    $('.comment-form').hide();

    // hide all comments at first, user has to press show comments button to see.
    // $('.comments').hide();
    $('.show-comments').hide();
    // toggle for checking if its slid down or up
    let slideToggle = false;

    // when they click a button on their post
    $('#posts').on('click', function(e) {

        // get element clicked
        let target = $(e.target);

        // get current forms
        let edit_form = target.parent().parent().parent().find('.edit-form');

        let comment_form = target.parent().parent().parent().find('.comment-form');


        // check if clicked element is close edit form button
        if (target.hasClass('close-form') && formOpen === true) {
            target.parent().parent().slideUp();
            formOpen = false;
        }

        // when they click delete post button
        else if(target.hasClass('delete-post')) {
            console.log('delete post');
            // get comment id
            let post_id = target.attr('id');

            $.ajax({
                url: '/CAKE/public/posts/' + post_id,
                type: 'delete',
                data: {post_id: post_id},
                success: function (response) {
                    // hide from view
                    target.parent().parent().parent().parent().slideUp();
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });

        }
        // when they click the edit post button
        else if(target.hasClass('edit-post')) {
            // get info
            let textarea = target.parent().parent().children('textarea');
            let edited_post = textarea.val();
            let user_id = target.parent().parent().children('input').attr('value');
            let post_id = target.attr('id');



            if (edited_post.length === 0 || edited_post === " " || edited_post === "  " || edited_post === "   ") {
                alert('cant be empty');
            } else {

                // info to fake change the post body
                let current_post = target.parent().parent().siblings('div').children('.post-body');
                console.log(`${current_post.text()}`);
                // call PostController with all data (goes from here to web.php, then to the controller)
                $.ajax({
                    url: '/CAKE/public/posts/' + post_id,
                    type: 'put',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: {
                        post_id: post_id,
                        user_id: user_id,
                        body: edited_post
                    },
                    success: function (response) {
                        // delete words in text area, slide up form, and fake change the post body
                        current_post.text(edited_post);
                        textarea.val(edited_post);
                        target.parent().parent().slideUp();
                        formOpen = false;

                        console.log(response);

                    },
                    error: function (xhr, status, error) {
                        console.log(status + " = " + error);
                    }
                });
            }
        }
        // when they click the create comment button
        else if(target.hasClass('create-comment')) {

            // gather info for database
            let comment_name = $('#whos-logged-in').text();
            let comment_body = target.parent().parent().children('.comment-body');
            let post_id = target.parent().parent().children('.post-id').attr('value');
            let user_id = target.parent().parent().children('.user-id').attr('value');

            if(comment_body.val().length === 0 || comment_body.val() === " " || comment_body.val() === "  " || comment_body.val() === "   ") {
                alert('cant be empty');
            } else {

                // select element to place teh fake comment into
                let comments = target.parent().parent().parent().children('.comments');

                // call PostCommentController with all data (goes from here to web.php, then to the controller)
                $.ajax({
                    url: '/CAKE/public/posts/comment',
                    type: 'post',
                    data: {
                        user_id: user_id,
                        post_id: post_id,
                        body: comment_body.val()
                    },
                    success: function (response) {
                        // create fake comment to show so we wont have to refresh the page
                        let fake_comment = $('<div></div>').attr('class', 'comment'); // comment container
                        let fake_comment_img = $('<img>').attr({class: 'comment-pic', src: 'https://fillmurray.com/50/50'});
                        let fake_comment_words = $('<div></div>').attr('class', 'comment-words');
                        let fake_comment_name = $('<p></p>').attr('class', 'comment-name').text(comment_name);
                        let fake_comment_body = $('<p></p>').attr('class', 'comment-body').text(comment_body.val());
                        let fake_delete_comment_container = $('<form></form>').attr('class', 'delete-comment-container');
                        let fake_delete_comment = $('<input>').attr({
                            class: 'delete-comment',
                            id: response.id,
                            type: 'button',
                            value: 'Delete'
                        });

                        // put it all together
                        fake_comment_words.append(fake_comment_name, fake_comment_body);
                        fake_delete_comment_container.append(fake_delete_comment);
                        fake_comment.append(fake_comment_img, fake_comment_words, fake_delete_comment_container);

                        // plant the fake comment, slide the form up and delete the words inside the form
                        comments.prepend(fake_comment);
                        target.parent().parent().slideUp();
                        formOpen = false;
                        comment_body.val('');
                    },
                    error: function (xhr, status, error) {
                        console.log(status + " = " + error);
                    }
                });
            }
        }
        // check if any forms are open
        else if (formOpen === true) {
            //alert('Please close form before trying to open another.');

            // check if clicked element is edit button
        }
        // if they click the edit form burron
        else if ((target.hasClass('edit-button') && formOpen === false)) {
            edit_form.slideDown();
            formOpen = true;
        }
        // if they click the comment form button
        else if (target.hasClass('comment-button') && formOpen === false) {
            comment_form.slideDown();
            formOpen = true;

        }
        // if they click the delete comment button
        else if (target.hasClass('delete-comment')) {

            // get comment id
            let comment_id = target.attr('id');

            $.ajax({
                url: '/CAKE/public/posts/comment/' + comment_id,
                type: 'delete',
                data: {comment_id: comment_id},
                success: function (response) {
                    console.log(response);
                    target.parent().parent().slideUp();
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });

        }
        // if they click the show comments button
        else if (target.hasClass('show-comments')) {
            let comments = target.parent().children('.comments');
            let showComments = target.parent().children('.show-comments');
            let commentsCount = target.parent().children('.comments-count').text();
            commentsCount = parseInt(commentsCount);
            if (comments.is(':hidden')) {
                comments.slideDown();
                slideToggle = true;
                if (commentsCount > 1) {
                    showComments.text(`hide all ${commentsCount} comments`);
                } else if (commentsCount === 1) {
                    showComments.text(`hide comment`);
                }
            } else if (comments.is(':visible')) {
                comments.slideUp();
                slideToggle = false;
                if (commentsCount > 1) {
                    showComments.text(`show all ${commentsCount} comments`);
                } else if (commentsCount === 1) {
                    showComments.text(`show comment`);
                }
            }
        }
        // when you click on the like button
        else if (target.hasClass('like')) {

            // gather info
            let post_id = target.attr('id');
            let likes = target.parent().parent().children('.like-counter');
            let like_button = target;

            // call PostLikeController with all data (goes from here to web.php, then to the controller)
            $.ajax({
                url: '/CAKE/public/posts/like',
                type: 'post',
                data: {post_id: post_id},
                success: function() {
                    // change like to unlike (class too) and increment the likes counter
                    like_button.attr({class: 'unlike-button buttons unlike', value: 'Unlike'});
                    likes.text(parseInt(likes.text()) + 1);
                },
                error: function(xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }
        // when you click on the unlike button
        else if (target.hasClass('unlike')) {
            // gather info
            let post_id = target.attr('id');
            let likes = target.parent().parent().children('.like-counter');
            let unlike_button = target;

            // call PostLikeController with all data (goes from here to web.php, then to the controller)
            $.ajax({
                url: '/CAKE/public/posts/like/' + post_id,
                type: 'delete',
                data: {post_id: post_id},
                success: function() {

                    // change unlike to like (class too) and decrement the likes counter
                    unlike_button.attr({class: 'like-button buttons like', value: 'Like'});
                    likes.text(parseInt(likes.text()) - 1);
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }
    });

    // when they click in the .create-post button
    $('.create-post').on('click', function() {
        let target = $('.create-post');

        // get info
        let textarea = target.siblings('textarea');
        let post_body = textarea.val();
        let whos_logged_in = $('#whos-logged-in');
        let user_id = whos_logged_in.attr('class');
        let user_name = whos_logged_in.text();

        // check if textarea is empty
        if(post_body.length === 0 || post_body === " " || post_body === "  " || post_body === "   ") {
            alert('cant be empty');
        } else {
            $.ajax({
                url: '/CAKE/public/posts',
                type: 'post',
                data: {
                    user_id: user_id,
                    body: post_body
                },
                success: function(response) {

                    // info to create fake post
                    let fake_post = $('<div></div>').attr('class', 'post');
                    let fake_post_img = $('<img>').attr({class: 'profile-pic', src: 'https://fillmurray.com/50/50'});
                    let fake_div = $('<div></div>');
                    let fake_post_author = $('<p></p>').attr('class', 'author').text(user_name);
                    let fake_post_body = $('<p></p>').attr('class', 'post-body').text(response.body);
                    let fake_comment_like = $('<div></div>').attr('id', 'comment-like');
                    let fake_like_counter = $('<p></p>').attr('class', 'like-counter').text('0');
                    let fake_like_form = $('<form></form>');
                    let fake_like_button = $('<input>').attr({class: 'like-button buttons like', id: response.id, type: 'button', value: 'Like'});
                    let fake_comment_button = $('<input>').attr({class: 'comment-button buttons', type: 'button', value: 'Comment'});
                    let fake_edit_button = $('<input>').attr({class: 'edit-button buttons', id: response.id, type: 'button', value: 'Edit'});
                    let fake_delete_form = $('<form></form>').attr('class', 'delete-button');
                    let fake_delete_button = $('<input>').attr({class: 'buttons delete-post', id: response.id, type: 'button', value: 'Delete'});
                    let fake_comments_div = $('<div></div>').attr('class', 'comments');

                    let fake_hidden_edit_form = $('<form></form>').attr({class: 'comment-edit-form edit-form', style: 'display: none;'});
                    let fake_hidden_edit_form_input = $('<input>').attr({type: 'text', value: user_id, hidden: 'true'});
                    let fake_hidden_edit_form_textarea = $('<textarea></textarea>').val(response.body).attr('type', 'text');
                    let fake_hidden_edit_form_div = $('<div></div>').attr('class', 'comment-edit-form-buttons');
                    let fake_hidden_edit_form_div_button = $('<input>').attr({type: 'button', value: 'Edit', class: 'edit-post', id: response.id});
                    let fake_hidden_edit_form_div_close = $('<input>').attr({type: 'button', value: 'X', class: 'close-form'});

                    let fake_hidden_comment_form = $('<form></form>').attr({class: 'comment-edit-form comment-form', style: 'display: none;'});
                    let fake_hidden_comment_form_user_id = $('<input>').attr({class: 'user-id', type: 'text', value: user_id, hidden: 'true'});
                    let fake_hidden_comment_form_post_id = $('<input>').attr({class: 'post-id', type: 'text', value: response.id, hidden: 'true'});
                    let fake_hidden_comment_form_textarea = $('<textarea></textarea>').val('').attr({class: 'comment-body', type: 'text', placeholder: 'Write comment..'});
                    let fake_hidden_comment_form_div = $('<div></div').attr('class', 'comment-edit-form-buttons');
                    let fake_hidden_comment_form_div_button = $('<input>').attr({type: 'button', value: 'Comment', class: 'create-comment', id: 'create-comment'});
                    let fake_hidden_comment_form_div_close = $('<input>').attr({type: 'button', value: 'X', class: 'close-form'});

                    // put it all together
                    fake_like_form.append(fake_like_button);
                    fake_delete_form.append(fake_delete_button);
                    fake_comment_like.append(fake_like_counter, fake_like_form, fake_comment_button, fake_edit_button, fake_delete_form);
                    fake_div.append(fake_post_author, fake_post_body, fake_comment_like);

                    fake_hidden_comment_form_div.append(fake_hidden_comment_form_div_button, fake_hidden_comment_form_div_close);
                    fake_hidden_comment_form.append(fake_hidden_comment_form_user_id, fake_hidden_comment_form_post_id, fake_hidden_comment_form_textarea, fake_hidden_comment_form_div);

                    fake_hidden_edit_form_div.append(fake_hidden_edit_form_div_button, fake_hidden_edit_form_div_close);
                    fake_hidden_edit_form.append(fake_hidden_edit_form_input, fake_hidden_edit_form_textarea, fake_hidden_edit_form_div);

                    fake_post.append(fake_post_img, fake_div, fake_hidden_edit_form, fake_hidden_comment_form, fake_comments_div);

                    // place the comment before the top post
                    $('#posts').prepend(fake_post);

                    // clear the textarea
                    textarea.val('');

                },
                error: function(xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }
    });
});