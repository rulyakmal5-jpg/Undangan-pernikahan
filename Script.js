// HITUNG MUNDUR
var weddingDate = new Date("Jul 06, 2030 09:00:00").getTime();

var countdown = setInterval(() => {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Selamat Menempuh Hidup Baru!";
    }
}, 1000);


// MUSIK KLIK-PLAY
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");
let play = false;

musicBtn.addEventListener("click", () => {
    if (!play){
        music.play();
        play = true;
        musicBtn.classList.add("playing");
    } else {
        music.pause();
        play = false;
        musicBtn.classList.remove("playing");
    }
});