const currentDate = new Date();
const currentYearString = currentDate.getFullYear();
let currentTime = currentDate.getMinutes();
document.querySelector(".currentYear").textContent = currentYearString;


document.querySelector("#lastModified").textContent = document.lastModified;

const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

if (dates[currentDate.getDay()] == "Monday" || dates[currentDate.getDay()] == "Tuesday"){
    var banner = document.createElement("h3");
    banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    banner.style.textAlign = "center";
    banner.style.backgroundColor = '#6D6A75';
    const headerRefrence = document.getElementsByTagName("header")[0];
    headerRefrence.prepend(banner);
}


const daysDisplay = document.getElementById("daysSinceLastVisit");
if (!localStorage.getItem("daysSinceVisit")){
    localStorage.setItem("daysSinceVisit", 0);
    daysDisplay.textContent = "never";
} else {
    const daysSinceVisit = (localStorage.getItem("lastYear") - currentDate.getFullYear())*365 + (localStorage.getItem("lastMonth") - currentDate.getMonth())*31 + (localStorage.getItem("lastDay") - currentDate.getDay());
    daysDisplay.textContent = daysSinceVisit*-1;
    localStorage.setItem("daysSinceVisit", 0);
    
}
localStorage.setItem("lastYear", currentDate.getFullYear());
//localStorage.setItem("lastYear", 2022); //for testing only
localStorage.setItem("lastMonth", currentDate.getMonth());
localStorage.setItem("lastDay", currentDate.getDay());

 /* this code is for setting the source for a lazy loaded picture but does not work with srcset*/
// function preloadImage(img){
//     const src = img.getAttribute("data-src");
//     if (!src){
//         return;
//     }
//     img.src = src;
// }

// const images = document.querySelectorAll(".buildingPhoto");


// const imageOptions = {};
// const imageObserver = new IntersectionObserver((entries, imageObserver) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         } else{
//             preloadImage(entry.target);
//             imageObserver.unobserve(entry.target);
//         }

//     });
    
// }, imageOptions);

// images.forEach(image => {
//     imageObserver.observe(image);
// })
