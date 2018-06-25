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
}

export const ui = new UI();