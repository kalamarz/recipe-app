import '../sass/main.scss';
import '../bookmarks.html';
import {ui} from './ui';
import {recipe} from './recipe';

function eventListeners() {

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
    e.preventDefault();

    if(e.target.classList.contains('recipe__bookmarks')){
        if(e.target.classList.contains('recipe__bookmarks--is-added')) {
            e.target.classList.remove('recipe__bookmarks--is-added');
            e.target.textContent = 'Add to bookmarks';
          
        }else {
            e.target.classList.add('recipe__bookmarks--is-added');
            e.target.textContent = 'Added to bookmarks';
        } 
    }
}

