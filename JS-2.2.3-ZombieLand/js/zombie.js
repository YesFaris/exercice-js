'use strict'
document.addEventListener("DOMContentLoaded", function (){
    let mouvement = 0;
let zombie = document.getElementById("zombietomb")

let image = document.getElementById("imge")

// let img = image.offsetWidth;
// let zomb = zombie.offsetWidth-2;
// console.log(zomb);
// // console.log(img)
// const updateSpeed = 200;

    // function moveWidthSetTimeout(){
    //     mouvement-=100;
    //     if(mouvement <= -img){
    //     mouvement =0;
    //    }
      
    //      image.style.transform = "translateX(" + mouvement + "px)";
    //     setTimeout(moveWidthSetTimeout, updateSpeed ); 
        
    //   }
    
    //   moveWidthSetTimeout();
    //   document.addEventListener("keydown", function(event){
    //     console.log(event.code);
    // });

let widthScroll = zombie.scrollWidth;
let stop;
let photo = widthScroll*10
let moveZombie = 0;
    function moveWidthSetTimeout(){
      mouvement-=100;
      zombie.style.backgroundPositionX = `${mouvement}px`;
      stop = setTimeout(function(){
        requestAnimationFrame(moveWidthSetTimeout)
      },200); 

      if(mouvement === -photo){
        clearTimeout(stop)
        zombie.style.tranform = "rotateY(180deg)"
      }
      
    };
  moveWidthSetTimeout();
       document.addEventListener("keydown", function(event){
         if(event.key === "ArrowRight"){
        
          zombie.style.transform = "rotateY(180deg)"
          moveZombie+=100;
          zombie.style.marginLeft = `${moveZombie}px `
         }
         else if(event.key === "ArrowLeft"){
          
          zombie.style.transform = "rotateY(0deg)"
          moveZombie-=100;
          zombie.style.marginLeft = `${moveZombie}px `
         }
       })
    
});

