class UI {

    showAlert(message, className) {
    
        this.clearAlert();

        const alertText = document.createElement('p');
        alertText.className = className; 
        alertText.appendChild(document.createTextNode(message));
        const alertBox = document.querySelector('.header__alert-box');
        alertBox.appendChild(alertText);
    
         setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const alertText = document.querySelector('.header__alert-text');
        if(alertText){
            alertText.remove();
        }
    }

    showRecipes(recipes){
       this.closeLoader();
        const recipeContainer = document.querySelector('.recipe');

        recipes.forEach(recipe => {
        recipeContainer.innerHTML += ` 
            <div class="recipe__card">
                <button class="recipe__bookmarks">Add to bookmarks</button>
                <ul class="recipe__list">
                    <li class="recipe__photo"><img class="recipe__img" src="${recipe.recipe.image}" alt="${recipe.recipe.label}"></li>
                    <li class="recipe__title">${recipe.recipe.label}</li> 
                    <li class="recipe__modal"><a class="recipe__modal-link" href="#">get nutritional value</a></li>
                    <li class="recipe__calories">calories / portion: ${Math.round(recipe.recipe.calories/recipe.recipe.yield)}</li>
                    <li class="recipe__portions">portions: ${recipe.recipe.yield}</li>
                    <li class="recipe__source">recipe source: ${recipe.recipe.source}</li>   
                   
                    <li class="recipe__url"><a target="_blank" class="recipe__link" href="${recipe.recipe.url}">See the full recipe</a></li>
                </ul>
                <ul class="recipe__ingr-list">
                    <li class ="recipe__ingr-title">Ingredients:</li>
                    ${this.displayIngredients(recipe.recipe.ingredients)}
                </ul>
            </div>
            `;
        });
    }

    displayIngredients(ingredients) {
        let ingredientTemplate = '';
        for(let ingredient in ingredients) {
           ingredientTemplate += `
          <li class="recipe__ingr-item">${ingredients[ingredient].text}</li>
           `;
       }
       return ingredientTemplate;
    }

    clearRecipes() {
        const recipeContainer = document.querySelector('.recipe');
        recipeContainer.innerHTML = '';
    }

    showLoader() {
        const loaderContainer = document.querySelector('.loader');
        loaderContainer.classList.add('loader--is-visible');
    }

    closeLoader() {
        const loaderContainer = document.querySelector('.loader');
        loaderContainer.classList.remove('loader--is-visible');
    }
}

export const ui = new UI();
