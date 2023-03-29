function menuShow(){
    const menuMobile = document.querySelectorAll('.nav');
    menuMobile.forEach(element => {
        console.log(element)
        if (element.classList.contains('open')) {
            element.classList.remove('open');
        } else {
                element.classList.add('open');
        }
    });
}