let count=0;
let num=document.getElementById("count")
function increment(){
    count+=1;
    num.innerText=count;
}
let saveEl=document.getElementById("save-el");
function save()
{
    saveEl.textContent+=" "+count+" -"
    count=0;
    num.textContent=count;
}