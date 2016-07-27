function showMessage(message){
  var message_div = document.querySelector("#userMessageDisplay");
  message.forEach(function(content){
  message_div.innerHTML += `<p class='message'>${content.user}: ${content.message}
                    <button class='remove'>delete</button></p>`;
  })
}

Chatty.getMessage(showMessage);
