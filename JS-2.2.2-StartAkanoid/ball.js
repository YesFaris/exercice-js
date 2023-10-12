'use strict'

// let position = 0

// document.addEventListener("DOMContentLoaded", function(){
//     const ball1 = document.querySelector("#ball1");
//     const ball2 =document.querySelector("#ball2");
//     const ball3 = document.querySelector("#ball3");
//     const updateSpeed = 1000 / 60;
//     const windowWidth = window.innerWidth;

// moveWidthSetTimeout();
// function moveWidthSetTimeout(){
//    position++;
//    if(position === (windowWidth - ball1.scrollWidth)){
//     position = -ball1.scrollWidth
//    }
   
//    ball1.style.transform = "translateX(" + position + "px)";
//     setTimeout(moveWidthSetTimeout);
  
    
// }
// function moveWidthSetTimeout(){
//     position++;
//     if(position >= (windowWidth - ball1.scrollWidth)){
//      position = -ball1.scrollWidth
//     }
//     ball1.style.transform = "translateX(-" + position + "px)";
//      setTimeout(moveWidthSetTimeout);
//  }
// moveWidthSetInterval()
// function moveWidthSetInterval(){
    
//         position++;
//         if(position >= (windowWidth + ball2.windowWidth)){
//          position = ball2.windowWidth
//         }
        
//         ball2.style.transform = "translate(" + position + "px)";
        
//          setTimeout(moveWidthSetInterval);
//          requestAnimationFrame(moveWidthRAF);

// }
// moveWidthRAF()
// function moveWidthRAF (){
   
//         position++;
//         if(position >= (windowWidth - ball3.scrollWidth)){
//          position = -ball3.scrollWidth
//         }
//         ball3.style.transform = "translateX(" + position + "px)";
//          requestAnimationFrame(moveWidthRAF)

// }

// function getFullWidth(element){
//     const styles = window. getComputedStyle(element);
//     const width = element.offseWidth;
//     const borderLeftWidth = parseFloat(styles. borderLeftWidth)
//     const borderRightWidth = parseFloat(styles.borderRight);
//     const paddingLeft = parseFloat(styles.paddingLeft)
//     const paddingRight = parseFloat(styles.paddingRight)
    

//     const fullWidth = width + borderLeftWidth +borderRightWidth + paddingLeft + paddingRight;

//     return fullWidth;
    
// }
// })
document.addEventListener("DOMContentLoaded", function(){
    const ball = document.getElementById("ball1")
let balldirection = 1;
let ballposition = 0;
let speed = 5;
let limit = ball.offsetWidth;
let limit2 = ball.offsetHeight;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let width = windowWidth - ball.scrollWidth;
let height = windowHeight - ball.scrollHeight;
let positionX = 0;
let positionY = 0;
let directionX = 1;
let directionY = 1;




function animateBall(){
    positionX += speed * directionX;
    positionY += speed * directionY;
    if(positionX >= width && positionX >= 0){
        directionX = -1;
    }
    else if (positionX <= 0 && positionX === 0){
        directionX = 1
    }
    if(positionY >= height && positionY >= 0){
        directionY = -1;
    }
    else if (positionY <= 0 && positionY ===0){
        directionY = 1
    }
    ball.style.transform = "translateX("+ positionX +"px) translateY(" + positionY + "px)";
    requestAnimationFrame(animateBall);
}
animateBall()


});

// document.addEventListener("keydown", function(event){
//     console.log(event.code);
// });