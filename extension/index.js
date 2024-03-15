const click=document.getElementById("input-button");
const inputEl=document.getElementById("input-el");
let arr=[];
let ulEl=document.getElementById("ul-el")

click.addEventListener("click",function(){
    arr.push(inputEl.value)
    if(arr.length!=0&&arr[(arr.length)-1]=='')
    arr.pop();
    ulEl.innerHTML+="<li><a href="+arr[arr.length-1]+">"+arr[arr.length-1]+"</a></li>";
})

