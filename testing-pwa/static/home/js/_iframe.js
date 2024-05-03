function show_iframe() {
  if (module_offer_in_iframe) {
    var frame = document.getElementById("frame");
    var iframe = document.getElementById("iframe");
    frame.style.display = "block";
    var para = object_storage.get_parameters();
    if (para == null || para == "" || para == false) {
      var param = "";
    } else {
      var param = "&" + para;
    }
    if (module_landing) {
      if (object_parameters.fbclid) {
        object_parameters.promo = "false";
      }
      var ready_frame_url = addParamsToUrl(
        landing_url,
        "transit=" +
          url +
          "&open=iframe&source=" +
          window.location.hostname +
          param +
          "&promo=" +
          object_parameters.promo +
          "&promo_id=" +
          object_parameters.promo_id
      );
    } else {
      var ready_frame_url = addParamsToUrl(
        url,
        "open=iframe&source=" + window.location.hostname + param + "&promo_id=" + object_parameters.promo_id
      );
    }
    iframe.setAttribute("src", ready_frame_url);
    AppLoader.show();
    iframe.onload = function() {
      AppLoader.hide();
    };
  }
}
