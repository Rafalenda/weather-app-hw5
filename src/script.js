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

function showCityWeather(response) {
  console.log(response.data);
  document.querySelector("#city-h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

//make an API call to OpenWeather API
//when I get the HTTP response, it displays the city name and the temperature
function searchCity(event) {
  event.preventDefault();
  let apiKey = `a1bb6d3b332cde5802976e6f7b07f502`;
  let city = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityWeather);
}

let form = document.querySelector("#form-search");
form.addEventListener("submit", searchCity);
