let hands = ["rock", "paper", "scissor"];

function result() {
    let c = Math.random() * 3;
    c = Math.ceil(c);
    if (c === 1)
        return hands[0];
    else if (c === 2)
        return hands[1];
    else
        return hands[2];
}
for( let i=1;i<10;i++)
{
    let ans = result();
console.log(ans)

}