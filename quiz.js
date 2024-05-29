const questions = [
    {
        question: "Qual é a base do sistema numérico decimal?",
        answers: [
            {text: "2", correct: false},
            {text: "10", correct: true},
            {text: "12", correct: false},
            {text: "16", correct: false},
        ]
    },
    {
        question: "Quantos dígitos diferentes são usados no sistema numérico decimal?",
        answers: [
            {text: "10", correct: true},
            {text: "5", correct: false},
            {text: "12", correct: false},
            {text: "8", correct: false},
        ]
    },
    {
        question: "Qual número vem imediatamente após 99 no sistema decimal?",
        answers: [
            {text: "90", correct: false},
            {text: "101", correct: false},
            {text: "110", correct: false},
            {text: "100", correct: true},
        ]
    },
    {
        question: "Qual é a representação decimal do número binário 1010?",
        answers: [
            {text: "8", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: true},
            {text: "11", correct: false},
        ]
    },
    {
        question: "Qual é a representação decimal do número binário 101010?",
        answers: [
            {text: "72", correct: false},
            {text: "82", correct: true},
            {text: "80", correct: false},
            {text: "90", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, correct) {
    if (correct) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
            btn.classList.add("correct");
        }
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
