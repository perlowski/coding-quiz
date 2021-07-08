var buttonEl = document.querySelector("#save");
var counter = 100;
var countdown;

var countdownFunc = function () {
  console.log(counter);
  counter--;
  if (counter < 0) {
    alert("You Lose! Good day sir...I said GOOD DAY!");
    clearInterval(countdown);
  }
};

buttonEl.addEventListener("click", function () {
  alert("button clicked");
  var countdown = setInterval(countdownFunc, 1000);
  var countTime = document.querySelector("#time-remaining");
  var countdownDisplay = document.createElement("span");
  countdownDisplay.textContent = counter;
  countdownDisplay.className = "top";
  countTime.innerHTML = countdownDisplay;
});
