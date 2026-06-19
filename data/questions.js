class Leaderboard {

    constructor() {

        this.scores =
            JSON.parse(
                localStorage.getItem("leaderboard")
            ) || [];
    }

    addScore(username, score) {

        this.scores.push({
            username: username,
            score: score
        });

        this.scores.sort(
            (a, b) => b.score - a.score
        );

        this.scores =
            this.scores.slice(0, 10);

        localStorage.setItem(
            "leaderboard",
            JSON.stringify(this.scores)
        );
    }

    displayLeaderboard() {

        const container =
            document.getElementById(
                "leaderboardContainer"
            );

        if (!container) return;

        if (this.scores.length === 0) {

            container.innerHTML =
                "<p>No scores available.</p>";

            return;
        }

        let html = `
            <table border="1" width="100%">
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
        `;

        this.scores.forEach(
            (player, index) => {

                html += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${player.username}</td>
                        <td>${player.score}</td>
                    </tr>
                `;
            }
        );

        html += "</table>";

        container.innerHTML = html;
    }
}

const leaderboard = new Leaderboard();