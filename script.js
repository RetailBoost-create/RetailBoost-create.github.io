/* HERO SLIDER */
const slides=document.querySelectorAll(".hero-slide");
let i=0;

setInterval(()=>{
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
},4500);


/* AOS */
AOS.init({duration:900,once:true});


/* COUNTDOWN */
const launchDate=new Date("March 15, 2026 00:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const gap=launchDate-now;

document.getElementById("days").innerText=Math.floor(gap/(1000*60*60*24));
document.getElementById("hours").innerText=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
document.getElementById("minutes").innerText=Math.floor((gap%(1000*60*60))/(1000*60));
document.getElementById("seconds").innerText=Math.floor((gap%(1000*60))/1000);
},1000);


/* EMI CALCULATOR */
const loanSlider=document.getElementById("loanSlider");
const monthSlider=document.getElementById("monthSlider");

const loanValue=document.getElementById("loanValue");
const monthValue=document.getElementById("monthValue");
const emiResult=document.getElementById("emiResult");

function calculateEMI(){
let P=loanSlider.value;
let N=monthSlider.value;
let R=12/100/12;

loanValue.innerText=P;
monthValue.innerText=N;

let emi=(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);

emiResult.innerText="Monthly EMI: ₹ "+Math.round(emi);
}

loanSlider.addEventListener("input",calculateEMI);
monthSlider.addEventListener("input",calculateEMI);

calculateEMI();


/* WELCOME SCREEN */
const text="One Solution to All EMI Problems";
const typing=document.getElementById("typingText");

let idx=0;

function typeText(){
if(idx<text.length){
typing.innerHTML+=text.charAt(idx);
idx++;
setTimeout(typeText,50);
}
}
typeText();

window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("welcomeScreen").style.display="none";
},3500);
});