var fundoVideo = document.getElementById("fundoVideo");
var videoOriginal = document.getElementById("videoOriginal");
var videoExpandido = document.getElementById("videoExpandido");
var fecharVideo = document.getElementById("fecharVideo");

videoOriginal.addEventListener("play", function() {

    videoOriginal.pause();

    fundoVideo.style.display = "flex";

    videoExpandido.currentTime = videoOriginal.currentTime;

    videoExpandido.play();

});

fecharVideo.addEventListener("click", function() {

    fundoVideo.style.display = "none";

    videoExpandido.pause();

});

fundoVideo.addEventListener("click", function(event) {

    if (event.target === fundoVideo) {

        fundoVideo.style.display = "none";

        videoExpandido.pause();

    }

});