/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll",()=>{
  const nb=document.getElementById("navbar");
  if(nb) nb.classList.toggle("scrolled",window.scrollY>60);
});

/* RANGE SLIDER FILL — keeps filled track in sync */
function updateSliderFill(slider){
  const pct=(slider.value-slider.min)/(slider.max-slider.min)*100;
  slider.style.background=`linear-gradient(to right,#1A3FAA ${pct}%,#DEE8FA ${pct}%)`;
}
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("input[type=range]").forEach(s=>{
    updateSliderFill(s);
    s.addEventListener("input",()=>updateSliderFill(s));
  });
});

/* HERO SLIDER */
const slides=document.querySelectorAll(".hero-slide");
let i=0;
if(slides.length>1){
  setInterval(()=>{
    slides[i].classList.remove("active");
    i=(i+1)%slides.length;
    slides[i].classList.add("active");
  },4500);
}

/* AOS */
AOS.init({duration:900,once:true});


/* COUNTDOWN */
if(document.getElementById("days")){
const launchDate=new Date("March 15, 2026 00:00:00").getTime();
setInterval(()=>{
const now=new Date().getTime();
const gap=launchDate-now;
document.getElementById("days").innerText=Math.floor(gap/(1000*60*60*24));
document.getElementById("hours").innerText=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
document.getElementById("minutes").innerText=Math.floor((gap%(1000*60*60))/(1000*60));
document.getElementById("seconds").innerText=Math.floor((gap%(1000*60))/1000);
},1000);
}


/* ══════════════════════════════════════════════
   EMI CALCULATOR (index.html — guarded)
   ══════════════════════════════════════════════ */
const loanSlider = document.getElementById("loanSlider");
const loanValue  = document.getElementById("loanValue");
const emiResult  = document.getElementById("emiResult");

if(loanSlider && emiResult){
  const FLAT_INTEREST = 3250;

  function calculateEMI(){
    const P = parseInt(loanSlider.value);
    const selectedRadio = document.querySelector('input[name="homeTenure"]:checked');
    const N = selectedRadio ? parseInt(selectedRadio.value) : 6;
    const totalPayable = P + FLAT_INTEREST;
    const emi = Math.round(totalPayable / N);
    if(loanValue) loanValue.innerText = P.toLocaleString('en-IN');
    const interestEl = document.getElementById("emiInterestAmt");
    const totalEl    = document.getElementById("emiTotalAmt");
    if(interestEl) interestEl.innerText = "₹" + FLAT_INTEREST.toLocaleString('en-IN');
    if(totalEl)    totalEl.innerText    = "₹" + totalPayable.toLocaleString('en-IN');
    emiResult.innerText = "₹" + emi.toLocaleString('en-IN') + " / month";
  }

  document.querySelectorAll('input[name="homeTenure"]').forEach(r => r.addEventListener('change', calculateEMI));
  loanSlider.addEventListener("input", calculateEMI);
  calculateEMI();
}


/* WELCOME SCREEN */
const text="One Solution to All EMI Problems";
const typing=document.getElementById("typingText");

let idx=0;

function typeText(){
if(idx<text.length){
typing.innerHTML+=text.charAt(idx);
idx++;
setTimeout(typeText,22);
}
}
typeText();

window.addEventListener("load",()=>{
const ws=document.getElementById("welcomeScreen");
setTimeout(()=>{
  ws.style.opacity="0";
  ws.style.transition="opacity .6s ease";
  ws.style.pointerEvents="none";
  setTimeout(()=>{ ws.style.display="none"; },650);
},2800);
});
