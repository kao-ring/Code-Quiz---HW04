var questions = [
  {
    q: "Common data types DO NOT include;",
    a: ["strings", "numbers", "array", "boolean"],
    correct: "array",
  },
  {
    q: "The condition in an if / else statement is enclosed within _____.",
    a: ["quotation", "square brackets", "parentheses", "curly brackets"],
    correct: "parentheses",
  },
  {
    q: "Arrays in javascript can be used  to store ______.",
    a: ["numbers and strings", "other arrays", "boolean", "all of the above"],
    correct: "all of the above",
  },
  {
    q:
      "Strings value must be enclosed within _____  when being assigned to variables.",
    a: ["quotation", "square brackets", "parentheses", "curly brackets"],
    correct: "quotation",
  },
  {
    q:
      "A very useful tool used during development and debugging for printing content to the de bugger is;",
    a: ["javascript", "Terminal/Bash", "for loops", "console.log"],
    correct: "console.log",
  },
  {
    q: "Inside which HTML element do we put the JavaScript?",
    a: ["script", "scripting", "js", "javascript"],
    correct: "script",
  },
  {
    q:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    a: [
      " document.getElementByName('p').innerHTML = 'Hello World!';",
      " document.getElement('p').innerHTML = 'Hello World!';",
      " #demo.innerHTML = 'Hello World!';",
      " document.getElementById('demo').innerHTML = 'Hello World!';",
    ],
    correct: " document.getElementById('demo').innerHTML = 'Hello World!';",
  },
  {
    q: "How do you write 'Hello World' in an alert box?",
    a: [
      " alert('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
      "console.log('Hello World');",
    ],
    correct: " alert('Hello World');",
  },
  {
    q: "How do you create a function in JavaScript?",
    a: [
      "function=myFunction()",
      "function:myfunction()",
      "function myFunction()",
      "var function=function",
    ],
    correct: "function myFunction()",
  },
  {
    q: "Do you like coding?",
    a: ["Yes", "Yes", "Yes", "Yes"],
    correct: "Yes",
  },
];
//Declair...設問に必要な子たち。
var question; //store quesition
var choice1; //store answer choice
var choice2; //store answer choice
var choice3; //store answer choice
var choice4; //store answer choice
var userAnswer; //get a user's choice
var correctAnswer; //store the corect answer
var questionCount; //question number for getting array

//DOM / Buttons
var titleCallEl = document.querySelector("#titleCall");
var readEl = document.querySelector("#read");
var choice1El = document.querySelector("#choice0");
var choice2El = document.querySelector("#choice1");
var choice3El = document.querySelector("#choice2");
var choice4El = document.querySelector("#choice3");
var img = document.querySelector("img");
var form = document.querySelector("#form");
var nameInput = document.querySelector("#nameInput");
var finalScore = document.querySelector("#finalScore");
var oneMore = document.querySelector("#oneMore");
var congrats = document.querySelector("#congrats");
var answerButtons = document.querySelector("#answerButtons");
var highestScore = document.querySelector("#highestScore");
var count = localStorage.getItem("count");

var timeRemain = document.querySelector("#timeRemain");
var timeLeft = 100; // Create the countdown timer.
var i = 0; //question counter
var timerInterval;

//Initiarize.
choice1El.style.display = "none";
choice2El.style.display = "none";
choice3El.style.display = "none";
choice4El.style.display = "none";
form.style.display = "none";
congrats.style.display = "none";

//start button clicked!
//user input====================================
var startButton = document.querySelector("#start");
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  quizStart();
});

//function storage===================================================
// THEN a timer starts and I am presented with a question
function quizStart() {
  i = 0;
  timeLeft = 60;

  quiz();

  timerInterval = setInterval(function () {
    timeLeft--;
    timeRemain.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      console.log("This is timeout");
      clearInterval(timerInterval);
      timeleft = "Timeout";
      afterFinish();
    }
  }, 1000);
}

//inside of the Quiz!
function quiz() {
  console.log("This is quiz");

  startButton.style.display = "none";
  choice1El.style.display = "initial";
  choice2El.style.display = "initial";
  choice3El.style.display = "initial";
  choice4El.style.display = "initial";
  img.style.display = "none";
  setQuestion();

  console.log("else in quiz");
  answerButtons.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
      var id = event.target.id.replace("choice", ""); //#choice1
      userAnswer = questions[i].a[parseInt(id)];
      console.log({ userAnswer, correctAnswer });
      if (userAnswer === correctAnswer) {
        i++;
        choice1El.style.display = "none";
        choice2El.style.display = "none";
        choice3El.style.display = "none";
        choice4El.style.display = "none";
        img.style.display = "initial";
        img.setAttribute("src", "Assets/correct.jpg");
        img.setAttribute("alt", "correct.jpg");
      } else {
        i++;
        choice1El.style.display = "none";
        choice2El.style.display = "none";
        choice3El.style.display = "none";
        choice4El.style.display = "none";
        img.style.display = "initial";
        img.setAttribute("src", "Assets/wrong.jpg");
        img.setAttribute("alt", "wrong.jpg");
        timeLeft = timeLeft - 10;
      }
    }
    if (questions[i] === undefined) {
      afterFinish();
    } else {
      setTimeout(setQuestion, 1000);
    }
  });
}

//function for quiz

function setQuestion() {
  choice1El.style.display = "initial";
  choice2El.style.display = "initial";
  choice3El.style.display = "initial";
  choice4El.style.display = "initial";
  img.style.display = "none";
  console.log("This is setQuestion");
  //Set questions and answer choices
  question = questions[i].q; //#read
  choice1 = questions[i].a[0];
  choice2 = questions[i].a[1];
  choice3 = questions[i].a[2];
  choice4 = questions[i].a[3];
  correctAnswer = questions[i].correct;

  //inner HTML
  var num = i + 1;
  titleCallEl.innerHTML = "Question #" + num;
  readEl.innerHTML = question;
  choice1El.innerHTML = choice1;
  choice2El.innerHTML = choice2;
  choice3El.innerHTML = choice3;
  choice4El.innerHTML = choice4;
}

// function checkAnswer() {
//   console.log("This is checkAnswer");

//   quiz();ß
// }

//Quiz Finished! =================================

var scoreArray = [];
var formText = nameInput.value;
function afterFinish() {
  clearInterval(timerInterval);
  console.log("afterFinish");
  choice1El.style.display = "none";
  choice2El.style.display = "none";
  choice3El.style.display = "none";
  choice4El.style.display = "none";
  scoreArray.push(timeLeft);

  titleCallEl.innerHTML = "Your score is " + timeLeft;
  readEl.innerHTML = "";
  form.style.display = "initial";

  // When form is submitted...

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formText = document.querySelector(".form-control").value;
    // Return from function early if submitted todoText is blank
    if (formText === "") {
      return;
    }
    //Disply user's name, score & highest score(i could get from local storage?)
    else {
      congrats.style.display = "initial";
      form.style.display = "none";
      img.style.display = "none";

      localStorage.setItem("count", timeLeft);
      // highestScore = Math.max.apply(null, scoreArray); // Get max number from array
      userName.innerHTML = formText;
      finalScore.innerHTML =
        "You got " + timeLeft + ", your last score is " + count;
      oneMore.addEventListener("click", function () {
        // quizStart();
        document.location.reload();
      });
    }
  });
}

//Score Board====================================

var mode = "text";
highestScore.addEventListener("click", function (event) {
  event.preventDefault();
  showScore();
});
// var highestScore;
function showScore() {
  // highestScore = Math.max.apply(null, scoreArray); // Get max number from array

  if (mode === "text") {
    highestScore.textContent = "Your last score is: " + count;
    mode = "score";
  } else {
    highestScore.textContent = "View last Score";
    mode = "text";
  }
}
