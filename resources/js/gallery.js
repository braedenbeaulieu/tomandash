$(document).ready(function() {
    // error handling
    let error_message = $('<p></p>').attr('class', 'error-message').hide();
    let hasImageSelected = false;
    let hasDescription = false;
    let hasTags = false;

    // if you click the submit button and its type is button
    $('.upload-image-submit').on('click', function() {
        if($(this).attr('type') === 'button') {
            // if hasTags is false send error
            if(hasTags === false) {
                error_message.text('You must select at least one tag.').appendTo($('.tags-container')).hide().fadeIn();
            }
            // if hasImageSelected is false send error
            if(hasDescription === false) {
                error_message.text('You must write an image description.').appendTo($('.description-image')).hide().fadeIn();
            }
            // if hasImageSelected is false send error
            if(hasImageSelected === false) {
               error_message.text('You must select an image.').appendTo($('.upload-image-container')).hide().fadeIn();
            }
        }
    });

    // everytime you go to upload an image set these to false
    $('.upload-image-button').on('click', function() {
        hasImageSelected = false;
        hasDescription = false;
        hasTags = false;
    });

    // when you arent logged in
    $('.cant-upload').on('click', function() {
        error_message.text('You must log in to upload an image.').appendTo($('.cant-upload').parent()).hide().fadeIn();
    });

    // when you click the upload image in the modal to find an image, check if theres an image there
    $('.upload-image-container').on('click', function() {
        hasImageSelected = true;

        // check if both things are true
        if(hasDescription === true && hasImageSelected === true && hasTags === true) {
            $('.upload-image-submit').attr('type', 'submit');
        }
    });

    // when they click off of textarea, check if it's populated
    $('.image-description').on('blur', function() {
        if($(this).val()) {
            hasDescription = true;
        }

        // check if both things are true
        if(hasDescription === true && hasImageSelected === true && hasTags === true) {
            $('.upload-image-submit').attr('type', 'submit');
        }
    });

    // when they select a tag
    $('.tags-container').on('click', function(e) {
        if($(e.target).prop("checked") === true) {
            hasTags = true;
        } else if($(e.target).prop("checked") === false) {
            hasTags = false;
        }

        // check if both things are true
        if(hasDescription === true && hasImageSelected === true && hasTags === true) {
            $('.upload-image-submit').attr('type', 'submit');
        }
    });
    // masonry stuff
    let $grid = $('.grid').imagesLoaded( function() {
        // init Masonry after all images have loaded
        $grid.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });

    // dealing with tags
    $('#filter a').on('click', function(e) {


        // get the li
        let target = $(e.target).parents();
        // turn on highlight
        target.addClass('highlight');

        // if any other sibling has the class
        if(target.siblings().hasClass('highlight')) {
            // remove it
            target.siblings().removeClass('highlight');
        }

        let filterName = $(this).text().toLowerCase().replace(' ', '-');

        // show the edit and delete buttons we hid
        if (filterName === "all") {
            $('.d-none').show().removeClass('d-none');
            $('.picture a').attr('data-lightbox','gallery');
            $('.edit-delete-image').show();

            $grid.masonry('layout');
        }
        else {
            $('.picture').each(function() {
                // if doesnt have the class of the filtername
                if(!$(this).hasClass(filterName)){
                    // hide the element and hide the edit and delete button
                    $(this).hide().addClass('d-none');

                    $(this).siblings('.edit-delete-image').hide();
                    // find the a and make the lightbox = ''
                    $(this).find('a').attr('data-lightbox', '');

                }
                // if it does
                else {
                    // remove the class
                    $(this).siblings('.edit-delete-image').show();
                    $(this).show().removeClass('d-none');
                    $(this).find('a').attr('data-lightbox', 'gallery');
                    // reset the grid
                    $grid.masonry('layout');
                }
            });
        }
        return(false);
    });

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    // AJAX for edit and delete image
    $('.grid').on('click', function(e) {
        let target = $(e.target);
        if(target.hasClass('delete-image-button')) {
            let image_id = target.parent().parent().parent().attr('id');
            console.log('delete button ' + image_id);
            $.ajax({
                url: '/CAKE/public/gallery/' + image_id,
                type: 'delete',
                data: {image_id: image_id},
                success: function() {
                    target.parent().parent().parent().hide().addClass('d-none');
                    $grid.masonry('layout');
                },
                error: function (xhr, status, error) {
                    console.log(status + " = " + error);
                }
            });
            $grid.masonry('layout');
        }
    });

});
