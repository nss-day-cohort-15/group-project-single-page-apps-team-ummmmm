var Chatty = (function (){
  var _message = [];

function loadFirstMessages () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'messages.json');
  xhr.addEventListener('load', function(event){
  _message = JSON.parse(event.target.responseText);
  document.getElementById("userMessageDisplay").innerHTML = _message
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
    }
  }


}())