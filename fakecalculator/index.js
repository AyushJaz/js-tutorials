let num1=12;
let num2=5;
let r =document.getElementById("result");
document.getElementById("num-one").innerText=num1;
document.getElementById("num-two").innerText=num2;
function add(){
    r.innerText=num1+num2;
}
function subtact(){
    r.innerText=num1-num2;
}
function divide(){
    r.innerText=num1/num2;
}
function multiply(){
    r.innerText=num1*num2;
}