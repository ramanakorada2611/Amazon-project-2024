// export let cart =[{
//     productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity:2
// },{
//     productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     quantity:2
// }]

// cart data storing in localstorage from dom
export let cart=JSON.parse(localStorage.getItem('cart'))
if(!cart){
    [{
            productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity:2
    },{
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity:2
    }]
}
 function saveLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
 }
export function cartQuantity(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem
        }
    })
    if(matchingItem){
        matchingItem.quantity+=1
    }
    else{
        cart.push({
            // productId:productId,
            productId,//shorthand property if proeprty and value  same
            quantity:1
        })
    }


    saveLocalStorage()
}

export function removeCartProducts(productId){
const newCart =[]
cart.forEach((cartItem)=>{
    if(cartItem.productId!=productId){
        newCart.push(cartItem)
    }
})
 cart = newCart// updatting the elements in cart arrway


 saveLocalStorage()
}