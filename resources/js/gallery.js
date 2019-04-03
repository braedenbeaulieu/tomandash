$(document).ready(function() {










    // error handling
    let error_message = $('<p></p>').attr('class', 'error-message').hide();
    let hasImageSelected = false;
    let hasDescription = false;

    // if you click the submit button and its type is button
    $('.upload-image-submit').on('click', function() {
        // if ($('.error-message')) {
        //     error_message.fadeOut();
        // }
        if($(this).attr('type') === 'button') {
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
    });

    // when you arent logged in
    $('.cant-upload').on('click', function() {
        error_message.text('You must log in to upload an image.').appendTo($('.cant-upload').parents()).hide().fadeIn();
    });

    // when you click the upload image in the modal to find an image, check if theres an image there
    $('.upload-image-container').on('click', function() {
        hasImageSelected = true;

        // check if both things are true
        if(hasDescription === true && hasImageSelected === true) {
            $('.upload-image-submit').attr('type', 'submit');
            console.log('button unlocked');
        } else {
            console.log('button locked');
        }
    });

    // when they click off of textarea, check if it's populated
    $('.image-description').on('blur', function() {
        if(!$(this).val()) {
           hasDescription = false;
        } else {
            hasDescription = true;
        }
        // check if both things are true
        if(hasDescription === true && hasImageSelected === true) {
            $('.upload-image-submit').attr('type', 'submit');
            console.log('button unlocked');
        } else {
            console.log('button locked');
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

        if (filterName === "all") {
            $('.d-none').show().removeClass('d-none');
            $('.picture a').attr('data-lightbox','gallery');
            $grid.masonry('layout');
        }
        else {
            $('.picture').each(function() {
                if(!$(this).hasClass(filterName)){
                    $(this).hide().addClass('d-none');
                    $(this).find('a').attr('data-lightbox', '');

                }
                else {
                    $(this).show().removeClass('d-none');
                    $(this).find('a').attr('data-lightbox', 'gallery');
                    $grid.masonry('layout');
                }
            });
        }
        return(false);
    });

});
