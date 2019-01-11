'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // Главный слайдер
        (function(){

            var $slider_wrap  = document.querySelector(".owl-carousel");
            var $slider_video = document.querySelector(".js-video-slide");


            if ($slider_wrap) {
                $($slider_wrap).owlCarousel({
                    items: 1,
                    nav: false,
                    loop: true,
                    margin: 0,
                    autoplay: true,
                    autoplayTimeout: 8000,
                    autoplayHoverPause: true,
                    autoplaySpeed: 1200
                });
            }
            if ($slider_video) {
                $($slider_video).owlCarousel({
                    items: 2,
                    loop: true,
                    margin: 10,
                    video: true,
                    lazyLoad: false,
                });
            }
        })();


        // Toggle item class
        (function() {
            var $triggers = document.querySelectorAll('.js-info-trigger');

            if ($triggers) {
                init();
            }

            function init(argument) {
                for (var i = $triggers.length - 1; i >= 0; i--) {
                    $triggers[i].addEventListener('click', toggleActive);
                }
            }

            function toggleActive() {
                this.parentNode.classList.toggle('is-opened');
            }
        })();

        // Slide up and down
        (function() {
            var $slides = document.querySelectorAll('.js-slide-info');

            if ($slides) {
                init();
                setEvents();
            }

            function init() {
                for (var i = 0; i < $slides.length; i++) {
                    setOffset($slides[i]);
                }
            }

            function setOffset($el) {
                $el.style.marginTop = -$el.offsetHeight + 'px';
            }

            function setEvents() {
                window.addEventListener('resize', init);
            }
        })();


    // var swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 4,
    //   freeMode: true,
    //   loop: true,
    //   breakpoints: {
    //       1280: {
    //         slidesPerView: 3,
    //       },
    //       920: {
    //         slidesPerView: 2,
    //       },
    //       720: {
    //         slidesPerView: 1
    //         }
    //     }
    // });


    // jQuery - Мобильное меню
    // var mobileMenu = (function() {
    //     var $trigger = $('.mobile-menu__arrow');
    //     var animationSpeed = 200;

    //     // Mobile menu
    //     $trigger.on('click', function() {
    //         toggleMenu($(this));
    //     });

    //     function toggleMenu(el) {
    //         var li = el.closest('li');

    //         el.toggleClass('is-active');
    //         li.toggleClass('is-active');

    //         li.children('ul').slideToggle(animationSpeed, function() {
    //             li.children('ul').toggleClass('is-opened');
    //         });
    //     }
    // })();

    // Открытье и закрытье mobile-menu
    // (function(){

    //     var $mobile_open = document.querySelector('.js-mobile-panel-open');
    //     var $mobile_close = document.querySelector('.js-mobile-panel-close');
    //     var $mobile_pane = document.querySelector('.js-mobile-panel');
    //     var $base = document.documentElement;

    //     $mobile_open.addEventListener('click', openPanel);
    //     $mobile_close.addEventListener('click', closePanel);

    //     function openPanel(){
    //         $mobile_pane.classList.add('is-opened');
    //         $base.style.overflow = 'hidden';
    //     };
    //     function closePanel(){
    //         $mobile_pane.classList.remove('is-opened');
    //         $base.style.overflow = '';
    //     };
    // })();
});