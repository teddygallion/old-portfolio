const questions = [
  {
    id: 1,
    question: ' To begin at the beginning: which single, released in October 1976, is usually quoted as the first British punk record?',
    options: [
      'Anarchy in the UK - Sex Pistols',
      'New Rose - The Damned',
      'Hong Kong Garden - Siouxsie and the Banshees',
      'Spiral Scratch EP - Buzzcocks',
    ],
    answer:'New Rose - The Damned',
   },
  {
    id: 2,
    question: 'When Minor Threat broke up for the first time (in late 1981), Ian Mackaye started singing with this short-lived band',
    options: [
      "Teen Idles",
      "Rites of Spring",
      "Embrace",
      "Skewbald",
    ],
    answer: "Skewbald"
  },
  {
    id: 3,
    question: 'Which one of these punk rock icons was born James Newell Osterberg Jr?',
    options: [
     "Lou Reed",
     "Mike Watt",
     "Joey Ramone",
      "Iggy Pop",

    ],
    answer: 'Iggy Pop'
  },
  {
    id: 4,
    question: "Which US punk band feature in Cheech and Chong's film 'Up In Smoke' in a battle of the bands contest? ",
    options: [
      "Youth Of Today",
      "Minor Threat",
      "The Avengers",
      "The Dils",
      ],
    answer: 'The Dils',
  },
  {
    id: 5,
    question: "This album's legendary cover features The Clash bassist Paul Simonon smashing his bass guitar at a show. What is the title of this album?",
    options: [
     'The Clash',
     'London Calling',
     'Combat Rock',
     'Sandinista!',
    ],
    answer: 'London Calling',
  }
]
function generateInitialViewElement() {
  return `
  <div id="landing">
  <div id = "initial-view">
    <h1>Early Punk Rock Quiz</h1>
   <p> Think you're punk enough to pass this quiz??? Test your knowledge of old school punk rock!</p>
    <button type="submit" id="start-button">click here to start  </button>
    </div>
    </div>
  `;
}

function generateQuestionViewElement(question) {
  return `
  <div id = "question-${question.id}">
<p id="questionView">
  question ${question.id}
  <p id="score">current score: ${correctAnswerCount}</p>
  </p>
  <div id="form-view">
    <form id="form-question">
    <h1>
   ${question.question}
    </h1>
    <fieldset id="answer">
      ${generateOptionInputElements(question.options)}
      <button type="submit" class="submitButton">Submit</button>
      </fieldset>
</form>
</div>
</div>
<div id="response-container">
</div>
`
}

function generateOptionInputElements(options) {
  var arrayOfOptions = [];
  $.each(options, function(index, value) {
    arrayOfOptions += `
      <label class="answerOption">
      <input type="radio" value="${value}" name="answer" required="">
      <span>${value}</span>
      </label>
  `
  });
  return arrayOfOptions;
}

function generateRightAnswerView() {
let h2 = `<h3>nice! you did a thing</h3>`
let nextButton = `<button id="nextButton" type="submit">Next</button>`
  $("#response-container").append(h2);
  $(".submitButton").hide();
  $("#response-container").append(nextButton);
}

function generateWrongAnswerView() {
  let h2 = `<h3> your answer was wrong the correct answer was: ${currentQuestion.answer}</h3>`
  let nextButton = `<button id="nextButton" type="submit">Next</button>`
  $("#response-container").append(h2); 
  $(".submitButton").hide();
  $("#response-container").append(nextButton);
}


var questionCounter = 0;
var correctAnswerCount = 0;
let currentQuestion = questions[questionCounter];
function questionView() {
  return generateQuestionViewElement(currentQuestion);
}


function listenForNextButton() {
  $('#nextButton').click(e => {
    moveToNextQuestion();
  })
}

function listenForFormSubmit() {
  $("#form-question").submit(e => {
    e.preventDefault();
    let selectedOption = $("input[name='answer']:checked").val();
    let isCorrectAnswer = checkIfRightAnswer(selectedOption);
    if (isCorrectAnswer) {
     generateRightAnswerView();
      correctAnswerCount++;
    } else {
      generateWrongAnswerView();
    }
    listenForNextButton();
  })
}

function isAtEndOfQuiz() {
  return questionCounter == questions.length;
}

function checkIfUserWonQuiz() {
  return correctAnswerCount >= questions.length - 2;
}

function quizCompletedView() {
  if (checkIfUserWonQuiz()) {
    return `
    <div id="answer-wrapper">
    <h1>Wow, you passed! your score was ${correctAnswerCount}. You must either be super punk, or you have really cool parents. </h1>
    </div>
    <button id ="restartQuizButton"> click here to restart!</button>
    `
  } else {
    return `
    <div id="answer-wrapper">
    <h1>Wow, you failed! your score was ${(questions.length)-(correctAnswerCount)}. Not very punk rock of you, but thats ok! </h1>
    <button id ="restartQuizButton"> click here to restart!</button>
    </div>
    `

  }
}

function moveToNextQuestion() {
  questionCounter++;

  if (isAtEndOfQuiz()) {
    let completedView = quizCompletedView();
    $('#active-view').html(completedView);
    $("#restartQuizButton").click(e => {
      restartQuiz();
    });
    return;
  }

  currentQuestion = questions[questionCounter];
  let questionHTML = questionView;
  $("#active-view").html(questionHTML);
  listenForFormSubmit();
}

function checkIfRightAnswer(selectedAnswer) {
  return currentQuestion.answer === selectedAnswer;
}

$('#active-view').append(generateInitialViewElement());

function listenForStartButton() {
  $('#start-button').click(e => {
    $("#active-view").html(questionView)
    listenForFormSubmit();
  });
};

function restartQuiz(){
  questionCounter = 0;
  correctAnswerCount = 0;
  let initialView = generateInitialViewElement(); 
  $('#active-view').html(initialView);
  currentQuestion = questions[0];
  listenForStartButton();
  console.log(questionCounter);
};

listenForStartButton();
