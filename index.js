//select the body of the site 
//select the toggle btn 
//add and event listener to the btn 
  // once clicked the event listener will display something in the console 



document.querySelector('input[data-switch-dark]').addEventListener("click", function() {
  document.body.classList.toggle('dark');
  
})

