const form = document.querySelector('#applicationForm');


form.addEventListener('focusin', () => {
  // Get the current date and time
  const date = new Date();
  
  const hiddenField = document.getElementById("timeAccessed");
  hiddenField.textContent=date.toString();
});