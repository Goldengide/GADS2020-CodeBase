
function playclip() {
    
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "all_the_way.mp3";
 }
}

else {
{
// var audio = document.getElementsByTagName("audio")[0];
var audio = document.getElementById("music");
audio.play();
}
}
}

function pauseclip() {
    // var audio = document.getElementsByTagName("audio")[0];
    var audio = document.getElementById("music");
    audio.pause();
}
