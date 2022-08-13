const menu = document.querySelector('.header-menu');
const menuList = document.querySelector('.header-menu-link');
const menuListClose = document.querySelector('.header-menu-close');
const fadeout = document.querySelectorAll('.fade-out')

menu.addEventListener('click', function(){
    //if menu div is close
    if (menuList.classList.contains('fade-out')) {
        
        fadeout.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

menuListClose.addEventListener('click', function(){
    //if menu div is close
    if (menuList.classList.contains('fade-in')) {

        fadeout.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
});