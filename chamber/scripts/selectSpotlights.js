// Get the div element
const spotlightedCompany = [...document.getElementsByClassName('spotlightedcompany')]; //an array of the spotlighted company divs
const url = 'https://austinsways.github.io/wdd230/chamber/data/data.json';
// Define the JSON data


async function retrieveData() {
    const response = await fetch(url);
    const unspecifieddata = await response.json();
    const data = unspecifieddata["Members"];
    let usedNumber = []; // a list of index's chosen for spotlights
    for (let index = 0; index < 3; index++){
        let min = 0;
        let max = data.length - 1;
        
        
        let used = false;
        let randomInt = 0;
        do {randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            used = false;
            for (let i = 0; i < usedNumber.length; i++) {
                if (usedNumber[i] === randomInt) {
                  used = true;
                  break;
                }
              }}
        while (used);
        usedNumber.push(randomInt);

        spotlightedCompany[index].querySelector('h2').textContent = data[randomInt].name;
        spotlightedCompany[index].querySelector('img').src = data[randomInt].logoPath;
        spotlightedCompany[index].querySelector('p:nth-of-type(1)').textContent = data[randomInt].slogan;
        spotlightedCompany[index].querySelector('p:nth-of-type(2)').textContent = data[randomInt].address;
        spotlightedCompany[index].querySelector('p:nth-of-type(3)').textContent = data[randomInt].phone;
        spotlightedCompany[index].querySelector('p:nth-of-type(4) a').textContent = data[randomInt].website;
        spotlightedCompany[index].querySelector('p:nth-of-type(4) a').href = 'http://' + data[randomInt].website;
    }
}
retrieveData();


// Populate the HTML with the JSON data

