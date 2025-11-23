let video = document.querySelector(".video");

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video.loop = false;
	video.load();
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Video Playing");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Video Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log("Video Speed: " + (video.playbackRate * 100) + "%");
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log("Video Speed: " + (video.playbackRate * 100) + "%");
});

document.querySelector("#skip").addEventListener("click", function () {
	if ((video.currentTime + 10) > video.duration) {
		video.currentTime = 0;
		console.log("Current video location (seconds): " + video.currentTime);
	}
	else {
		video.currentTime += 10;
		console.log("Current video location (seconds): " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is muted");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	video.volume = document.querySelector("#slider").value / 100;
})

document.querySelector("#vintage").addEventListener("click", function (){
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function (){
	video.classList.remove("oldSchool");
});