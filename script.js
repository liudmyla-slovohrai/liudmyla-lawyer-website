const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Відкрити меню");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Відкрити меню" : "Закрити меню");
  navigation.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

document.querySelector("[data-contact-form]").addEventListener("submit", (event) => {
  const note = document.querySelector("[data-form-note]");
  note.textContent = "Надсилаємо запит на пошту...";
  note.classList.add("success");
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

function initSlideFromLeft() {
  const elements = document.querySelectorAll(".slide-from-left");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("slide-visible"));
    return;
  }

  const slideObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("slide-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  elements.forEach((element) => slideObserver.observe(element));
}

initSlideFromLeft();

function initCountUp() {
  const counters = document.querySelectorAll("[data-count-to]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCounter(element) {
    const target = Number(element.dataset.countTo);
    const suffix = element.dataset.countSuffix || "";
    const padLength = Number(element.dataset.countPad || 0);
    const duration = 2600;
    const startTime = performance.now();
    const formatNumber = (value) => String(value).padStart(padLength, "0");

    function updateCounter(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      element.textContent = `${formatNumber(Math.round(target * eased))}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = `${formatNumber(target)}${suffix}`;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if (reduceMotion) {
    counters.forEach((counter) => {
      const padLength = Number(counter.dataset.countPad || 0);
      const value = String(counter.dataset.countTo).padStart(padLength, "0");
      counter.textContent = `${value}${counter.dataset.countSuffix || ""}`;
    });
    return;
  }

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.65 });

  counters.forEach((counter) => countObserver.observe(counter));
}

initCountUp();

function initClickSpark() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const sparks = [];
  const sparkColor = "#d3b36e";
  let frameId = 0;
  let pixelRatio = 1;

  canvas.className = "click-spark-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);

  function resizeCanvas() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * pixelRatio);
    canvas.height = Math.round(window.innerHeight * pixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function drawSparks(time) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = sparks.length - 1; index >= 0; index -= 1) {
      const spark = sparks[index];
      const progress = Math.min((time - spark.startTime) / spark.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const opacity = 1 - progress;

      spark.angles.forEach((angle) => {
        const innerDistance = 5 + eased * 12;
        const outerDistance = 13 + eased * 30;

        context.beginPath();
        context.moveTo(
          spark.x + Math.cos(angle) * innerDistance,
          spark.y + Math.sin(angle) * innerDistance
        );
        context.lineTo(
          spark.x + Math.cos(angle) * outerDistance,
          spark.y + Math.sin(angle) * outerDistance
        );
        context.strokeStyle = sparkColor;
        context.globalAlpha = opacity;
        context.lineWidth = 1.4;
        context.lineCap = "round";
        context.stroke();
      });

      if (progress >= 1) sparks.splice(index, 1);
    }

    context.globalAlpha = 1;
    frameId = sparks.length ? requestAnimationFrame(drawSparks) : 0;
  }

  function createSpark(event) {
    if (event.button !== undefined && event.button !== 0) return;

    sparks.push({
      x: event.clientX,
      y: event.clientY,
      startTime: performance.now(),
      duration: 520,
      angles: Array.from({ length: 8 }, (_, index) => (Math.PI * 2 * index) / 8)
    });

    if (!frameId) frameId = requestAnimationFrame(drawSparks);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("pointerdown", createSpark, { passive: true });
}

initClickSpark();

