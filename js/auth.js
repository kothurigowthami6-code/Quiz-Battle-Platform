let currentUser = null;

// Register Player
function registerPlayer(name) {

    if (!name || name.trim() === "") {
        alert("Please enter a valid name");
        return false;
    }

    currentUser = {
        name: name.trim(),
        score: 0,
        startTime: null
    };

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    return true;
}

// Get Current User
function getCurrentUser() {

    if (!currentUser) {

        currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        );
    }

    return currentUser;
}

// Start Quiz
function startQuiz() {

    const playerName =
        document.getElementById("playerName").value;

    const category =
        document.getElementById("category").value;

    if (!playerName) {
        alert("Please enter your name");
        return;
    }

    if (!category) {
        alert("Please select a category");
        return;
    }

    registerPlayer(playerName);

    localStorage.setItem(
        "selectedCategory",
        category
    );

    const user = getCurrentUser();

    user.startTime = Date.now();

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    // Hide Home Page
    document.getElementById(
        "homePage"
    ).style.display = "none";

    // Show Quiz Page
    document.getElementById(
        "quizPage"
    ).style.display = "block";

    // Start quiz
    if (
        typeof startQuizGame === "function"
    ) {
        startQuizGame(category);
    }
}

// Restart Quiz
function restartQuiz() {

    location.reload();
}

// Save Score
function saveScore(score) {

    const user = getCurrentUser();

    if (user) {

        user.score = score;

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );
    }
}

// Logout
function logout() {

    localStorage.removeItem(
        "currentUser"
    );

    localStorage.removeItem(
        "selectedCategory"
    );

    currentUser = null;

    location.reload();
}
console.log("auth.js loaded");