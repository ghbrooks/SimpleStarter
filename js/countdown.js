// State countdown date
const countDownDate = new Date("Mar 6, 2022 00:00:00");

const x = setInterval(function() {

    // Get today's date and time
    const dateAndTimeNow = new Date().getTime();
      
    // Find the distance between now and the count down date
    const timeDifference = countDownDate - dateAndTimeNow;
      
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("hero__time-days").innerHTML = days;
    document.getElementById("hero__time-hours").innerHTML = hours;
    document.getElementById("hero__time-minutes").innerHTML = minutes;
    document.getElementById("hero__time-seconds").innerHTML = seconds;
         

    // If the count down is over, write some text 
    if (timeDifference < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);