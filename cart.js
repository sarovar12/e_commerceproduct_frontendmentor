const cart = document.querySelector('.user-cart')
const cartList = document.querySelector('.cart-list');

cart.addEventListener('click', function(){
    //if cart div is close
    if (cartList.classList.contains('cart-hide')) {
        cartList.classList.remove('cart-hide');
        cartList.classList.add('fade-in');
    } else {
        cartList.classList.remove('fade-in');
        cartList.classList.add('cart-hide');
    }
});