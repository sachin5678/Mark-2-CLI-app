var readlinesync = require("readline-sync");

var score = 0; //score global variable

console.log("welcome to analog electronics quiz");

var userName = readlinesync.question("what is your name ? ")
console.log("Hello 🙄" + userName + "!");
console.log("In this quiz, you will be awarded 1 point for each correct answer");
console.log("--------*********---------")
var questions = [
  {
    num: "first",
    question: "To prevent a DC return between source and load, it is necessary to use ",
    a: "A. resistor between source and load",
    b: "B. inductor between source and load",
    c: "C.capacitor between source and load ",
    d: "D. both a and b",
    ans: "a"
  },
  {
    num: "second",
    question: "For a base current of 10 μA, what is the value of collector current in common emitter if βdc = 100 ",
    a: "A. 10 μA",
    b: "B. 100 μA",
    c: "C. 1 mA",
    d: "D. 1 mA",
    ans: "d"
  },
  {
    num: "third",
    question: "Which of the following oscillators is suitable for frequencies in the range of mega hertz?",
    a: "A. 	Wien bridge",
    b: "B. 	Hartley	",
    c: "C. RC phase shift",
    d: "D. Both (a) and (c)",
    ans: "b"
  },
  {
    num: "fourth",
    question: " A full wave rectifier circuit using centre tapped transformer and a bridge rectifier are fed at 100 V, 50 Hz. The frequencies of outputs in these two rectifiers are",
    a: "A. 100 Hz each",
    b: "B. 50 Hz each",
    c: "C. 100 Hz and 50 Hz",
    d: "D. 50 Hz and 100 Hz",
    ans: "a"
  },
  {
    num: "fifth",
    question: " When the ac base voltage in a CE amplifier circuit is too high, the ac emitter current is",
    a: "A. 	distorted",
    b: "B. zero",
    c: "C. alternatingr",
    d: "D. constant",
    ans: "a"
  },
  {
    num: "sixth",
    question: "In a transistor amplifier, the reverse saturation current ICO",
    a: "A. Doubles for every 20°C rise in temperature",
    b: "B. Doubles for every 10°C rise in temperature",
    c: "C. Increase 100°C with temperature",
    d: "D. Doubles for every 5°C rise in temperature",
    ans: "b"
  },
];


function play(quiz) {
  var questionNumber = quiz.num;
  console.log("This is your " + questionNumber + " question -> \n");
  console.log(quiz.question + "\n");
  console.log(quiz.a + "\n");
  console.log(quiz.b + "\n");
  console.log(quiz.c + "\n");
  console.log(quiz.d + "\n");


  var userAnswer = readlinesync.question("Enter your Answer Option: ");

  if (quiz.ans === userAnswer.toLowerCase()) {
    console.log("\nYou are right!😎😎😎");
    score = score + 1;
  } else {
    console.log("\nYou are wrong! 😭😭😭");
    console.log("Correct Option is " + quiz.ans.toUpperCase() + ".");
  }
  console.log("Your current score is:", score + "\n");
}

function queShown() {
  for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
  }
  console.log("You have completed the Quiz.\n");
}

function finalscore() {
  console.log("Your final score is:", score,"😍😍😍");

  console.log("\n");

}
queShown();
finalscore();

