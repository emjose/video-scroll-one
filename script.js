let vid = document.getElementById("video");
setInterval(function () {
	vid.currentTime = window.pageYOffset / 1000;
}, 100);
// 1000 frames, 100 milliseconds
