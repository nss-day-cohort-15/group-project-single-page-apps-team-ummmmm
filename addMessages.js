document.addEventListener("keydown", checkForEnter);
function checkForEnter(e) {
  if (e.keyCode == 13) {
    username = document.getElementById("usernameInput").value
    userMessage = document.getElementById("userMessageInput").value
    Chatty.addMessage(username, userMessage)
  }
}