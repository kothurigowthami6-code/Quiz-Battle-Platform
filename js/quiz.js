// =============================
// QUIZ STATE
// =============================

let currentQuestionIndex = 0;
let selectedQuestions = [];
let currentCategory = "";
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

let isAnswered = false; // ✅ FIX: prevents double scoring

const QUESTIONS_PER_QUIZ = 10;

// =============================
// START QUIZ
// =============================

function startQuizGame(category) {
    currentCategory = category;

    selectedQuestions = getQuestionsByCategory(category);

    console.log("Category:", category);
    console.log("Questions:", selectedQuestions);

    if (!selectedQuestions || selectedQuestions.length === 0) {
        alert("No questions found for this category");
        return;
    }

    shuffleQuestions();

    selectedQuestions = selectedQuestions.slice(0, QUESTIONS_PER_QUIZ);

    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    document.getElementById("score").innerText = score;

    displayQuestion();
}

// =============================
// GET QUESTIONS
// =============================

function getQuestionsByCategory(category) {
    if (typeof questions === "undefined") {
        console.error("questions.js not loaded");
        return [];
    }

    return questions[category] || [];
}

// =============================
// SHUFFLE QUESTIONS
// =============================

function shuffleQuestions() {
    selectedQuestions.sort(() => Math.random() - 0.5);
}

// =============================
// DISPLAY QUESTION
// =============================

function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }

    isAnswered = false; // ✅ reset lock for new question

    const question = selectedQuestions[currentQuestionIndex];

    document.getElementById("question").innerText =
        `${currentQuestionIndex + 1}. ${question.question}`;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");

        btn.innerText = option;
        btn.classList.add("option-btn");

        btn.onclick = function () {
            validateAnswer(index);
        };

        optionsContainer.appendChild(btn);
    });

    if (typeof resetTimer === "function") resetTimer();
    if (typeof startTimer === "function") startTimer();
}

// =============================
// VALIDATE ANSWER
// =============================

function validateAnswer(selectedOption) {
    if (isAnswered) return; // ✅ prevent double clicks
    isAnswered = true;

    const question = selectedQuestions[currentQuestionIndex];
    if (!question) return;

    if (typeof stopTimer === "function") stopTimer();

    // disable all buttons
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
    });

    if (selectedOption === question.answer) {
        score += 10;
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    document.getElementById("score").innerText = score;

    currentQuestionIndex++;

    setTimeout(() => {
        if (currentQuestionIndex >= selectedQuestions.length) {
            endQuiz();
        } else {
            displayQuestion();
        }
    }, 300);
}

// =============================
// END QUIZ
// =============================

function endQuiz() {
    if (typeof stopTimer === "function") stopTimer();

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    document.getElementById("finalScore").innerText = score;
    document.getElementById("correctCount").innerText = correctAnswers;
    document.getElementById("wrongCount").innerText = wrongAnswers;

    const accuracy =
        selectedQuestions.length > 0
            ? Math.round((correctAnswers / selectedQuestions.length) * 100)
            : 0;

    document.getElementById("accuracy").innerText = accuracy + "%";

    // =============================
    // LEADERBOARD FIXED
    // =============================

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    const playerName = currentUser?.name || "Player";

    const leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
        username: playerName,
        score: score
    });

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );

    console.log("Quiz Finished");
    console.log("Final Score:", score);
}