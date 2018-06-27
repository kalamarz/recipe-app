class UI {
    constructor() {
        this.recipeContainer = document.querySelector('.recipe');
        this.modal = document.querySelector('.modal');
        this.modalBox = document.querySelector('.modal__box');
        this.modalContent = document.querySelector('.modal__content');
        this.listContainer = document.querySelector('.list__container');
        this.alertBox = document.querySelector('.header__alert-box');
        this.listAlert = document.querySelector('.list__alert');
    }

    showAlert(message, className, alertBox) {
    
        this.clearAlert(className);
        const alertText = document.createElement('p');
        alertText.className = className; 
        alertText.appendChild(document.createTextNode(message));
        alertBox.appendChild(alertText);

        setTimeout(() => {
            this.clearAlert(className);
        }, 3000); 
    }

    clearAlert(className) {
        const alertText = document.querySelector(`.${className}`);
        if(alertText) {
            alertText.remove();
        }
    } 

    showRecipes(recipes){
        this.closeLoader();
        this.recipeContainer.style.visibility = 'visible';
        recipes.forEach(recipe => {
        this.recipeContainer.innerHTML += ` 
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

        this.addToModal(recipes);
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
        this.recipeContainer.innerHTML = '';
    }

    showLoader() {
        const loaderContainer = document.querySelector('.loader');
        loaderContainer.classList.add('loader--is-visible');
    }

    closeLoader() {
        const loaderContainer = document.querySelector('.loader');
        loaderContainer.classList.remove('loader--is-visible');
    }

    addToModal(recipes) {
        const buttons = document.querySelectorAll('.recipe__modal-link')
        buttons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                recipes.forEach((recipe, i) => {
                    if (recipe.recipe.totalNutrients, i === index) {
                        this.displayModal(recipe.recipe.totalNutrients, recipe.recipe.yield);
                    }
                });
                e.preventDefault();
                this.modalBox.classList.add('modal__box--is-opened');
                this.modal.classList.add('modal--is-opened');      
            });           
        });  
    }

    displayModal(nutrients, portions){
        this.modalContent.innerHTML = '';
        for (let key in nutrients) {
            let value = nutrients[key];
            this.modalContent.innerHTML += `
                <ul class="modal__list">
                    <li class="modal__label">${value.label}</li>
                    <li class="modal__quantity">${Math.round(value.quantity/portions)}</li>
                    <li class="modal__unit">${value.unit}</li>
                </ul>
            `;
        }
        this.closeModal();
    }

    closeModal() {
        this.modal.addEventListener('click', (e)=> {
            e.preventDefault();
            if(e.target.classList.contains('modal__button')) {
               e.target.parentElement.classList.remove('modal__box--is-opened');
               e.target.parentElement.parentElement.classList.remove('modal--is-opened');
            }
        });
    } 

    addToList() {
        const listForm = document.querySelector('.list__form');
        if(listForm) {
        listForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const listInput = document.querySelector('.list__input');
            const textValue = listInput.value;
          
            if (textValue === '') {
                this.showAlert('The field is empty', 'list__alert-text', this.listAlert);
            } else {
                const listItem = document.createElement('p');
                listItem.className = 'list__item';   
                listItem.appendChild(document.createTextNode(textValue));

                const removeButton = document.createElement('button');
                removeButton.innerHTML = 'x';
                removeButton.className = "list__remove";
                listItem.appendChild(removeButton);
                this.listContainer.appendChild(listItem);
                listInput.value = '';
         
                this.removeFromList();
            } 
        });  
      }    
    }

    removeFromList() {
       this.listContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('list__remove')) {
                e.target.parentElement.remove(); 
            }
        });
    }
}

export const ui = new UI();
