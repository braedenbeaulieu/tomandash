$(document).ready(function () {
    // when they click post
    $('.post-button').on('click', function() {

        let id = $(this).attr('id');
        $.ajax({
            url: '/cake/public/posts/create',
            type: 'get',
            data: {post: post},
            success: function(data) {
                if(data == 'commented') {

                    $('#comment-body').val("");

                }
            },
            error: function(xhr, status, error) {
                console.log(status + " = " + error);
            }
        });
    });

    // to check if they have a form open
    let formOpen = false;

    // hide all forms at first so we can slide in when needed
    $('.edit-form').hide();
    $('.comment-form').hide();

    // hide all comments at first, user has to press show comments button to see.
    $('.comments').hide();
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
        if(target.hasClass('close-form') && formOpen === true) {
            target.parent().parent().slideUp();
            formOpen = false;

        // check if any forms are open
        } else if(formOpen === true) {
            //alert('Please close form before trying to open another.');

        // check if clicked element is edit button
        } else if((target.hasClass('edit-button') && formOpen === false)) {
            edit_form.slideDown();
            formOpen = true;

        // if they click the comment button
        } else if(target.hasClass('comment-button') && formOpen === false) {
            comment_form.slideDown();
            formOpen = true;

        // if they click the delete comment button
        }
        else if(target.hasClass('delete-comment')) {

            // get comment id
            let comment_id = target.attr('comment-id');

            $.ajax({
                url: '/posts/comment/' + comment_id,
                type: 'DELETE',
                success: function(data) {
                    console.log(data);
                },
                error: function(xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });

        }
        // if they click the show comments button
        else if(target.hasClass('show-comments')) {
            let comments = target.parent().children('.comments');
            let showComments = target.parent().children('.show-comments');
            let commentsCount = target.parent().children('.comments-count').text();

            if(slideToggle === false) {
                comments.slideDown();
                slideToggle = true;
                if(commentsCount < 1) {
                    showComments.text(`hide all ${commentsCount} comments`);
                } else if(commentsCount == 1) {
                    showComments.text(`hide comment`);
                }

            } else if(slideToggle === true) {
                comments.slideUp();
                slideToggle = false;
                if(commentsCount < 1) {
                    showComments.text(`show all ${commentsCount} comments`);
                } else if(commentsCount == 1) {
                    showComments.text(`show comment`);
                }
            }
        }
    });

});