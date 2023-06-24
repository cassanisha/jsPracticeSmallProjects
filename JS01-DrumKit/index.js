var elements = document.querySelectorAll(".kit");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", makeSound);
}

function makeSound(e) {
  var keyCode = e.currentTarget.getAttribute("data-key");
  var audioElement = document.getElementById(keyCode);
  audioElement.play();

  function removeAnimation() {
    this.classList.remove("animation");
  }

  e.currentTarget.classList.add("animation");
  elements.forEach(function (kit) {
    kit.addEventListener("transitionend", removeAnimation);
  });
}







document.addEventListener("keydown", makeSound2);

function makeSound2(e) {
  var keycode = e.keyCode;
  var audioElement = document.getElementById(keycode);
  
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  
  var Ani = document.querySelector(`.kit[data-key="${keycode}"]`);
  if (Ani) {
    Ani.classList.add("animation");
    
    function removeAnimation() {
      this.classList.remove("animation");
    }
    
    Ani.addEventListener("transitionend", removeAnimation);
  }
}


