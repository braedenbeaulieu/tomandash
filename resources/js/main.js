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


            // if you clicked like button
        }
        // else if(target.hasClass('like-button')) {
        //
        //     // get like id
        //     let like_id = target.attr('id');
        //
        //     console.log('like click');
        //
        //     $.ajax({
        //         url: '/posts/like/' + like_id,
        //         type: 'POST',
        //         success: function(data) {
        //             console.log(data);
        //             // let likes = $('.like-counter');
        //             // likes.html(parseInt(likes.text()) + 1);
        //         },
        //         error: function(xhr, status, error) {
        //             console.log(status + " = " + error);
        //         }
        //     });
        // }
    });

});