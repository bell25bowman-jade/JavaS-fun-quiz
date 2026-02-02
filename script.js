const quizData = [
  {
    question: "which option is an event listener?",
    options: [
      ".addEventListener()",
      ".innerHTML",
      ".getElementById",
      "returnValue",
    ],
    answer: ".addEventListener()",
  },
  {
    question: "What function behavior adds a box (node) to a container?",
    options: [".length", ".appendChild()", ".innerText", ".classList.add()"],
    answer: ".appendChild()",
  },
  {
    question: "What word is not a reserved keyword in JavaScript?",
    options: ["let", "class", "return", "name"],
    answer: "name",
  },
  {
    question: "Which is not an example of UpperCamelCase nor camelCase?",
    options: ["userName", "UserAccount", "MAX_USERS", "favoriteColors"],
    answer: "MAX_USERS",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionE1 = document.getElementById("question");
  const optionContainer = document.getElementById("options");
  const qData = quizData[currentQuestion];

  optionContainer.innerHTML = "";
  questionE1.textContent = qData.question;

  qData.options.forEach((opt, idx) => {
    const optionE1 = document.createElement("div");
    optionE1.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = opt;
    input.id = `opt${idx}`;

    const text = document.createElement("span");
    text.textContent = opt;

    optionE1.appendChild(input);
    optionE1.appendChild(text);
    optionContainer.appendChild(optionE1);
  });
}

function getSelected() {
  const answer = document.querySelectorAll('input[name="answer"]');
  for (let ans of answer) {
    if (ans.checked) return ans.value;
  }
}

document.getElementById("next").addEventListener("click", () => {
  const selected = getSelected();
  if (selected === null) {
    alert("Please select an anser before continuing.");
    return;
  }

  if (selected === quizData[currentQuestion].answer) score++;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
        <button id="restart">Restart Quiz</button>
        `;
    document
      .getElementById("restart")
      .addEventListener("click", () => location.reload());
  }
});

loadQuestion();
