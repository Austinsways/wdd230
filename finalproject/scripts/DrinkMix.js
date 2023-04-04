const fruitDataUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruitOptions = [];


const form = document.querySelector('.DrinkMixForm');

form.addEventListener('submit', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
    
    // retrieve the form data
    const formValues = [];
    formValues.push(document.querySelector('#fname').value); //index 0 is the users first name
    formValues.push(document.querySelector('#email').value); //index 1 is the users email
    formValues.push(document.querySelector('#phone').value); //index 2 is the users phone number
    formValues.push(document.querySelector('#fruit1').value); //index 3 is the users first choice index
    formValues.push(document.querySelector('#fruit2').value); //index 4 is the user second choice index
    formValues.push(document.querySelector('#fruit3').value); //index 5 is the users third choice index
    formValues.push(document.querySelector('#instructions').value); //index 6 is the users special instructions
    
    // do something with the form data (e.g. send it to the server)
    createMixOutput(formValues);
    
    // reset the form
    form.reset();
});





//output the element showing the results of the fruit mix
async function createMixOutput(formValues) {
    const requestResponse = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json"); 
    const fruitData = await requestResponse.json();

    const DrinkOutputDiv = document.createElement("div");
    DrinkOutputDiv.classList.add("DrinkOutput");

    const h2Element = document.createElement("h2");
    h2Element.textContent = "Healthy Choice! Here's your order:";
    DrinkOutputDiv.appendChild(h2Element);

    const OrderDiv = document.createElement("div");
    OrderDiv.classList.add("Order");

    const firstNameP = createParagraph("first name: ", "FirstName", formValues[0]);
    const emailP = createParagraph("email: ", "Email", formValues[1]);
    const phoneNumberP = createParagraph("Phone Number: ", "PhoneNumber", formValues[2]);
    const fruit1P = createParagraph("Fruit 1: ", "Fruit1", fruitData[formValues[3]].name); //accessing the fruit from the list and setting the text content to that fruits name 
    const fruit2P = createParagraph("Fruit 2: ", "Fruit2", fruitData[formValues[4]].name);
    const fruit3P = createParagraph("Fruit 3: ", "Fruit3", fruitData[formValues[5]].name);
    const specialInstructionsP = createParagraph("Special Instructions: ", "", formValues[6]);
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const orderDateP = createParagraph("Order Submitted On: ", "OrderDate", formattedDate);
    const nutritionP = document.createElement("p");
    nutritionP.textContent = "Nutrition";
    nutritionP.style.fontWeight = "bold";
    nutritionP.style.fontSize = "20px";


    //now we need to calculate the nutrition info.
    const carbohydrates = fruitData[formValues[3]].nutritions.carbohydrates + fruitData[formValues[4]].nutritions.carbohydrates + fruitData[formValues[5]].nutritions.carbohydrates;
    const fats = fruitData[formValues[3]].nutritions.fat + fruitData[formValues[4]].nutritions.fat + fruitData[formValues[5]].nutritions.fat;
    const proteins = fruitData[formValues[3]].nutritions.protein + fruitData[formValues[4]].nutritions.protein + fruitData[formValues[5]].nutritions.protein;
    const sugars = fruitData[formValues[3]].nutritions.sugar + fruitData[formValues[4]].nutritions.sugar + fruitData[formValues[5]].nutritions.sugar;
    const calories = fruitData[formValues[3]].nutritions.calories + fruitData[formValues[4]].nutritions.calories + fruitData[formValues[5]].nutritions.calories;

    const carbohydratesP = createParagraph("Carbohydrates: ", "Carbohydrates", carbohydrates.toFixed(2));
    const fatsP = createParagraph("Fats: ", "Fats", fats.toFixed(2));
    const proteinsP = createParagraph("Proteins: ", "Proteins", proteins.toFixed(2));
    const sugarsP = createParagraph("Sugars: ", "Sugars", sugars.toFixed(2));
    const caloriesP = createParagraph("Calories: ", "Calories", calories.toFixed(2));

    OrderDiv.appendChild(firstNameP);
    OrderDiv.appendChild(emailP);
    OrderDiv.appendChild(phoneNumberP);
    OrderDiv.appendChild(fruit1P);
    OrderDiv.appendChild(fruit2P);
    OrderDiv.appendChild(fruit3P);
    OrderDiv.appendChild(specialInstructionsP);
    OrderDiv.appendChild(orderDateP);
    OrderDiv.appendChild(nutritionP);
    OrderDiv.appendChild(carbohydratesP);
    OrderDiv.appendChild(fatsP);
    OrderDiv.appendChild(proteinsP);
    OrderDiv.appendChild(sugarsP);
    OrderDiv.appendChild(caloriesP);

    DrinkOutputDiv.appendChild(OrderDiv);
    const lastElement = document.getElementById("footer");
    const parentElement = lastElement.parentNode;
    parentElement.insertBefore(DrinkOutputDiv, lastElement)


    //document.body.appendChild(DrinkOutputDiv);

    function createParagraph(labelText, idName, spanElementValue) {
        const pElement = document.createElement("p");
        const spanElement = document.createElement("span");
        spanElement.id = idName;
        spanElement.textContent = spanElementValue;
        pElement.appendChild(document.createTextNode(labelText));
        pElement.appendChild(spanElement);
        return pElement;
    }
    incrementTotalDrinks();


}

function incrementTotalDrinks() {
    
    
    if (!localStorage.getItem("TotalDrinks")){
        localStorage.setItem("TotalDrinks", 0);
        
    } else {
        const TotalDrinks = Number(localStorage.getItem("TotalDrinks")) + 1;
        localStorage.setItem("TotalDrinks", TotalDrinks);
        
    }
    
}

async function populateFruitOptions(fruitDataURL) {
    const requestResponse = await fetch(fruitDataURL); 
    const fruitData = await requestResponse.json();
    const selectors = Array.from(document.getElementsByClassName("FruitPicker"));
    fruitData.forEach((element, index) => {
        //add each fruit name to the options list
        
        fruitOptions.push(element.name);
        const optionElement = document.createElement("option");
        optionElement.value = index;
        optionElement.textContent = element.name;
        selectors.forEach((item) => {
            const clonedElement = optionElement.cloneNode(true);
            item.appendChild(clonedElement);
        })
    });

}

populateFruitOptions(fruitDataUrl);


