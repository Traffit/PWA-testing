var loader_bg_color;
var loader_boder_color;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && module_dark_theme) {
    loader_bg_color = '#131313';
    loader_boder_color = 'rgb(40 40 40)';
    loader_color = '#a8c8fb';
} else {
    loader_bg_color = 'rgb(250 250 250)';
    loader_boder_color = '#e1e1e1';
    loader_color = '#0b57cf';
}

var r = document.querySelector(':root');
function dark_theme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        r.style.setProperty('--white', '#131313');
        r.style.setProperty('--black', '#ffffff');
        r.style.setProperty('--black_interface', '#c9c9c9');
        r.style.setProperty('--black_text', '#e3e3e3');
        r.style.setProperty('--black_text_box', '#8f8f8f');
        r.style.setProperty('--filter_for_black', 'contrast(0) brightness(2)');
        r.style.setProperty('--gray', '#d0d0d0');
        r.style.setProperty('--gray_text', '#737373');
        r.style.setProperty('--boder', '#737373');
        r.style.setProperty('--opacity', '.7');
        r.style.setProperty('--progress_bg', '#303030');
        r.style.setProperty('--star-color_my', '#2e2e2e');
        r.style.setProperty('--review__more', '#333333');
        r.style.setProperty('--primary_text', '#a8c8fb');
        r.style.setProperty('--primary_back', '#a8c8fb');
        r.style.setProperty('--star-background', '#a8c8fb');
        r.style.setProperty('--gray_back', '#454545');
        r.style.setProperty('--gray_text', '#939393');
        r.style.setProperty('--white_text', '#1f1f1f');
        r.style.setProperty('--shadow_img', '#ffffff00');
        r.style.setProperty('--between', '#474747');
        r.style.setProperty('--other_text', '#939393');
        
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.donut-hole { opacity: 0!important; }';
        document.getElementsByTagName('head')[0].appendChild(style);

        var style1 = document.createElement('style');
        style1.type = 'text/css';
        style1.innerHTML = '.donut-segment-2 { stroke: var(--primary_text)!important; }';
        document.getElementsByTagName('head')[0].appendChild(style1);

        var style2 = document.createElement('style');
        style2.type = 'text/css';
        style2.innerHTML = '.donut-ring { opacity: 0!important; }';
        document.getElementsByTagName('head')[0].appendChild(style2);

        var style3 = document.createElement('style');
        style3.type = 'text/css';
        style3.innerHTML = '.path { stroke: var(--primary_text)!important; }';
        document.getElementsByTagName('head')[0].appendChild(style3);

        var style4 = document.createElement('style');
        style4.type = 'text/css';
        style4.innerHTML = '.pr-open { background: none!important; color: rgb(93 93 93); }';
        document.getElementsByTagName('head')[0].appendChild(style4);

        var stylex = document.createElement('style');
        stylex.type = 'text/css';
        stylex.innerHTML = '.more-btn { color: #d0d0d0!important; }';
        document.getElementsByTagName('head')[0].appendChild(stylex);

        var style5 = document.createElement('style');
        style5.type = 'text/css';
        style5.innerHTML = '.btn.program-open { background: #2f2f2f; }';
        document.getElementsByTagName('head')[0].appendChild(style5);
        var style8 = document.createElement('style');
        style8.type = 'text/css';
        style8.innerHTML = '.btn.program-cancel { background: none!important;}';
        document.getElementsByTagName('head')[0].appendChild(style8);

        if (localStorage.getItem("installed") === "true"){
            var style9 = document.createElement('style');
            style9.type = 'text/css';
            style9.innerHTML = '.pr-open { color: rgb(0 0 0); }';
            document.getElementsByTagName('head')[0].appendChild(style9);
        }

        function changecolor() {
            setTimeout(function () {
                var style6 = document.createElement('style');
                style6.type = 'text/css';
                style6.innerHTML = '.btn.program-cancel { background: none!important; border: 1px solid #5d5d5d!important;}';
                document.getElementsByTagName('head')[0].appendChild(style6);
                var style7 = document.createElement('style');
                style7.type = 'text/css';
                style7.innerHTML = '.program-wait { color: #8d8d8d!important;}';
                document.getElementsByTagName('head')[0].appendChild(style7);
                document.getElementById("pr-open").style.background = "var(--gray_text)"
            }, 10)
            setTimeout(function () {
                var style4 = document.createElement('style');
                style4.type = 'text/css';
                style4.innerHTML = '.pr-open { color: rgb(0 0 0); }';
                document.getElementsByTagName('head')[0].appendChild(style4);
            }, 18300)
        }
        document.getElementById("pr-install").addEventListener("click", changecolor);

    }
};
window.onload = function(){
    if(module_dark_theme){
        dark_theme();
    }
};