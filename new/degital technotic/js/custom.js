// campaign-slider js start
$(document).ready(function() {});
// campaign-slider js end

// $(document).ready(function() {
//     // Enter num from and to
//     $({
//         countNum: 0
//     }).animate({
//         countNum: 101
//     }, {
//         duration: 2000,
//         easing: "linear",
//         step: function() {
//             $(".count").text(Math.floor(this.countNum) + "%");
//         },
//         complete: function() {
//             setTimeout(function() {
//                 $("#counter").fadeOut();
//             }, 500)
//         },
//     });
//     // for mobile 
//     $('.mobile-x').click(function() {
//         $('.ul-wrapper').removeClass('collapse show')
//     })
// });


// //   slick sliders
// $('.ourTeam-slider-wrapper').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: true,
//     responsive: [{
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 infinite: true,
//             }
//         },
//     ]
// });
// $('.footer-slider-wrapper').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });

// $('.client-slider-wrapper').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//             infinite: true,
//         }
//     }, ]
// });
// //   for isotopes
// (function($) {
//     // Code Here

//     /*----------------------------------------
//         Isotope Masonry
//     ------------------------------------------*/
//     function isotopeMasonry() {
//         $(".isotope-gutter").isotope({
//             itemSelector: '.box',
//             percentPosition: true
//         });
//         $(".isotope-no-gutter").isotope({
//             itemSelector: '.box',
//             percentPosition: true,
//             masonry: {
//                 columnWidth: 1
//             }
//         });

//         $(".filter a").on("click", function() {
//             $(".filter a").removeClass("active");
//             $(this).addClass("active");
//             // portfolio fiter
//             var selector = $(this).attr("data-filter");
//             $(".isotope-gutter").isotope({
//                 filter: selector,
//                 animationOptions: {
//                     duration: 750,
//                     easing: "linear",
//                     queue: false
//                 }
//             });
//             return false;
//         });
//     }

//     $(window).on("load", function() {
//         isotopeMasonry();
//     });
// })
// (jQuery);