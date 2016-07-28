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
      console.log(_message)
      },

    // addMessage: function (username, userMessage) {
    // _message.push({"user": username, "message": userMessage})
    // showMessage(_message)
    //     },

    showMessage: function (message){
      var message_div = document.querySelector("#userMessageDisplay");
      message.forEach(function(content){
      message_div.innerHTML += `<p class='message'><span class='boldUser'>${content.user}:</span> ${content.message}
                       <button class='remove'>delete</button></p>`;
  })
},



  }
}())

Chatty.getMessage(Chatty.showMessage);

// addMessage: function (username, userMessage) {
// _message.push(`<p class='message'><span class='boldUser'>${username}:</span> ${userMessage}<button class='remove'>delete</button></p>`)
// document.getElementById("userMessageDisplay").innerHTML = _message;
//   },


// addMessage: function (username, userMessage) {
//   userMessageObject = {"user": username, "message": userMessage}
//   document.getElementById("userMessageDisplay").innerHTML +=
//     `<p class='message'><span class='boldUser'>${username}:</span> ${userMessage}<button class='remove'>delete</button></p>`;
//   },