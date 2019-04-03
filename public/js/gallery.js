$(document).ready(function() {



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

    $('#filter a').on('click', function() {

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







    // for masonry stuff
    // if($(window).width() >= 1110) {
    //     $('grid').masonry({
    //         // options
    //         itemSelector: '.grid-item',
    //         columnWidth: 370
    //     });
    // }
    // // $(window).on('resize', function() {
    // //     if($(window).width() >= 960) {
    // //         grid.masonry({
    // //             // options
    // //             itemSelector: '.grid-item',
    // //             columnWidth: 370
    // //         });
    // //     }
    // // });

});
