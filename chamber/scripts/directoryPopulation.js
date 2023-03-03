
const url = 'https://austinsways.github.io/wdd230/chamber/data/data.json';

async function populateBuisnesses() {
    //fetch the data
    const response = await fetch(url);
    const data = await response.json();
    const buisnessdata = data["Buisness's"] //the buisness's data in our data structure

    //lets populate the table.
    const buisnesses = document.getElementsByClassName("buisness");
    const titles = document.getElementsByClassName("buisnessTitles");
    const logos = document.getElementsByClassName("buisnessLogo");
    const addresses = document.getElementsByClassName("address");
    const phoneNumbers = document.getElementsByClassName("phone");
    const website = document.getElementsByClassName("website");
    console.table(buisnessdata);
    for (let index = 0; index < buisnesses.length; index++) {
        titles[index].textContent = buisnessdata[index]["name"];
        logos[index].src = buisnessdata[index]["logoPath"];
        addresses[index].textContent = buisnessdata[index]["address"];
        phoneNumbers[index].textContent = buisnessdata[index]["phone"];
        website[index].textContent = website[index]["website"];
        
    }
}

populateBuisnesses();


//this is to switch views
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("directoryWrapper");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.style.display = "grid";
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.style.display = "flex";
    display.style.flexDirection = "column";
}
    
