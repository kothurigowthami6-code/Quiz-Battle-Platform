let currentUser = null;

// Register / Login Player
function registerPlayer(name) {
    if (!name || name.trim() === "") {
        alert("⚠️ Please enter a valid name");
        return false;
    }

    currentUser = {
        name: name.trim(),
        score: 0,
        startTime: null
    };

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    return true;
}

// Get current user session
function getCurrentUser() {
    if (!currentUser) {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    return currentUser;
}

// Start Quiz Flow
function startQuiz() {
    const user = getCurrentUser();

    if (!user) {
        alert("🚀 Please register first!");
        return;
    }

    user.startTime = new Date().getTime();
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Navigate to quiz page
    window.location.href = "quiz.html";
}

// Restart Quiz Flow
function restartQuiz() {
    const user = getCurrentUser();

    if (user) {
        user.score = 0;
        user.startTime = null;
        localStorage.setItem("currentUser", JSON.stringify(user));
    }

    window.location.href = "index.html";
}

// End Quiz Flow
function endQuiz(finalScore) {
    const user = getCurrentUser();

    if (user) {
        user.score = finalScore;
        localStorage.setItem("currentUser", JSON.stringify(user));
    }

    alert("🏁 Quiz Completed!");
    window.location.href = "result.html";
}

// Logout user
function logout() {
    localStorage.removeItem("currentUser");
    currentUser = null;

    alert("👋 Logged out successfully!");
    window.location.href = "index.html";
}