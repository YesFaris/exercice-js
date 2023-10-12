'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let buttonFire = document.getElementById("firing-button");
let rocket = document.getElementById("rocket");
const billboard = document.getElementById("billboard");
const times = document.querySelector("span");

let chrono = {
    seconde: 5
};

let updateSpeed = 1000;
let timerId;



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    
    times.innerText = `${formatNumber(chrono.seconde)}`;
    
    /**
     * Bouton de démarrage du compte à rebourd
     */
    buttonFire.addEventListener("click", function () {
        //Remplacement de l'image d'origine dans le HTML
        rocket.src = "images/rocket2.gif";

        //Ajout de la classe Disabled 
        buttonFire.classList.add("disabled");

        setInterval(() => {
            updatechrono();
        }, 1000);
    });
    
});
    

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

/**
 * Compte à rebourd
*/
function updatechrono() {
    if (chrono.seconde >0) {
        chrono.seconde--;
    }
    times.innerText = `${formatNumber(chrono.seconde)}`;

    if (chrono.seconde === 0) {
        rocket.src = "images/rocket3.gif";

        //Ajout de la classe tookOff
        rocket.classList.add("tookOff");
    }
}

/**
 * function concaténation du string et des nomvres < à 10
 * @param {valeur de décompte} num 
 * @returns 
 */
function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}
