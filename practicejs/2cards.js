let firstCard=6;
let secondCard=9;
let hasBlackJack=false;
let sum=firstCard+secondCard +6;
let isAlive=true;
let message="";
if(sum<=20)
{
    message="Do you want to draw anew card ?😊😊";
}
else if( sum===21){
    message="Wohoo! you've got Blackjack!🥳🥳 ";
    hasBlackJack=true
}
else
{
    message="You're out of the game😭😭";
    isAlive=false;

}console.log(message)
console.log(isAlive)
