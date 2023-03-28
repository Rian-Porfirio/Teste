function menuShow(){
    let menuMobile = document.querySelector('.nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.material-symbols-outlined').src = "assets/img/menu_white_36dp.svg";
    } else {
            menuMobile.classList.add('open');
    }
}