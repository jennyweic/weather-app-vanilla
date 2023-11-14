// 2)return results by updating city text
function search (event) {
    event.preventDefault();
    
    let searchInput = document.querySelector("#formInput");
    console.log(searchInput.value);
    let cityElement = document.querySelector("h1");
    cityElement.innerHTML =`${searchInput.value}`;
    const city = searchInput.value;



//3 add the weather API axios cdn and check console
let apiKey = "698445003bc2a9cbfcb050ae4t74oc8b";
let apiURL =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiURL).then(displayCityWeather);

}
// 1)search engine behaviour for cities by creating a form 
let formElement = document.querySelector("#search-function");
formElement.addEventListener("click", search);


//4 function to recieve response
function displayCityWeather(response){
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
currentFeelElement.innerHTML =`${Math.round(currentFeel)}`;

let currentWind = response.data.wind.speed;
console.log(currentWind);
let currentWindElement = document.querySelector("#wind-speed");
currentWindElement.innerHTML = `${Math.round(currentWind)}`;

let currentHumidity = response.data.temperature.humidity;
console.log(currentHumidity);
let currentHumidityElement = document.querySelector("#humidity");
currentHumidityElement.innerHTML = currentHumidity;


}







// make sure the date is updated aswell according to city information
// display the weather icon