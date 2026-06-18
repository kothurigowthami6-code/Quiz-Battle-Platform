// Quiz Analytics - User stats calculate చేస్తుంది
class QuizAnalytics {
    constructor() {
        this.totalQuizzes = 0;
        this.totalScore = 0;
    }

    // Quiz complete అయ్యాక call చేయి
    addQuizResult(score, totalQuestions) {
        this.totalQuizzes++;
        this.totalScore += score;
        localStorage.setItem('analytics', JSON.stringify(this.getStats()));
    }

    // Stats return చేస్తుంది
    getStats() {
        return {
            totalQuizzes: this.totalQuizzes,
            averageScore: this.totalQuizzes > 0 ? (this.totalScore / this.totalQuizzes).toFixed(2) : 0,
            totalScore: this.totalScore
        };
    }

    // Console లో print చేస్తుంది
    displayStats() {
        const stats = this.getStats();
        console.log("Total Quizzes:", stats.totalQuizzes);
        console.log("Average Score:", stats.averageScore);
        console.log("Total Score:", stats.totalScore);
    }
}

// Object create చేయి
const analytics = new QuizAnalytics();
export default analytics;
