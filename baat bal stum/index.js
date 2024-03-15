let batButton=document.getElementById('bat');
let ballButton=document.getElementById('ball');
let stumpButton=document.getElementById('stump');
let arr=['bat','ball','stum']
let score=JSON.parse(localStorage.getItem('score'))||
{
    won:0,
    lose:0,
    tie:0,
};
score.displayScore=function(){
    return `win: ${score.won}   lose: ${score.lose}   tie: ${score.tie}`;
};
function result(choice){
    let random= Math.ceil(Math.random()*3);
    document.getElementById('result').textContent=`Your choies is ${arr[choice-1]} computer choes ${arr[random-1]}  `
    if(choice-random===-1||choice-random===2)
    {
    document.getElementById('result').textContent+='You Win 🥳  \n';
    score.won++;
    }
else  if(choice-random===1||choice-random===-2)
{
    document.getElementById('result').textContent+='You Lost 😭 \n';
    score.lose++;
}

else{
    document.getElementById('result').textContent+=" \n It's a tie ";
    score.tie++;
}
document.getElementById('result').innerText+="\n"+score.displayScore()

localStorage.setItem('score',JSON.stringify(score));
}
function reset(){
    document.getElementById('result').innerText='';
    score.won=0;
    score.lose=0;
    score.tie=0;
    localStorage.clear();
}