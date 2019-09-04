// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });

var buttons = document.querySelectorAll(".drum");

//Detecting Click button press

for (var i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyborad press

document.addEventListener("keypress", function(e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

//MakeSound funciton

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/tom-3.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-4.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/snare.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// var bellBoy1 = {
//   name: "Timmy",
//   age: 19,
//   hasWorkPermit: true,
//   languages: ["French", "English"],
//   moveSuitcase: function() {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     move();
//   }
// }
//
// function BellBoy(name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   this.moveSuitcase = function() {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     move();
//   }
// }
//
// var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
