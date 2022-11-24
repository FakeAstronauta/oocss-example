let sideMenu = document.querySelector('.side-menu')
let wideCont = document.querySelector('.wide-cont')
sideMenu.style.right = -sideMenu.clientWidth + 'px';
sideMenu.style.transition = '0.2s'
// sideMenu.style.right = 0 + 'px';

let toggleIcon = (n) => {
    if(n === 1){
        sideMenu.style.right = 0 + 'px';
    }else{
        sideMenu.style.right = -sideMenu.clientWidth + 'px';
    }

    displayDarkBg();
}

let displayDarkBg = () => {
    wideCont.classList.toggle('dark-overlay');
}