setTimeout(function(){
  window.scrollTo(0, 0);
},400)
$(function () {
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
          to: "con-top + 3000 = bottom",
          css: {
            position: "fixed",
            top: "",
            bottom: "0",
          },
          //                    onScroll: function($el, offset, length)
        },
        {
          alias: "unfixing",
          from: "con-top + 3000 = bottom",
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
    var stop = 2000;
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
    var offset = [];
    var plates = $('.statistics.mis-container').find('.statistics__item').length;
    var height = $(".staging-1 .statistics-1").height();
    var start = 500;
    var os = Math.ceil((stop - start) / plates);
    offset[0] = start;
    for (i = 1; i <= plates; i++) {

      if ($(window).width() > 767) {
        let start = 400 + (i * 60);
        let stop = 1000 + (i * 60);

        $(".staging-1 .statistics__item:eq(" + (i - 1) + ")").scroolly(
          [
            {
              from: "con-top + " + start + " = top",
              to: "con-top + " + stop + " = top",
              cssFrom: {
                transform: "translateY(" + i * 10 + "vh)",
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
      } else {
        offset[i] = start + (os * i);
        offset[i+1] = start + (os * (i+1));
        $('.statistics.mis-container').height(height);
        $('.statistics.mis-container > div').height(height);
        $('.statistics.mis-container .statistics__item').height(height);
        $(".staging-1 .statistics__item:eq(" + (i - 1) + ")").scroolly(
          [
            {
              from: "con-top + " + (offset[i - 1]) + " = top",
              to: "con-top + " + (offset[i] - 1) + " = top",
              cssFrom: {
                top: height+"px",
                opacity: "0.001"
              },
              cssTo: {
                top: (-height)+"px",
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
                top: (-height*2)+"px",
              },
              cssTo: {
                top: (-height*2)+"px",
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
