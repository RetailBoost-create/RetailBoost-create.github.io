/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll",()=>{
  const nb=document.getElementById("navbar");
  if(nb) nb.classList.toggle("scrolled",window.scrollY>60);
});

/* RANGE SLIDER FILL — keeps filled track in sync */
function updateSliderFill(slider){
  const pct=(slider.value-slider.min)/(slider.max-slider.min)*100;
  slider.style.background=`linear-gradient(to right,#0b3d91 ${pct}%,#dde6f7 ${pct}%)`;
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

setInterval(()=>{
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
},4500);


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
   EMI CALCULATOR
   Uses the EXACT same flat-fee model as loan-application.html:
     totalPayable = loanAmount + FLAT_INTEREST
     emi          = totalPayable / months
   FLAT_INTEREST = midpoint of ₹3,000–₹3,500 range used in loan app.
   ══════════════════════════════════════════════ */
const FLAT_INTEREST = 3250; // ← same as loan app (midpoint of ₹3,000–₹3,500)

const loanSlider = document.getElementById("loanSlider");
const loanValue  = document.getElementById("loanValue");
const emiResult  = document.getElementById("emiResult");

function calculateEMI(){
  const P = parseInt(loanSlider.value);

  // Read selected tenure (3 or 6 months — same options as loan app)
  const selectedRadio = document.querySelector('input[name="homeTenure"]:checked');
  const N = selectedRadio ? parseInt(selectedRadio.value) : 6;

  // ── Same formula as loan-application.html ──────────────────
  const totalPayable = P + FLAT_INTEREST;
  const emi = Math.round(totalPayable / N);
  // ───────────────────────────────────────────────────────────

  loanValue.innerText = P.toLocaleString('en-IN');
  document.getElementById("emiInterestAmt").innerText = "₹" + FLAT_INTEREST.toLocaleString('en-IN');
  document.getElementById("emiTotalAmt").innerText    = "₹" + totalPayable.toLocaleString('en-IN');
  emiResult.innerText = "₹" + emi.toLocaleString('en-IN') + " / month";
}

// Tenure radio buttons
document.querySelectorAll('input[name="homeTenure"]').forEach(r => r.addEventListener('change', calculateEMI));
// Loan amount slider
loanSlider.addEventListener("input", calculateEMI);

calculateEMI(); // initialise on load


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