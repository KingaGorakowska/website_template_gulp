(function ($) {
  
    //start plugins
    $.fn.customecss = function (options){
        this.css('background-color', options.style);
        return this;
    }

    //end plugins
    
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

        var button = $('button');
        button.on('mouseover', function(e){
            $(e.target).customecss({style: "rgb(255, 193, 7)"});
        });
        button.on('mouseout', function(e){
            $(e.target).customecss({style: "#4caf50"});
        });

         // Using inViewport plugin - return the visible amount of px of any element currently in viewport
         (function($, win) {
            $.fn.inViewport = function(cb) {
               return this.each(function(i,el){
                 function visPx(){
                   var H = $(this).height(),
                       r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                   return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
                 } visPx();
                 $(win).on("resize scroll", visPx);
               });
            };
        }(jQuery, window));
          
        //Animation section
        setupAnimations();
        runAnimations();

        function setupAnimations(){
            $('h2').addClass('animate__animated opacity0');
            $('p').addClass('animate__animated opacity0');
            $('#introduction img').addClass('animate__animated opacity0');
            $('#portfolio img').addClass('animate__animated opacity0');
         
        }

        function runAnimations(){
            $('.animate__animated').each(function(){
                $(this).inViewport(function(px){
                    if(px) $(this).addClass("opacity1 animate__fadeIn").removeClass("opacity0") ;
                });
            });
        }
   
    });

})(jQuery);




