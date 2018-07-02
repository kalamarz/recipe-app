import '../sass/main.scss';
import '../bookmarks.html';

import {ui} from './ui';
import {recipe} from './recipe';
import {storage} from './storage';
import {storageList} from './storage';

function eventListeners() {

    document.addEventListener('DOMContentLoaded', documentReady);

    const searchForm = document.querySelector('.header__form');
    if(searchForm){
        searchForm.addEventListener('submit', getRecipes);
    }

    const recipeContainer = document.querySelector('.recipe');
    if(recipeContainer){
        recipeContainer.addEventListener('click', addToBookmarks);
    }
}
eventListeners();

ui.addToList();

function getRecipes(e) {
    e.preventDefault();

    ui.clearRecipes();
    
    const select = document.querySelector('.header__select');
    let selectValue = select.value;   
    if( selectValue !== ''){
        selectValue = `health=${select.value}`;
    }

    const userText = document.querySelector('.header__input').value;
    const alertBox = document.querySelector('.header__alert-box');
    if (userText === '') {
       ui.showAlert('Please add ingredients', 'header__alert-text', alertBox);
    } else {
        ui.showLoader();
        recipe.getRecipeByName(userText, selectValue)
        .then(responseData => {
            if (responseData.responseData.hits.length === 0) {
                ui.closeLoader();
                ui.showAlert('Recipe not found', 'header__alert-text', alertBox);
            } else {
                ui.showRecipes(responseData.responseData.hits);
                ui.displayModal(); 
            }
        });
    }
}

function addToBookmarks(e){

    if(e.target.classList.contains('recipe__bookmarks')){
        e.preventDefault();
        if(e.target.classList.contains('recipe__bookmarks--is-added')) {
            e.target.classList.remove('recipe__bookmarks--is-added');
            e.target.textContent = 'Add to bookmarks';
            storage.removeFromStorage(e.target.nextElementSibling.lastElementChild.firstElementChild.href);
          
        }else {
            e.target.classList.add('recipe__bookmarks--is-added');
            e.target.textContent = 'Added to bookmarks';

            const cardBody = e.target.parentElement;

            const recipeInfo = {
                name: cardBody.querySelector('.recipe__title').textContent,
                image: cardBody.querySelector('.recipe__img').src,
                calories: cardBody.querySelector('.recipe__calories').textContent,
                portions: cardBody.querySelector('.recipe__portions').textContent,
                source: cardBody.querySelector('.recipe__source').textContent,
                link: cardBody.querySelector('.recipe__link').href
            }
            
            storage.saveIntoStorage(recipeInfo);
        }
    } 
}

function documentReady() {
    
    ui.isBookmarked();
    ui.showHideList();

    const bookmarksEmpty = document.querySelector('.bookmarks__empty');
    const bookmarksContent = document.querySelector('.bookmarks__content');

    if(bookmarksContent){
        const recipes = storage.getFromStorage();
        ui.displayBookmarks(recipes);
        const bookmarksCards = document.querySelector('.bookmarks__card');
        if (bookmarksCards === null) {
            bookmarksEmpty.classList.remove('bookmarks__empty--is-hidden');
        }
        bookmarksContent.addEventListener('click', (e) => {
            if(e.target.classList.contains('bookmarks__button')) {
                e.preventDefault();
                ui.removeBookmarks(e.target.parentElement.parentElement);
                storage.removeFromStorage(e.target.previousElementSibling.href);
            }
        });
    }
    const listContainer = document.querySelector('.list__container');
    if(listContainer) {
        const lists = storageList.getFromStorage();
        ui.displayList(lists);
    }
}
