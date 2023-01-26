const currentDate = new Date();
const currentYearString = currentDate.getFullYear();
let currentTime = currentDate
document.querySelector("#currentYear").textContent = currentYearString;


document.querySelector("#lastModified").textContent = document.lastModified;

const dates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector(".currentDay").textContent = dates[currentDate.getDay()];

document.querySelector(".Date").textContent = currentDate.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.querySelector(".currentMonth").textContent = months[currentDate.getMonth()];

document.querySelector(".currentYear").textContent = currentDate.getFullYear();

function alternateDisplay(element){
    if (element.style.display == "block"){
        element.style.display = "none";
    }
    else{
        element.style.display = "block";
    }
}
function myFunction() {
    let x = document.getElementsByClassName("headerLink");
    let copyList = Array.from(x);
    copyList.forEach(alternateDisplay);
    let container = document.getElementsByClassName("navMenu");
    
    
}


