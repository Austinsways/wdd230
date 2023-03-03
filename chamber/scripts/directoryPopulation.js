
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
    
