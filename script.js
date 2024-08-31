let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
}


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;


        if (revealTop < windowheight - revealpoint){

            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
