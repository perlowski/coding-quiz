/* 
  //1. click the start button
    -timer starts 
    -presented with a question
      -when I answerthe question
        -I am presented with another question
        -I answer a question incorrectly
          -time is subtracted from the clock
        - all questions are answered or the timer reaches 0
        -the game is over
              - save my initials and score */

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
var counterEl = document.querySelector("#time-remaining");
var endGameScreen = document.querySelector("#end-screen");
var endScore = document.querySelector("#end-score");
var enterName = document.querySelector("#usrform");
var submitEl = document.querySelector("#submitBtn");
var enterInitials = document.querySelector("#input[name='usrname']").value;
var timer = 99;
var countdown;

buttonEl.addEventListener("click", function () {
  var startScreenEl = document.getElementById("prequiz");
  startScreenEl.setAttribute("class", "hide");
  startQuestions();
  countdown = setInterval(function () {
    if (timer < 1) {
      alert("Game Over. Refresh to play again.");
    } else {
      counterEl.textContent = timer;
      //countdownDisplay.className = "top";
    }
    timer--;
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
    //choiceNode.addEventListener('click', choiceClick)
    choicesEl.appendChild(choiceNode);
  });
};

var choiceClick = function () {
  // if wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    timer -= 15;
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
  questionsEl.classList.toggle("hide");
  var clearTimer = document.querySelector("#time");
  clearTimer.classList.toggle("hide");
  // questionsEl.setAttribute("class", "hide");]
  //endGameScreen
  //endScore
  //enterName
  endScore.textContent = timer;
  var endTitle = document.createElement("h2");
  endTitle.textContent = "your score is:";
  endTitle.className = "end-screen";
  endGameScreen.appendChild(endTitle);
  endScore.className = "end-score";
  endGameScreen.appendChild(endScore);
  enterName.setAttribute("class", "end");
  clearInterval(countdown);
};

submitEl.addEventListener("click", function () {
  event.preventdefault();
  console.log(enterInitials);
  alert(enterInitials);
});
