const btnEl = document.querySelector(`button`);
const containerEl = document.querySelector(`.container`);
const userTaskEl = document.querySelector(`.user-task`);

let arrayOfTasks = Object.values(localStorage);
let i = arrayOfTasks.length;

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

btnEl.addEventListener(`click`, () => {
    if (userTaskEl.value === "") {
        return;
    }

    let taskCoverEl = document.createElement(`div`);
    let taskTextEl = document.createElement(`p`);
    let taskDoneEl = document.createElement(`img`);

    containerEl.append(taskCoverEl);
    taskCoverEl.append(taskTextEl);
    taskCoverEl.append(taskDoneEl);

    taskCoverEl.classList.add(`task-cover`);
    taskTextEl.classList.add(`task-text`);
    taskDoneEl.classList.add(`task-done-img`);

    taskDoneEl.src = `img/task-done-img.png`;

    let index = i.toString();
    localStorage.setItem(index, userTaskEl.value);
    taskTextEl.textContent = localStorage.getItem(index);
    arrayOfTasks = Object.values(localStorage);
    i++;

    userTaskEl.value = "";

    taskDoneEl.addEventListener(`click`, () => {
        let removeLocalStorageElValue = taskDoneEl.parentElement.firstChild.textContent;
        let removeLocalStorageElKey = getKeyByValue(localStorage, removeLocalStorageElValue);
        localStorage.removeItem(removeLocalStorageElKey);

        let removeDivEl = taskDoneEl.closest(`div`);
        removeDivEl.remove();
    });
});

document.addEventListener(`DOMContentLoaded`, () => {
    arrayOfTasks.forEach(element => {
        let taskCoverEl = document.createElement(`div`);
        let taskTextEl = document.createElement(`p`);
        let taskDoneEl = document.createElement(`img`);
    
        containerEl.append(taskCoverEl);
        taskCoverEl.append(taskTextEl);
        taskCoverEl.append(taskDoneEl);
    
        taskCoverEl.classList.add(`task-cover`);
        taskTextEl.classList.add(`task-text`);
        taskDoneEl.classList.add(`task-done-img`);
    
        taskDoneEl.src = `img/task-done-img.png`;
        taskTextEl.textContent = element;

        taskDoneEl.addEventListener(`click`, () => {
            let removeLocalStorageElValue = taskDoneEl.parentElement.firstChild.textContent;
            let removeLocalStorageElKey = getKeyByValue(localStorage, removeLocalStorageElValue);
            localStorage.removeItem(removeLocalStorageElKey);

            let removeDivEl = taskDoneEl.closest(`div`);
            removeDivEl.remove();
        });
    });
});