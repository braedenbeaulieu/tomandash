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
});