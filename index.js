//select the body of the site 
//select the toggle btn 
//add and event listener to the btn 
  // once clicked the event listener will display something in the console 

let toggleBtn, dashboard;
dashboard = document.getElementById('dashboard');
toggleBtn = document.querySelector(".toggler-btn");
toggleBtn.addEventListener("click", function() {
  dashboard.classList.toggle('.dark-mode');
  console.log(`I've been clicked successfully`);

})

