// Leaderboard - Top scores manage చేస్తుంది
class Leaderboard {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
  }

  // కొత్త score add చేయి
  addScore(username, score) {
    this.scores.push({ username, score, date: new Date().toLocaleDateString() });
    // Score base చేసి sort చేయి - ఎక్కువ score top లో
    this.scores.sort((a, b) => b.score - a.score);
    // Top 10 మాత్రమే keep చేయి
    this.scores = this.scores.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(this.scores));
  }

  // Top 10 list return చేస్తుంది
  getTopScores() {
    return this.scores;
  }

  // HTML table లో display చేయి
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
