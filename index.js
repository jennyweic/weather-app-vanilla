// 2)return results by updating city text
function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#formInput");
  console.log(searchInput.value);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = `${searchInput.value}`;
  const city = searchInput.value;

  //3 add the weather API axios cdn and check console
  let apiKey = "698445003bc2a9cbfcb050ae4t74oc8b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(displayCityWeather);
}
// 1)search engine behaviour for cities by creating a form
let formElement = document.querySelector("#search-function");
formElement.addEventListener("click", search);

//4 function to recieve response
function displayCityWeather(response) {
  console.log(response);

  let currentTemperature = response.data.temperature.current;
  console.log("Current Temperature is", currentTemperature);
  let currentTempElement = document.querySelector("#temperature");
  currentTempElement.innerHTML = `${Math.round(currentTemperature)}`;

  //e.g. broken clouds
  let currentDescription = response.data.condition.description;
  console.log(currentDescription);
  let currentDescriptionElement = document.querySelector("#decription");
  currentDescriptionElement.innerHTML = `${currentDescription}`;

  let currentFeel = response.data.temperature.feels_like;
  console.log(currentFeel);
  let currentFeelElement = document.querySelector("#feels-like-degree");
  currentFeelElement.innerHTML = `${Math.round(currentFeel)}`;

  let currentWind = response.data.wind.speed;
  console.log(currentWind);
  let currentWindElement = document.querySelector("#wind-speed");
  currentWindElement.innerHTML = `${Math.round(currentWind)}`;

  let currentHumidity = response.data.temperature.humidity;
  console.log(currentHumidity);
  let currentHumidityElement = document.querySelector("#humidity");
  currentHumidityElement.innerHTML = currentHumidity;

  //Date and Time
  let newTimeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  newTimeElement.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
  let newDayElement = document.querySelector("#days-of-the-week");
  newDayElement.innerHTML = formatDate(date);

  function formatDate(date) {
    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
    let day = days[date.getDay()];

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[date.getMonth()];

    let today = date.getDate();

    let year = date.getFullYear();

    return `${day}, ${month} ${today} ${year}`;
  }

  //weather icon image
  let iconElement = document.querySelector("#weather-icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" id="icon" />`;

  //7b call the getForecast data inside the search results
  console.log(getForecast(response.data.city));
}

//7a create new forecast function for API
function getForecast(city) {
  let apiKey = "698445003bc2a9cbfcb050ae4t74oc8b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios(apiUrl).then(displayForecast);
}

//6 create a new function for forecast
function displayForecast(response) {
  console.log(response.data);
  //   let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let forecastHtml = "";

  response.data.daily.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="forecast-grid>
    <div class="forecast-day">${day}</div>
    <div class="icons"><img src="" id="forecast-icons"/></div>
    <div class="forecast-temperature">
    <span class="forecast-temperature-max">${Math.round(
      day.temperature.minimum
    )}°C</span>
    <span class="forecast-temperature-min">${Math.round(
      day.temperature.maximum
    )}°C</span>
     </div>          
    </div>
`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();
