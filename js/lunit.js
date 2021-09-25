$(function () {
  if ($(window).width() > 767) {
    $(".to-fix").scroolly(
      [
        {
          alias: "before",
          from: "",
          to: "con-top = top",
          css: {
            position: "static",
          },
        },
        {
          alias: "fixing",
          from: "con-top = top",
          to: "con-top + 12000 = bottom",
          css: {
            position: "fixed",
            top: "",
            bottom: "0",
          },
          //                    onScroll: function($el, offset, length)
        },
        {
          alias: "unfixing",
          from: "con-top + 12000 = bottom",
          to: "doc-bottom",
          css: {
            position: "absolute",
            top: "",
            bottom: "0",
          },
        },
      ],
      $(".staging")
    );

    $(".staging-1 .scene-1").scroolly(
      [
        {
          // alias: "before",
          // from: "",
          to: "con-top",
          css: {
            top: "216px",
          },
        },
        {
          // alias: "slide1",
          from: "con-top",
          to: "con-top + 500 = top",
          cssFrom: {
            top: "216px",
            transform: "translateY(-1px)",
          },
          cssTo: {
            top: "216px",
            transform: "translateY(-1500px)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .scene-2").scroolly(
      [
        {
          from: "con-top",
          to: "con-top + 500 = top",
          cssFrom: {
            top: "37vh",
            transform: "translateY(-0.01vh)",
          },
          cssTo: {
            top: "37vh",
            transform: "translateY(-35vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .covid_19").scroolly(
      [
        {
          from: "con-top + 600 = top",
          to: "con-top + 3800 = top",
          cssFrom: {
            opacity: "0.999",
          },
          cssTo: {
            opacity: "0.001",
          },
        },
        {
          from: "con-top + 4000 = top",
          to: "con-top + 4400 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.29",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st1").scroolly(
      [
        {
          from: "con-top + 4500 = top",
          to: "con-top + 4700 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 4700 = top",
          to: "con-top + 4900 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 4900 = top",
          to: "con-top + 5100 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st2").scroolly(
      [
        {
          from: "con-top + 4800 = top",
          to: "con-top + 5100 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st3").scroolly(
      [
        {
          from: "con-top + 4900 = top",
          to: "con-top + 5100 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 5100 = top",
          to: "con-top + 5300 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 5300 = top",
          to: "con-top + 5500 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st4").scroolly(
      [
        {
          from: "con-top + 5200 = top",
          to: "con-top + 5500 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st5").scroolly(
      [
        {
          from: "con-top + 5300 = top",
          to: "con-top + 5500 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 5500 = top",
          to: "con-top + 5700 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 5700 = top",
          to: "con-top + 5900 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st6").scroolly(
      [
        {
          from: "con-top + 5600 = top",
          to: "con-top + 5900 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st7").scroolly(
      [
        {
          from: "con-top + 5700 = top",
          to: "con-top + 5900 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 5900 = top",
          to: "con-top + 6100 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 6100 = top",
          to: "con-top + 6300 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st8").scroolly(
      [
        {
          from: "con-top + 6000 = top",
          to: "con-top + 6300 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st9").scroolly(
      [
        {
          from: "con-top + 6100 = top",
          to: "con-top + 6300 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 6300 = top",
          to: "con-top + 6500 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 6500 = top",
          to: "con-top + 6700 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st10").scroolly(
      [
        {
          from: "con-top + 6400 = top",
          to: "con-top + 6700 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st11").scroolly(
      [
        {
          from: "con-top + 6500 = top",
          to: "con-top + 6700 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 6700 = top",
          to: "con-top + 6900 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 6900 = top",
          to: "con-top + 7100 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st12").scroolly(
      [
        {
          from: "con-top + 6800 = top",
          to: "con-top + 7100 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st13").scroolly(
      [
        {
          from: "con-top + 6900 = top",
          to: "con-top + 7100 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 7100 = top",
          to: "con-top + 7300 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 7300 = top",
          to: "con-top + 7500 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st14").scroolly(
      [
        {
          from: "con-top + 7200 = top",
          to: "con-top + 7500 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st15").scroolly(
      [
        {
          from: "con-top + 7300 = top",
          to: "con-top + 7500 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 7500 = top",
          to: "con-top + 7700 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 7700 = top",
          to: "con-top + 7900 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st16").scroolly(
      [
        {
          from: "con-top + 7600 = top",
          to: "con-top + 7900 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st17").scroolly(
      [
        {
          from: "con-top + 7700 = top",
          to: "con-top + 7900 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 7900 = top",
          to: "con-top + 8100 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 8100 = top",
          to: "con-top + 8300 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st18").scroolly(
      [
        {
          from: "con-top + 8000 = top",
          to: "con-top + 8300 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st19").scroolly(
      [
        {
          from: "con-top + 8100 = top",
          to: "con-top + 8300 = top",
          cssFrom: {
            transform: "translateY(14vh)",
          },
          cssTo: {
            transform: "translateY(9.5vh)",
          },
        },
        {
          from: "con-top + 8300 = top",
          to: "con-top + 8500 = top",
          cssFrom: {
            transform: "translateY(9.5vh)",
          },
          cssTo: {
            transform: "translateY(4.5vh)",
          },
        },
        {
          from: "con-top + 8500 = top",
          to: "con-top + 8700 = top",
          cssFrom: {
            transform: "translateY(4.5vh)",
          },
          cssTo: {
            transform: "translateY(0vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .st20").scroolly(
      [
        {
          from: "con-top + 8400 = top",
          to: "con-top + 8700 = top",
          cssFrom: {
            opacity: "0.001",
          },
          cssTo: {
            opacity: "0.7",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .scene-2").scroolly(
      [
        {
          from: "con-top + 10000 = top",
          to: "con-top + 11000 = top",
          cssFrom: {
            transform: "translateY(-35vh)",
          },
          cssTo: {
            transform: "translateY(-100vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .statistics").scroolly(
      [
        {
          from: "con-top + 10000 = top",
          to: "con-top + 11000 = top",
          cssFrom: {
            transform: "translateY(-0.01vh)",
          },
          cssTo: {
            transform: "translateY(-70vh)",
          },
        },
      ],
      $(".staging-1")
    );

    $(".staging-1 .mis-header-top").scroolly(
      [
        {
          from: "con-top + 10000 = top",
          to: "con-top + 11000 = top",
          cssFrom: {
            transform: "translateY(-0.01vh)",
          },
          cssTo: {
            transform: "translateY(-20vh)",
          },
        },
      ],
      $(".staging-1")
    );
  }
});
