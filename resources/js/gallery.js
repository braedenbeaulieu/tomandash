$(document).ready(function() {


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
