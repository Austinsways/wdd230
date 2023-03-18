// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#WeatherIcon');
const weatherCondition = document.querySelector('#WeatherCondition');
const windspeed = document.querySelector('.WindspeedValue');
const windChill = document.querySelector('#WindChillNumber');


const apiurl = "http://api.openweathermap.org/geo/1.0/direct?q=Boise&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"
const dataapi = "https://api.openweathermap.org/data/2.5/weather?lat=43.6150&lon=116.2023&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"

async function apiFetch() {
    try {
      const response = await fetch(dataapi);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
    
  }
  
  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}℉</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherCondition.innerHTML =  `<strong>${desc}</strong>`;
    windspeed.textContent = weatherData.wind.speed;
    if (weatherData.main.temp <= 50 && weatherData.wind.speed > 3){
    const windChillCalculated = 35.74+ 0.6215*weatherData.main.temp - 35.75*weatherData.wind.speed**0.16 + 0.4275*weatherData.main.temp*weatherData.wind.speed**0.16;
    windChill.textContent = windChillCalculated.toFixed(1);
    };

  }
  
  apiFetch();