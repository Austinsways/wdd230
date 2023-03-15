
const url = 'https://austinsways.github.io/wdd230/chamber/data/data.json';

async function createBuisnessHTML(){
    const response = await fetch(url);
    const data = await response.json();
    const buisnessdata = data["Buisness's"] //the buisness's data in our data structure

    buisnessdata.forEach(element => {
        
    
        const parentElement = document.getElementById("directoryWrapper");

        const businessDiv = document.createElement("div");
        businessDiv.classList.add("buisness");

        const titleH4 = document.createElement("h4");
        titleH4.classList.add("buisnessTitles");
        titleH4.textContent = "title";
        businessDiv.appendChild(titleH4);

        const logoWrapperDiv = document.createElement("div");
        logoWrapperDiv.classList.add("logoWrapper");
        const logoImg = document.createElement("img");
        logoImg.classList.add("buisnessLogo");
        logoImg.setAttribute("src", "images/B.webp");
        logoImg.setAttribute("alt", "buisness Logo");
        logoWrapperDiv.appendChild(logoImg);
        businessDiv.appendChild(logoWrapperDiv);

        const addressP = document.createElement("p");
        addressP.classList.add("address");
        addressP.textContent = "address placeholder";
        businessDiv.appendChild(addressP);

        const phoneP = document.createElement("p");
        phoneP.classList.add("phone");
        phoneP.textContent = "phone number";
        businessDiv.appendChild(phoneP);

        const websiteA = document.createElement("a");
        websiteA.classList.add("website");
        websiteA.textContent = "website";
        businessDiv.appendChild(websiteA);

        parentElement.appendChild(businessDiv);

    }); 
}


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
createBuisnessHTML();
populateBuisnesses();


function switchImageDisplay(remove) {
    
    const logos = [...document.getElementsByClassName("buisnessLogo")];
    if (remove){
        logos.forEach(element => {
            element.style.display = "none";
        });

        const buinesses = [...document.getElementsByClassName("buisness")];
        
        buinesses.forEach(element => {
            element.style.gridTemplateRows = "10% 25px 10% 10% 10% 20%";
        });
    } else {
        logos.forEach(element => {
            element.style.display = "";
        });

        const buinesses = [...document.getElementsByClassName("buisness")];
        
        buinesses.forEach(element => {
            element.style.gridTemplateRows = "10% 100px 10% 10% 10% 20%";
        });
    }
    
}

//this is to switch views
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("directoryWrapper");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.style.display = "grid";
    switchImageDisplay(false);
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.style.display = "flex";
    display.style.flexDirection = "column";
    switchImageDisplay(true);
}


    
