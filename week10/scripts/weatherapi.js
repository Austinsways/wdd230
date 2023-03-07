// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiurl = "http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"
const dataapi = "https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&appid=961d1bc087b4711ff71e6e18e3c80512&units=imperial"

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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
  
  apiFetch();