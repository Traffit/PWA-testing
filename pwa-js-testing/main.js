jQuery(document).ready(function ($) {


  const shareButton = document.querySelector('.share'),
            thisUrl = window.location.href,
            thisTitle = document.title;
  shareButton.addEventListener('click', event => {
    var event_id_4 = "4"
    send_api_pwa_response(event_id_4)
    if (navigator.share) {
      navigator.share({
        title: thisTitle,
        url: thisUrl
      }).then(() => {
       })
      .catch(console.error);
    } else {
     }
  });


  $(".contacts .title__top").click(function () {
    $(this).parent().parent().find(".contacts__block").toggleClass("open");
    $(".contacts__more-btn").toggleClass("rotate");
  });
  $(".review__text").click(function () {
    $(this).toggleClass("webkit");
  });
  $(".complain__btn").click(function () {
    var $this = $(this);
    $(this).parent().parent().parent().parent().parent().find(".thanks-review").css("display", "block");
    $(this).parent().removeClass("open");
     setTimeout(function() { 
      $this.parent().parent().parent().parent().parent().find(".thanks-review").css("display", "none");
    }, 3000);
  });
  $(".review__more-open a").click(function () {
    var $this = $(this);
    $(this).parent().parent().parent().parent().parent().parent().find(".thanks-review").css("display", "block");
    $(this).parent().removeClass("open");
     setTimeout(function() { 
      $this.parent().parent().parent().parent().parent().parent().find(".thanks-review").css("display", "none");
    }, 3000);
  });
  $(".review__true-false a").click(function () {
    var $this = $(this);
    $(this).parent().parent().parent().parent().parent().find(".thanks-review").css("display", "block");
    $(this).addClass("click");
     setTimeout(function() { 
      $this.parent().parent().parent().parent().parent().find(".thanks-review").css("display", "none");
      $this.removeClass("click");
    }, 3000);
  });

  $(".program-cancel").click(function () {
    prgrm_can();
  });

  $(".header-more").click(function () {
    $(this).parent().find(".complain").addClass("open");
  });
  $(".review__more").click(function () {
    $(this).parent().find(".review__more-open").addClass("open");
  });
  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".complain"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
         $(".complain").removeClass("open");
      }
    });
  });
  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".review__more-open"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
         $(".review__more-open").removeClass("open");
      }
    });
  });
});