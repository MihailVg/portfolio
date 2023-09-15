"use strict";

// Код для первого слайдера

const topSliderImgEl = document.querySelector('.top-slider-photo-img');
const topSliderPrevButtonEl = document.querySelector(`.top-slider-prev-btn`);
const topSliderNextButtonEl = document.querySelector(`.top-slider-next-btn`);
const topSliderFirstDotEl = document.querySelector(`#top-slider-dot-first-slide`);
const topSliderSecondDotEl = document.querySelector(`#top-slider-dot-second-slide`);
const topSliderThirdDotEl = document.querySelector(`#top-slider-dot-third-slide`);

let topSliderPhotoIndex = 0;

topSliderNextButtonEl.addEventListener(`click`, () => {
    if (topSliderPhotoIndex === 0){
        topSliderImgEl.src = `img/second-planets-photo.jpg`;
        topSliderFirstDotEl.classList.remove(`active`);
        topSliderSecondDotEl.classList.add(`active`);
        topSliderPhotoIndex = 1;
        makeFade()
    } else if(topSliderPhotoIndex === 1){
        topSliderImgEl.src = `img/third-planets-photo.jpg`;
        topSliderSecondDotEl.classList.remove(`active`);
        topSliderThirdDotEl.classList.add(`active`);
        topSliderPhotoIndex = 2;
        makeFade()
    } else  if (topSliderPhotoIndex === 2) {
        topSliderPhotoIndex = 0;
        topSliderImgEl.src = `img/first-planets-photo.jpeg`;
        topSliderThirdDotEl.classList.remove(`active`);
        topSliderFirstDotEl.classList.add(`active`);
        makeFade()
    } 
});

topSliderPrevButtonEl.addEventListener(`click`, () => {
    if (topSliderPhotoIndex === 0){
        topSliderImgEl.src = `img/third-planets-photo.jpg`;
        topSliderFirstDotEl.classList.remove(`active`);
        topSliderThirdDotEl.classList.add(`active`);
        topSliderPhotoIndex = 2;
        makeFade()
    } else if(topSliderPhotoIndex === 1){
        topSliderImgEl.src = `img/first-planets-photo.jpeg`;
        topSliderSecondDotEl.classList.remove(`active`);
        topSliderFirstDotEl.classList.add(`active`);
        topSliderPhotoIndex = 0;
        makeFade()
    } else  if (topSliderPhotoIndex === 2) {
        topSliderPhotoIndex = 1;
        topSliderImgEl.src = `img/second-planets-photo.jpg`;
        topSliderThirdDotEl.classList.remove(`active`);
        topSliderSecondDotEl.classList.add(`active`);
        makeFade()
    } 
});

topSliderFirstDotEl.addEventListener(`click`, () => {
    topSliderPhotoIndex = 0;
    topSliderImgEl.src = `img/first-planets-photo.jpeg`;
    topSliderThirdDotEl.classList.remove(`active`);
    topSliderSecondDotEl.classList.remove(`active`);
    topSliderFirstDotEl.classList.add(`active`);
    makeFade()
});

topSliderSecondDotEl.addEventListener(`click`, () => {
    topSliderPhotoIndex = 1;
    topSliderImgEl.src = `img/second-planets-photo.jpg`;
    topSliderThirdDotEl.classList.remove(`active`);
    topSliderFirstDotEl.classList.remove(`active`);
    topSliderSecondDotEl.classList.add(`active`);
    makeFade()
});

topSliderThirdDotEl.addEventListener(`click`, () => {
    topSliderPhotoIndex = 2;
    topSliderImgEl.src = `img/third-planets-photo.jpg`;
    topSliderFirstDotEl.classList.remove(`active`);
    topSliderSecondDotEl.classList.remove(`active`);
    topSliderThirdDotEl.classList.add(`active`);
    makeFade()
});

function makeFade() {
    if (topSliderImgEl.classList.contains(`fade`)) {
        topSliderImgEl.classList.replace(`fade`, `fade-change`);
    } else {
        topSliderImgEl.classList.replace(`fade-change`, `fade`);
    }
};

// Код для второго слайдера 

const middleSliderCoverEl = document.querySelector(`.middle-slider-cover`);
const middleSliderFirstImgEl = document.querySelector(`.middle-slider-first-photo`);
const middleSliderSecondImgEl = document.querySelector(`.middle-slider-second-photo`);
const middleSliderThirdImgEl = document.querySelector(`.middle-slider-third-photo`);
const middleSliderFourthImgEl = document.querySelector(`.middle-slider-fourth-photo`);
const middleSliderFifthImgEl = document.querySelector(`.middle-slider-fifth-photo`);

const arrayOfMiddleSliderPhotos = [middleSliderFirstImgEl.src, middleSliderSecondImgEl.src, 
middleSliderThirdImgEl.src, middleSliderFourthImgEl.src, middleSliderFifthImgEl.src];

middleSliderCoverEl.addEventListener(`click`, (event) => {
    let firstImgSrc = middleSliderFirstImgEl.src;
    let secondImgSrc = middleSliderSecondImgEl.src;
    let thirdImgSrc = middleSliderThirdImgEl.src;
    let fourthImgSrc = middleSliderFourthImgEl.src;
    let fifthImgSrc = middleSliderFifthImgEl.src;
    if (event.target.classList.contains(`middle-slider-first-photo`)) {
        middleSliderFirstImgEl.src = fourthImgSrc;
        middleSliderSecondImgEl.src = fifthImgSrc;
        middleSliderThirdImgEl.src = firstImgSrc;
        middleSliderFourthImgEl.src = secondImgSrc;
        middleSliderFifthImgEl.src = thirdImgSrc;
        middleSliderMakeFade()
    } else if (event.target.classList.contains(`middle-slider-second-photo`)) {
        middleSliderFirstImgEl.src = fifthImgSrc;
        middleSliderSecondImgEl.src = firstImgSrc;
        middleSliderThirdImgEl.src = secondImgSrc;
        middleSliderFourthImgEl.src = thirdImgSrc;
        middleSliderFifthImgEl.src = fourthImgSrc;
        middleSliderMakeFade()
    } else if (event.target.classList.contains(`middle-slider-third-photo`)) {
        return;
    } else if (event.target.classList.contains(`middle-slider-fourth-photo`)) {
        middleSliderFirstImgEl.src = secondImgSrc;
        middleSliderSecondImgEl.src = thirdImgSrc;
        middleSliderThirdImgEl.src = fourthImgSrc;
        middleSliderFourthImgEl.src = fifthImgSrc;
        middleSliderFifthImgEl.src = firstImgSrc;
        middleSliderMakeFade()
    } else if (event.target.classList.contains(`middle-slider-fifth-photo`)) {
        middleSliderFirstImgEl.src = thirdImgSrc;
        middleSliderSecondImgEl.src = fourthImgSrc;
        middleSliderThirdImgEl.src = fifthImgSrc;
        middleSliderFourthImgEl.src = firstImgSrc;
        middleSliderFifthImgEl.src = secondImgSrc;
        middleSliderMakeFade()
    }
});

function middleSliderMakeFade() {
    if (middleSliderFirstImgEl.classList.contains(`middle-slider-fade-sides`)) {
        middleSliderFirstImgEl.classList.replace(`middle-slider-fade-sides`, `middle-slider-fade-sides-change`);
        middleSliderFifthImgEl.classList.replace(`middle-slider-fade-sides`, `middle-slider-fade-sides-change`);
        middleSliderSecondImgEl.classList.replace(`middle-slider-fade-between`, `middle-slider-fade-between-change`);
        middleSliderFourthImgEl.classList.replace(`middle-slider-fade-between`, `middle-slider-fade-between-change`);
        middleSliderThirdImgEl.classList.replace(`middle-slider-fade-center`, `middle-slider-fade-center-change`);
    } else {
        middleSliderFirstImgEl.classList.replace(`middle-slider-fade-sides-change`, `middle-slider-fade-sides`);
        middleSliderFifthImgEl.classList.replace(`middle-slider-fade-sides-change`, `middle-slider-fade-sides`);
        middleSliderSecondImgEl.classList.replace(`middle-slider-fade-between-change`, `middle-slider-fade-between`);
        middleSliderFourthImgEl.classList.replace(`middle-slider-fade-between-change`, `middle-slider-fade-between`);        middleSliderThirdImgEl.classList.replace(`middle-slider-fade-center-change`, `middle-slider-fade-center`);
    }
};

// Код для третьего слайдера

const bottomSliderImgEl = document.querySelector(`.bottom-slider-img`);
const bottomSliderTitleEl = document.querySelector(`.bottom-slider-title-text`);
const bottomSliderTextEl = document.querySelector(`.bottom-slider-bottom-text`);
const bottomSliderDotEls = document.querySelector(`.bottom-slider-dots`)
const bottomSliderDotOneEl = document.querySelector(`#bottom-dot-one`);
const bottomSliderDotTwoEl = document.querySelector(`#bottom-dot-two`);
const bottomSliderDotThreeEl = document.querySelector(`#bottom-dot-three`);

bottomSliderDotEls.addEventListener(`click`, (event) => {
    if (event.target.id === `bottom-dot-one`) {
        bottomSliderImgEl.src = `img/coding-photo.jpg`;
        bottomSliderTitleEl.textContent = `Люблю учиться`;
        bottomSliderTextEl.textContent = `На данный момент уже закончил курсы по Html, CSS 
        и JS. Имею подтверждающие сертификаты и продолжаю развиваться самостоятельно.`;
        bottomSliderDotOneEl.classList.add(`active-bottom-dots`);
        bottomSliderDotTwoEl.classList.remove(`active-bottom-dots`);
        bottomSliderDotThreeEl.classList.remove(`active-bottom-dots`);
    } else if (event.target.id === `bottom-dot-two`) {
        bottomSliderImgEl.src = `img/english-photo.jpg`;
        bottomSliderTitleEl.textContent = `Знаю английский`;
        bottomSliderTextEl.textContent = `Изучаю данный язык на протяжении двух лет и имею уровень
        B2. Еженедельно занимаюсь с репетитором и пополняю копилку знаний.`;
        bottomSliderDotOneEl.classList.remove(`active-bottom-dots`);
        bottomSliderDotTwoEl.classList.add(`active-bottom-dots`);
        bottomSliderDotThreeEl.classList.remove(`active-bottom-dots`);
    } else if(event.target.id === `bottom-dot-three`) {
        bottomSliderImgEl.src = `img/idea-photo.jpg`;
        bottomSliderTitleEl.textContent = `Социально развит`;
        bottomSliderTextEl.textContent = `У меня всегда много идей относительно всех проектов.
         Коммуникабелен и готов делиться мыслями с коллегами и начальством.`;
        bottomSliderDotOneEl.classList.remove(`active-bottom-dots`);
        bottomSliderDotTwoEl.classList.remove(`active-bottom-dots`);
        bottomSliderDotThreeEl.classList.add(`active-bottom-dots`);
    }
});