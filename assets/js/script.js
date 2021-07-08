var buttonEl = document.querySelector("#save");
var counter = document.querySelector("#time-remaining").textContent;
var countdown;

buttonEl.addEventListener("click", function () {
  questionOne();
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
    document.getElementById("time-remaining").innerHTML = counter;
  }, 1000);
});

var questionOne = function () {
  var q1Page = document.querySelector("#prequiz");
  var q1Q = document.createElement("h2");
  q1Q.textContent =
    "What programing language represents the skin of a webpage?";
  q1Q.className = "start-page";
  q1Page.appendChild(q1Q);
  document.getElementById("prequiz").innerHTML = q1Page;
};
