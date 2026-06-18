class QuizAnalytics {
    constructor() {
        this.totalQuizzes = 0;
        this.totalScore = 0;
    }

    addQuizResult(score, totalQuestions) {
        this.totalQuizzes++;
        this.totalScore += score;
        localStorage.setItem('analytics', JSON.stringify(this.getStats()));
    }

    getStats() {
        return {
            totalQuizzes: this.totalQuizzes,
            averageScore: this.totalQuizzes > 0 ? (this.totalScore / this.totalQuizzes).toFixed(2) : 0,
            totalScore: this.totalScore
        };
    }

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
