// Countdown
const countdown = () => {
  // const for date plus the time which is 00:00:00
  const futureDate = new Date("June 28, 2022  00:00:00").getTime();
  const presentDate = new Date().getTime();
  const gap = futureDate - presentDate;

  // Time calculation
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // This block calculates the actual gap
  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap % day) / hour);
  // gap % is for the remainder of days then we divite by hour
  //Math.floor Rounds off the calculation of days
  const minuteText = Math.floor((gap % hour) / minute);
  const secondText = Math.floor((gap % minute) / second);

  //Applying the calculation to our page
  document.querySelector("#day").innerText = `${dayText}  Day(s)`;
  document.querySelector("#hour").innerText = `${hourText} Hour(s)`;
  document.querySelector("#minute").innerText = `${minuteText} Minutes(s)`;
  document.querySelector("#second").innerText = `${secondText} Second(s)`;
};

//SetInterval will execute the function after every 1 second(1000 milliseconds)
setInterval(countdown, 1000);


//Responsive navigation bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
