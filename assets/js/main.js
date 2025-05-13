const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const menu = document.querySelector('.menu');
const bars = document.querySelector('.header .bars');
const menuClose = document.querySelector('.menu-close');

bars.onclick = () => {
    menu.classList.add('active');
    bodyHidden();
}

menuClose.onclick = () => {
    menu.classList.remove('active');
    bodyVisible();
}