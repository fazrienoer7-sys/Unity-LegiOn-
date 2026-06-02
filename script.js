/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

  const navbar = document.getElementById("navbar");

  if(!navbar) return;

  if(window.scrollY > 50){

    navbar.style.background = "rgba(0,0,0,.75)";
    navbar.style.boxShadow = "0 0 25px rgba(255,165,0,.08)";

  }else{

    navbar.style.background = "rgba(0,0,0,.35)";
    navbar.style.boxShadow = "none";

  }

});


/* =========================
   PREMIUM LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const percent = document.getElementById("loading-percent");

  if(!loader || !percent) return;

  let count = 0;

  const interval = setInterval(() => {

    count++;

    percent.innerHTML = count + "%";

    if(count >= 100){

      clearInterval(interval);

      setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

      }, 500);

    }

  }, 30);

});


/* =========================
   PARTICLES
========================= */

if(typeof particlesJS !== "undefined"){

  particlesJS("particles-js", {

    particles: {

      number: {
        value: 25
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
        speed: 1

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

}


/* =========================
   MUSIC BUTTON
========================= */

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

if(music && musicBtn){

  music.volume = 0.35;

  musicBtn.addEventListener("click", () => {

    if(music.paused){

      music.play();
      musicBtn.innerHTML = "🔊";

    }else{

      music.pause();
      musicBtn.innerHTML = "🔇";

    }

  });

}


/* =========================
   SCROLL REVEAL
========================= */

function revealSections(){

  const reveals =
  document.querySelectorAll(".reveal");

  reveals.forEach((item) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    item.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      item.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();


/* =========================
   WHATSAPP FORM
========================= */

const joinForm =
document.getElementById("joinForm");

if(joinForm){

  joinForm.addEventListener(
    "submit",
    function(e){

      e.preventDefault();

      const name =
      document.getElementById("name")?.value || "";

      const age =
      document.getElementById("age")?.value || "";

      const rank =
      document.getElementById("rank")?.value || "";

      const gender =
      document.getElementById("gender")?.value || "";

      const game =
      document.getElementById("game")?.value || "";

      const reason =
      document.getElementById("reason")?.value || "";

      const msg =

`JOIN UNITY LEGION

Nama : ${name}
Umur : ${age}
Rank/Level : ${rank}
Gender : ${gender}
Game : ${game}

Alasan Join :
${reason}`;

      window.open(
        "https://wa.me/6285780732826?text=" +
        encodeURIComponent(msg),
        "_blank"
      );

    }
  );

}


/* =========================
   DIGITAL CLOCK
========================= */

function updateClock(){

  const now = new Date();

  const hours =
  String(now.getHours())
  .padStart(2,"0");

  const minutes =
  String(now.getMinutes())
  .padStart(2,"0");

  const seconds =
  String(now.getSeconds())
  .padStart(2,"0");

  const timeString =
  `${hours}:${minutes}:${seconds}`;

  const options = {

    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"

  };

  const dateString =
  now.toLocaleDateString(
    "id-ID",
    options
  );

  const clock1 =
  document.getElementById("clock");

  const date1 =
  document.getElementById("date");

  const clock2 =
  document.getElementById("digitalClock");

  const date2 =
  document.getElementById("currentDate");

  if(clock1) clock1.innerText = timeString;
  if(date1) date1.innerText = dateString;

  if(clock2) clock2.innerText = timeString;
  if(date2) date2.innerText = dateString;

}

setInterval(updateClock, 1000);
updateClock();


/* =========================
   MOBILE HAMBURGER
========================= */

const toggle =
document.getElementById("menu-toggle");

const nav =
document.querySelector("#navbar nav");

if(toggle && nav){

  toggle.addEventListener(
    "click",
    () => {

      nav.classList.toggle("active");

      if(nav.classList.contains("active")){

        toggle.textContent = "✖";

      }else{

        toggle.textContent = "☰";

      }

    }
  );

}


/* =========================
   READY
========================= */

console.log(
  "Unity~LegiOn` Website Ready!"
);
