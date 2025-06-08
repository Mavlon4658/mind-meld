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

const menu = document.querySelector(".menu");
const bars = document.querySelector(".header .bars");
const menuClose = document.querySelector(".menu-close");

if (menu && bars) {
    bars.addEventListener("click", () => {
        menu.classList.add("active");
        if (typeof bodyHidden === "function") bodyHidden();
    });
    }

    if (menu && menuClose) {
    menuClose.addEventListener("click", () => {
        menu.classList.remove("active");
        if (typeof bodyVisible === "function") bodyVisible();
    });
}


var swiper = new Swiper(".swiperCourse", {
    slidesPerView: 1.4,
    spaceBetween: 18,
    navigation: {
        nextEl: ".course-button-next",
        prevEl: ".course-button-prev",
    },
    breakpoints: {
        993: {
        slidesPerView: 2,
        },
        1200: {
        slidesPerView: 3,
        },
    },
});
