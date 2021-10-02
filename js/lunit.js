setTimeout(function () {
  window.scrollTo(0, 0);
}, 400)
$(function () {
  var ht = 5000;
  var vh = $(window).height();
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
            transform: "translateY(-37vh)",
          },
        },
      ],
      $(".staging-1")
    );

    // Картинки //
    var start = 500;
    var stop = ht - start * 2;
    var images = $(".staging-1 .scene-2 img").length + 1;
    var offset = [];

    for (i = 0; i < images; i++) {
      let os = Math.ceil((stop - start) / images);
      offset[i] = start + os * (i + 1);
      if (i !== 0) {
        if (i + 1 < images) {
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


    // Плашки //

    var height = $(".staging-1 .statistics-1").height();
    var off = 200;
    var top = off;
    var stop1;
    var stop2;
    var plates;
    if ($(window).width() > 767) {
      // первый блок плашек
      plates = $('.staging-1 .statistics-1 .statistics__item').length;
      for (i = 1; i <= plates; i++) {
        let start = top + (i * ((ht * 0.2) / plates));
        let stop = stop1 = start + height * 1.2;
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
      
      // второй блок плашек
      plates = $('.staging-1 .statistics-2 .statistics__item').length;
      top = stop1 + off;
      for (i = 1; i <= plates; i++) {
        let start = top + (i * ((ht * 0.2) / plates));
        let stop = stop2 = start + height * 1.2;
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
    

    // весь блок плашек наверх
    let start = stop1 + off;
    let stop = start + off*5;
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
    
    start = stop2 + off;
    stop = start + off*5;
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
    let offset = [];
    let plates = $('.statistics.mis-container').find('.statistics__item').length;
    let os = Math.ceil((stop - top) / plates);
    offset[0] = top;
    for (i = 1; i <= plates; i++) {
      offset[i] = start + (os * i);
      offset[i + 1] = start + (os * (i + 1));
      $('.statistics.mis-container').height(height);
      $('.statistics.mis-container > div').height(height);
      $('.statistics.mis-container .statistics__item').height(height);
      $(".staging-1 .statistics__item:eq(" + (i - 1) + ")").scroolly(
        [
          {
            from: "con-top + " + (offset[i - 1]) + " = top",
            to: "con-top + " + (offset[i] - 1) + " = top",
            cssFrom: {
              top: height + "px",
              opacity: "0.001"
            },
            cssTo: {
              top: (-height) + "px",
              opacity: "0.999"
            },
          },
          {
            from: "con-top + " + (offset[i]) + " = top",
            to: "con-top + " + (offset[i + 1] - 1) + " = top",
            cssFrom: {
              opacity: "0.999"
            },
            cssTo: {
              opacity: "0.001"
            },
          }
          ,
          {
            from: "con-top + " + (offset[i + 1]) + " = top",
            to: "con-top + " + (offset[i + 1] + 1) + " = top",
            cssFrom: {
              top: (-height * 2) + "px",
            },
            cssTo: {
              top: (-height * 2) + "px",
            },
          }
        ],
        $(".staging-1")
      );
    }
  }

  /*
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
  */

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
