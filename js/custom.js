$(document).ready(function () {
    //   slick sliders
    $('.campaign-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        // centerMode: true,
        // centerPadding: '80px',
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1266,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    // header styling
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');

    });
    // header nav active class
    window.addEventListener("load", function () {
        console.log(window.location.pathname)
        let PageUrl = window.location.pathname;
        let navItems = this.document.getElementById('aboutUs')
        console.log(navItems)
        if (PageUrl == "/about.html") {
            navItems.classList.toggle("active")
        }
    });

    AOS.init();
    AOS.init({
        disable: function () {
            var maxWidth = 991;
            return window.innerWidth < maxWidth;
        }
    });
    // scroll js
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 40) {
            $("header").addClass("header-fixed");
        }
        else {
            $("header").removeClass("header-fixed");
        }
    })

    //  js for banner Animations
    var textWrapper = document.querySelector('.banner-title');
    var i = 0;
    var txt = textWrapper.innerHTML
    var speed = 50;
    var wCount = 0;
    document.getElementsByClassName("banner-title")[0].innerHTML = ""

    txt = txt.trim()

    function typeWriter() {
        if (i < txt.length) {
            document.getElementsByClassName("banner-title")[0].innerHTML += txt.charAt(i);
            i++;
            if (txt.charAt(i) == " ") {
                wCount++;
            }


            setTimeout(typeWriter, speed);
        }

    }
    typeWriter()


})