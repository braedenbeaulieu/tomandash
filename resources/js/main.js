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


    // check if they've clicked edit because we will want to only show one edit at a time
    let alreadyClickedEdit = false;
    // hide all forms at first so we can slide in when needed
    $('.edit-form').hide();

    // when they click a button on their post
    $('#posts').on('click', function(e) {

        // get element clicked
        let target = $(e.target);

        // get current edit form
        let edit_form = target.parent().parent().parent().find('.edit-form');

        // check if clicked element is close edit form button
        if(target.hasClass('close-edit-form')) {
            target.parent().slideUp();
        // check if clicked element is edit button
        } else if((target.hasClass('edit-button') && alreadyClickedEdit === false)) {
            // get all post information
            let post_id = target.attr('id');
            let post_user_id = target.parent().parent().find('.author').attr('id');
            let post_body = target.parent().parent().find('#post-body').text();
            console.log(`${post_id} ${post_user_id} ${post_body}`);
            edit_form.slideDown();


        // if they click the comment button
        } else if(target.hasClass('comment-button')) {

        }
    })
});