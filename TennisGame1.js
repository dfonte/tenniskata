var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getTieScoreDescription = function(tiedScore) {
    if (tiedScore >= 3 )
        return "Deuce";
    return this.getScoreDescriptionFromNumericScore(this.m_score1) + "-All";
}

 TennisGame1.prototype.getGamePointDescription = function() {
    const leader = this.m_score1 > this.m_score2 ? "player1" : "player2";
    const absoluteScoreDifference = Math.abs(this.m_score1 - this.m_score2);

    if (absoluteScoreDifference === 1)
        return "Advantage " + leader;
    return "Win for " + leader;
}

TennisGame1.prototype.getScoreDescriptionFromNumericScore = function(numericScore) {
    let scoreDescription = "";
    switch (numericScore) {
        case 0:
            scoreDescription = "Love";
            break;
        case 1:
            scoreDescription = "Fifteen";
            break;
        case 2:
            scoreDescription = "Thirty";
            break;
        case 3:
            scoreDescription = "Forty";
            break;
    }
    return scoreDescription;
}

TennisGame1.prototype.getStandardScoreDescription = function() {
    return this.getScoreDescriptionFromNumericScore(this.m_score1)
        + "-"
        + this.getScoreDescriptionFromNumericScore(this.m_score2);
}

TennisGame1.prototype.isTieGame = function() {
    return this.m_score1 === this.m_score2;
}

TennisGame1.prototype.isGamePoint = function() {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
}

TennisGame1.prototype.getScore = function() {
    let score;
    if (this.isTieGame()) {
        score = this.getTieScoreDescription(this.m_score1);
    } else if (this.isGamePoint()) {
        score = this.getGamePointDescription();
    } else {
        score = this.getStandardScoreDescription();
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}