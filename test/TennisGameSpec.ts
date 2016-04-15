/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function() {
    
  var game : TennisGame;
  var somePlayers : Player[];

  beforeEach(function() {
    //TODO: Create some players
    somePlayers = [];
    somePlayers.push(new playerImp("A"));
    somePlayers.push(new playerImp("B"));
    game = new TennisGameImpl(somePlayers);
  });

  it('when it has just started, the score should be "love-all"', function() {
    expect(game.getScore()).toBe('love-all');
  });

  it('when player1 wins a point the score should be "15-love"', function() {
    game.wonPoint(somePlayers[0]);
    expect(game.getScore()).toBe('15-love');
  });

  it('when both players have won 1 point the score should be "15-all"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('15-all');
  });

  it('when both players have won 2 points the score should be "30-all"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('30-all');
  });

  it('when player1 has won 1 point and player2 has won 2 points the score should be "15-30"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('15-30');
  });

  it('when a the scores are level, and at least 3 points have been scored by each player, then the score should be "deuce"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('deuce');
  });

  it('when at least 3 points have been scored by each player, and player2 wins the next point, then the score should be "Advantage player2"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('deuce');
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('Advantage player2'); // You may need to modify this depending on your implementation of the player interface
  });

  it('when less 3 points have been scored by each player, and player1 gets to 4 points, then the score should be "Game player1"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('40-15');
    game.wonPoint(somePlayers[0]);
    expect(game.getScore()).toBe('Game player1'); // You may need to modify this depending on your implementation of the player interface
  });

  it('when at least 3 points have been scored by each player, and player1 is 2 points ahead, then the score should be "Game player1"', function() {
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[0]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    game.wonPoint(somePlayers[1]);
    expect(game.getScore()).toBe('deuce');
    game.wonPoint(somePlayers[0]);
    expect(game.getScore()).toBe('Advantage player1'); // You may need to modify this depending on your implementation of the player interface
    game.wonPoint(somePlayers[0]);
    expect(game.getScore()).toBe('Game player1'); // You may need to modify this depending on your implementation of the player interface
  });
  
});

