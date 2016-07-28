var body = document.querySelector('body');
body.addEventListener("click", function(e){
  if(e.target.className === "remove"){
    this.style.fontSize = "3em";
  }
})
