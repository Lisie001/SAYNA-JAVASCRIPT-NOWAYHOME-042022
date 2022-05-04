/*effect for button1*/
/*definition of concerned variable for the first button*/
var btneffect1=document.querySelector('.button1');
/*definition of effect1*/
btneffect1.addEventListener('mouseover', highlight);
// callback function
// btneffect1.array.forEach(button => {
//     btneffect1.addEventListener('mouseover',()=>{highlight(button)})
// });
/*function creation related to the effect1*/
function highlight(button){
    btneffect1.style.color="var(--white-ad-color)";
    btneffect1.style.backgroundColor="var(--transparent-ad-color)";
    btneffect1.style.boxShadow="";
    btneffect1.style.border="var(--white-ad-color) 2px solid";
}

/*definition of effect2*/
btneffect1.addEventListener('mouseout', initiate);
// // callback function
// btneffect1.array.forEach(button => {
//     btneffect1.addEventListener('mouseout',()=>{highlight(button)})
// });
/*function creation related to the effect2*/
function initiate(button){
    /*collect initial style color*/
    btneffect1.style.color="var(--primary-ad-color)";
    /*collect initial background color*/
    btneffect1.style.backgroundColor="";
    /*collect initial button style*/
    btneffect1.style.boxShadow="";
}

/*effect for button2*/
/*definition of concerned variable for the second button*/
var btneffect2=document.querySelector('.cta .button2');
/*definition of effect1*/
btneffect2.addEventListener('mouseover', emphasize);
/*function creation related to the effect1*/
function emphasize(){
    btneffect2.style.color="var(--primary-ad-color)";
    btneffect2.style.backgroundColor="var(--white-ad-color)";
    btneffect2.style.boxShadow="7px 7px 7px white";
    // button.style.fontweight="500"
}
/*definition of effect2*/
btneffect2.addEventListener('mouseout', start);
/*function creation related to the effect2*/
function start(){
    /*collect initial style color*/
    btneffect2.style.color="var(--white-ad-color)";
    /*collect initial background color*/
    btneffect2.style.backgroundColor="";
    /*collect initial button style*/
    btneffect2.style.boxShadow="";
    // button.style.fontweight="500"
}

/*footer logo effect*/
// definition of variable
var logo=document.querySelector('.media');
/*add flyover effect to logoes*/
logo.addEventListener('mouseover', border);
/*function related to flyover effect*/
function border(){
    logo.style.filter="invert(100%)";
    logo.style.backgroundColor="var(--transparent-ad-color)";
}
/*remove flyover effect to logoes*/
logo.addEventListener('mouseout', bordering);
/*function related to flyover effect removing*/
function bordering(){
    logo.style.filter="";
    logo.style.backgroundColor="";
}



console.log("hello")