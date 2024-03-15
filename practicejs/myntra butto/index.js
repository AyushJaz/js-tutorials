let addSaleItem=document.getElementById('add-sale-item');
let addToWishlist=document.getElementById('add-to-wishlist');
let addToBag=document.getElementById('add-to-bag');
let para=document.querySelector('p');
let items=0;
addSaleItem.addEventListener('click',function(){
    items+=2;
    para.textContent=`Your Bag has ${items} items`
})
addToBag.addEventListener('click',function(){
    items+=1;
    para.textContent=`Your Bag has ${items} items`
})
addToWishlist.addEventListener('click',function(){
    items--;
    para.textContent=`Your Bag has ${items} items`
})