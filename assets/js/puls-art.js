const PULS_ART = {
    scrollToTopButton: $("#myBtn_arrow"),
    darkThemeTogglerCheckbox: $("#darkThemeToggler"),

    initSplide: function () {
        var splide = new Splide('.splide', {
            type: 'loop',
            arrows: false,
            pagination: false,
            speed: 8000,
            wheel: true,
            autoplay: true,
            mediaQuery: 'min',
            perPage: 1,
            breakpoints: {
                500: {
                    perPage: 2,
                    arrows: true,
                    pagination: true,
                },
                800: {
                    perPage: 3,
                },
                1600: {
                    perPage: 5,
                },
            },
            classes: {
                pagination: 'splide__pagination slider__indicators', // container
                page: 'splide__pagination__page indicator', // each button
            },

        });
        splide.mount();
    },

    initScrollToTopButton: function () {
        const self = this;
        this.scrollToTopButton.css('display', 'none');

        this.scrollToTopButton.on('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })

        const scrollToTop = () => {
            const width = $(window).width()
            if (width >= 640) {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    self.scrollToTopButton.css('display', 'block');
                } else {
                    self.scrollToTopButton.css('display', 'none');
                }
            } else {
                self.scrollToTopButton.css('display', 'none');
            };
        }

        $(window).on('resize', function () {
            scrollToTop()
        });
        $(window).on('scroll', function () {
            scrollToTop()
        });
    },

    initDarkThemeToggler: function () {
        this.darkThemeTogglerCheckbox.on('change', function () {
            document.body.classList.toggle("whiteTheme");
        })
    },

    initializeWow: function() {
        new WOW().init();
    },

    initialize() {
        this.initSplide();
        this.initScrollToTopButton();
        this.initDarkThemeToggler();
        //this.initializeWow();
    }
}


// $(window).load(function () {
//     var preloader = $("#preloader");
//     alert('window is loaded');
//     console.log('window is loaded')
//     preloader.toggleClass('.hidden')

// })


$(window).on("load", function () {
    var preloader = $("#preloader");
    // alert('window is loaded');
    // console.log('window is loaded');
    preloader.toggleClass('hidden')
})


$('.head').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.content').slideToggle(280);
})

// icon from Font Awesome was used in accordion-1

$(document).ready(function () {
    setTimeout(() => {
        PULS_ART.initialize()
    }, 100)
});