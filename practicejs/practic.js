let product1={
    company:'Apple',
    price:50000,
    itemName:'i-Phone 15',
    diliveryTime:'1d 3h',
}
let data=product1;
console.log(data);
product1.price=58000;
console.log(data);
let {diliveryTime}=data
console.log(diliveryTime);
function identicalProuct(){
    console.log(data==product1);
    console.log(data==product1);
}
identicalProuct();