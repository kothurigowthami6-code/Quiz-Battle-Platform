
function saveScore(playerName, score) {
  let board = JSON.parse(localStorage.getItem('quizBoard')) || [];
  board.push({name: playerName, score: score, date: new Date().toLocaleDateString()});
  board.sort((a, b) => b.score - a.score); // High score top
  board = board.slice(0, 10); // Top 10 only
  localStorage.setItem('quizBoard', JSON.stringify(board));
}

function loadLeaderboard() {
  let board = JSON.parse(localStorage.getItem('quizBoard')) || [];
  let table = document.getElementById('leaderboardTable');
  if(!table) return;
  table.innerHTML = board.map((p, i) => 
    `<tr><td>${i+1}</td><td>${p.name}</td><td>${p.score}</td><td>${p.date}</td></tr>`
  ).join('');
}

window.onload = loadLeaderboard;
