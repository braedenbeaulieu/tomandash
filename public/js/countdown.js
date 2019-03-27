$(document).ready( function() {

// Countdown to Wedding Day
  const countDownDate = new Date("June 27, 2020 16:30:00").getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "&nbspDays " + hours + "&nbspHours " + minutes + "&nbspMinutes " + seconds + "&nbspSeconds ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "   ";
    }
  }, 1000);

});
