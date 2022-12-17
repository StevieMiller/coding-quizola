// Global variables
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers");
const hideHeading = document.getElementById("heading");

let questionIndex;

// Array that holds quiz questions
const questions = [
  question1 = {
    question: "Which of the following is not a data type?",
    answers: ["String", "Boolean", "Number", "Function"],
    correct: "Function",
  },
  question2 = {
    question: "Where is the correct place to insert the JavaScript file?",
    answers: [
      "The body section",
      "The head section",
      "Both the head and body sections",
      "It can be placed anywhere",
    ],
    correct: "Both the head and body sections",
  },
  question3 = {
    question: "Which of the following is not an operator in JavaScript?",
    answers: ["+", "-", "~", "*"],
    correct: "~",
  },
  // {
  //   question: "How do you call a function named myFunction?",
  //   answers: [
  //     "call function myFunction()",
  //     "myFunction()",
  //     "call myFunction",
  //     "Function = myFunction()",
  //   ],
  //   correct: "myFunction()",
  // },
  // {
  //   question: "What does NaN stand for?",
  //   answers: [
  //     "Not a number",
  //     "Never a number",
  //     "Nix a number",
  //     "Number and numeric",
  //   ],
  //   correct: "Not a number",
  // },
];
var timerEl = document.getElementById("timer");

let chosenAnswer;

// Event listener starts game when start button is clicked
startButton.addEventListener("click", startGame);
const orderOfQuestions = (arr) => {
  let arrIndex = [];
  for (let i = 0; i < arr.length; i++) {
    arrIndex.push(i);
  }
  return arrIndex;
};
// startGame function is called when the start button is clicked
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  hideHeading.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  questionIndex = 0;
  questionOrderArray = orderOfQuestions(questions);

  currentQuestion(questions, questionOrderArray[questionIndex]);
  countdown();
}

// Function that displays the question
function currentQuestion(array, indexOfQuestions) {
  console.log("questions", array[indexOfQuestions]);

  // console.log(indexOfQuestions)
  questionElement.textContent = array[indexOfQuestions].question;
  let currentAnswerArray = array[indexOfQuestions].answers
  console.log(currentAnswerArray)
  let answ;
  let button;
  for (var i = 0; i < currentAnswerArray.length; i++) {

    answ = document.createElement('li');
    button = document.createElement('button')
    button.textContent = currentAnswerArray[i]
    answ.appendChild(button)
    answ.addEventListener('click', correctAnswers)
    answerButtonsElement.appendChild(answ)
    
    // console.log("questionIndex line 104", questions[i]);
    // console.log(questions[i].answers);
    // answerButtonsElement.addEventListener("click", questionElement);
    // questionElement[i].textContent = questions[questionsIndex].answers[i];
  }
}
// Function that displays answer options
function currentAnswers() {
  answerButtonsElement.textContent = nextAnswers.answers;
  for (var i = 0; i < answersIndex.length; i++) {
    console.log("answer line 113", answersIndex[i]);
    // write code to pull answers from array by index
    // add event listener to present next question on click
  }
}
// Function that checks for correct/incorrect answers and deducts time from the clock
function correctAnswers() {
  alert('clicked')
  


  if (chosenAnswer === false) {
    // Subtract time from the timer
    currentQuestion(questions, )
  }
}


// countdown function is called when start button is clicked
function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    // As long as the 'timeLeft' is greater than 1
    if (timeLeft > 1) {
      // Set the 'textContent' of 'timerEl' to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      // When 'timeLeft' is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
      timerEl.textContent = "";
      // Use 'clearInterval' to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
