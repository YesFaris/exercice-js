'use strict'

// let count = 0
// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(increment, 1000);
//     function increment(){
//         console.log(++count);
//         setTimeout(increment,1000);
//     }
// });


// document.addEventListener("DOMContentLoaded", function () {

// let counter = 0;
// let end;
// let stop
// let tie = 0;
// let sec = 0;
// let min = 0;
// let heu = 0;
// let dec = 0;

//     const button1 = document.getElementById("debut");
//     const button2 = document.getElementById("arret");
//     const button3 = document.getElementById("retour");
//     const chrono = document.getElementById("chrono")


//     chrono.innerText = heu + ' : ' + min + ' :' + sec ;

//     let start = document.getElementById("debut")
//     button1.addEventListener("click",
//         function timer(){
//             intervalId = setInterval(function(){
        
                    
//                 chrono.innerText = heu + ' : ' + min + ' : ' + sec;
//                 dec++ ;
//                 if(dec >= 10){
//                     dec = 0; sec++ ;
//                 }
//                 if(sec >= 60){
//                     sec = 0; min++ ;
//                 }
//                 if(min >= 60){
//                     min = 0; heu++;
//                 }
//             }, 1)
//         })
//         let Stop= document.getElementById("arret");
//     button2.addEventListener("click", function(){
//       clearInterval(end)
//      });
     
     
//      let reset= document.getElementById("retour");
//      button3.addEventListener("click", function(){
//         chrono.innerText = heu + ' : ' + min + ' : ' + sec;
//       });
 
// });
let chronodom
let timerId

let chrono = {
    tierce: 0,
    seconde : 0,
    minute : 0,
};


document.addEventListener("DOMContentLoaded", function () {
  chronodom = document.querySelector("#chrono");
let startbutton  = document.getElementById('start');
let endbutton = document.getElementById('stop');
let resetbutton  = document.getElementById('reset');

startbutton.addEventListener("click", function(){
    endbutton.disabled = false;
    startbutton.disabled = true;
   timerId = setTimeout(updatechrono, 1000/60)
});
endbutton.addEventListener("click", function(){
    clearTimeout(timerId)
    endbutton.disabled = true;
    startbutton.disabled = false;
});
resetbutton.addEventListener("click", function(){
    clearTimeout(timerId)
    chrono.tierce = 0
    chrono.minute = 0
    chrono.seconde = 0
    updatedisplay()
})
function updatechrono(){
    if(chrono.tierce < 59) {
     chrono.tierce++;
    }
    else if( chrono.seconde < 59){
     chrono.tierce = 0;
     chrono.seconde++;
    }
    else if( chrono.minute < 59){
     chrono.seconde = 0;
     chrono.minute++;
    }
     updatedisplay();
 
     setTimeout(updatechrono, 1000/60)
     
 }
 
 timerId= setTimeout(updatechrono, 1000/60)
 
 function updatedisplay(){
     chronodom.innerText = 
     formatNumber(chrono.minute) + " : " + 
     formatNumber(chrono.seconde) + " : " + 
     formatNumber(chrono.tierce);
     
 }
 function formatNumber(num){
     return num < 10 ? "0" + num : num;
 }
});

