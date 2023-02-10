

const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("WindSpeedNumber");
const windChill = document.getElementById("WindChillNumber");

temperature.addEventListener("change", calculateWindchill);
windSpeed.addEventListener("change", calculateWindchill);

function calculateWindchill(){
    if (temperature.value<=50 && windSpeed.value>3){
        const windChillCalculated = 35.74+ 0.6215*temperature.value - 35.75*windSpeed.value**0.16 + 0.4275*temperature.value*windSpeed.value**0.16;
        windChill.textContent = windChillCalculated;
    }
    else{
        windChill.textContent = "N/A";
    }
}


