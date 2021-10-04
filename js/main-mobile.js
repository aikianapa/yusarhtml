$(document).ready(function () {
  const dropDownList = document.querySelector(".drop-down-list");
  const dropDownListArrow = document.querySelector(".drop-down-list-arrow");
  const mobileMenuListLinks = document.querySelectorAll(
    ".mobile-menu-list__link"
  );

  dropDownListArrow.addEventListener("click", () =>
    $(".mobile-menu-list").toggleClass("mobile-menu-list-active")
  );

  dropDownList.addEventListener("click", () =>
    $(".mobile-menu-list").toggleClass("mobile-menu-list-active")
  );

  mobileMenuListLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      $(".mobile-menu-list").toggleClass("mobile-menu-list-active");
    });
  });

  $(document).scroll(function () {
    const top = window.pageYOffset;
    const item1 = $("#purpose").offset().top - 120;
    const item2 = $("#descriprion").offset().top - 120;
    const item3 = $("#benefits").offset().top - 120;
    const item4 = $("#news").offset().top - 120;
    const item5 = $("#reviews").offset().top - 120;

    if (top > item5) {
      $(".drop-down-list").text("Отзывы ");
    } else if (top > item4) {
      $(".drop-down-list").text("Новости ");
    } else if (top > item3) {
      $(".drop-down-list").text("Преимущества ");
    } else if (top > item2) {
      $(".drop-down-list").text("Описание ");
    } else if (top > item1) {
      $(".drop-down-list").text("Цель ");
    }
  });
});
