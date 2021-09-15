$(document).ready(function () {
    $('.header__burger, .header__link').click(function (event) {
        $('.header__burger,.header__menu, .header__link').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$('.drop__language').click(function (event) {
    $('.drop__language, .drop__language__content').toggleClass('show');

});

window.onclick = function (event) {
    if (!event.target.matches('.drop__language__btn')) {
        var dropdowns = document.getElementsByClassName("drop__language__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


$(function () {
    $("#phone").mask("+7(999) 999-9999");
});


$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});