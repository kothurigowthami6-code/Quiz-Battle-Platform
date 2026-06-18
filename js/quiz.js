// =============================
// QUIZ STATE
// =============================

let currentQuestionIndex = 0;
let selectedQuestions = [];
let currentCategory = "";

// =============================
// START QUIZ
// =============================

function startQuiz(category) {

    currentCategory = category;

    selectedQuestions =
        getQuestionsByCategory(category);

    shuffleQuestions();

    currentQuestionIndex = 0;

    displayQuestion();
}

// =============================
// SHUFFLE QUESTIONS
// =============================

function shuffleQuestions() {

    selectedQuestions.sort(
        () => Math.random() - 0.5
    );
}

// =============================
// DISPLAY QUESTION
// =============================

function displayQuestion() {

    const question =
        selectedQuestions[currentQuestionIndex];

    console.log(
        "Question " +
        (currentQuestionIndex + 1)
    );

    console.log(
        question.question
    );

    console.log(
        question.options
    );

    // Timer module integration
    if (
        typeof resetTimer === "function"
    ) {
        resetTimer();
    }

    if (
        typeof startTimer === "function"
    ) {
        startTimer();
    }
}

// =============================
// VALIDATE ANSWER
// =============================

function validateAnswer(selectedOption) {

    const question =
        selectedQuestions[currentQuestionIndex];

    stopTimer();

    if (
        selectedOption ===
        question.answer
    ) {

        console.log("Correct Answer");

        if (
            typeof calculateScore ===
            "function"
        ) {
            calculateScore(true);
        }

    } else {

        console.log("Wrong Answer");

        if (
            typeof calculateScore ===
            "function"
        ) {
            calculateScore(false);
        }
    }

    nextQuestion();
}

// =============================
// NEXT QUESTION
// =============================

function nextQuestion() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex >=
        selectedQuestions.length
    ) {

        endQuiz();
        return;
    }

    displayQuestion();
}

// =============================
// END QUIZ
// =============================

function endQuiz() {

    stopTimer();

    console.log(
        "Quiz Finished"
    );

    if (
        typeof AppState !== "undefined"
    ) {

        console.log(
            "Score:",
            AppState.score
        );

        console.log(
            "Correct:",
            AppState.correctAnswers
        );

        console.log(
            "Wrong:",
            AppState.wrongAnswers
        );
    }
}