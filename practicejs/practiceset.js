let arr = [5, 6];
arr.unshift(4);
arr.push(7);
console.log(arr);

function index() {
    console.log(arr[3]);
}
index();
let arr2 = arr.slice(0);
console.log(arr2);
let k = 2;
let c = 1;
while (c <= 5) {
    let i = 2;
    let d = 1;
    while (i <= k / 2) 
    {
        if (k % i == 0)
            d++;
        i++;
    }
    if (d == 1)
      {
        c++;
        console.log(k);
      }  
    k++;
}
 k = 2;
 c = 1;
while (c <= 5) {
    let i = 2;
    let d = 1;
    while (i <= k / 2) 
    {
        if (k % i == 0)
            d++;
        i++;
        if(d==3)
        break;
    }
    if (d == 1)
      {
        c++;
        console.log(k+" ");
      }  
    k++;
}
for(let i=10;i>0;i--)
{
    console.log(i+`\n`);
}
let arr3=[1,-6,5,7,-98]
for(let i=0;i<arr3.length;i++)
{
    if(arr3[i]<0)
    continue;
console.log(arr3[i]);
}
let arr4 =["KG","CODING","JAVASCRIPT","COURSE","IS","BEST"];
let a="";
for(let i=0;i<arr4.length;i++)
a+=arr4[i]+" ";
console.log(a);