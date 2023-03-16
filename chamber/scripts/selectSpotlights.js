// Get the div element
const spotlightedCompany = [...document.getElementsByClassName('.spotlightedcompany')]; //an array of the spotlighted company divs
const url = 'https://austinsways.github.io/wdd230/chamber/data/data.json';
// Define the JSON data


async function retrieveData() {
    const response = await fetch(url);
    const data = await response.json();
    const buisnessdata = data["Members"];
    return buisnessdata;
}
const memberData = retrieveData();


// Populate the HTML with the JSON data
spotlightedCompany[0].querySelector('h2').textContent = data[0].name;
spotlightedCompany[0].querySelector('img').src = data[0].logoPath;
spotlightedCompany[0].querySelector('p:nth-of-type(1)').textContent = data[0].slogan;
spotlightedCompany[0].querySelector('p:nth-of-type(2)').textContent = data[0].address;
spotlightedCompany[0].querySelector('p:nth-of-type(3)').textContent = data[0].phone;
spotlightedCompany[0].querySelector('p:nth-of-type(4) a').textContent = data[0].website;
spotlightedCompany[0].querySelector('p:nth-of-type(4) a').href = 'http://' + data[0].website;
