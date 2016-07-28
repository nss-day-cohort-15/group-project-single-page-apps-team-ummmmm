function showMessage(message){
   var message_div = document.querySelector("#userMessageDisplay");
   message.forEach(function(content){
   message_div.innerHTML += `<p class='message'>${content.user}: ${content.message}
                     <button class='remove'>delete</button></p>`;
  })
}

Chatty.getMessage(showMessage);

//EVENT LISTENERS//
//CLEAR MESSAGES BUTTON
function clearMessages(){
  var message_area = document.querySelector(".message_area");
  document.querySelector(".clear").addEventListener("click", function(){
    message_area.innerHTML = null;
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

