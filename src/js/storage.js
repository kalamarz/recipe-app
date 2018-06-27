class Storage {
    constructor (name) {
        this.name = name;
    }

    saveIntoStorage(value) {

       const values = this.getFromStorage();

        values.push(value);

        localStorage.setItem(`'${this.name}'`, JSON.stringify(values));
  
    }

    removeFromStorage(link){
        const values = this.getFromStorage();

        values.forEach((value, index) => {
            if(link === value.link) {
                values.splice(index,1);
            }
        });
        localStorage.setItem(`'${this.name}'`, JSON.stringify(values));
    }

    getFromStorage() {
        let values;

        if(localStorage.getItem(`'${this.name}'`) === null) {
            values = [];
        } else {
            values = JSON.parse(localStorage.getItem(`'${this.name}'`));
        }
        return values;
    }
}

export const storage = new Storage('recipe');

