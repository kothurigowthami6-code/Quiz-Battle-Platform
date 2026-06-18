const AppState = {
    timeLeft: 30,
    score: 0,
    currentQuestion: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalTimeBonus: 0,
    quizFinished: false
};

let timerInterval;

function startTimer() {
    AppState.timeLeft = 30;

    timerInterval = setInterval(() => {
        AppState.timeLeft--;

        console.log("Time Left:", AppState.timeLeft);

        if (AppState.timeLeft <= 0) {
            stopTimer();
            autoSubmit();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    AppState.timeLeft = 30;
}

function calculateScore(isCorrect) {
    if (isCorrect) {
        AppState.score += 10;
        AppState.correctAnswers++;
        AppState.totalTimeBonus += AppState.timeLeft;
    } else {
        AppState.wrongAnswers++;
    }

    console.log("Score:", AppState.score);
}

function autoSubmit() {
    AppState.wrongAnswers++;
    console.log("Time Over");
}

function endQuiz() {
    stopTimer();

    const finalScore =
        AppState.score +
        AppState.totalTimeBonus;

    AppState.quizFinished = true;

    console.log("Quiz Finished");
    console.log("Final Score:", finalScore);
}