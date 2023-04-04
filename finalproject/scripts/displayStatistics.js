
const todaysDate = new Date();
const daysSinceLastDrinkDisplay = document.querySelector(".DaysSinceLastDrink");
if (!localStorage.getItem("daysSinceLastDrink")){
    localStorage.setItem("daysSinceLastDrink", 0);
    daysSinceLastDrinkDisplay.textContent = "never";
} else {
    const daysSinceLastDrink = (localStorage.getItem("lastYear") - todaysDate.getFullYear())*365 + (localStorage.getItem("lastMonth") - todaysDate.getMonth())*31 + (localStorage.getItem("lastDay") - todaysDate.getDay());
    daysSinceLastDrinkDisplay.textContent = daysSinceLastDrink;
    localStorage.setItem("daysSinceLastDrink", 0);
    
}
localStorage.setItem("lastYear", todaysDate.getFullYear());
//localStorage.setItem("lastYear", 2022); //for testing only
localStorage.setItem("lastMonth", todaysDate.getMonth());
localStorage.setItem("lastDay", todaysDate.getDay());

const specialtyDrinksDisplay = document.querySelector(".DrinksCreated");
if (!localStorage.getItem("TotalDrinks")){
    localStorage.setItem("TotalDrinks", 0);
    specialtyDrinksDisplay.textContent = 0;
} else {
    const drinksHad = Number(localStorage.getItem("TotalDrinks"));
    specialtyDrinksDisplay.textContent = drinksHad;
}