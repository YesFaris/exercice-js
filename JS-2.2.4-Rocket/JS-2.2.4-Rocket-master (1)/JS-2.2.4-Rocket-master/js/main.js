'use strict'

document.addEventListener("DOMContentLoaded", function () {

    /***********************************************************************************/
    /* *********************************** DONNEES *************************************/
    /***********************************************************************************/

    //Récupération du bouton de démarrage
    const strt_btn = document.getElementById(`firing-button`)
    const stp_btn = document.getElementById(`cancel-button`)

    //Récupération de l'élément ayant l'identifiant "billboard". Cette variable va stocker les secondes du minuteur
    let billboardSecond = 9;

    // Variable stockant la vitesse du minuteur 
    let updateSpeed = 1000;


    // Récupération du l'élément HTML voulant afficher le nimuteur
    let billboardTable = document.querySelector(`#billboard span`);

    //Déclaration de la variable billboardChrono
    let billboardChrono;

    //Récupération de l'image de la rocket
    let rocket = document.getElementById(`rocket`);

    //Récupération de l'image de la rocket
    let rsrt = document.querySelector(`button`);

    // Initialisation de l'itérateur i pour la boucle allant afficher les étoiles de façon aléatoire
    let i = 0;

    //Récupération de la largeur du navigateur 
    let windowWith = window.innerWidth;

    //Récupération de la hauteur du navigateur 
    let windowHeight = window.innerHeight;

    //Tableau ayant pour élément les classes des étoiles 
    let stars = ["tiny", "normal", "big"];


    /***********************************************************************************/
    /* ********************************** FONCTIONS ************************************/
    /***********************************************************************************/

    /**
     * Fonction principale permettant de démarrer le décompte
     */
    function strtSecond() {

        //Cette ligne désactive le bouton d'arrêt avant le lancement du compte à rebours
        stp_btn.classList.remove(`disabled`);

        //Cette ligne change le style du bouton après le lancement du compte à rebours
        strt_btn.classList.add("disabled");

        //Cette ligne supprime l'évènement "click" après le lancement du compte à rebours
        strt_btn.removeEventListener("click", strtSecond);


        //Cette ligne de code va décompter à partir de 10
        billboardChrono = setInterval(() => {

            // Ici nous afficherons le nombre de seconde à l'écran
            billboardTable.innerText = `${billboardSecond}`;

            if (billboardSecond < 10 && billboardSecond >= 0) {
                // Ici nous afficherons le nombre de seconde à l'écran avec un zéro si la seconde est supérieur à 0 et inférieur à 10
                billboardTable.innerText = `0${billboardSecond}`;
            }

            // Nous allons décrémenter le nombre de secondes tant qu'il est supérieur à 0 et inférieur à 10.
            billboardSecond--;

            // Cette ligne de code change la source de l'image de la rocket
            if (billboardSecond < 10 || billboardSecond > 0) {
                rocket.src = "images/rocket2.gif";
            }

            // Cette ligne de code change à nouveau la source de l'image de la rocket quand le decompte arrive à 0
            if (billboardSecond === 0 || billboardSecond < 0) {
                rocket.src = "images/rocket3.gif";
                
            }
            
            //Cette ligne de code arrête la fonction "setInterval" si le décompte arrive à 0
            if (billboardSecond < 0) {
                clearInterval(billboardChrono);
                rocket.classList.add("tookOff");
                strt_btn.removeEventListener("click", strtSecond);
                stp_btn.classList.add("disabled");
                stp_btn.removeEventListener("click", stpSecond);
            }

            // if (billboardSecond <= 0) {
            //     rocket.classList.add("tookOff");
            // }
        }, updateSpeed);


        //Création d'un évènement "click" pour arrêter le décompte
        stp_btn.addEventListener("click", stpSecond);

        rsrt.addEventListener("click", rsrtSecond);

    }


    /**
     * Fonction secondaire permettant d'arrêter le décompte
     */
    function stpSecond() {

        //Cette ligne de code arrête la fonction "setInterval" une fois le bouton d'arrêt enclenché
        clearInterval(billboardChrono);

        //Cette ligne désactive le bouton d'arrêt avant le lancement du compte à rebours
        stp_btn.classList.add(`disabled`);

        //Cette ligne supprime l'évènement "click" après avoir enclenché le bouton d'arrêt
        stp_btn.removeEventListener("click", stpSecond);

        //Cette ligne réactive l'évènement "click" sur le bouton de démarrage après avoir enclenché le bouton d'arrêt
        strt_btn.addEventListener("click", strtSecond);

        //Cette ligne change le style du bouton après le lancement du compte à rebours
        strt_btn.classList.remove("disabled");
    }


    /**
     * Fonction secondaire permettant de réinitialiser le décompte à 10
     */
    function rsrtSecond() {
        //Cette ligne modifie l'image de la rocket
        rocket.src = "images/rocket1.png";

        //Cette ligne ramène la fusée à sa position de départ
        rocket.classList.remove("tookOff");

        //Cette ligne de code arrête la fonction "setInterval" une fois le bouton d'arrêt enclenché
        clearInterval(billboardChrono);
        billboardSecond = 10;
        billboardTable.innerText = `${billboardSecond}`;

        //Cette ligne supprime l'évènement "click" après le lancement du compte à rebours
        strt_btn.addEventListener("click", strtSecond);

        //Cette ligne change le style du bouton après le lancement du compte à rebours
        strt_btn.classList.remove("disabled");

        //Cette ligne désactive le bouton d'arrêt avant le lancement du compte à rebours
        stp_btn.classList.add(`disabled`);

        if (billboardSecond === 0) {
            rsrt.removeEventListener("click", rstrtSecond);
            rsrt.classList.add("disabled");
        }
    }


    /************************************************************************************/
    /* ******************************** CODE PRINCIPAL **********************************/
    /************************************************************************************/

    //Cette ligne désactive le bouton d'arrêt avant le lancement du compte à rebours
    stp_btn.classList.add(`disabled`);

    //Création de l'évènement "click" pour lancer le démarrage du compte à rebours
    strt_btn.addEventListener("click", strtSecond);

    /**
     * Les lignes de code qui suivent sont censées gérés l'affichage de façon aléatoire au rafraîchissement de la page
     */

    //L'utilisation de la boucle while 
    while (i < 150) {
        let star = document.createElement("span");
        star.classList.add("star");
        document.querySelector("main").appendChild(star);


        // Déclaration des variable allant permettre le déplacement
        let positionLeft = Math.floor(Math.random() * (windowWith - 0) + 1);
        let positionTop = Math.floor(Math.random() * (windowHeight - 0) + 1);
        let classElement = Math.floor(Math.random() * (stars.length - 1));

        star.classList.add(stars[classElement]);
        star.style.left = `${positionLeft}px`
        star.style.top = `${positionTop}px`
        i++;
    }


})


