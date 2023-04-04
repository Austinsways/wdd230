// select HTML elements in the document
const currentTemp = document.querySelector('.CurrentTemperature');

const weatherCondition = document.querySelector('#WeatherCondition');
const CurrentHumidity = document.querySelector('.CurrentHumidity');



const apiurl = "http://api.openweathermap.org/geo/1.0/direct?q=Carlsbad&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"
const dataapi = "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=117.3506&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"
const weeklyForecastApiCall = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=117.3506&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial";

async function apiFetch() {
    try {
      const CurrentInfoResponse = await fetch(dataapi);
      const weeklyForecastResponse = await fetch(weeklyForecastApiCall);
      if (CurrentInfoResponse.ok && weeklyForecastResponse.ok) {
        const data = await CurrentInfoResponse.json();
        console.log(data); // this is for testing the call
        displayCurrentResults(data);
        const weeklyForecastData = await weeklyForecastResponse.json();
        displayWeeklyForecast(weeklyForecastData);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    
  }
  
  function displayCurrentResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}℉</strong>`;
    const desc = weatherData.weather[0].description;
    weatherCondition.innerHTML =  `<strong>${desc}</strong>`;
    const humidity = weatherData.main.humidity;
    CurrentHumidity.innerHTML = `<strong>${humidity}</strong>`;

    
    
    
    

  }
  function displayWeeklyForecast(weeklyForecastData){
    const temperatureList = document.getElementsByClassName("temperature");
    const humidityList = document.getElementsByClassName("humidity");
    for (i = 0; i<3; i++) {
        const temperature = weeklyForecastData.list[i].main.temp;
        const humidity = weeklyForecastData.list[i].main.humidity;
        temperatureList[i].innerHTML = `<strong>${temperature.toFixed(0)}℉</strong>`;
        humidityList[i].innerHTML = `<strong>${humidity}</strong>`;
    }
}
  
  apiFetch();