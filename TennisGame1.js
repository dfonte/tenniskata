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
    let score;
    switch (tiedScore) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }
    return score;
}

 TennisGame1.prototype.getGamePointDescription = function() {
    var minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) return "Advantage player1";
    else if (minusResult === -1) return "Advantage player2";
    else if (minusResult >= 2) return "Win for player1";
    else return "Win for player2";
}

TennisGame1.prototype.getStandardScoreDescription = function() {
    let tempScore = 0;
    let score = "";
    for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else {
            score += "-";
            tempScore = this.m_score2;
        }
        switch (tempScore) {
            case 0:
                score += "Love";
                break;
            case 1:
                score += "Fifteen";
                break;
            case 2:
                score += "Thirty";
                break;
            case 3:
                score += "Forty";
                break;
        }
    }
    return score;
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