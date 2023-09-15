const inputTextEls = document.querySelectorAll(`.input-type-text`);
const imgEls = document.querySelectorAll(`img`);
const nameCheckedImgEl = document.querySelector(`.name-checked-img`)
const btnEl = document.querySelector(`.send-form-btn`);
const mailInputEl = document.querySelector('.mail-input');
const passwordInputEl = document.querySelector(`.password-input`);
const passwordExamInputEl = document.querySelector(`.password-exam-input`);
const starsCoverEl = document.querySelector(`.rating-stars-cover`);
const raitingTextEl = document.querySelector(`.rating-paragraph`);
const starsNodeList = document.querySelectorAll(`.rating-star`);
const firstStarEl = document.querySelector(`.star-1`);
const lastStarEl = document.querySelector(`.star-5`);

// Проверка для имени и фамилии

inputTextEls.forEach(element => {
    element.addEventListener(`input`, (event) => {
        if (event.target.value !== "") {
            event.target.nextElementSibling.src = `img/input-checked-img.png`
        } else {
            event.target.nextElementSibling.src = `img/input-wrong-img.png`
        }
    });
});

// Проверка для mail

const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function checkMail() {
	if (isEmailValid(mailInputEl.value)) {
		mailInputEl.nextElementSibling.src = `img/input-checked-img.png`;
	} else {
		mailInputEl.nextElementSibling.src = `img/input-wrong-img.png`;
	}
}

mailInputEl.addEventListener('input', checkMail);

// Проверка пароля и его повтора 

passwordInputEl.addEventListener(`input`, (event) => {
    if (event.target.value !== "" && event.target.value.length > 3) {
        event.target.nextElementSibling.src = `img/input-checked-img.png`
    } else {
        event.target.nextElementSibling.src = `img/input-wrong-img.png`
    }
});

passwordExamInputEl.addEventListener(`input`, (event) => {
    if (event.target.value !== "" && event.target.value === passwordInputEl.value) {
        event.target.nextElementSibling.src = `img/input-checked-img.png`
    } else {
        event.target.nextElementSibling.src = `img/input-wrong-img.png`
    }
});

// Добавление рейтинга

starsCoverEl.addEventListener(`click`, (event) => {
    firstStarEl.classList.add(`rating-selected`);
    let selectedStar = event.target;
    selectedStar.classList.add(`rating-selected`);
    while (!selectedStar.classList.contains(`star-1`)) {
        selectedStar.classList.add(`rating-selected`);
        selectedStar = selectedStar.previousElementSibling;
    } 
    if (selectedStar.classList.contains(`rating-selected`)) {
            let nextSelectedStar = event.target.nextElementSibling;
            while (!nextSelectedStar.classList.contains(`star-5`)) {
                nextSelectedStar.classList.remove(`rating-selected`);
                nextSelectedStar = nextSelectedStar.nextElementSibling;
                lastStarEl.classList.remove(`rating-selected`);
            }
    }
});

// Проверка на заполненность формы регистрации при нажатии кнопки

const imgWrongSrc = nameCheckedImgEl.src;

const imgCheckedFunction = (element) => element.src === imgWrongSrc;

const ratingCheckedFunction = (element) => element.classList.contains(`rating-selected`);

btnEl.addEventListener(`click`, (event) => {
    let imgElsArray = Array.from(imgEls);
    let starsArray = Array.from(starsNodeList);
    if (imgElsArray.some(imgCheckedFunction)) {
        event.preventDefault();
    } else if (!starsArray.some(ratingCheckedFunction)) {
        raitingTextEl.classList.add(`rating-paragraph-unselected`)
        event.preventDefault();
    }
});