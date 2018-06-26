import '../sass/main.scss';
import '../bookmarks.html';
import {ui} from './ui';
import {recipe} from './recipe';

function eventListeners() {

    const searchForm = document.querySelector('.header__form');
    if(searchForm){
        searchForm.addEventListener('submit', getRecipes);
    }
}
eventListeners();


function getRecipes(e) {
    e.preventDefault();

    ui.clearRecipes();
    
    const select = document.querySelector('.header__select');
    let selectValue = select.value;   
    if( selectValue !== ''){
        selectValue = `health=${select.value}`;
    }

    const userText = document.querySelector('.header__input').value;
    if (userText === '') {
       ui.showAlert('Please add ingredients', 'header__alert-text');
    } else {
        ui.showLoader();
        recipe.getRecipeByName(userText, selectValue)
        .then(responseData => {
            if (responseData.responseData.hits.length === 0) {
                ui.closeLoader();
                ui.showAlert('Recipe not found', 'header__alert-text');
            } else {
                ui.showRecipes(responseData.responseData.hits);
                ui.displayModal(); 
            }
        })
    }
}

