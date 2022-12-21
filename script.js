//Initialize AOS
AOS.init();

//Upcoming Event Timer
const countdown = () => {
  const countDate = new Date("December 25, 2022 08:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //Time calculation
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    500
  );
});

//Get Current Year
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Welcome Animation with Typed.js
var typed = new Typed(".auto-type", {
  strings: ["Welcome", "Akwaaba", "Bo oba!"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Slogan Animation with Typed.js
var typed = new Typed(".slogan", {
  strings: [
    "Raising a Righteous Generation",
    "Come and be filled with the Holy Spirit.",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Follow Us animation with Typed.js
var typed = new Typed(".followusanimation", {
  strings: ["Follow us"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
