/*effect for button1*/
/*definition of concerned variable for the first button*/
var btneffect1=document.querySelector('.button1');
/*definition of effect1*/
btneffect1.addEventListener('mouseover', highlight);


// call back function
// var btneffect1=document.querySelectorAll('.button1');
// for(let i = 0;  < btneffect1.length ; i++){
// btneffect1[i].addEventListener('mouseover', highlight);
// }
// function highlight() {
//     btneffect1[i].style.color="var(--white-ad-color)";
//     btneffect1[i].style.backgroundColor="var(--transparent-ad-color)";
//     btneffect1[i].style.boxShadow="";
//     btneffect1[i].style.border="var(--white-ad-color) 2px solid";
// }
// btneffect1[i].addEventListener('mouseout', initiate);
// }
// function initiate() {
//     btneffect1[i].style.color="var(--primary-ad-color)";
//     btneffect1[i].style.backgroundColor="";
//     btneffect1[i].style.boxShadow="";
// }


/*function creation related to the effect1*/
function highlight(){
    btneffect1.style.color="var(--white-ad-color)";
    btneffect1.style.backgroundColor="var(--transparent-ad-color)";
    btneffect1.style.boxShadow="";
    btneffect1.style.border="var(--white-ad-color) 2px solid";
}
/*definition of effect2*/
btneffect1.addEventListener('mouseout', initiate);
/*function creation related to the effect2*/
function initiate(){
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
    logo.style.filter="invert(80%)";
    logo.style.backgroundColor="var(--transparent-ad-color)";
}
/*remove flyover effect to logoes*/
logo.addEventListener('mouseout', bordering);
/*function related to flyover effect removing*/
function bordering(){
    logo.style.filter="";
    logo.style.backgroundColor="";
}

/*header hover effect*/
/*add highlight effect on header text*/
var header=document.querySelector('.menu');
header.addEventListener('mouseover', underlined);
function underlined(){
    header.style.textDecoration="underline"
    header.style.textDecorationColor="white"
}
/*remove highlight effect on header text*/
header.addEventListener('mouseout', unhightlighted);
function unhightlighted(){
    header.style.textDecoration="none"
    header.style.textDecorationColor="none"
}

/*Fade effect for web page tittle and subtittle*/
// var fadeEffect=document.querySelector('.titre'); //must specify the right class of element
// fadeEffect.addEventListener('opacity_value', FadeIn);
// function FadeIn(id,millisec){
//    var obj=getReferenceToDiv(id);
//    changeOpac(0,obj);
//    var timer=0;
//    var speed=Math.round(millisec/100);
//    var o=0;
//    for(var a=0;a<100;a++){
//        setTimeout(function(){changeOpac(o,ogj);o--;},(timer*speed))
//        timer++;
//    }
// }
 