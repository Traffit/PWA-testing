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
    $this.parent().parent().find(".program__bottom").addClass("none");
    $this.parent().find(".pr-cancel").css("display", "none");
    $this.parent().find(".pr-delete").css("display", "flex");
    $this.parent().find(".pr-open").css("display", "flex").css("color", "#fff");
    $this.css("background", "var(--c-grean)");
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
	  $($this).addClass("click-none").css("background", "#e3e3e3");
	  $($this).parent().parent().find(".program-logo img").addClass("transform");
	  $($this).parent().parent().find(".showbox").css("opacity", "1");
	  $($this).parent().parent().find(".donut").addClass("rotate");
	  $($this).parent().parent().addClass("collumn");
	  $($this).parent().parent().find(".program-info-first").addClass("none");
	  $($this).parent().parent().find(".program-info-instal").addClass("open");
	  $this.parent().find(".pr-cancel").css("display", "flex");
	  $this.find(".pr-open").css("display", "flex").css("color", "var(--c-gray2)");
	  $this.find(".pr-install").css("display", "none");
	  $($this).parent().addClass("click");

	  
	  $($this).parent().parent().parent().parent().parent().find(".description > .container > .program__bottom").removeClass("none");
	  ezTimeout1 = setTimeout(function() { 
	    $this.parent().parent().find(".program__bottom").addClass("none");
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
	    $this.parent().find(".pr-open").css("display", "flex").css("color", "#fff");
	    $this.css("background", "var(--c-grean)");
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
    if(localStorage.getItem("user_id") != null){
      return localStorage.getItem("user_id")
    }else{
      return false
    }
  }
}

var FacebookLogic = class {
  constructor(pixel) {
  	this.pixel = pixel;
  }

  send_fb_event_allinstall(){
	if(this.pixel != null || this.pixel != undefined){
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
   	fbq('init', this.pixel);
	fbq('track', 'PageView');
	fbq('track', 'Purchase', {currency: "USD", value: 30.00});
	}
  }

  send_fb_event_realinstall(){
	if(this.pixel != null || this.pixel != undefined){
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', this.pixel);
	fbq('track', 'Subscribe', {currency: "USD", value: 50.00, predicted_ltv: 10.00});
	}
  }
}

var ParametrsLogic = class {
  constructor() {
  	this.search
  	this.pixel
  	this.buyer
    this.redirect
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
    if(window.location.search == ""){
      var url_stat = window.location.href + "?chrome=true"
    }else{
      var url_stat = window.location.href + "&chrome=true"
    }
    window.history.pushState('object', document.title, url_stat);
    var locate = "intent://" + window.location.hostname + window.location.search + "#Intent;scheme=https;package=com.android.chrome;end"
    window.history.pushState('object', document.title, start_url);
    window.location.href = locate;
    setTimeout(function(){
      if(window.location.search == ""){
        var end_url = window.location.href + "?redirect=true&sub_id_3=back";
      }else{
        var end_url = location.href.split("?")[0] + "?redirect=true&sub_id_3=back";
      }
      window.location.href = end_url;
    }, 1000);
  }

  open_standalone_process(parameters, url){
   try{
      if(parameters == null || parameters == "" || parameters == false){
        var ready_url = url + "?source=" + window.location.hostname
        location.replace(ready_url);
      }else{
        var ready_url = url + "?" + parameters + "&source=" + window.location.hostname
        location.replace(ready_url);
      }
    }catch(e){
      location.replace(url + "?source=" + window.location.hostname);
    }
  }

  redirect_process(parameters, url){
    try{
      if(parameters == null || parameters == "" || parameters == false){
        location.replace(url + window.location.search);
      }else{
        var ready_url = url + "?" + parameters + "&source=" + window.location.hostname;
        location.replace(ready_url);
      }
    }catch(e){
        location.replace(url + window.location.search);
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
      var url_response = this.server_url + "?host=" + this.host + "&action=" + action + "&browser=" + this.browser + "&os=" + this.os + "&buyer=" + this.buyer
      await fetch(url_response);
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
   	return (window.matchMedia('(display-mode: standalone)').matches);
}

function make_user_id() {
  var text;
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



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
            div.style.borderTop = '8px solid var(--c-grean)';
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


function sendStats(statsType='visits') {
  const click_registered = localStorage.getItem('click_registered');

  if (statsType == 'visits' || !click_registered) {
    try {
      var url = 'update-landing-stats/'
      var data = {
        stats_type: statsType,
        landing_name: window.location.pathname + window.location.search
      }

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (statsType == 'clicks') {
        localStorage.setItem('click_registered', 1);
      }
    } catch(e) {
        console.log("An error occurred: " + e.message);
      }
  }
}