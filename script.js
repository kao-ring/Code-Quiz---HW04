//array question
var questions = [
  {
    q: "Commonly data types DO NOT includes;",
    a: ["strings", "numbers", "array", "boolean"],
    correct: "array",
  },
  {
    q: "The condition in an if / else statement is enclosed within _____.",
    a: ["quotation", "square brackets", "parentheses", "curly brackets"],
    correct: "parentheses",
  },
  {
    q: "Arrays in javascript canbe used  to store ______.",
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
      "A very useful tool used during development adn debugging for printing content to the de bugger is;",
    a: ["javascript", "Terminal/Bash", "for loops", "console.log"],
    correct: "console.log",
  },
  {
    q: "Inside which HTML element do we put the JavaScript?",
    a: ["<script>", "<scripting>", "<js>", "<javascript>"],
    correct: "<script>",
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
    q: "How can you add a comment in a JavaScript?",
    a: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
      "%This is a comment%",
    ],
    correct: "//This is a comment",
  },
];

// THEN a timer starts and I am presented with a question
var timeRemain = document.querySelector("#timeRemain");
var timeLeft = 100; // Create the countdown timer.
function quizStart() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeRemain.textContent = "Time: " + timeLeft;
    quiz();

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      afterFinish();
    }
  }, 1000);
}

//設問に必要な子たち。
var question;
var choice1;
var choice2;
var choice3;
var choice4;
var userAnswer;
var correctAnswer;

//HTML内の接続先。ボタンたち。
var titleCallEl = document.querySelector("#titleCall");
var readEl = document.querySelector("#read");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var img = document.querySelector("img");

//Helper functions============================================
function quiz() {
  for (let i = 0; i < questions.length; i++) {
    //説文と解答
    question = questions[i].q; //#readへ。
    choice1 = questions[i].a[1];
    choice2 = questions[i].a[2];
    choice3 = questions[i].a[3];
    choice4 = questions[i].a[4];
    correctAnswer = questions[i].correct;

    //HTML内のタグに設問を流し込む。
    var num = i + 1;
    titleCallEl.innerHTML = "Question #" + num;
    readEl.innerHTML = question;
    choice1El.innerHTML = choice1;
    choice2El.innerHTML = choice2;
    choice3El.innerHTML = choice3;
    choice4El.innerHTML = choice4;

    //user anser check
    choice1El.addEventListener("click", function () {
      if (choice1 === correctAnswer) {
        img.setAttribute("src", "Assets/correct.jpg");
        img.setAttribute("alt", "correct.jpg");
      } else {
        img.setAttribute("src", "Assets/wrong.jpg");
        img.setAttribute("alt", "wrong.jpg");
        timeLeft = timeLeft - 10;
      }
    });

    choice2El.addEventListener("click", function () {
      if (choice2 === correctAnswer) {
        img.setAttribute("src", "Assets/correct.jpg");
        img.setAttribute("alt", "correct.jpg");
      } else {
        img.setAttribute("src", "Assets/wrong.jpg");
        img.setAttribute("alt", "wrong.jpg");
        timeLeft = timeLeft - 10;
      }
    });

    choice3El.addEventListener("click", function () {
      if (choice3 === correctAnswer) {
        img.setAttribute("src", "Assets/correct.jpg");
        img.setAttribute("alt", "correct.jpg");
      } else {
        img.setAttribute("src", "Assets/wrong.jpg");
        img.setAttribute("alt", "wrong.jpg");
        timeLeft = timeLeft - 10;
      }
    });

    choice4El.addEventListener("click", function () {
      if (choice4 === correctAnswer) {
        img.setAttribute("src", "Assets/correct.jpg");
        img.setAttribute("alt", "correct.jpg");
      } else {
        img.setAttribute("src", "Assets/wrong.jpg");
        img.setAttribute("alt", "wrong.jpg");
        timeLeft = timeLeft - 10;
      }
    });
  }
}

var scoreArray = [];
function afterFinish() {
  scoreArray.push(timeLeft);
}

// user input====================================
var startButton = document.querySelector("#start"); //WHEN I click the start button
startButton.addEventListener("click", quizStart());

//Score Board====================================
var highScore = document.querySelector("#highestScore");
var highestScore = Math.max.apply(null, scoreArray); // scoreArrayの中から最大値を取る
var mode = "text";
highScore.addEventListener("click", showScore);

function showScore() {
  if (mode === "text") {
    highScore.textContent = "Your highest score is: " + highestScore;
    mode = "score";
  } else {
    highScore.textContent = "View Highest Score";
    mode = "text";
  }
}
// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
