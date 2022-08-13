const cartItem = document.querySelector('.cart-item');
const cartItemsCount = document.querySelectorAll('.cart-item-wrapper');
const addToCartBtn = document.querySelector('#addToCartBtn');
const minusQuantity = document.querySelector('.minus'); 
const addQuantity = document.querySelector('.add');

let basketQuantity = document.querySelector('.quantity');
let basketCount = document.querySelector('.user-cart');
let productDefault = "<div class='cart-item-wrapper'><div class='item-details'><p>Your cart is empty</p></div></div>";
let product ="<div class='cart-item-wrapper'><a class='cart-item-image' href='#'><img src='images/image-product-1-thumbnail.jpg' alt='image-product-1-thumbnail'/></a><div class='item-details'><p class='item-description'>Autumn Limited Edition..</p><p class='item-price'>$<span class='order-price'>125.00</span> x <span class='order-quantity'>1</span> <span class='order-total'>$125.00</span></p></div><a href='#' class='item-action' onclick='deleteToCart()'><img src='images/icon-delete.svg' alt='delete button'></a></div><div class='cart-item-button'><button class='button'>Checkout</button></div>";
/**
 * Click events
 */
addToCartBtn.addEventListener('click', function(){
    addToCart();
    addBasketCount(cartItemsCount.length);
    document.querySelector('.order-quantity').innerHTML = basketQuantity.value
    orderTotal();
});

addQuantity.addEventListener('click', function(){
    basketQuantity.value = parseInt(basketQuantity.value) + 1;
    
});

minusQuantity.addEventListener('click', function(){
    basketQuantity.value = parseInt(basketQuantity.value) - 1;
});
/**
 * Function section 
 */
function orderTotal() {
    document.querySelector('.order-total').innerHTML = '$' + parseFloat(document.querySelector('.order-price').innerHTML) * parseInt(document.querySelector('.order-quantity').innerHTML) + '.00';
}

function addToCart() {
    cartItem.innerHTML = product;
}

function deleteToCart() {
    cartItem.innerHTML = productDefault;
    addBasketCount(0); //Improve this by changing the classname of default display to different classname then count the value of that class to return realtime values
    basketCount.classList.remove("your-cart");
}

function addBasketCount(n) {
    basketCount.attributes['data-totalitems'].value = n;
    basketCount.classList.add("your-cart");
    //;
}