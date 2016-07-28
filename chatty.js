var Chatty = (function (){
  var _message = [];

  return {
    getMessage: function(callback){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'messages.json');
      xhr.addEventListener('load', function(event){
        _message = JSON.parse(event.target.responseText);
        callback(_message);
      })
      xhr.send();
    },

    addMessage: function (username, userMessage) {
      userMessageObject = {"user": username, "message": userMessage}
      _message.push(userMessageObject)
      Chatty.showMessage(_message)
      },

    showMessage: function (message){
      var message_div = document.querySelector("#userMessageDisplay");
      message_div.innerHTML = ""

      message.forEach(function(content){
      message_div.innerHTML +=  `<p class='message'><span class='boldUser'>${content.user}:</span> ${content.message}
                       <button class='remove'>delete</button></p>`;
     })

      message_div.addEventListener("click", function(e){
        if(e.target.className === "remove"){
          message_div.removeChild(e.target.parentNode);
        }
      })

},
  }
}())

Chatty.getMessage(Chatty.showMessage);
