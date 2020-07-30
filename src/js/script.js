(function ($) {
    'use strict';

    $(document).ready(function() {

        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior
            var target = $(this).attr("href"); // Set the target as variable
            var offset = $(target).offset().top - 60;
            $('html, body').animate({
                scrollTop: offset
            }, 1000);
            location.hash = target;
        });
        
    });


})(jQuery);



