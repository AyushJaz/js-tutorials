let card = [];
let player={
    name: "Ayush",
    chips: 145
}
let d=0;
let sum = 0;
let message = "";
let blackJack=false;
let isAlive = false;
let newCardButton = document.getElementById("new-card");
newCardButton.style.display='none';
let cardEl = document.getElementById("card-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");

let playerEl = document.getElementById('detail')

console.log(playerEl)
playerEl.textContent=player.name+" : $"+player.chips;

function randomCard() {
    let r = Math.random() * 13;
    let c = Math.ceil(r);
    if (c === 1)
        c = 11;
    else if (c > 10)
        c = 10;
    return Math.ceil(c);
}
function startGame() {
    let firstCard = randomCard();
    let secondCard =  randomCard();
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    d=0;
    isAlive = true;
    newCardButton.style.display='inline-block';
    renderGame();
}
function renderGame() {
    if (sum < 21) {
        message = "Do you want a new card?🤨"
    }
    else if (sum === 21) {
        message = "Wohoo! You'v won the watch🥳";
        blackJack=true;
        newCardButton.style.display='none';
    }
    else{
        newCardButton.style.visibility='hiden';
        message = "You're out of the game!😭"
        isAlive = false;
        d++;
        newCardButton.style.display='none';
    }
    if (isAlive == true||d==1)
     {
        cardEl.textContent = "Cards : ";
        for (i = 0; i < card.length; i++)
         {
            cardEl.textContent += card[i] + " ";
         }
        sumEl.textContent = "Sum : " + sum;
        messageEl.textContent = message;
    }
}
function newCard() {
    let thirdCard = randomCard();
    sum += thirdCard;
    card.push(thirdCard);
    console.log(sum+" "+thirdCard)
    renderGame();
}