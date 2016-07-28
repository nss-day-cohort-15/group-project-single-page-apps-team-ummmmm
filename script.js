// DARK THEME & LARGE TEXT
var dark = document.querySelector(".dark");
dark.addEventListener('click', function(){
  document.querySelector('body').classList.toggle('dark');
})

var large = document.querySelector(".large");
large.addEventListener('click', function(){
  document.querySelector('body').classList.toggle('large');
})

//LISTENER FOR clearMessage FUNCTION
document.querySelector(".clear").addEventListener("click", Chatty.clearMessage)

