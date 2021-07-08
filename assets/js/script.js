var buttonEl = document.querySelector("#save");
var counter = document.querySelector("#time-remaining").textContent;
var countdown;

buttonEl.addEventListener("click", function () {
  alert("button clicked");
  var countdown = setInterval(function () {
    counter--;
    if (counter < 0) {
      alert("Game Over");
      clearInterval(countdown);
    }
    var countTime = document.querySelector("#time-remaining");
    var countdownDisplay = document.createElement("span");
    countdownDisplay.textContent = counter;
    countdownDisplay.className = "top";
    countTime.appendChild(countdownDisplay);
    document.getElementById("time-remaining").appendChild(countdownDisplay);
  }, 1000);
});
