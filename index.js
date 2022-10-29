var readlineSync = require("readlineSync");

var score = 0;

var highScores = [
  {
    name: "Vidhi",
    score: 4,
  },
  {
    name: "Dhruvik",
    sore: 3
  },
]

var question = [{
  question: "Where do I live? ",
  answer: "Gujarat"
}, {
  question: "what i am studying now? ",
  answer: "Engineering"
},
{
  question: "Where do I Study? ",
  answer: "GEC"
},
{
  question: "what is my favorite song?",
  answer: "ilahi"
},
{
  question: "what is my favorite place?",
  answer: "My Home Town"
}];

function welcome() {
  var userName = readline.quastion("What's your name?");
  console.log("welcome " + username + " to DO YOU KNOW VIDHI?");
}

function play(quastion, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUppercase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
unction showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScores();
