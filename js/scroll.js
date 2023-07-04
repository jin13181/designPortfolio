function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= vh(50)) {
      //main 배경 베이지
      $(".main").css(
        "background",
        '#efebe6 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
      );
      $(".main h3, .main a").css("color", "#203929");
      $(".topNav .nav li a").css("color", "#203929");

      //about 배경 초록
      $(".about").css(
        "background",
        '#203929 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
      );
      $(".about p, .about h2, .about h3, .about h4, .about span, .about a").css(
        "color",
        "#cdc4b5"
      );

      //제이쿼리 가상 선택자 선택안됨
      $(".section-title h2:before").css("background-color", "#efebe6");
      $(".about .timeline-item::before").css("background-color", "#efebe6");
    } else if (
      $(this).scrollTop() >= vh(50) &&
      $(this).scrollTop() <= vh(100)
    ) {
      $(".topNav .nav li a").css("color", "#203929");
    } else if (
      $(this).scrollTop() >= vh(50) &&
      $(this).scrollTop() <= vh(150)
    ) {
      //about 배경 베이지
      $(".about")
        .css(
          "background",
          '#efebe6 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
        )
        .css("transition", "0.5s");
      $(".about p, .about h2, .about h3, .about h4, .about span, .about a").css(
        "color",
        "#203929"
      );
      $(".about .btn")
        .css("color", "#efebe6")
        .css("background-color", "#203929");
      $(".topNav .nav li a").css("color", "#203929");
    } else if (
      $(this).scrollTop() >= vh(150) &&
      $(this).scrollTop() <= vh(200)
    ) {
      //about 배경 초록
      $(".about").css(
        "background",
        '#203929 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
      );
      $(".about p, .about h2, .about h3, .about h4, .about span, .about a").css(
        "color",
        "#cdc4b5"
      );
      $(".topNav .nav li a").css("color", "#cdc4b5");
      $(".about .btn").css("color", "#203929");
      $(".about .btn").css("background-color", "#cdc4b5");

      //제이쿼리 가상 선택자 선택안됨
      $(".section-title h2:before").css("background-color", "#efebe6");
      $(".about .timeline-item::before").css("background-color", "#efebe6");

      //stack 배경 초록
      $(".stack")
        .css(
          "background",
          '#203929 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
        )
        .css("transition", "0.5s");
      $(".stack p, .stack h2, .stack h3, .stack h4, .stack h2::before").css(
        "color",
        "#cdc4b5"
      );
      $(".stackBox").css("border-bottom", "1px solid #efebe6");
      $(".topNav .nav li a").css("color", "#cdc4b5");
    } else if (
      $(this).scrollTop() >= vh(200) &&
      $(this).scrollTop() <= vh(300)
    ) {
      //about 배경 베이지
      $(".about")
        .css(
          "background",
          '#efebe6 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
        )
        .css("transition", "0.5s");
      $(".about p, .about h2, .about h3, .about h4, .about span, .about a").css(
        "color",
        "#203929"
      );
      $(".about .btn")
        .css("color", "#efebe6")
        .css("background-color", "#203929");
      $(".topNav .nav li a").css("color", "#203929");
      //stack 배경 베이지
      $(".stack")
        .css(
          "background",
          '#efebe6 url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")'
        )
        .css("transition", "0.5s");
      $(".stack p, .stack h2, .stack h3, .stack h4, h2::before").css(
        "color",
        "#203929"
      );
      $(".stackBox").css("border-bottom", "1px solid #203929");
      $(".topNav .nav li a").css("color", "#203929");
    } else if (
      $(this).scrollTop() >= vh(370) &&
      $(this).scrollTop() <= vh(480)
    ) {
      $(".topNav .nav li a").css("color", "#efebe6");
    } else if ($(this).scrollTop() <= vh(1000)) {
      $(".topNav .nav li a").css("color", "#203929");
    }
  });
});
