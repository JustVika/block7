

import Swiper from "swiper/swiper-bundle"
import 'swiper/swiper-bundle.min.css';
import '../scss/style.scss';



if (window.innerWidth < 768) {
    const swiper = new Swiper(".slider-brand__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    const swiperRepair = new Swiper(".slider-repair__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    const swiperPrice = new Swiper(".slider-price__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
}


let buttonChat = document.querySelectorAll('.main-button__button--img--chat')
let buttonCall = document.querySelectorAll('.main-button__button--img--call')

for (let button of buttonChat) {


    button.addEventListener('click', () => popUpOpen('.popup-chat'))
}


for (let button of buttonCall) {
    button.addEventListener('click', () => popUpOpen('.popup-call'))
}

function popUpOpen(isPopUp) {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.style.paddingRight = paddingOffset;

    let isAsideOpen = document.body.classList.contains('hide')
    let popUp = document.querySelector(isPopUp)
    let popUpBody = popUp.querySelector(".popup__body")

    popUpBody.style.marginRight = 0 - parseInt(paddingOffset) + 'px';
    popUp.style.paddingRight = paddingOffset;

    popUp.classList.add('open')
    document.body.classList.add('hide')
    let close = popUp.querySelector('.popup__button-close')
    close.addEventListener('click', () => popUpClose(isAsideOpen, isPopUp))
    popUp.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__body')) {
            popUpClose(isAsideOpen, isPopUp)
        }
    })
}

function popUpClose(isAsideOpen, isPopUp) {

    if (!isAsideOpen) {
        document.body.classList.remove('hide')
    }

    let popUp = document.querySelector(isPopUp)
    let popUpBody = popUp.querySelector(".popup__body")

    document.body.style.paddingRight = '0px';
    
    popUp.style.paddingRight = '0px';
    popUp.classList.remove('open')
}



/*burger*/
const burger = document.querySelectorAll('.burger')

const asidePanel = document.querySelector('.aside-panel')

for (let button of burger) {

    button.addEventListener('click', (e) => {
        asidePanel.classList.toggle('aside-panel__active')
        asidePanel.classList.remove('first-appereance')
        for (let button of burger) {
            button.classList.toggle('active')
        }
        document.body.classList.toggle('hide')
        asidePanel.addEventListener('click', (e) => {

            if (e.target.classList.contains('aside-panel')) {
                asidePanel.classList.remove('aside-panel__active')
                for (let button of burger) {
                    button.classList.remove('active')
                }
                document.body.classList.remove('hide')
            }

        })
    })
}


const btnShowMore = document.querySelectorAll('.show-more')

for (let button of btnShowMore) {
    let elementChangeHeight = button.previousElementSibling.firstElementChild
    let limitHeight = getComputedStyle(elementChangeHeight).height
    button.addEventListener('click', () => changeHeight(button, elementChangeHeight, limitHeight))
}



function changeHeight(btn, elementChangeHeight, limitHeight) {
    btn.classList.toggle('rotate')
    if (btn.innerHTML === "???????????????? ??????" || btn.innerHTML === "???????????? ??????????") {
        btn.innerHTML = '????????????'
        elementChangeHeight.style.height = elementChangeHeight.scrollHeight + 'px';
    }
    else {
        if (btn.classList.contains('main-text__show-more')) {
            btn.innerHTML = "???????????? ??????????"
        }
        else {
            btn.innerHTML = '???????????????? ??????'
        }

        elementChangeHeight.style.height = limitHeight
    }
}
