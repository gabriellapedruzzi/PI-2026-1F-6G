document.addEventListener("DOMContentLoaded", function () {

    const menus = document.querySelectorAll(".menu-item");

    menus.forEach(function (menu) {

        menu.addEventListener("toggle", function () {

            if (!menu.open) {
                return;
            }

            const acompanharMenu = setInterval(function () {

                const submenu = menu.querySelector(".submenu");

                if (!submenu) {
                    clearInterval(acompanharMenu);
                    return;
                }

                const rect = submenu.getBoundingClientRect();

                // Espaço que queremos deixar entre o submenu
                // e a parte inferior da tela
                const margem = 25;

                // Se o final do submenu estiver escondido
                if (rect.bottom > window.innerHeight - margem) {

                    const distancia = 
                        rect.bottom - (window.innerHeight - margem);

                    window.scrollBy({
                        top: distancia,
                        behavior: "smooth"
                    });

                } else {

                    // Quando o submenu estiver totalmente visível,
                    // paramos de verificar
                    clearInterval(acompanharMenu);

                }

            }, 50);

            // Segurança: para de verificar depois de 2 segundos
            setTimeout(function () {
                clearInterval(acompanharMenu);
            }, 2000);

        });

    });

});




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


