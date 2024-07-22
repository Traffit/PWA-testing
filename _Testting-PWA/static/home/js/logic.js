var PwaLogic = class {
  constructor(deferredPrompt) {
    this.deferredPrompt = deferredPrompt;
  }

  install() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(function(choiceResult){
      if (choiceResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
      }else{
        console.log('User chose to not install your PWA');
        if (localStorage.getItem("dismissed") == "true"){
          localStorage.removeItem("dismissed");
          fake_install_start();
        }else{
          localStorage.setItem("dismissed", "true");
        }
      }
    });
  }

  can_install() {
	  if (this.deferredPrompt != null) {
	    return true
	  }else{
	    return false
	  }
  }

};

var AnimationLogic = class {
  constructor() {
    this.install_animation = false
    this.show_overlay = false
  }

  hide_loader(){
  	$('#loader-install').css('display','none');
  }

  show_true_install(){
    $('#pr-install').css('display','flex');
    $('.pr-install').css('display','block');
    $('#pr-install').addClass('true-install');
  }

  show_fake_install(){
  	$('#pr-install').css('display','flex');
  	$('.pr-install').css('display','block');
  	$('#pr-install').addClass('fake-install');
  }

  show_open(){
    $('#pr-install').css('display','flex');
    var $this = $('.program-install');
    $($this).parent().parent().addClass("collumn");
    $this.find(".pr-open").css("display", "flex").css("color", "var(--c-gray2)");
    $($this).parent().addClass("click");

    var $programBottom = $this.parent().parent().find(".program__bottom");
    var currentHeight = $programBottom.outerHeight();
    $programBottom.css('height', currentHeight + 'px');

    setTimeout(function() {
        $programBottom.addClass("none").animate({
            height: 0,
            opacity: 0
        }, 500);
    }, 10);

    $this.parent().find(".pr-cancel").css("display", "none");
    $this.parent().find(".pr-delete").css("display", "flex");
    $this.parent().find(".pr-open").css("display", "flex").css("color", "var(--white_text)");
    $this.css("background", "var(--primary_back)");
    $this.parent().find(".pr-install").css("display", "none");
    $this.removeClass("program-install").addClass("program-open");
  }

  install_proccess(){

  	var ezTimeout1;
	  var ezTimeout2;
	  var ezTimeout3;
	  var ezTimeout4;
	  var ezTimeout5;
	  var ezTimeout6;

	  var $this = $('.program-install');
	  $($this).addClass("click-none").css("background", "var(--gray_back)");
	  $($this).parent().parent().find(".program-logo img").addClass("transform");
	  $($this).parent().parent().find(".showbox").css("opacity", "1");
	  $($this).parent().parent().find(".donut").addClass("rotate");
	  $($this).parent().parent().addClass("collumn");
	  $($this).parent().parent().find(".program-info-first").addClass("none");
	  $($this).parent().parent().find(".program-info-instal").addClass("open");
	  $this.parent().find(".pr-cancel").css("display", "flex");
	  $this.find(".pr-open").css("display", "flex").css("color", "var(--gray_text)");
	  $this.find(".pr-install").css("display", "none");
	  $($this).parent().addClass("click");

	  
	  $($this).parent().parent().parent().parent().parent().find(".description > .container > .program-scroll-box").removeClass("none");
    var $programBottom = $this.parent().parent().find(".program__bottom");
    var currentHeight = $programBottom.outerHeight();
    $programBottom.css('height', currentHeight + 'px');

    setTimeout(function() {
        $programBottom.addClass("none").animate({
            height: 0,
            opacity: 0
        }, 500);
    }, 10);
	  ezTimeout1 = setTimeout(function() { 
	    $this.parent().parent().find(".wait").css("display", "none");
	    $this.parent().parent().find(".wait33").css("display", "block");
	    $this.parent().parent().find(".svg-item").removeClass("none");
	    $this.parent().parent().find(".showbox > .loader").css("opacity", "0");
	    $this.parent().parent().find(".donut > .donut-segment-2").css("stroke-dasharray", "30, 70");
	  }, 4000);


	  ezTimeout2 = setTimeout(function() { 
	    $this.parent().parent().find(".wait33").css("display", "none");
	    $this.parent().parent().find(".wait72").css("display", "block");
	    $this.parent().parent().find(".donut > .donut-segment-2").css("stroke-dasharray", "72, 28");
	  }, 6000);


	  ezTimeout3 = setTimeout(function() { 
	    $this.parent().parent().find(".wait72").css("display", "none");
	    $this.parent().parent().find(".wait99").css("display", "block");
	    $this.parent().parent().find(".donut > .donut-segment-2").css("stroke-dasharray", "99, 1");
	  }, 10000);


	  ezTimeout4 = setTimeout(function() { 
	    $this.parent().parent().find(".donut > .donut-segment-2").css("stroke-dasharray", "100, 0");
	  }, 11000);


	  ezTimeout5 = setTimeout(function() { 
	    $this.parent().parent().find(".wait99").css("display", "none");
	    $this.parent().parent().find(".wait-install").css("display", "block");
	    $this.parent().find(".pr-cancel").css("color", "var(--c-gray2)");
	    $this.parent().parent().find(".svg-item").addClass("none");
	    $this.parent().parent().find(".showbox > .loader").css("opacity", "1");
	    $this.parent().parent().find(".circular > .path").css("stroke", "#e3e3e3");
	    $this.parent().find(".program-cancel").addClass("click-none");
	  }, 12000);


	  ezTimeout6 = setTimeout(function() { 
	    $($this).removeClass("click-none");
	    $this.parent().find(".program-cancel").removeClass("click-none");
	    $this.parent().parent().find(".wait-install").css("display", "none");
	    $this.parent().parent().find(".program-info-first").removeClass("none");
	    $this.parent().parent().find(".program-info-instal").removeClass("open");
	    $this.parent().find(".pr-cancel").css("display", "none");
	    $this.parent().find(".pr-delete").css("display", "flex");
	    $this.parent().find(".pr-open").css("display", "flex").css("color", "var(--white_text)");
	    $this.css("background", "var(--primary_back)");
	    $this.parent().find(".pr-install").css("display", "none");
	    $this.parent().parent().find(".showbox > .loader").css("opacity", "0");
	    $this.parent().parent().find(".program-logo img").removeClass("transform");
	    $this.removeClass("program-install").addClass("program-open");
	  
	  }, 17000);

	  $('#pr-install').attr('id', 'pr-open');
  }
}

var StorageLogic = class {
  constructor() {
  }

  set_storage_installed(value){
  	if (value){
  		localStorage.setItem("installed", "true");
  	}else{
  		localStorage.removeItem("installed");
  	}
  }
  get_storage_installed(){
  	if (localStorage.getItem("installed") === "true"){
  		return true
  	}else{
  		return false
  	}
  }
  set_pixel(value){
  	localStorage.setItem("pixel", value);
  }
  get_pixel(){
  	return localStorage.getItem("pixel")
  }
  set_back_open(){
  	localStorage.setItem("back_open", "true");
  }
  get_back_open(){
  	if(localStorage.getItem("back_open") == 'true'){
  		return false
  	}else{
  		return true
  	}
  }
  set_parameters(parameters){
  	localStorage.setItem("parameters", parameters);
  }
  get_parameters(){
  	return localStorage.getItem("parameters")
  }
  set_buyer(buyer_id){
  	localStorage.setItem("buyer", buyer_id);
  }
  get_buyer(){
  	return localStorage.getItem("buyer")
  }
  set_user_id(id){
    localStorage.setItem("user_id", id);
  }
  get_user_id(){
    if(localStorage.getItem("user_id")){
      return localStorage.getItem("user_id")
    }else{
      var user_id = make_user_id();
      this.set_user_id(user_id)
      return user_id
    }
  }
  set_fullscreen(){
  	sessionStorage.setItem("fullscreen", "true");
  }
  get_fullscreen(){
    if(sessionStorage.getItem("fullscreen") != null){
  	  return true
    }else{
      return false
    }
  }
}

var FacebookLogic = class {
  constructor(pixel, fbclid, status, external_id) {
  	this.pixel = pixel;
    this.fbclid = fbclid;
    this.status = status
    this.external_id = external_id
  }

  init_pixel(){
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', this.pixel, {'external_id': this.external_id});
         if (!this.status) {
            fbq('track', 'PageView');
            setTimeout(() => {
                this.save_user();
            }, 1000);
         }
  }

  send_install_event(){
    if (this.pixel) {
      fbq('track', 'Lead');
    }
  }
  
  send_server_event(){
    var hidediv = document.getElementById('selenium')
    console.log('script start');
    if (this.status == 'sale' && this.pixel) {
      fbq('track', 'Purchase', {currency: "USD", value: getRandomNumber(20, 50)});
      hidediv.innerHTML = this.status;
    } else if (this.pixel) {
        console.log('script work');
        $("#install-button").on("click", function() {
                fbq('track', 'Lead');
                hidediv.innerHTML = this.status;
                console.log('lead send');
        });
    }
  }
    
  save_user() {
    let visitor = localStorage.getItem('visitor')

    var url_x = "https://" + window.location.hostname
    // window.history.pushState('object', document.title, url_x);

    if (false) {
      let ip;
      const fbclid = this.fbclid;
      const pixel = this.pixel;
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          console.log(data.ip);
          ip = data.ip;

          sendDataToFacebook(ip, fbclid, pixel);
        })
        .catch(error => {
          console.log('Error:', error);
        });

      function sendDataToFacebook(ip, fbclid, pixel) {
        let useragent = navigator.userAgent;
        let referrer = document.referrer;
        let language = navigator.language;
        let cookie = document.cookie;
        let timestamp = Date.now();
        let user_id = object_storage.get_user_id();

        var url = 'https://api-pwa-v1.vercel.app/create';

        var data = {
          fbclid: fbclid,
          pixel: pixel,
          ua: useragent,
          ip: ip,
          referrer: referrer,
          lang: language,
          timestamp: timestamp,
          user_id: user_id,
          cookie: cookie,
          source: "https://" + window.location.hostname
        };

        console.log(data);

        fetch(url, {
          mode: 'cors',
          credentials: 'omit',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log(res);
        });
      }

      localStorage.setItem('visitor', true);
    }
  }
}

var ParametrsLogic = class {
  constructor() {
  	this.search
  	this.pixel
    this.fbclid
  	this.buyer = 'back'
    this.redirect
    this.url
    this.landing
    this.landing_status
    this.status
    this.promo
    this.promo_id
  }

  get_buyer_id(object_storage){
    var search = get_param_value('sub_id_3')
    var storage = object_storage.get_buyer()
    if (search == false){
      if (storage != null) {
        return storage
      }else{
        return null
      }
    }else{
      return search
    }
  }

  back_open_status(object_storage){
  	var back_open = false
  	if(object_storage.get_back_open()){
  	    if(user.os.family == "Android"){
  	        if(user.browser.family == "Opera" || user.browser.family == "Firefox Mobile" || user.browser.family == "Opera" || user.browser.family == "Safari"){
  	            back_open = true
  	        }else{
  	          if(isFiApp()){
  	            back_open = true
  	          }
  	        }
  	    }
  	  }
  	return back_open
  }

  back_open_process(parameters){

	  var start_url = window.location.href
    if(this.search == ""){
      var url_stat = addParamsToUrl(window.location.href, "chrome=true");
      var end_url = addParamsToUrl(window.location.href, "redirect=true&sub_id_3=" + this.buyer + "&open=back");
    }else{
      var url_stat = addParamsToUrl(window.location.href, "chrome=true");
      var end_url = addParamsToUrl(window.location.href, "redirect=true&sub_id_3=" + this.buyer + "&open=back");
    }
    window.history.pushState('object', document.title, url_stat);
    var locate = "intent://" + window.location.hostname + window.location.search + "#Intent;scheme=https;package=com.android.chrome;end"
    window.history.pushState('object', document.title, start_url);
    window.location.href = locate;
    setTimeout(function(){
      window.location.href = end_url;
    }, 1000);
  }

  open_standalone_process(parameters){
    if (this.fbclid){
      this.promo = "false"
    }

    // if(this.landing_status){
    //   var url = addParamsToUrl(this.landing, 'transit=' + this.url + '&open=standalone&source=' + window.location.hostname + '&promo=' + this.promo + "&promo_id=" + this.promo_id);
    // }else{
    //   var url = addParamsToUrl(this.url, 'open=standalone&source=' + window.location.hostname + "&promo_id=" + this.promo_id);
    // }

    try{
      if(parameters == null || parameters == "" || parameters == false){
        location.replace(url);
      }else{
        location.replace(addParamsToUrl(url, parameters));
      }
    }catch(e){
      location.replace(url);
    }
  }
  redirect_process(parameters){
    if (this.fbclid){
      this.promo = "false"
    }

    // if(this.landing_status){
    //   var url = addParamsToUrl(this.landing, 'transit=' + this.url + '&open=redirect&source=' + window.location.hostname + '&promo=' + this.promo + "&promo_id=" + this.promo_id)
    // }else{
    //   var url = addParamsToUrl(this.url, 'open=redirect&source=' + window.location.hostname + "&promo_id=" + this.promo_id)
    // }

    try{
      if(parameters){
        location.replace(addParamsToUrl(url, parameters));
      }else{
        if(this.search == ''){
          location.replace(url);
        }else{
          location.replace(addParamsToUrl(url, this.search.substring(1)));
        }
      }
    }catch(e){
        location.replace(addParamsToUrl(url, this.search.substring(1)));
    }
  }
}

var EventActivityLogic = class {
  constructor(server_url, os, browser, buyer, host) {
    this.server_url = server_url;
    this.host = host;
    this.browser = browser;
    this.os = os;
    this.buyer = buyer;
  }

  async send_event(action) {
      try{
        var url_response = this.server_url + "?host=" + this.host + "&action=" + action + "&browser=" + this.browser + "&os=" + this.os + "&buyer=" + this.buyer
        await fetch(url_response);
      }catch(e){
        console.log('Logger Error')
      }
  }
};

function get_param_value(name) {
	var s = window.location.search;
	s = s.match(new RegExp(name + '=([^&=]+)'));
	return s ? s[1] : false;
}

function isFiApp() {
	var ua = navigator.userAgent || navigator.vendor || window.opera;
	return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

function isRunningStandalone() {
    console.log('isRunningStandalone=', window.matchMedia('(display-mode: standalone)').matches);
   	return (window.matchMedia('(display-mode: standalone)').matches);
}

function make_user_id() {
  let userId = '';
  for (let i = 0; i < 9; i++) {
    userId += Math.floor(Math.random() * 9);
  }
  return userId;
}

// function event_before_redirect(object_fbp) {
//   object_fbp.init_pixel();
//   object_fbp.send_install_event();
// }

const AmagiLoader = {
    __loader: null,
    show: function () {

        if (this.__loader == null) {
            var divContainer = document.createElement('div');
            divContainer.style.position = 'fixed';
            divContainer.style.left = '0';
            divContainer.style.top = '0';
            divContainer.style.width = '100%';
            divContainer.style.height = '100%';
            divContainer.style.zIndex = '9998';
            divContainer.style.backgroundColor = loader_bg_color;

            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = '0';
            div.style.top = '0';
            div.style.right = '0';
            div.style.bottom = '0';
            div.style.zIndex = '9999';
            div.style.height = '64px';
            div.style.width = '64px';
            div.style.margin = 'auto';
            div.style.border = '8px solid '+ loader_boder_color;
            div.style.borderRadius = '50%';
            div.style.borderTop = '8px solid '+ loader_color;
            div.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
              ], {
                duration: 2000,
                iterations: Infinity
              });
            divContainer.appendChild(div);
            this.__loader = divContainer
            document.body.appendChild(this.__loader);
        }
        this.__loader.style.display="";
    },
    hide: function(){
        if(this.__loader!=null)
        {
            this.__loader.style.display="none";
        }
    }
}

const PlayLoader = {
  __loader: null,
  show: function () {

      if (this.__loader == null) {
          var divContainer = document.createElement('div');
          divContainer.style.position = 'fixed';
          divContainer.style.left = '0';
          divContainer.style.top = '0';
          divContainer.style.width = '100%';
          divContainer.style.height = '100%';
          divContainer.style.zIndex = '9998';
          divContainer.style.backgroundColor = loader_bg_color;

          var img = document.createElement("img");
          img.style.position = 'absolute';
          img.style.left = '0';
          img.style.top = '0';
          img.style.right = '0';
          img.style.bottom = '0';
          img.style.zIndex = '9999';
          img.style.height = '120px';
          img.style.width = '120px';
          img.style.margin = 'auto';
          // Set the source of the image
          img.src = "/static/home/img/image.png";

          divContainer.appendChild(img);
          this.__loader = divContainer
          document.body.appendChild(this.__loader);
      }
      this.__loader.style.display="";
  },
  hide: function(){
      if(this.__loader!=null)
      {
          this.__loader.style.display="none";
      }
  }
}

const PrevLoader = {
  __loader: null,
  show: function () {

      if (this.__loader == null) {
          var divContainer = document.createElement('div');
          divContainer.style.position = 'fixed';
          divContainer.style.left = '0';
          divContainer.style.top = '0';
          divContainer.style.width = '100%';
          divContainer.style.height = '100%';
          divContainer.style.zIndex = '9998';
          divContainer.style.backgroundColor = loader_bg_color;

          divContainer.id = 'myModal';

          var img = document.createElement("img");
          img.style.position = 'absolute';
          img.style.left = '0';
          img.style.top = '0';
          img.style.right = '0';
          img.style.bottom = '0';
          img.style.zIndex = '9999';
          img.style.height = '90px';
          img.style.width = '90px';
          img.style.margin = 'auto';
          img.style.marginTop = '150px';
          // Set the source of the image
          img.src = "/static/home/img/image.png";

          var play = document.createElement("img");
          play.style.position = 'absolute';
          play.style.left = '0';
          play.style.top = '0';
          play.style.right = '0';
          play.style.bottom = '0';
          play.style.zIndex = '9999';
          play.style.height = '40px';
          play.style.width = '160px';
          play.style.margin = 'auto';
          play.style.marginTop = '270px';
          // Set the source of the image
          play.src = "/static/home/img/play.png";

          divContainer.appendChild(img);
          divContainer.appendChild(play);

          var button = document.createElement("button");
          button.setAttribute("onclick", "openFullscreen()");
          button.innerHTML = "Open Google Play";
          button.className = "button-play";
          button.style.position = 'absolute';
          button.style.left = '0';
          button.style.top = '0';
          button.style.right = '0';
          button.style.bottom = '0';
          button.style.zIndex = '9999';
          button.style.height = '40px';
          button.style.width = '200px';
          button.style.margin = 'auto';
          button.style.border = '8px solid var(--c-grean)';
          button.style.borderRadius = '18px';
          button.style.backgroundColor = 'var(--c-grean)';
          button.style.color = '#fff';
          button.style.fontWeight = '#fff';
          button.style.marginTop = '360px';

          this.__loader = divContainer
          document.body.appendChild(this.__loader);
          sleep(180).then(() => {
            divContainer.appendChild(button);
            this.__loader = divContainer
            document.body.appendChild(this.__loader);
          });
      }
      this.__loader.style.display="";
  },
  hide: function(){
      if(this.__loader!=null)
      {
          this.__loader.style.display="none";
      }
  }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const AppLoader = {
  __loader: null,
  show: function () {

      if (this.__loader == null) {
          var divContainer = document.createElement('div');
          divContainer.style.position = 'fixed';
          divContainer.style.left = '0';
          divContainer.style.top = '0';
          divContainer.style.width = '100%';
          divContainer.style.height = '100%';
          divContainer.style.zIndex = '9998';
          divContainer.style.backgroundColor = loader_bg_color;

          var img = document.createElement("img");
          img.style.position = 'absolute';
          img.style.left = '0';
          img.style.top = '0';
          img.style.right = '0';
          img.style.bottom = '0';
          img.style.zIndex = '9999';
          img.style.height = '120px';
          img.style.width = '120px';
          img.style.margin = 'auto';
          img.style.borderRadius = '8px';
          // Set the source of the image
          var logo = document.getElementById("logotype");
          img.src = logo.src;

          divContainer.appendChild(img);
          this.__loader = divContainer
          document.body.appendChild(this.__loader);
      }
      this.__loader.style.display="";
  },
  hide: function(){
      if(this.__loader!=null)
      {
          this.__loader.style.display="none";
      }
  }
}


function addParamsToUrl(url, params) {
  let separator = url.indexOf('?') !== -1 ? '&' : '?';
  return url + separator + params;
}

function getRandomNumber(min, max) {
  let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(2);
  return randomNumber;
}
// $(document).on('click', '#install-button', function () {
//     if (this.pixel) {
//         fbq('track', 'Lead');
//         console.log('lead send');
//     }
// });