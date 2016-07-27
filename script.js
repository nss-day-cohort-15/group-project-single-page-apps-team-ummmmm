function showMessage(message){
  var message_div = document.querySelector(".content");
  message.forEach(function(content){
  message_div.innerHTML += `<p class='message'>${content.message}
                    <button class='remove'>delete</button></p>`;
  })
}

Messages.getMessage(showMessage);
