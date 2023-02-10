const time = new Date();
const hour = time.getHours(); // Get Current Hours
const minute = time.getMinutes(); // Get Current Minutes
const weekDay = time.getDay(); // Get Week Day
const monthDay = time.getDate(); // Get Day of the Month
const month = time.getMonth(); // Get Month
const year = time.getFullYear(); // Get Year

function changeTime() {

  const currentDay = document.querySelector('#day');
  const currentDate = document.querySelector('#full-date');

  // Reset Time
  let a;
  let time;
  const clockHour = document.querySelector('.time');
  setInterval(() => {
    a = new Date();
    time = ("00" + a.getHours()).slice(-2) + ':' + ("00" + a.getMinutes()).slice(-2);
    clockHour.innerHTML = time;
  }, 1000);

  // Reset Week Day
  switch (weekDay) {
    case 1:
      currentDay.innerHTML = "Monday";
      break;
    case 2:
      currentDay.innerHTML = "Tuesday";
      break;
    case 3:
      currentDay.innerHTML = "Wednesday";
      break;
    case 4:
      currentDay.innerHTML = "Thursday";
      break;
    case 5:
      currentDay.innerHTML = "Friday";
      break;
    case 6:
      currentDay.innerHTML = "Saturday";
      break;
    default:
      currentDay.innerHTML = "Sunday";
      break;
  }

  // Reset Day of the Month
  let dayOfMonth = monthDay;

  // Reset Month
  let defaultMonth;

  switch (month) {
    case 0:
      defaultMonth = "01";
      break;
    case 1:
      defaultMonth = "02";
      break;
    case 2:
      defaultMonth = "03";
      break;
    case 3:
      defaultMonth = "04";
      break;
    case 4:
      defaultMonth = "05";
      break;
    case 5:
      defaultMonth = "06";
      break;
    case 6:
      defaultMonth = "07";
      break;
    case 7:
      defaultMonth = "08";
      break;
    case 8:
      defaultMonth = "09";
      break;
    case 9:
      defaultMonth = "10";
      break;
    case 10:
      defaultMonth = "11";
      break;
    default:
      defaultMonth = "12";
      break;
  }

  // Reset Year
  let defaultYear = year;

  // Reset full Date
  currentDate.innerHTML = `${dayOfMonth}/${defaultMonth}/${defaultYear}`

}

setInterval(changeTime, 1000);

// change style
const bodyStyle = document.querySelector('.morning')
const SUN_MOON = document.querySelector('.sun-moon')

if (hour >= 6 && hour < 12) {
  bodyStyle.classList.toggle("morning")
  SUN_MOON.classList.toggle("day")
} else if (hour >= 12 && hour < 19) {
  bodyStyle.classList.toggle("afternoon")
  SUN_MOON.classList.toggle("day")
} else {
  bodyStyle.classList.toggle("night")
  SUN_MOON.classList.toggle("night")
}
