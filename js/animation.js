var width = $(window).width();

var lunitInit = function () {
  window.scrollTo(0, 0);
  var ht = 10000;
  var vh = $(window).height();
  var vw = $(window).width();
  var ih // image height
  var offset;
  $('.qbody .staging ').height(ht);
  if ($(window).width() > 0) {
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
          to: "con-top + " + ht + " = bottom",
          css: {
            position: "fixed",
            top: "",
            bottom: "0",
          },
          //                    onScroll: function($el, offset, length)
          onScroll: function ($el, offset, length) {
            ih = $(".scene.scene-2.mis-container img:first-child").height();
          }
        },
        {
          alias: "unfixing",
          from: "con-top + " + ht + " = bottom",
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
            transform: "translateY(-"+vh+"px)",
          },
        },
      ],
      $(".staging-1")
    );

    offset = 55;
    $(window).width() > 767 ? offset = 37 : null;
    $(window).width() > 1425 ? offset = 50 : null;
    $(window).height() > 800 ? offset = 25 : null;
    $(window).height() > 1000 ? offset = 0 : null;
    if ($(window).width() < 768) {
      vh >= 499 ? offset = 70 : null;
      vh >= 560 ? offset = 55 : null;
      vh >= 610 ? offset = 48 : null;
      vh >= 660 ? offset = 40 : null;
      vh >= 690 ? offset = 25 : null;
      vh >= 730 ? offset = 30 : null;
      vh >= 810 ? offset = 26 : null;
      vh >= 900 ? offset = 15 : null;
      vh >= 950 ? offset = 10 : null;
      vh >= 1000 ? offset = 5 : null;
      vh >= 1100 ? offset = 3 : null;
      vh >= 1200 ? offset = 2 : null;
      vh >= 1300 ? offset = 0 : null;
    }
    /*
    1000 = -18
    736 = -30 2.18
    667 = -40 2.11
    568 = - 55 2.18
    500 = -70
    */
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
            transform: "translateY(-"+offset+"vh)",
          },
        },
      ],
      $(".staging-1")
    );


    // ???????????????? //
    if ($(window).width() > 767) {
      var start = 500;
      var stop = Math.ceil(ht / 2 - start);
    } else {
      var start = 0;
      var stop = Math.ceil(ht);
    }
    var images = $(".staging-1 .scene-2 img").length + 1;
    offset = [];


    for (i = 0; i <= images; i++) {
      let os = Math.ceil((stop - start) / images);
      offset[i] = start + os * (i + 1);
      if (i !== 0) {
        if (i + 1 <= images) {
          $(".staging-1 .scene-2 img:eq(" + (i - 1) + ")").scroolly([
            {
              from: "con-top + " + (offset[i - 1]) + " = top",
              to: "con-top + " + (offset[i]) + " = top",
              cssFrom: {
                "opacity": "0.999",
              },
              cssTo: {
                "opacity": "0.001",
                "z-index": "0"
              },
            }
          ],
            $(".staging-1")
          );
        }

        $(".staging-1 .scene-2 img:eq(" + i + ")").scroolly(
          [
            {
              from: "con-top + " + (offset[i - 1]) + " = top",
              to: "con-top + " + (offset[i]) + " = top",
              cssFrom: {
                "opacity": "0.001",
                "z-index": 1 + i
              },
              cssTo: {
                "opacity": "0.999",
                "z-index": 1 + i
              },
            },
            {
              from: "con-top + " + (offset[i + 1]) + 1 + " = top",
              to: "con-top + " + (offset[i + 1] + 2) + " = top",
              cssFrom: {
                "opacity": "0.999",
              },
              cssTo: {
                "opacity": "0.001",
              },
            }

          ],
          $(".staging-1")
        );
      }
    }
    // ========= //


    // ???????????? //  
    var height = $(".staging-1 .statistics-1").height();
    var off = stop;
    var top = ht / 2;
    var stop1;
    var stop2;
    var plates;
    if ($(window).width() > 767) {
      // ???????????? ???????? ????????????
      plates = $('.staging-1 .statistics-1 .statistics__item').length;
      for (i = 1; i <= plates; i++) {
        let start = Math.ceil(top + (i * ((ht / 2 - off) / plates)));
        let stop = stop1 = start + height;
        $(".staging-1 .statistics-1 .statistics__item:eq(" + (i - 1) + ")").scroolly(
          [
            {
              from: "con-top + " + start + " = top",
              to: "con-top + " + stop + " = top",
              cssFrom: {
                transform: "translateY(24vh)",
                opacity: "0"
              },
              cssTo: {
                transform: "translateY(1vh)",
                opacity: "0.7"
              },
            }
          ],
          $(".staging-1")
        );
      }

      // ???????????? ???????? ????????????
      plates = $('.staging-1 .statistics-2 .statistics__item').length;
      top = stop1 + vh;
      for (i = 1; i <= plates; i++) {
        let start = Math.ceil(top + (i * ((ht / 2 - off) / plates)));
        let stop = stop2 = Math.ceil(start + height * 1.2);
        $(".staging-1 .statistics-2 .statistics__item:eq(" + (i - 1) + ")").scroolly(
          [
            {
              from: "con-top + " + start + " = top",
              to: "con-top + " + stop + " = top",
              cssFrom: {
                transform: "translateY(24vh)",
                opacity: "0"
              },
              cssTo: {
                transform: "translateY(1vh)",
                opacity: "0.7"
              },
            }
          ],
          $(".staging-1")
        );
      }

      // ???????? ???????? ???????????? ????????????
      let start = Math.ceil(stop1 ) + vh;
      let stop = start + vh;
      $(".staging-1 .statistics-1").scroolly(
        [
          {
            from: "con-top + " + start + " = top",
            to: "con-top + " + stop + " = top",
            cssFrom: {
              top: "-0.000vh",
              opacity: "0.999"
            },
            cssTo: {
              top: "-100vh",
              opacity: "0"
            },
          }
        ],
        $(".staging-1")
      );

      start = Math.ceil(stop2 ) + vh;
      stop = start + vh;
      $(".staging-1 .statistics-2").scroolly(
        [
          {
            from: "con-top + " + start + " = top",
            to: "con-top + " + stop + " = top",
            cssFrom: {
              top: "-0.000vh",
              opacity: "0.999"
            },
            cssTo: {
              top: "-100vh",
              opacity: "0"
            },
          }
        ],
        $(".staging-1")
      );

    } else {
      var top = Math.ceil(ht - vh);
      top = vh;
      let offset = [];
      let plates = $('.statistics.mis-container').find('.statistics__item').length;
      let os = Math.ceil((ht - top - vh) / plates);
      offset[0] = top;
      for (i = 1; i <= plates; i++) {
        offset[i] = top + (os * i);
        offset[i + 1] = offset[i] + os;
        $('.statistics.mis-container').height(height);
        $('.statistics.mis-container > div').height(height);
        $('.statistics.mis-container .statistics__item').height(height);
        $(".staging-1 .statistics__item:eq(" + (i - 1) + ")").scroolly(
          [
            {
              from: "con-top + " + (offset[i - 1]) + " = top",
              to: "con-top + " + (offset[i]) + " = top",
              cssFrom: {
                "top": "25.000vh",
                "opacity": "0.001"
              },
              cssTo: {
                "top": "-0.001vh",
                opacity: "0.999"
              },
            },
            {
              from: "con-top + " + (offset[i]) + " = top",
              to: "con-top + " + (offset[i + 1]) + " = top",
              cssFrom: {
                "top": "-0.001vh",
                "opacity": "0.999"
              },
              cssTo: {
                "top": "-20.001vh",
                "opacity": "0.001"
              },
            }
          ],
          $(".staging-1")
        );
      }
    }

  }
}

$(window).on('resize', function () {
  if (Math.abs(width - $(window).width()) > width / 10) lunitInit();
})

setTimeout(function () {
  lunitInit();
}, 400)