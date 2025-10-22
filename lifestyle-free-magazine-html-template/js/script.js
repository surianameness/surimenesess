(function ($) {

    "use strict";

    // ------------------------------------------------------------------------------ //
    // get path relative to javascript
    // ------------------------------------------------------------------------------ //


    var $html = $("html"),
        windowWidth = $(window).width(),
        windowHeight = $(window).height();

    // init Chocolat light box
    var initChocolat = function () {
        Chocolat(document.querySelectorAll('.image-link'), {
            imageSize: 'contain',
            loop: true,
        })
    }

    var initScrollNav = function () {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
  
          if (scroll >= 200) {
            $('.navbar').addClass("bg-white");
          } else {
            $('.navbar').removeClass("bg-white");
          }
        });
      }

    $(document).ready(function () {

        initScrollNav();

        initChocolat();


        AOS.init({
            duration: 1200,
        })

    });

    window.addEventListener("load", (event) => {
        //isotope
        $('.isotope-container').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry'
        });

        // Initialize Isotope
        var $container = $('.isotope-container').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry'
        });

        $(document).ready(function () {
            //active button
            $('.filter-button').click(function () {
                $('.filter-button').removeClass('active');
                $(this).addClass('active');
            });
        });

        // Filter items on button click
        $('.filter-button').click(function () {
            var filterValue = $(this).attr('data-filter');
            if (filterValue === '*') {
                // Show all items
                $container.isotope({ filter: '*' });
            } else {
                // Show filtered items
                $container.isotope({ filter: filterValue });
            }
        });
    });




    // Responsive Navigation with Button

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }


})(jQuery);
