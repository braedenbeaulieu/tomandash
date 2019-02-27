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

    // when they click a button on their post
    // check if they've clicked edit because we will want to only show one edit at a time
    let alreadyClickedEdit = false;
    // hide all forms at first so we can slide in when needed
    $('.edit-form').hide();
    $('#posts').on('click', function(e) {

        // get element clicked
        let target = $(e.target);
        let edit_form = target.parent().parent().parent().find('form');


        // check if clicked element is edit button
        if(target.hasClass('edit-button') && alreadyClickedEdit === false) {
            alreadyClickedEdit = true;
            // get all post information
            let post_id = target.attr('id');
            let post_user_id = target.parent().parent().find('.author').attr('id');
            let post_body = target.parent().parent().find('#post-body').text();
            console.log(`${post_id} ${post_user_id} ${post_body}`);

            edit_form.slideDown();

            // create form with inputs and display it on screen for editing
            // let form = $('<form></form>');
            // let edit_button = $('<input>');
            // let edit_body = $('<input>');
            // let container = target.parent().parent().parent();
            // edit_body.attr({name:'body', type:'text', value:post_body});
            // edit_button.attr({name:'button', type:'button', value:'Make Change'});
            // form.attr({method:'post', action:'https://cake.scweb.ca/CAKE/public/posts', id:'edit-form'});
            // form.append(edit_body, edit_button);
            // form.appendTo(container);
        } else if(target.hasClass('edit-button') && alreadyClickedEdit === true) {
            edit_form.slideUp();
            alreadyClickedEdit = false;
        }
    })
});