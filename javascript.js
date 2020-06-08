// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
// create weather object

const weather = {};

fetch(
  "https://api.weatherbit.io/v2.0/current?lat=41.41&lon=2.19&key=94732983488740c7ac18361880e08e1d"
)
  .then((response) => {
    return response.json();
  })
  .then((weatherInfo) => {
    weather.location =
      weatherInfo.data[0].city_name + " ," + weatherInfo.data[0].country_code;
    console.log(weather.location);
    weather.temperature = weatherInfo.data[0].temp;
    console.log(weather.temperature);

    weather.description = weatherInfo.data[0].weather.description;
    console.log(weather.description);
    weather.icon = weatherInfo.data[0].weather.icon;
    console.log(weather.icon);
    console.log(weatherInfo.data[0]);
    render();
  });

function render() {
  tempElement.innerHTML = weather.temperature;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = weather.location;
  iconElement.innerHTML = `<img src="icons/${weather.icon}.png"/>`; //thi api give the icon code starting with "c" so add c at the start of all the icons
}
