const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".yusar-menu");
const menuItem = document.querySelectorAll(".yusar-menu-list__item");

const toggleMenu = () => {
  menuElem.classList.toggle("yusar-menu-active");
  burger.classList.toggle("humburger-menu-active");
};
burger.addEventListener("click", () => toggleMenu());

for (let item of menuItem) {
  item.addEventListener("click", () => toggleMenu());
}

// $(document).ready(function () {
//   $(document).scroll(function () {
//     const top = window.pageYOffset;
//     const item1 = $("#purpose").offset().top - 120;
//     const item2 = $("#descriprion").offset().top - 120;
//     const item3 = $("#benefits").offset().top - 120;
//     const item4 = $("#news").offset().top - 120;
//     const item5 = $("#reviews").offset().top - 120;

//     function menuItemHover() {
//       $(".mis-menu__item").mouseover(function (e) {
//         if (!$(this).hasClass("mis-menu__item-active")) {
//           $(this).css("background", "#333");
//           $(this).css("color", "#fff");
//         }
//       });

//       $(".mis-menu__item").mouseleave(function (e) {
//         if (!$(this).hasClass("mis-menu__item-active")) {
//           $(this).css("background", "none");
//           $(this).css("color", "#444");
//         }
//       });
//     }

//     menuItemHover();

//     $(".mis-menu__item").css("background", "none");
//     $(".mis-menu__item").css("color", "#444");
//     $(".mis-menu__item").removeClass("mis-menu__item-active");

//     if (top > item5) {
//       $("#item-5").css("background", "#7A7F83");
//       $("#item-5").css("color", "#fff");
//       $("#item-5").toggleClass("mis-menu__item-active");
//     } else if (top > item4) {
//       $("#item-4").css("background", "#7A7F83");
//       $("#item-4").css("color", "#fff");
//       $("#item-4").toggleClass("mis-menu__item-active");
//     } else if (top > item3) {
//       $("#item-3").css("background", "#7A7F83");
//       $("#item-3").css("color", "#fff");
//       $("#item-3").toggleClass("mis-menu__item-active");
//     } else if (top > item2) {
//       $("#item-2").css("background", "#7A7F83");
//       $("#item-2").css("color", "#fff");
//       $("#item-2").toggleClass("mis-menu__item-active");
//     } else if (top > item1) {
//       $("#item-1").css("background", "#7A7F83");
//       $("#item-1").css("color", "#fff");
//       $("#item-1").toggleClass("mis-menu__item-active");
//     }
//   });
// });
