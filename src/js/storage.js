class Storage {
    constructor (name) {
        this.name = name;
    }

    saveIntoStorage(value) {

       const values = this.getFromStorage();

        values.push(value);

        localStorage.setItem(`'${this.name}'`, JSON.stringify(values));
  
    }

    removeFromStorage(item){
        const values = this.getFromStorage();

        values.forEach((value, index) => {
            if((item === value.link) ||(item === value)){
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
export const storageList = new Storage('list');

