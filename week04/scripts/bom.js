const input = document.getElementById("favchap");
const button = document.getElementsByTagName('button');
const list = document.getElementById("list");
let deleteButtons = []; //a list of delete buttons
let addedChapters = [];
var mainElement = document.getElementsByTagName("main")[0]; //our "main" element containing all our content

button[0].addEventListener('click', function(){ //add an event listener to hear us clicking on add chapter
    if (input.value!= ''){ //if its not an empty text box...
        var newElement = document.createElement('li'); //create a new list element
        newElement.appendChild(document.createTextNode(input.value)); //add some text to the new element
        list.appendChild(newElement); //make it a child of out ul (unordered list)
        input.value = "";
        addedChapters.push(newElement);
        
        const newDeleteButton = document.createElement("button");
        //add a new delete button
        newDeleteButton.class = 'deleteButton'; //make it defined
        newDeleteButton.textContent = 'Delete Element Above'; //description
        
        list.appendChild(newDeleteButton);
        newDeleteButton.addEventListener('click', deleteButtonPress);
        deleteButtons.push(newDeleteButton);
            //list.appendChild(deleteButton)  //make it the last item in our list
            
            
        
        

    }
});


function deleteButtonPress(){
    if (deleteButtons.length != 0){
       let deleteIndex; //retrieving the index of the elements to be deleted
        for(let i = 0; i < deleteButtons.length; i++){
            if (deleteButtons[i] == this){
                deleteIndex = i;
            }
        }
        var correspondingItem = addedChapters[deleteIndex]; 
        list.removeChild(correspondingItem);
        list.removeChild(this);
        deleteButtons.pop(this);
        addedChapters.pop(correspondingItem);
    
    }
}

