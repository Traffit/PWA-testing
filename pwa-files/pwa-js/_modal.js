// Get the modal
var modal = document.getElementById("myModal");

function openFullscreen() {
  object_storage.set_fullscreen();
  var elem = document.body;
  modal.style.display = "none";
  var show = true;
  if (show) {
    PlayLoader.show();
    setTimeout(() => {
      PlayLoader.hide();
    }, 2500);
  }
  if (elem.requestFullscreen) {
    document.documentElement.requestFullscreen({ navigationUI: "hide" });
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
