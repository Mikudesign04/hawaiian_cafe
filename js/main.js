$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#navi a").on("click", function () {
    $("header").toggleClass("open");
  });
});

$(function () {
  $(".slide-photos").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 500) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

$(window).on("scroll", function () {
  $(".menu1").each(function () {
    const menuTop = $(this).offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > menuTop) {
      $(this).addClass("show");
    }
  });
});
$(function () {
  $(window).on("scroll", function () {
    $(".fade-up").each(function () {
      const target = $(this);

      if (
        target.offset().top <
        $(window).scrollTop() + $(window).height() - 100
      ) {
        target.addClass("show");
      }
    });
  });

  $(window).trigger("scroll");
});
$(function () {
  let heroAnimated = false;

  $(window).on("scroll", function () {
    if (heroAnimated) return;

    const heroTop = $(".main-text").offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (heroTop < scrollTop + windowHeight - 100) {
      heroAnimated = true;

      $(".hero-title").addClass("show");

      setTimeout(function () {
        $(".hero-sub").addClass("show");
      }, 800);

      setTimeout(function () {
        $(".hero-btn").addClass("show");
      }, 1600);
    }
  });

  // ページを開いた時にも判定
  $(window).trigger("scroll");
});
