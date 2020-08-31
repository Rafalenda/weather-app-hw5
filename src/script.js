//Display the current date and time >>> Tuesday 16: 00
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  if (currentMinute <= 9) {
    currentMinute = `0${currentMinute}`;
  }

  let formattedDate = `${currentDay} ${currentHour}:${currentMinute}`;

  return formattedDate;
}

let displayDate = document.querySelector("#real-date");
displayDate.innerHTML = formatDate(new Date());

//////////////////////////////////////////////////////////

function showCity(temperat, city) {
  let temperature = Math.round(temperat.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temperature;
}

// function showCity(temperat, city) {
//   let temperature = Math.round(temperat.data.main.temp);
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = temperature;

//   let city = city.name;
//   let cityElement = document.querySelector("#input-city");
//   cityElement.innerHTML = city;
// }

function getCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#input-city");

  let apiKey = `a1bb6d3b332cde5802976e6f7b07f502`;
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityElement.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCity);
}

let button = document.querySelector("#form-search");
button.addEventListener("submit", getCity);

navigator.geolocation.getCurrentPosition(showPosition);

let button = document.querySelector("#current-location");
button.addEventListener("click", showPosition);
