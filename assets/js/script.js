var buttonEl = document.querySelector("#save");
var counter = document.querySelector("#time-remaining").textContent;

var countdown = function () {
  console.log(counter);
  counter--;
  if (counter === 0) {
    alert("You Lose! Good day sir...I said GOOD DAY!");
    clearInterval(startCountdown);
  }
};

buttonEl.addEventListener("click", function () {
  alert("button clicked");
  var countdown = setInterval(countdown, 1000);
});
