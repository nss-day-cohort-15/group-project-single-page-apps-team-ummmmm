
document.addEventListener("keydown", checkForEnter);
function checkForEnter(e) {
  if (e.keyCode == 13) {
     addMessage(e)
  }
}

function addMessage (e) {
  username = document.getElementById("usernameInput").value
  userMessage = document.getElementById("userMessageInput").value
  var userMessageDisplay = document.getElementById("userMessageDisplay");
  userMessageDisplay.innerHTML += `<p class='message'>${username}: ${userMessage}
                     <button class='remove'>delete</button></p>`;
}


