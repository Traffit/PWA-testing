var current_style = "default_state";


document.addEventListener("DOMContentLoaded", function(event) {
    //sources();
    styles();

});



function sources() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var style = urlParams.get('style');
    if (style != null) {
        current_style = style;
    }
    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        var newSrc = imgs[i].src.replace(/default_state/g, current_style);
        imgs[i].src = newSrc;
    }
    var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    list.forEach(function(element) {
        element.setAttribute('href', "styles/" + current_style + "/favicon_16.png");
    });
}


function styles() {
    if (this[current_style].logo_in_button) {
        document.getElementById("spin_text").style.display = "none";
        document.getElementById("logo_top").style.display = "none";
        document.getElementById("logo_in_button").style.display = "block";
    }
    if (!this[current_style].ribbon) {
        document.getElementById("ribbon").style.display = "none";
    }
    if (this[current_style].top_text) {
        document.getElementById("top_text").style.display = "block";
        document.getElementById("logo_top").style.display = "none";
        document.getElementById("ribbon").style.display = "none";
    }
    if (!this[current_style].spin_background) {
        document.getElementById("bg").classList.remove('rotation_bg');
    }
    var r = document.querySelector(':root');
    r.style.setProperty('--background', this[current_style].background_color);
    r.style.setProperty('--bright_ellow', this[current_style].gradient_start_color);
    r.style.setProperty('--darck_ellow', this[current_style].gradient_end_color);

    document.getElementById('top_text').innerHTML = this[current_style].text_ribbon_top;
    document.getElementById('text_in_ribbon').innerHTML = this[current_style].text_ribbon_top;
    document.getElementById('win1_text_header').innerHTML = this[current_style].text_first_popup_top;
    document.getElementById('description1').innerHTML = this[current_style].text_first_popup_description;
    document.getElementById('win_button1').innerHTML = this[current_style].text_first_popup_button;
    document.getElementById('win2_text_header').innerHTML = this[current_style].text_second_popup_top;
    document.getElementById('description2').innerHTML = this[current_style].text_second_popup_description;
    document.getElementById('win_button2').innerHTML = this[current_style].text_second_popup_button;
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].href = this[current_style].link_to;
    }
}



