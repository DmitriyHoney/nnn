$(document).ready(function(){
    $('.news-main-card__slider').slick({
        slidesToShow: 2,
        arrows: true,
        dots: true,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
        ],
    });
    $('.links-section__slider').slick({
        slidesToShow: 4,
        arrows: true,
        dots: true,
        responsive: [
            {
              breakpoint: 980,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                  slidesToShow: 1,
                },
              },
        ],
    });
});