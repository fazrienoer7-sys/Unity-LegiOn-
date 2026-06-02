/* NAVBAR */

window.addEventListener("scroll", function(){

  const navbar =
  document.getElementById("navbar");

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(0,0,0,.75)";

    navbar.style.boxShadow =
    "0 0 25px rgba(255,165,0,.08)";

  }

  else{

    navbar.style.background =
    "rgba(0,0,0,.35)";

    navbar.style.boxShadow =
    "none";

  }

});

/* PREMIUM LOADER */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  const percent =
  document.getElementById(
    "loading-percent"
  );

  let count = 0;

  const interval = setInterval(() => {

    count++;

    percent.innerHTML =
    count + "%";

    if(count >= 100){

      clearInterval(interval);

      setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility =
        "hidden";

      }, 500);

    }

  }, 30);

});

/* PARTICLES */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 55
    },

    color: {
      value: "#ff9900"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: 3
    },

    line_linked: {

      enable: true,

      distance: 150,

      color: "#ff9900",

      opacity: 0.2,

      width: 1

    },

    move: {

      enable: true,

      speed: 2

    }

  },

  interactivity: {

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      }

    }

  },

  retina_detect: true

});

/* MUSIC */

const music =
document.getElementById("bg-music");

const musicBtn =
document.getElementById("music-toggle");

music.volume = 0.35;

musicBtn.addEventListener("click", () => {

  if(music.paused){

    music.play();

    musicBtn.innerHTML = "🔊";

  }

  else{

    music.pause();

    musicBtn.innerHTML = "🔇";

  }

});

/* SCROLL REVEAL */

function revealSections(){

  const reveals =
  document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    const windowHeight =
    window.innerHeight;

    const revealTop =
    reveals[i]
    .getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      reveals[i]
      .classList.add("active");

    }

  }

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

console.log(
  "Unity~LegiOn` Website Ready!"
);

document.getElementById("joinForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const rank = document.getElementById("rank").value;
  const gender = document.getElementById("gender").value;
  const game = document.getElementById("game").value;
  const reason = document.getElementById("reason").value;

  const msg =
`JOIN UNITY LEGION

Nama: ${name}
Umur: ${age}
Rank: ${rank}
Gender: ${gender}
Game: ${game}
Alasan: ${reason}`;

  window.open("https://wa.me/6285780732826?text=" + encodeURIComponent(msg));
});

setInterval(() => {
  const now = new Date();

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  if(clock){
    clock.innerText = now.toLocaleTimeString();
  }

  if(date){
    date.innerText = now.toLocaleDateString();
  }

}, 1000);

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("#navbar nav");

toggle.addEventListener("click", () => {

  nav.classList.toggle("active");

  if(nav.classList.contains("active")){
    toggle.textContent = "✖";
    toggle.style.color = "orange";
  } else {
    toggle.textContent = "☰";
    toggle.style.color = "orange";
  }

});

function updateClock() {
  const now = new Date();

  // JAM
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  // TANGGAL (INDONESIA STYLE)
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  const dateString = now.toLocaleDateString('id-ID', options);

  // OUTPUT KE HTML
  document.getElementById("digitalClock").innerText = timeString;
  document.getElementById("currentDate").innerText = dateString;
}

// update tiap 1 detik
setInterval(updateClock, 1000);

// pertama kali jalan langsung
updateClock();