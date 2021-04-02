//---------------------- NAV ANIMATION GOTO

$("li a").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top - 100,
    },
    1000
  );
});
//----------------------
$(document).on("scroll", function () {
  if ($(document).scrollTop() + $("nav").height() > $("header").height()) {
    $("nav").addClass("active");
    // $('article:nth-of-type(1)').addClass('active');
  } else {
    $("nav").removeClass("active");
    // $('article:nth-of-type(1)').removeClass('active');
  }
});
//---------------------- HEADER- CLICK SCROLL ICON
$(".scroll").on("click", function () {
  $("body, html").animate({
    scrollTop: $("header").height(),
  });
});
//---------------------- ARTICLE ACTIVE

const heightArt1 = $("article:nth-of-type(1)").height();
const topDistanceArt1 = $("article:nth-of-type(1)").offset().top;

const heightArt2 = $("article:nth-of-type(2)").height();
const topDistanceArt2 = $("article:nth-of-type(2)").offset().top;

const heightArt3 = $("article:nth-of-type(3)").height();
const topDistanceArt3 = $("article:nth-of-type(3)").offset().top;

const heightArt4 = $("article:nth-of-type(4)").height();
const topDistanceArt4 = $("article:nth-of-type(4)").offset().top;

$(document).on("scroll", function () {
  if ($(document).scrollTop() > topDistanceArt1 - $(window).height()) {
    $("article:nth-of-type(1)").addClass("active");
  }

  if (
    $(document).scrollTop() >
    topDistanceArt2 + heightArt2 - $(window).height()
  ) {
    $("article:nth-of-type(2)").addClass("active");
  }

  if (
    $(document).scrollTop() >
    topDistanceArt3 + heightArt3 / 2 - $(window).height()
  ) {
    $("article:nth-of-type(3)").addClass("active");
  }
  if (
    $(document).scrollTop() >
    topDistanceArt4 + heightArt4 - $(window).height()
  ) {
    $("article:nth-of-type(4)").addClass("active");
  }

  if ($(document).scrollTop() < 100) {
    $("article").removeClass("active");
  }
});
