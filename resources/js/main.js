//loader('handlebars');
$(document).ready(function () {

    window.user_info = {user_id: $('#whos-logged-in').attr('class'), user_name: $('#whos-logged-in').text()};



    // found on the internet https://stackoverflow.com/questions/39350918/how-to-delete-record-in-laravel-5-3-using-ajax-request
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // to check if they have a form open
    let formOpen = false;


    // when they click a button on their post
    $('#posts').on('click', function(e) {

        // get element clicked
        let target = $(e.target);
        // check if clicked element is close edit form button
        if(target.hasClass('close-form')) {
            target.parent().parent().slideUp();

            formOpen = false;
        }
        // when you click a grey button
        else if(target.hasClass('.grey-button.buttons')) {
            alert('Sorry, you must log in to do this');
        }
        // when you press the edit comment button
        else if(target.hasClass('edit-comment')) {
            let textarea = target.parent().siblings('textarea');
            let edited_comment = textarea.val();
            let user_id = target.parent().siblings('input').attr('value');
            let comment_id = target.attr('id');


            if (edited_comment.length === 0 || edited_comment === " " || edited_comment === "  " || edited_comment === "   ") {
                alert('cant be empty');
            } else {
                // call PostController with all data (goes from here to web.php, then to the controller)
                $.ajax({
                    url: '/CAKE/public/posts/comment/' + comment_id,
                    type: 'put',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: {
                        comment_id: comment_id,
                        user_id: user_id,
                        body: edited_comment
                    },
                    success: function(response) {
                        let current_post = target.parent().parent().siblings('.comment-words').children('.comment-body');

                        // change the words in text area, slide up form, and change the post body
                        current_post.text(edited_comment);
                        textarea.val(edited_comment);
                        target.parent().parent().slideUp();

                    },
                    error: function (xhr, status, error) {
                        console.log(status + " = " + error);
                    }
                });
            }

        }
        // when they click delete post button
        else if(target.hasClass('delete-post')) {
            // get comment id
            let post_id = target.attr('id');

            $.ajax({
                url: '/CAKE/public/posts/' + post_id,
                type: 'delete',
                data: {post_id: post_id},
                success: function (response) {
                    // hide from view
                    target.parent().parent().parent().parent().parent().slideUp();
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });

        }
        // when they click the edit post button
        else if(target.hasClass('edit-post')) {
            // get info
            let textarea = target.parent().siblings('textarea');
            let edited_post = textarea.val();
            let user_id = target.parent().siblings('input').attr('value');
            let post_id = target.attr('id');



            if (edited_post.length === 0 || edited_post === " " || edited_post === "  " || edited_post === "   ") {
                alert('cant be empty');
            } else {

                // info to fake change the post body
                let current_post = target.parent().parent().siblings('.post-body');
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
                    success: function() {
                        // delete words in text area, slide up form, and fake change the post body
                        current_post.text(edited_post);
                        textarea.val(edited_post);
                        target.parent().parent().slideUp();

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
            let post_id = target.parent().siblings('.post-id').attr('value');
            let user_id = target.parent().siblings('.user-id').attr('value');

            if(comment_body.val().length === 0 || comment_body.val() === " " || comment_body.val() === "  " || comment_body.val() === "   ") {
                alert('cant be empty');
            } else {
                // call PostCommentController with all data (goes from here to web.php, then to the controller)
                $.ajax({
                    url: '/CAKE/public/posts/comment',
                    type: 'post',
                    data: {
                        user_id: user_id,
                        post_id: post_id,
                        body: comment_body.val()
                    },
                    success: function(response) {
                        // select element to place the fake comment into
                        let comments = target.parent().parent().siblings('.comments');

                        let template = require('../views/templates/comment/comment-edit-delete.hbs');

                        $(template({
                            comment_author: comment_name,
                            comment_body: response.body,
                            comment_id: response.id,
                            comment_avatar: response.avatar
                        })).appendTo(comments);
                        comment_body.val('');
                    },
                    error: function() {
                        console.log('error');
                        // alert('Sorry, this post no longer exists.');
                        // // hide from view
                        // target.parent().parent().parent().slideUp();
                    }
                });
            }
        }
        // check if any forms are open
        else if (formOpen === true) {
            //alert('Please close form before trying to open another.');
        }
        // if they click the edit form burron
        else if ((target.hasClass('edit-button'))) {

            let template = require('../views/templates/edit_post_form.hbs');
            let post_body = target.parent().parent().parent().siblings('.post-body').text();
            let post_id = target.attr('id');
            let post_words = target.parent().parent().parent().parent();

            // if theres already a form delete it
            if(post_words.children('form')) {
                post_words.children('form').remove();
            }

            $(template({user_id: window.user_info.user_id, edit_body: post_body, edit_id: post_id, edit_type: 'post'})).hide().appendTo(post_words).slideDown();

        }
        // if they click the comment form button
        else if (target.hasClass('comment-button')) {
            let template = require('../views/templates/comment_post_form.hbs');
            let post_body = target.parent().siblings('.post-body').text();
            let post_id = target.attr('id');
            let post = target.parent().parent().parent();

            // if theres already a form delete it
            if(post.children('form')) {
                post.children('form').remove();
            }

            $(template({user_id: window.user_info.user_id, post_body: post_body, post_id: post_id})).hide().appendTo(post).slideDown();

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
                    target.parent().parent().parent().slideUp();
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });

        }
        // if they click the show comments button
        else if (target.hasClass('show-comments')) {
            // php will show the button if there are more than 3 comments
            // every comment after will have class 'hide-comment'

            // slide up or down the rest of the comments
            let show_comments = target;
            let extra_comments = show_comments.siblings('.extra-comments');

            if(extra_comments.is(':visible')) {
                extra_comments.slideUp();
                show_comments.text(`Show more comments`);
            } else {
                extra_comments.slideDown();
                show_comments.text(`Hide more comments`);
            }




        }
        // when you click on the like button
        else if (target.hasClass('like')) {

            // gather info
            let post_id = target.attr('id');
            let likes = target.siblings('.like-counter');
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
                error: function() {
                    alert('Sorry, this post no longer exists.');
                    // hide from view
                    target.parent().parent().parent().slideUp();
                }
            });
        }
        // when you click on the unlike button
        else if (target.hasClass('unlike')) {
            // gather info
            let post_id = target.attr('id');
            let likes = target.siblings('.like-counter');
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
                error: function() {
                    alert('Sorry, this post no longer exists.');
                    // hide from view
                    target.parent().parent().parent().slideUp();
                }
            });
        }
        // when you click edit comment button
        else if(target.hasClass('comment-edit-button')) {
            let template = require('../views/templates/edit_post_form.hbs');
            let comment_body = target.parent().parent().siblings('.comment-words').children('.comment-body').text();
            let comment_id = target.attr('id');
            let comment = target.parent().parent().parent();

            // if theres already a form delete it
            if(comment.children('form')) {
                comment.children('form').remove();
            }

            $(template({user_id: window.user_info.user_id, edit_body: comment_body, edit_id: comment_id, edit_type: 'comment'})).appendTo(comment).hide().slideDown();
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
                    let template = require('../views/templates/post/post-like-comment-edit-delete.hbs');
                    $(template({post_author: user_name, post_body: response.body, post_id: response.id, post_likes: '0', post_avatar: response.avatar})).prependTo($('#posts'));

                    // clear the textarea
                    textarea.val('');

                },
                error: function(xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }
    });


    // drawing all posts
    let getEveryPost = {};
    let user_name = $('#whos-logged-in').text();
    let user_role = $('#user-role').text();
    let user_id = $('#whos-logged-in').attr('class');
    let posts = $('#posts');

    $.ajax({
        url: '/CAKE/public/posts/allPosts',
        type: 'get',
        data: {},
        success: function (response) {

            // object of each post
            getEveryPost = $.parseJSON(response);

            console.log(getEveryPost);


            getEveryPost.forEach(function(post) {

                // if they're not logged in, display posts-none
                if(user_name === 'none') {
                    let template = require('../views/templates/post/post-none.hbs');
                    $(template({post_author: post.author, post_body: post.body, post_id: post.id, post_likes: post.post_likes, post_avatar: post.avatar})).prependTo(posts);

                    // if they are admin or if its their post
                } else if(user_role == '1' || user_id == post.user_id) {
                    let template = require('../views/templates/post/post-like-comment-edit-delete.hbs');
                    $(template({post_author: post.author, post_body: post.body, post_id: post.id, post_likes: post.post_likes, has_liked: post.has_liked, post_avatar: post.avatar})).prependTo(posts);

                // if they are logged in but its not their post and they arent admin
                } else if(user_name != 'none') {
                    let template = require('../views/templates/post/post-like-comment.hbs');
                    $(template({post_author: post.author, post_body: post.body, post_id: post.id, post_likes: post.post_likes, has_liked: post.has_liked, post_avatar: post.avatar})).prependTo(posts);
                }

                let post_comments = post.comments;
                let comments = $('.post.' + post.id).children('.comments');

                // for each post.comments
                post_comments.forEach(function(comment) {
                    if(user_role == '1' || user_id == comment.user_id) {

                        let template = require('../views/templates/comment/comment-edit-delete.hbs');
                        $(template({
                            comment_author: comment.author,
                            comment_body: comment.body,
                            comment_id: comment.id,
                            comment_avatar: comment.avatar
                        })).appendTo(comments);
                    } else {
                        let template = require('../views/templates/comment/comment-none.hbs');
                        $(template({
                            comment_author: comment.author,
                            comment_body: comment.body,
                            comment_id: comment.id,
                            comment_avatar: comment.avatar
                        })).appendTo(comments);
                    }
                });
            });
        },
        error: function (xhr, status, error) {
            console.log(status + " = " + error);
        }
    });

});