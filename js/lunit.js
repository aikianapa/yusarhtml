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
              from: "con-top + " + (offset[i + 1]) + " = top",
              to: "con-top + " + (offset[i + 1] + 1) + " = top",
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
    for (i = 1; i <= 20; i++) {

      let start = 500 + i * 30;
      let stop = 1000 + i * 30;

      if ($(window).width() > 767) {
        $(".staging-1 .st" + i).scroolly(
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
        let height = $(".staging-1 .st1").height();
        $(".staging-1 .st" + i).scroolly(
          [
            {
              from: "con-top + " + start + " = top",
              to: "con-top + " + start + height + " = top",
              cssFrom: {
                transform: "translateY(-"+height+"px)",
                opacity: "1"
              },
              cssTo: {
                transform: "translateY(0px)",
                opacity: "1"
              },
            },
              {
                from: "con-top + " + start + height + " = top",
                to: "con-top + " + start + height + height + " = top",
                cssFrom: {
                  transform: "translateY(0px)",
                  opacity: "1"
                },
                cssTo: {
                  transform: "translateY("+height+"px)",
                  opacity: "1"
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
