//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

// headerをスクロールすると、色が変わる
jQuery(window).on("scroll", function () {
  //topを過ぎてから色を変更
  if (jQuery(".header").height() < jQuery(this).scrollTop()) {
    //headerにclassをつけてjs-headerを記述
    jQuery(".js-header").addClass("change-color");
  } else {
    jQuery(".js-header").removeClass("change-color");
  }
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    position = jQuery(id).offset().top;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 375) {
    document.body.style.width = "375px";
  } else {
    document.body.style.width = "100%";
  }
});

// タブメニュー
$(".tab-item a").on("click", (event) => {
  $(".tab-item").removeClass("is-active");
  $(".content").removeClass("is-active");

  $(event.target).parent("li").addClass("is-active");

  const content = $(event.target).data("content");
  $(`.${content}`).addClass("is-active");
});

//アコーディオン
function toggleAccordion(element) {
  const $accordionContent = $(element).closest(".tab-sp__accordion").find(".tab-sp__accordion-content");
  const $arrowImage = $(element).find("img");
  $accordionContent.toggleClass("active");
  if ($accordionContent.hasClass("active")) {
    $accordionContent.css("maxHeight", $accordionContent[0].scrollHeight + "px");
    $arrowImage.css("transform", "rotate(180deg)");
  } else {
    $accordionContent.css("maxHeight", 0);
    $arrowImage.css("transform", "rotate(0deg)");
  }
}

//qa
jQuery(document).ready(function () {
  jQuery(".js-accordion").next().hide();

  jQuery(".js-accordion").on("click", function (e) {
    e.preventDefault();

    if (jQuery(this).parent().hasClass("is-open")) {
      jQuery(this).parent().removeClass("is-open");
      jQuery(this).next().slideDown();
    } else {
      jQuery(this).parent().addClass("is-open");
      jQuery(this).next().slideUp();
    }
  });
});

//contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (this.checkValidity()) {

    alert('正常に送信しました');
    this.reset(); 
  } else {

    this.reportValidity();
  }
});

