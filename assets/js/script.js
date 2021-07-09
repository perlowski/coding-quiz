var questions = [
  {
    title: "Commonly used data types do NOT include:",
    choices: ["Alerts", "strings", "numbers", "booleans"],
    answer: "Alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed with ________.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    title: "Arrays in JavaScript can be used to store ________.",
    choices: [
      "numbers & strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ________ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
var currentQuestionIndex = 0;
var questionsEl = document.querySelector("#qs");
var choicesEl = document.querySelector("#choices");
var checkEl = document.querySelector("#check");
var buttonEl = document.querySelector("#save");
var counter = document.querySelector("#time-remaining").textContent;
var countdown;

buttonEl.addEventListener("click", function () {
  var startScreenEl = document.getElementById("prequiz");
  startScreenEl.setAttribute("class", "hide");
  startQuestions();
  var countdown = setInterval(function () {
    counter--;
    if (counter < 1) {
      clearInterval(countdown);
      alert("Game Over. Refresh to play again.");
    }
    var countTime = document.querySelector("#time-remaining");
    var countdownDisplay = document.createElement("span");
    countdownDisplay.textContent = counter;
    countdownDisplay.className = "top";
    countTime.appendChild(countdownDisplay);
    document.getElementById("time-remaining").innerHTML = counter;
  }, 1000);
});

var startQuestions = function () {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.setAttribute("class", "start-page");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choiceStyle");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = choice;
    choiceNode.onclick = choiceClick;
    choicesEl.appendChild(choiceNode);
  });
};

var choiceClick = function () {
  // if wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    counter -= 15;
    checkEl.textContent = "WRONG!";
    checkEl.className = "wrongStyle";
    //if right
  } else {
    checkEl.textContent = "CORRECT!";
    checkEl.className = "correctStyle";
  }
  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endGame();
  } else {
    startQuestions();
  }
};

var endGame = function () {
  clearInterval(countdown);
  questionsEl.setAttribute("class", "hide");
  var endGameScreen = document.querySelector("#end-screen");
  var endTitle = document.createElement("h2");
  endTitle.textContent = "your score is:";
  endTitle.className = "end-screen";
  endGameScreen.appendChild(endTitle);
  var endScore = document.querySelector("#end-score");
  endScore.className = "end-score";
  endScore.textContent = counter;
  endGameScreen.appendChild(endScore);
  var enterName = document.querySelector("#usrform");
  enterName.setAttribute("class", "end");
};
