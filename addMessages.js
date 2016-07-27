
document.addEventListener("keydown", checkForEnter);
function checkForEnter(e) {
  if (e.keyCode == 13) {
    username = document.getElementById("usernameInput").value
    userMessage = document.getElementById("userMessageInput").value
    Chatty.addMessage(username, userMessage)
  }
}

// function addMessage (e) {
//   username = document.getElementById("usernameInput").value
//   userMessage = document.getElementById("userMessageInput").value
//   document.getElementById("userMessageDisplay").innerHTML += `<p class='message'>${username}: ${userMessage}
//                      <button class='remove'>delete</button></p>`;
// }

//USE A COUNTER VARIABLE. CHECK WHETHER THE COUNTER IS EVEN OR ODD TO COLOR THE BACKGROUND LIGHT GREY OR WHITE