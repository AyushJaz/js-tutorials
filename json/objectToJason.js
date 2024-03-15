let product={
    name:"Dell inspiron",
    price:60000,
    ratings:{
        stars:4.5,
        noOfReview:4586,
    },
    specification:{
        displaySize:'16in',
        ram:'8Gb',
        storage:'1Tb',
        storageType:"HDD",
          },
}
console.log(typeof product);
console.log(product);
let str=JSON.stringify(product);
console.log(typeof str);
console.log(str);
