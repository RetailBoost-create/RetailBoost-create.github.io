/* ══════════════════════════════════════════════
   NAVBAR — SCROLL EFFECT
   ══════════════════════════════════════════════ */
window.addEventListener("scroll", () => {
  const nb = document.getElementById("navbar");
  if (nb) nb.classList.toggle("scrolled", window.scrollY > 60);
});

/* ══════════════════════════════════════════════
   MOBILE NAV TOGGLE
   ══════════════════════════════════════════════ */
function closeNav() {
  const nav    = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (nav)    nav.classList.remove("open");
  if (toggle) { toggle.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const nav    = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    // Close on outside tap
    document.addEventListener("click", e => {
      if (!e.target.closest(".navbar")) closeNav();
    });
  }
});

/* ══════════════════════════════════════════════
   RANGE SLIDER FILL
   ══════════════════════════════════════════════ */
function updateSliderFill(slider) {
  const pct = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right,#1A3FAA ${pct}%,#DEE8FA ${pct}%)`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input[type=range]").forEach(s => {
    updateSliderFill(s);
    s.addEventListener("input", () => updateSliderFill(s));
  });
});

/* ══════════════════════════════════════════════
   HERO SLIDER
   ══════════════════════════════════════════════ */
const slides = document.querySelectorAll(".hero-slide");
let slideIdx = 0;
if (slides.length > 1) {
  setInterval(() => {
    slides[slideIdx].classList.remove("active");
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add("active");
  }, 4500);
}

/* ══════════════════════════════════════════════
   AOS — animate on scroll (once, no repeat)
   ══════════════════════════════════════════════ */
AOS.init({ duration: 800, once: true, offset: 60 });

/* ══════════════════════════════════════════════
   STATS — entrance animation + count-up
   ══════════════════════════════════════════════ */
function animateCount(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const step     = Math.ceil(target / (duration / 16));
  let   current  = 0;
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statsStrip = document.getElementById("statsStrip");
if (statsStrip) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsStrip.classList.add("in-view");
        document.querySelectorAll(".count-num").forEach(animateCount);
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });
  io.observe(statsStrip);
}

/* ══════════════════════════════════════════════
   EMI CALCULATOR (index.html — guarded)
   ══════════════════════════════════════════════ */
const loanSlider = document.getElementById("loanSlider");
const emiResult  = document.getElementById("emiResult");

if (loanSlider && emiResult) {
  const FLAT_INTEREST = 3250;

  function calculateEMI() {
    const P             = parseInt(loanSlider.value);
    const selectedRadio = document.querySelector('input[name="homeTenure"]:checked');
    const N             = selectedRadio ? parseInt(selectedRadio.value) : 6;
    const totalPayable  = P + FLAT_INTEREST;
    const emi           = Math.round(totalPayable / N);
    const loanValue     = document.getElementById("loanValue");
    const interestEl    = document.getElementById("emiInterestAmt");
    const totalEl       = document.getElementById("emiTotalAmt");
    if (loanValue)   loanValue.innerText  = P.toLocaleString("en-IN");
    if (interestEl)  interestEl.innerText = "₹" + FLAT_INTEREST.toLocaleString("en-IN");
    if (totalEl)     totalEl.innerText    = "₹" + totalPayable.toLocaleString("en-IN");
    emiResult.innerText = "₹" + emi.toLocaleString("en-IN") + " / month";
  }

  document.querySelectorAll('input[name="homeTenure"]').forEach(r =>
    r.addEventListener("change", calculateEMI)
  );
  loanSlider.addEventListener("input", calculateEMI);
  calculateEMI();
}

/* ══════════════════════════════════════════════
   WELCOME SCREEN — typing + auto-dismiss
   ══════════════════════════════════════════════ */
const typingEl = document.getElementById("typingText");
if (typingEl) {
  const text = "One Solution to All EMI Problems";
  let idx = 0;
  const typeText = () => {
    if (idx < text.length) {
      typingEl.innerHTML += text.charAt(idx++);
      setTimeout(typeText, 22);
    }
  };
  typeText();
}

window.addEventListener("load", () => {
  const ws = document.getElementById("welcomeScreen");
  if (!ws) return;
  setTimeout(() => {
    ws.style.transition = "opacity .6s ease";
    ws.style.opacity    = "0";
    ws.style.pointerEvents = "none";
    setTimeout(() => { ws.style.display = "none"; }, 650);
  }, 2800);
});
