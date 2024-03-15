let s=1;
let t=setInterval(sayhello,1000);
function sayhello()
{
    console.log("hello");
    s++;
    if(s==10)
    clearInterval(t);
}