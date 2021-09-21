// Скрыть/показать меню
function showHideMenu() {
    var body = $('body');
    if ($("#menu.show").length) {
        body.addClass('body-menu-opened');
    } else {
        body.removeClass('body-menu-opened');
    }
}

$("#open-menu, #menu-hide").click(function () {
    $("#menu").toggleClass('show');
    showHideMenu();
});

$(document).mouseup(function (e) {
    var menu = $("#menu");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('show');
        showHideMenu();
    }
});

// Меню проекты в мобильной версии

$(document).on("click", ".menu-link-project .menu__tab", function (e) {
    if (!$('.menu__center:visible').length) {
        e.preventDefault();
        $("#menu").toggleClass('menu--projects');
    }
});


// Фиксированное меню при прокрутке
$(window).on("scroll", function () {
    // Если высота больше 0
    // Добавляем классу header класс header--fixed
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('header--fixed');
    } else {
        $('.header').removeClass('header--fixed');
    }
});

// slick слайдер двойной недвижимость
if ($('.realty-item__slider-for').length) {
    $('.realty-item__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.realty-item__slider-nav'
    });
    $('.realty-item__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.realty-item__slider-for',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });
}
// slick слайдер двойной О компании
if ($('.company__slider-for').length) {
    $('.company__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.company__slider-nav'
    });
    $('.company__slider-nav').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        asNavFor: '.company__slider-for',
        arrows: true,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 9
            }
        },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}
// slick слайдер одинарный главная новости
if ($('.last-news__cards').length) {
    $('.last-news__cards').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

// slick слайдер ПАРТНЕРЫ

function insertCountSliderPartners() {
    var activeSlider = $('.tab-pane.active .partners__cards');
    var sliderPartnersCount = $('.partners__count');
    var currentSlide = activeSlider.slick('slickCurrentSlide') + 2;
    var allCountSlide = activeSlider.slick("getSlick").slideCount;
    $('#partnersCurrentSlide').text((currentSlide > allCountSlide ? allCountSlide : currentSlide) + ' ');
    $('#partnersAllSlide').text(' ' + allCountSlide);
    if (activeSlider.find('.slick-prev').length) {
        sliderPartnersCount.show();
    } else {
        sliderPartnersCount.hide();
    }
}

function initSliderPartners() {
    var activeSlider = $('.tab-pane.active .partners__cards');
    if (!$('.tab-pane.active .slick-list').length) {
        activeSlider.slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        insertCountSliderPartners();

        activeSlider.on("afterChange", function () {
            insertCountSliderPartners();
        });

    } else {
        insertCountSliderPartners();
        activeSlider.slick('refresh');
    }
}

if ($('.partners__cards').length) {
    initSliderPartners();

    $(document).on("shown.bs.tab", ".partners__tabs .nav-tabs__tab", function () {
        initSliderPartners();
    });
}


//Паркинг tooltip переключение
$(document).on("click", ".parking-place__item:not(.parking-place__item--title)", function () {
    var parkingLength = $(this).attr('data-length') + " м.";
    var parkingWidth = $(this).attr('data-width') + " м.";
    var parkingPrice = $(this).attr('data-price') + " Р.";
    $('.parking-place__item').removeClass("parking-place__item--tooltip");
    $(this).addClass("parking-place__item--tooltip");
    $(this).append($("#parking-tooltip"));
    $("#tooltip-length").text(parkingLength);
    $("#tooltip-width").text(parkingWidth);
    $("#tooltip-price").text(parkingPrice);
});

$(document).on("click", function (e) {
    var tooltip = $(".parking-place__item");
    if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
        tooltip.removeClass('parking-place__item--tooltip');
    }
});

$(document).on("click", ".parking-place__item--title", function (e) {
    $('.parking-place__row--active').removeClass('parking-place__row--active')
    $(this).closest('.parking-place__row').addClass('parking-place__row--active')
});

// Постраничная прокрутка

let wrapper = document.querySelector('.wrapper');

if (wrapper) {
    var configPageSlider = {
        // Свои классы
        wrapperClass: "page__wrapper",
        slideClass: "page__screen",

        // Вертикальный слайдер
        direction: 'vertical',

        // Количество слайдов для показа
        slidesPerView: 'auto',

        // Включаем параллакс
        parallax: true,


        // Управление клавиатурой
        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },

        simulateTouch: false,

        // Управление колесом мыши
        mousewheel: {
            // Чувствительность колеса мыши
            sensitivity: 1,
            // Класс объекта на котором
            // будет срабатывать прокрутка мышью.
            //eventsTarget: ".image-slider"
        },

        // Отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,

        // Скорость
        speed: 800,

        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        // Навигация
        // Буллеты, текущее положение, прогрессбар
        pagination: {
            el: '.page__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: "page__bullet",
            bulletActiveClass: "page__bullet_active",
        },
        // Скролл
        scrollbar: {
            el: '.page__scroll',
            dragClass: "page__drag-scroll",
            // Возможность перетаскивать скролл
            draggable: true
        },

        // Отключаем автоинициализацию
        init: false,

        // События
        on: {
            // Событие инициализации
            init: function () {
                wrapper.classList.add('_loaded');
            },
        },
    }

    var pageSlider = false;

    function initOrDestroyPageSlider() {
        if (window.innerWidth < 767 || window.innerHeight < 767) {
            $('body').addClass('body-free');
            wrapper.classList.add('_free');
            if (pageSlider) {
                pageSlider.destroy()
                pageSlider = false
            }
        } else {
            $('body').removeClass('body-free');
            wrapper.classList.remove('_free');
            if (!pageSlider) {
                pageSlider = new Swiper('.page', configPageSlider)
                pageSlider.init()
            }
        }
    }

    initOrDestroyPageSlider();

    window.addEventListener(`resize`, function (e) {
        initOrDestroyPageSlider();
    });
}


// Маска на input
if ($('input[name=phone]').length) {
    $(function () {
        $('input[name=phone]').mask("+7 (999) 999-99-99");
    });
}

// Активный пункт меню
$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
    console.log(location);
    console.log(cur_url);
    $('.menu li').each(function () {
        var link = $(this).find('a').attr('href');
        if (cur_url == link) {
            $(this).addClass('menu__tab--active');
        }
    });
});