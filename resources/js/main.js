$(document).ready(function () {

    // found on the internet https://stackoverflow.com/questions/39350918/how-to-delete-record-in-laravel-5-3-using-ajax-request
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // when they click post
    // $('.post-button').on('click', function () {
    //
    //     let id = $(this).attr('id');
    //     $.ajax({
    //         url: '/cake/public/posts/create',
    //         type: 'get',
    //         data: {post: post},
    //         success: function (data) {
    //             if (data == 'commented') {
    //
    //                 $('#comment-body').val("");
    //
    //             }
    //         },
    //         error: function (xhr, status, error) {
    //             console.log(status + " = " + error);
    //         }
    //     });
    // });

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

        // when they click the create comment button
        else if(target.hasClass('create-comment')) {
            // gather info for database
            let comment_name = $('#whos-logged-in').text();
            let comment_body = target.parent().parent().children('.comment-body');
            let post_id = target.parent().parent().children('.post-id').attr('value');
            let user_id = target.parent().parent().children('.user-id').attr('value');

            // create fake comment to show so we wont have to refresh the page
            let fake_comment = $('<div></div>').attr('class', 'comment'); // comment container
            let fake_comment_img = $('<img>').attr({class: 'comment-pic', src: 'https://fillmurray.com/50/50'});
            let fake_comment_words = $('<div></div>').attr('class', 'comment-words');
                let fake_comment_name = $('<p></p>').attr('class', 'comment-name').text(comment_name);
                let fake_comment_body = $('<p></p>').attr('class', 'comment-body').text(comment_body.val());
            let fake_delete_comment_container = $('<form></form>').attr('class', 'delete-comment-container');
                let fake_delete_comment = $('<input>').attr({class: 'delete-comment', id: post_id, type: 'button', value: 'Delete'});

            // put it all together
            fake_comment_words.append(fake_comment_name, fake_comment_body);
            fake_delete_comment_container.append(fake_delete_comment);
            fake_comment.append(fake_comment_img, fake_comment_words, fake_delete_comment_container);

            // select element to place it all in to
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
                success: function(response) {
                    console.log(response);
                    // plant the fake comment, slide the form up and delete the words inside the form
                    comments.prepend(fake_comment);
                    target.parent().parent().slideUp();
                    comment_body.val('');
                },
                error: function(xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }










        // check if any forms are open
        else if (formOpen === true) {
            //alert('Please close form before trying to open another.');

            // check if clicked element is edit button
        } else if ((target.hasClass('edit-button') && formOpen === false)) {
            edit_form.slideDown();
            formOpen = true;

            // if they click the comment form button
        } else if (target.hasClass('comment-button') && formOpen === false) {
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
            let like = target;
            let post_id = target.attr('id');
            let likes = like.parent().parent().children('.like-counter');

            // call PostLikeController with all data (goes from here to web.php, then to the controller)
            $.ajax({
                url: '/CAKE/public/posts/like',
                type: 'post',
                data: {post_id: post_id},
                success: function() {
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

            // call PostLikeController with all data (goes from here to web.php, then to the controller)
            $.ajax({
                url: '/CAKE/public/posts/like/' + post_id,
                type: 'delete',
                data: {post_id: post_id},
                success: function() {
                    likes.text(parseInt(likes.text()) - 1);
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
        }
    });

});