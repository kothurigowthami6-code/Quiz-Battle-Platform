class Leaderboard {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
  }

  addScore(username, score) {
    this.scores.push({ username, score, date: new Date().toLocaleDateString() });
    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(this.scores));
  }

  getTopScores() {
    return this.scores;
  }

  displayLeaderboard(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    let html = '<h3>🏆 Leaderboard</h3><ol>';
    this.scores.forEach((player, index) => {
      html += `<li>${player.username} - ${player.score} points</li>`;
    });
    html += '</ol>';
    container.innerHTML = html;
  }
}

const leaderboard = new Leaderboard();
export default leaderboard;
