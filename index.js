var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is Your Name?");

console.log("welcome " + userName + " to Do YOU KNOW VIDHI?");

var highScores = [
  {
    name: "Dhruvik",
    score: 3,
  },
  {
    name: "Dhruvi",
    score: 3,
  },
]

var score = 0;

function play(question, answer) {
  
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
    score = score - 1;
  }
  console.log("your current score: ", score);
  console.log("-----------------------")
}

play("where do i live?", "Gujarat");
play("How old am i?", "19");
play("where do i study? ", "Gec");
play("what is my favorite song? ", "ilahi");
play("what is favourite color?", "Black");

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();