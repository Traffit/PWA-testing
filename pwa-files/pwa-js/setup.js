var deferredPrompt = null;
var object_pwa = new PwaLogic(deferredPrompt);

var object_animation = new AnimationLogic();

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  object_pwa.deferredPrompt = deferredPrompt;
  if (module_post_install) {
    create_overlay_object();
  }
  //event
  object_events.send_event("EVENT: CAN REAL INSTALL");
});

window.addEventListener("appinstalled", () => {
  object_storage.set_storage_installed(true);
  object_fbp.send_install_event();
  console.log("send event");
  if (object_animation.install_animation == false) {
    object_animation.install_proccess();
  }
  //event
  object_events.send_event("INSTALL: REAL");
  object_pwa.deferredPrompt = null;
  // redirect
  // window.location.href = '/?redirect=true';
});

$(document).on("click", "#overlay", function () {
  document.getElementById("overlay").remove();
  if (object_pwa.can_install()) {
    object_pwa.install();
  }
});

function fake_install_start() {
  object_storage.set_storage_installed(true);
  object_fbp.send_install_event();
  console.log("send event");
  object_animation.install_proccess();
  object_animation.install_animation = true;
  //event
  object_events.send_event("INSTALL: FAKE");
  offer_in_iframe_setting("fake");
}

function offer_in_iframe_setting(install) {
  if (module_offer_in_iframe && user.os.family == "Android") {
    if (install == "fake" && document.fullscreenElement) {
      var elemento = document.getElementsByClassName("pr-open")[0];
      elemento.removeAttribute("href");
      elemento.removeAttribute("target");
      elemento.setAttribute("onclick", "show_iframe()");
    }
  }
}

function create_overlay_object() {
  if (object_animation.install_animation) {
    if (object_pwa.can_install()) {
      if (object_animation.show_overlay == false) {
        object_animation.show_overlay = true;
        let div = document.createElement("div");
        div.className = "overlay";
        div.id = "overlay";
        document.body.append(div);
      }
    }
  }
}

$(document).on("click", "#pr-install", function () {
  console.log('test click')
  if ($("#install-button").css("display") == "block") {
    console.log('test first')

    if ($("#pr-install").hasClass("true-install")) {
      console.log('test first')
      
      object_pwa.install();
    } else if ($("#pr-install").hasClass("fake-install")) {
      console.log('test else if')

      if (object_pwa.can_install()) {
        console.log('test if can_install')

        object_pwa.install();
      } else {
        console.log('test else last')

        fake_install_start();
      }
    }
  }
});

jQuery(document).ready(function ($) {
  if (object_fbp.status) {
    object_fbp.init_pixel();
    object_fbp.send_server_event();
  } else {
    try {
      object_fbp.init_pixel();
    } catch (e) {
      console.log("Error: " + e);
    }
  }

  var url = addParamsToUrl(window.location.href, "redirect=true");
  var element = document.getElementById("pr-open");
  var element_site = document.getElementById("site");
  element.setAttribute("href", url);
  element_site.setAttribute("href", url);

  setTimeout(function () {
    if (
      user.browser.family == "Chrome" ||
      user.browser.family == "Chrome Mobile"
    ) {
      if (object_pwa.can_install()) {
        // alert("Chrome, можно установить! Показываем кнопку 'Установить'")
        object_animation.hide_loader();
        object_animation.show_true_install();
      } else {
        if (object_storage.get_storage_installed()) {
          // alert("Chrome, нельзя установить! Показываем кнопку 'Открыть'")
          object_animation.hide_loader();
          object_animation.show_open();
        } else {
          // alert("Chrome, нельзя установить! Показываем кнопку 'Установить(Фейк)'")
          object_animation.hide_loader();
          object_animation.show_fake_install();
          // object_animation.show_true_install()
        }
      }
    } else {
      if (object_pwa.can_install()) {
        // alert("Не Chrome, но можно установить! Показываем кнопку 'Установить'")
        object_animation.hide_loader();
        object_animation.show_true_install();
      } else {
        if (object_storage.get_storage_installed()) {
          // alert("Не Chrome, нельзя установить! Была фейковая установка! Показываем кнопку 'Открыть'")
          object_animation.hide_loader();
          object_animation.show_open();
        } else {
          // alert("Не Chrome, нельзя установить! Небыло фейковой установки! Показываем кнопку 'Установить(Фейк)'")
          object_animation.hide_loader();
          object_animation.show_fake_install();
          //  object_animation.show_true_install()
        }
      }
    }
  }, 4000);
});
