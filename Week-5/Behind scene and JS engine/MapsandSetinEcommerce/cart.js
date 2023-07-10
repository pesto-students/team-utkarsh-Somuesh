let productViews = new WeakMap();
let cartItems = new WeakSet();

/*
increase views of a product if its already viewd, else add that to view object.
*/

function incrementProductViews(productId){
    if(productViews.has(productId)){
        let count = productViews.get(productId)+1;
        productViews.set(productId, count);
    }
    else{
        productViews.set(productId,1);
    }
}

/*
Product adding to car: 
if already present, print: Product {id} already in Cart
if not present, add that to cart and print success message 
*/

function addToCart(productId){
    if(cartItems.has(productId)){
        alert `Product ${productId} already in Cart`;
    }
    else{
        cartItems.add(productId)
        alert `Product ${productId} added successfully`;
    }
}


//since weakSet and weakMap stores objects, here we are directly giving product as an Object
let product = {
    id : "Apple"
};

let product1 = {
    id : "Mango"
};

incrementProductViews(product); // viewed first time
incrementProductViews(product); // viewed second time

incrementProductViews(product1); // viewed first time

console.log(productViews); // {key:{id:"Apple"} value: 2}    , {key:{id:"Mango"} value: 1}

addToCart(product);
addToCart(product1);

addToCart(product1);

console.log(cartItems); // {{id:"Apple"}}    , {{id:"Mango"}}
