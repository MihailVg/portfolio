"use strict";

const rickAndMortyObject = JSON.parse(data);
const rickAndMortyArray = rickAndMortyObject.results;

let content = "";

rickAndMortyArray.forEach((element) => {
    content += `
    <div draggable="true" class="character-item">
        <div class="character-img-wrap">
            <img src="${element.image}" alt="" class="character-img"/>
        </div>
        <div class="character-data">
            <div class="character-name">
                <h1>${element.name}</h1>
            </div>
            <div class="character-gender">
                <p>${element.gender}</p>
            </div>
            <div class="character-location">
                <p>${element.location.name}</p>
            </div>
        </div>
    </div>
    `
});

const containerItems = document.querySelector(`.container`);

containerItems.innerHTML = content;

document.addEventListener(`DOMContentLoaded`, (event) => {

    let draggedItem = null;

    function itemDragStart(e) {
        draggedItem = this;

        e.dataTransfer.effectAllowed = `move`;
        e.dataTransfer.setData(`text/html`, this.innerHTML);
    }

    function itemDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        this.classList.add(`item-over`);
        e.dataTransfer.dropEffect = `move`;
        return false;
    }

    function itemDragLeave(e) {
        this.classList.remove(`item-over`);
    }

    function itemDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (draggedItem != this) {
            draggedItem.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData(`text/html`);
        }

        return false;
    }

    function itemDragEnd(e) {
        this.style.opacity = `1`;

        items.forEach(function(item){
            item.classList.remove(`item-over`);
        })
    }

    let items = document.querySelectorAll(`.character-item`)
    items.forEach(function(item){
        item.addEventListener('dragstart', itemDragStart);
        item.addEventListener(`dragover`, itemDragOver);
        item.addEventListener('dragleave', itemDragLeave);
        item.addEventListener(`drop`, itemDrop);
        item.addEventListener('dragend', itemDragEnd);
    });
});