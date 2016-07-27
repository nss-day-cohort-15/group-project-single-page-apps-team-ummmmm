var Chatty = (function (){
  var _message = [];

function loadFirstMessages () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'messages.json');
  xhr.addEventListener('load', function(event){
  _message = JSON.parse(event.target.responseText);
  document.getElementById("userMessageDisplay").innerHTML = _message //Couldn't we use a callback function to show the messages w/ styling here?
    })
 }

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
      // username = document.getElementById("usernameInput").value
      // userMessage = document.getElementById("userMessageInput").value
      document.getElementById("userMessageDisplay").innerHTML +=
        `<p class='message'><span class='boldUser'>${username}:</span> ${userMessage}<button class='remove'>delete</button></p>`;
    },
    showMessage: function (message){
      var message_div = document.querySelector("#userMessageDisplay");
      message.forEach(function(content){
      message_div.innerHTML += `<p class='message'>${content.user}: ${content.message}
                       <button class='remove'>delete</button></p>`;
  })
}
  }


}())