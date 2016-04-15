// Is is an interface for a "Player" type, but it needs some work.
// Hint: You could keep track of a player's points on the player object
interface Player {
  points: number;
  name: string;
};


// This is the interface for the TennisGame class
interface TennisGame {

  /** 
   * Notfies this TennisGame instance that the player has won a point.
   */
  wonPoint(player : Player) : void;
  
  /** 
   * Returns the verbal score of the game. 
   * Example: Returns "15-love" if player A has won one point and 
   * player B hos not yet won a point .
   */
  getScore() : string;
}


