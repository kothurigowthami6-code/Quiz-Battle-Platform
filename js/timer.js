// =============================
// APP STATE
// =============================

const AppState = {
    timeLeft: 30
};

let timerInterval = null;

// =============================
// START TIMER
// =============================

function startTimer() {

    const timerElement =
        document.getElementById("timer");

    AppState.timeLeft = 30;

    if (timerElement) {
        timerElement.innerText =
            AppState.timeLeft;
    }

    timerInterval = setInterval(() => {

        AppState.timeLeft--;

        if (timerElement) {
            timerElement.innerText =
                AppState.timeLeft;
        }

        if (AppState.timeLeft <= 0) {

            stopTimer();

            autoSubmit();
        }

    }, 1000);
}

// =============================
// STOP TIMER
// =============================

function stopTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;
    }
}

// =============================
// RESET TIMER
// =============================

function resetTimer() {

    stopTimer();

    AppState.timeLeft = 30;

    const timerElement =
        document.getElementById("timer");

    if (timerElement) {

        timerElement.innerText =
            AppState.timeLeft;
    }
}

// =============================
// AUTO SUBMIT
// =============================

function autoSubmit() {

    console.log("Time Over");

    currentQuestionIndex++;

    nextQuestion();
}