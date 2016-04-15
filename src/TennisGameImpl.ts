/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {

  private players: {Players};

  constructor (
      thePlayers
  ) {
    this.players = thePlayers;
  }

  wonPoint(player) {
    player.points += 1;
  }

  getScore(): string {
    var score: string;
    if (this.players[0].points == 0 && this.players[1].points == 0) {
      score = "love-all"
    } else if (this.players[0].points == 0 && this.players[1].points == 1) {
      score = "love-15"
    } else if (this.players[0].points == 0 && this.players[1].points == 2) {
      score = "love-30"
    } else if (this.players[0].points == 0 && this.players[1].points == 3) {
      score = "love-40"
    } else if (this.players[0].points == 1 && this.players[1].points == 0) {
      score = "15-love"
    } else if (this.players[0].points == 1 && this.players[1].points == 1) {
      score = "15-all"
    } else if (this.players[0].points == 1 && this.players[1].points == 2) {
      score = "15-30"
    } else if (this.players[0].points == 1 && this.players[1].points == 3) {
      score = "15-40"
    } else if (this.players[0].points == 2 && this.players[1].points == 0) {
      score = "30-love"
    } else if (this.players[0].points == 2 && this.players[1].points == 1) {
      score = "30-15"
    } else if (this.players[0].points == 2 && this.players[1].points == 2) {
      score = "30-all"
    } else if (this.players[0].points == 2 && this.players[1].points == 3) {
      score = "30-40"
    } else if (this.players[0].points == 3 && this.players[1].points == 0) {
      score = "40-love"
    } else if (this.players[0].points == 3 && this.players[1].points == 1) {
      score = "40-15"
    } else if (this.players[0].points == 3 && this.players[1].points == 2) {
      score = "40-30"
    } else if (this.players[0].points >= 3 || this.players[1].points >= 3) {
      if (this.players[0].points - this.players[1].points == 1) {
        score = "Advantage player1"
      } else if (this.players[1].points - this.players[0].points == 1) {
        score = "Advantage player2"
      } else if (this.players[0].points - this.players[1].points > 1) {
        score = "Game player1"
      } else if (this.players[1].points - this.players[0].points > 1) {
        score = "Game player2"
      } else {
        score = "deuce"
      }
    }
    return score;
  }
}

class playerImp implements Player {
  points: number;
  name: string;
  constructor(name: string) {
    this.points = 0;
    this.name = name;
  }
}