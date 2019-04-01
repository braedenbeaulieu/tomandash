$(document).ready(function() {
    $('ul#filter a').click(function() {

        let filterName = $(this).text().toLowerCase().replace(' ', '-');

        if (filterName == "all") {
            $('ul#gallery li.hidden').fadeIn(1).removeClass('hidden');
            $('ul#gallery li a').attr('data-lightbox','gallery');
        }
        else {
            $('ul#gallery li').each(function() {
                if(!$(this).hasClass(filterName)){
                    $(this).fadeOut(1).addClass('hidden');
                    $(this).find('a').attr('data-lightbox', '');
                }
                else {
                    $(this).fadeIn(1).removeClass('hidden');
                    $(this).find('a').attr('data-lightbox', 'gallery');
                }
            })
        }
        return(false);
    })

});
