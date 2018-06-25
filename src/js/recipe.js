class Recipe {

    constructor() {
        this.appId = '0731805c';
        this.appKey = 'f2ef4634d5d6b8129fe38f2aa3a946d5';
    }

    async getRecipeByName(query, healthlabel) {
        const recipeResponse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${this.appId}&app_key=${this.appKey}&from=0&to=100&${healthlabel}`);
            
        const responseData = await recipeResponse.json();

        return {
            responseData
        }
   }

}

export const recipe = new Recipe();