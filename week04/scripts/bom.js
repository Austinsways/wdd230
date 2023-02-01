const input = document.getElementById("favchap");
const button = document.getElementsByTagName('button');
const list = document.getElementById("list");
const deleteButton = document.createElement("button");
var listOfItems = list.getElementsByTagName("li"); //  a js array of our list's li elements
var mainElement = document.getElementsByTagName("main")[0]; //our "main" element containing all our content

button[0].addEventListener('click', function(){ //add an event listener to hear us clicking on add chapter
    if (input.textContent.value!= ''){ //if its not an empty text box...
        var newElement = document.createElement('li'); //create a new list element
        newElement.appendChild(document.createTextNode(input.value)); //add some text to the new element
        list.appendChild(newElement); //make it a child of out ul (unordered list)
        input.value = "";
        if (deleteButton.id!='deleteButton'){ //if the delete button isnt defined
            deleteButton.id = 'deleteButton'; //make it defined
            deleteButton.textContent = 'Delete Last Element'; //description
            
            mainElement.appendChild(deleteButton);
            //list.appendChild(deleteButton)  //make it the last item in our list
            
            
        }
        

    }
});


function deleteButtonPress(){
    if (listOfItems.length!=0){
       
        
        var lastItem = listOfItems[listOfItems.length-1]; 
        list.removeChild(lastItem);
        if (listOfItems.length == 0){
            deleteButton.id='';
            mainElement.removeChild(deleteButton);
        }
            
    
    }
}

deleteButton.addEventListener('click', deleteButtonPress);