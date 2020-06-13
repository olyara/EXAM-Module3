$(document).ready(function () {
    $(".intro-header__item-link, .intro__scroll, .intro__more").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset();
        $("body,html").animate({ scrollTop: destination.top }, 1000);
    });

    $(".js-featured-carousel").slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".js-testimonials-carousel").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
    });

    $(".js-accordeon .faq-accordeon__head").click(function () {
        let is_visible = $(this).next(".faq-accordeon__body").is(":visible");
        $(this)
            .closest(".js-accordeon")
            .find(".faq-accordeon__body")
            .each(function () {
                if ($(this).is(":visible")) {
                    $(this).slideUp();
                }
            });
        if (!is_visible) {
            $(this).next(".faq-accordeon__body").slideToggle();
        }
        $(this).find(".faq-accordeon__head-plus").toggleClass("rotate");
    });

    // TABS
    $(".js-what").click(function () {
        $(".about__product-tab1").show();
        $(".about__product-tab2").hide();
        $(".about__product-tab3").hide();

        $(".js-what").addClass("active-tab");
        $(".js-benefits").removeClass("active-tab");
        $(".js-diff").removeClass("active-tab");
    });

    $(".js-benefits").click(function () {
        $(".about__product-tab1").hide();
        $(".about__product-tab2").show();
        $(".about__product-tab3").hide();

        $(".js-what").removeClass("active-tab");
        $(".js-benefits").addClass("active-tab");
        $(".js-diff").removeClass("active-tab");
    });

    $(".js-diff").click(function () {
        $(".about__product-tab1").hide();
        $(".about__product-tab2").hide();
        $(".about__product-tab3").show();

        $(".js-what").removeClass("active-tab");
        $(".js-benefits").removeClass("active-tab");
        $(".js-diff").addClass("active-tab");
    });
    // TABS


});