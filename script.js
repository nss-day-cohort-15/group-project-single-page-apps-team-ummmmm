//EVENT LISTENERS//
//CLEAR MESSAGES BUTTON

function clearMessages(){
  var message_area = document.querySelector(".message_area");
  document.querySelector(".clear").addEventListener("click", function(){
    message_area.innerHTML = null;
  // if (message_area.value == null) {
  // document.getElementById("clearButton").setAttribute("disabled", true);
  // } else {
  //     document.getElementById("clearButton").setAttribute("disabled", false);
  // }
  })
}


var dark = document.querySelector(".dark");
dark.addEventListener('click', function(){
  document.querySelector('body').classList.toggle('dark');
})

var large = document.querySelector(".large");
large.addEventListener('click', function(){
  document.querySelector('body').classList.toggle('large');
})


//themesAndText();
clearMessages();
var message_area = document.querySelector(".message_area");
document.querySelector(".clear").addEventListener("click", function(){
  message_area.innerHTML = null;
})


