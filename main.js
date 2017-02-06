// write your code here to make the tests pass
var TennisGame=function(player1,player2) {
 this.playerOne=player1;
 this.playerTwo=player2;
 this.playerOneScore=0;
 this.playerTwoScore=0;
 this.translateScore=function(score){
   switch (score)
   {
   case (0):
     return 'Love';
     break;
   case (1):
     return 'Fifteen';
     break;
   case (2):
     return 'Thirty';
     break;
   case (3):
    return 'Forty';
    break;
   }
 };//translateScore

 this.playerOneScores=function(){
 this.playerOneScore++;
 };//player one increases score by 1 increment
 this.playerTwoScores=function() {
 this.playerTwoScore++;
 };//player 2 increases score by 1 increment
 this.isDeuce=function(){
   if ((this.playerOneScore>=3)&&(this.playerOneScore===this.playerTwoScore)) return true;
   else return false;
 };//isDeuce
 this.playerWithHighestScore=function(){
 if (this.playerOneScore>this.playerTwoScore) return this.playerOne;
 else if(this.playerTwoScore>this.PlayerOneScore) return this.playerTwo;
 };//playerWithHighestScore
 this.hasWinner=function(){
   var diff=Math.abs(this.playerOneScore-this.playerTwoScore);
   if ((diff>=3)&&((this.playerOneScore>=3)||(this.playerTwoScore>=3))) return true;
   else return false;
 };//hasWinner
 this.hasAdvantage=function(){
  if ((this.playerOneScore>=3)&&(this.playerTwoScore>=3)&&(this.playerOneScore!=this.playerTwoScore)) return true;
  else return false;
 };//hasAdvantage
 this.getScore=function(){
   if (this.isDeuce())
   {
     return "Deuce";
   }//if there's a deuce
   else if (this.hasWinner())
    {
      if (this.playerOneScore>this.playerTwoScore)return (this.playerOne+" wins");
      else return (this.playerTwo+" wins");
    }//el if found a winner
   else if(this.hasAdvantage())
    {
      if (this.playerOneScore>this.playerTwoScore)return ("Advantage "+this.playerOne);
      else return ("Advantage "+this.playerTwo);
    }//el if found advantage
    else if (this.playerOneScore===this.playerTwoScore) return (this.translateScore(this.playerOneScore)+" all");
    else return (this.translateScore(this.playerOneScore)+", "+this.translateScore(this.playerTwoScore));
          }//getScore
};//TennisGame
