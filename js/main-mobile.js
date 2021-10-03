$(document).ready(function () {
  const dropDownList = document.querySelector(".drop-down-list");
  const mobileMenuListLinks = document.querySelectorAll(
    ".mobile-menu-list__link"
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
      $(".drop-down-list").text(
        "Отзывы " +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          "V"
      );
    } else if (top > item4) {
      $(".drop-down-list").text(
        "Новости " +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          "V"
      );
    } else if (top > item3) {
      $(".drop-down-list").text(
        "Преимущества " +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          "V"
      );
    } else if (top > item2) {
      $(".drop-down-list").text(
        "Описание " +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          "V"
      );
    } else if (top > item1) {
      $(".drop-down-list").text(
        "Цель " +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          String.fromCharCode(160) +
          "V"
      );
    }
  });
});
