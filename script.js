const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const languageToggle = document.querySelector("[data-lang-toggle]");

const translations = {
  uk: {
    htmlLang: "uk",
    title: "Людмила — юрист для управляючих компаній та забудовників | Київ",
    metaDescription: "Юридичний супровід управляючих компаній, ОСББ та забудовників. 15+ років досвіду. Київ та онлайн по Україні.",
    ogTitle: "Людмила — юрист для бізнесу у сфері нерухомості",
    ogDescription: "Господарське, житлове та договірне право. Від консультації до захисту у суді.",
    skip: "До основного вмісту",
    brandHome: "Людмила, на головну",
    brandPractice: "юридична практика",
    navLabel: "Основна навігація",
    menuOpen: "Відкрити меню",
    menuClose: "Закрити меню",
    navAbout: "Про мене",
    navClients: "Для кого",
    navServices: "Послуги",
    navProcess: "Як я працюю",
    navContact: "Зв'язатися",
    heroPhotoLabel: "Юрист Людмила в сучасному офісі",
    heroEyebrow: "Юрист <i></i> Київ <i></i> 15+ років досвіду",
    heroTitle: '<span class="shiny-text">Правовий захист<br>для бізнесу у сфері</span><br><em class="gradient-gold-text">нерухомості</em>',
    heroLead: "Юридичний супровід управляючих компаній, ОСББ та забудовників. Від точного аналізу до захисту в суді.",
    heroCta: "Отримати консультацію",
    heroServices: "Переглянути послуги <span>↘</span>",
    heroSide: "Господарське <span>•</span> житлове <span>•</span> договірне право",
    scrollCue: "Прокрутіть",
    scrollCueLabel: "Прокрутити нижче",
    statsLabel: "Досвід у цифрах",
    statsOne: "років юридичної<br>практики",
    statsTwo: "ключові напрями<br>спеціалізації",
    statsThree: "супровід від аналізу<br>до результату",
    experienceStamp: "років<br>досвіду",
    aboutAlt: "Юрист Людмила в робочому кабінеті",
    aboutEyebrow: "Про мене",
    aboutTitle: "Право має не ускладнювати бізнес, а <em>захищати його</em>",
    aboutLead: "Понад 15 років я працюю у сфері юриспруденції, з них понад 6 років спеціалізуюся на юридичному супроводі управляючих компаній та ОСББ.",
    aboutText: "Допомагаю оцінити ризики, вибудувати зрозумілу правову стратегію та пройти весь шлях: від першої консультації і підготовки документів до переговорів чи представництва в суді.",
    aboutFactOne: "Господарське та<br>житлове право",
    aboutFactTwo: "Київ та онлайн<br>по всій Україні",
    clientsEyebrow: "Спеціалізація",
    clientsTitle: "Для кого я працюю",
    clientsLead: "Глибоке розуміння процесів у сфері управління та будівництва нерухомості.",
    clientOneTitle: "Управляючі<br>компанії та ОСББ",
    clientOneItems: ["Спори з мешканцями", "Стягнення заборгованості", "Конфлікти з постачальниками", "Перевірки та претензії держорганів", "Договори й внутрішні документи"],
    clientTwoTitle: "Забудовники та<br>девелопери",
    clientTwoItems: ["Договори з інвесторами", "Спори з покупцями", "Взаємодія з контролюючими органами", "Господарські та договірні спори"],
    discuss: "Обговорити питання <span>↗</span>",
    servicesEyebrow: "Практика",
    servicesTitle: "Юридичні послуги",
    servicesLead: "Кожне питання починається з аналізу, а кожне рішення має конкретну мету.",
    serviceTitles: ["Судовий захист", "Договірна робота", "Супровід управляючих компаній", "Правовий аналіз", "Звернення до державних органів", "Юридичні консультації"],
    serviceSubtitles: ["Позови, відзиви, апеляції, касації", "Підготовка, аудит та супровід договорів", "Системна юридична підтримка діяльності", "Документи, ризики та стратегія дій", "Скарги, заяви, запити та супровід", "Для бізнесу та фізичних осіб"],
    processEyebrow: "Прозорий процес",
    processTitle: "Від запиту до<br><em>зрозумілого рішення</em>",
    processTitles: ["Звернення", "Аналіз", "Стратегія", "Результат"],
    processText: ["Ви коротко описуєте ситуацію та бажаний результат.", "Вивчаю документи, факти, ризики та судову практику.", "Пропоную конкретний план дій, строки та формат роботи.", "Готую документи або супроводжую справу до завершення."],
    faqEyebrow: "Відповіді",
    faqTitle: "Часті<br>запитання",
    faqLead: "Не знайшли відповіді? Напишіть, і я зорієнтую щодо наступного кроку.",
    faqLink: "Поставити запитання <span>↗</span>",
    faqQuestions: ["Чи можна вирішити питання без суду?", "Що потрібно для першого звернення?", "Скільки часу займає вирішення питання?", "Чи працюєте ви онлайн?", "Які документи потрібні для аналізу договору?"],
    faqAnswers: ["Так. Насамперед оцінюю можливість переговорів, претензійної роботи або іншого досудового врегулювання. Суд пропонується тоді, коли це справді доцільно.", "Короткий опис ситуації, ключові документи та інформація про бажаний результат. Перелік додаткових матеріалів визначимо після першого контакту.", "Строк залежить від складності, обсягу документів та обраної стратегії. Після первинного аналізу ви отримаєте реалістичну оцінку етапів і термінів.", "Так. Консультації, обмін документами та більшість робочих процесів доступні онлайн по всій Україні.", "Сам договір, додатки й попереднє листування сторін. За потреби я запрошу документи, які допоможуть повно оцінити ризики."],
    contactEyebrow: "Зв'яжіться",
    contactTitle: "Почнімо з<br><em>консультації</em>",
    contactLead: "Опишіть вашу ситуацію. Я оціню перспективи та запропоную наступний крок.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    workFormat: "Формат роботи",
    workFormatValue: "Київ · онлайн по Україні",
    phoneAria: "Зателефонувати Людмилі",
    emailAria: "Написати Людмилі електронною поштою",
    formSubject: "Запит на консультацію з сайту",
    portraitAlt: "Портрет юриста Людмили",
    formName: "Ваше ім'я",
    formPhone: "Телефон",
    formMessage: "Коротко опишіть питання",
    formButton: "Надіслати запит <span>↗</span>",
    formNote: "Після натискання запит буде надіслано на пошту.",
    formSending: "Надсилаємо запит на пошту...",
    footerRights: "© <span data-year></span> Людмила. Всі права захищені.",
    backTop: "Нагору ↑"
  },
  en: {
    htmlLang: "en",
    title: "Liudmyla — lawyer for property managers and developers | Kyiv",
    metaDescription: "Legal support for property management companies, HOAs and developers. 15+ years of legal experience. Kyiv and online across Ukraine.",
    ogTitle: "Liudmyla — real estate business lawyer",
    ogDescription: "Commercial, housing and contract law. From consultation to court representation.",
    skip: "Skip to main content",
    brandHome: "Liudmyla, back to home",
    brandPractice: "legal practice",
    navLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navAbout: "About",
    navClients: "Who I Help",
    navServices: "Services",
    navProcess: "Process",
    navContact: "Contact",
    heroPhotoLabel: "Lawyer Liudmyla in a modern office",
    heroEyebrow: "Lawyer <i></i> Kyiv <i></i> 15+ years of experience",
    heroTitle: '<span class="shiny-text">Legal protection<br>for real estate</span><br><em class="gradient-gold-text">business</em>',
    heroLead: "Legal support for property management companies, HOAs and developers. From precise analysis to court protection.",
    heroCta: "Book a consultation",
    heroServices: "View services <span>↘</span>",
    heroSide: "Commercial <span>•</span> housing <span>•</span> contract law",
    scrollCue: "Scroll",
    scrollCueLabel: "Scroll down",
    statsLabel: "Experience in numbers",
    statsOne: "years of legal<br>practice",
    statsTwo: "key areas of<br>specialization",
    statsThree: "support from analysis<br>to result",
    experienceStamp: "years<br>experience",
    aboutAlt: "Lawyer Liudmyla in her office",
    aboutEyebrow: "About",
    aboutTitle: "Law should not complicate business, but <em>protect it</em>",
    aboutLead: "For more than 15 years I have worked in law, including over 6 years specializing in legal support for property management companies and HOAs.",
    aboutText: "I help assess risks, build a clear legal strategy and guide the full path: from the first consultation and document preparation to negotiations or court representation.",
    aboutFactOne: "Commercial and<br>housing law",
    aboutFactTwo: "Kyiv and online<br>across Ukraine",
    clientsEyebrow: "Specialization",
    clientsTitle: "Who I help",
    clientsLead: "A deep understanding of processes in property management and real estate development.",
    clientOneTitle: "Property management<br>companies and HOAs",
    clientOneItems: ["Disputes with residents", "Debt recovery", "Conflicts with suppliers", "Inspections and claims from authorities", "Contracts and internal documents"],
    clientTwoTitle: "Developers and<br>real estate companies",
    clientTwoItems: ["Investor agreements", "Disputes with buyers", "Interaction with regulatory authorities", "Commercial and contract disputes"],
    discuss: "Discuss your matter <span>↗</span>",
    servicesEyebrow: "Practice",
    servicesTitle: "Legal services",
    servicesLead: "Every matter begins with analysis, and every solution must have a clear goal.",
    serviceTitles: ["Court representation", "Contract work", "Support for property managers", "Legal analysis", "Applications to authorities", "Legal consultations"],
    serviceSubtitles: ["Claims, responses, appeals and cassation", "Drafting, review and contract support", "Systematic legal support for operations", "Documents, risks and action strategy", "Complaints, applications, requests and follow-up", "For businesses and individuals"],
    processEyebrow: "Transparent process",
    processTitle: "From request to<br><em>a clear solution</em>",
    processTitles: ["Request", "Analysis", "Strategy", "Result"],
    processText: ["You briefly describe the situation and the desired outcome.", "I review documents, facts, risks and relevant case law.", "I suggest a concrete action plan, timing and work format.", "I prepare documents or support the matter through completion."],
    faqEyebrow: "Answers",
    faqTitle: "Frequently<br>asked questions",
    faqLead: "Did not find the answer? Write to me and I will guide you on the next step.",
    faqLink: "Ask a question <span>↗</span>",
    faqQuestions: ["Can a matter be resolved without court?", "What is needed for the first request?", "How long does it take to resolve a matter?", "Do you work online?", "What documents are needed to review a contract?"],
    faqAnswers: ["Yes. First I assess the possibility of negotiations, pre-trial claims or another out-of-court resolution. Court is suggested only when it is truly appropriate.", "A brief description of the situation, key documents and information about the desired result. The list of additional materials is determined after the first contact.", "The timing depends on complexity, the volume of documents and the chosen strategy. After the initial analysis, you will receive a realistic assessment of stages and timelines.", "Yes. Consultations, document exchange and most workflows are available online throughout Ukraine.", "The contract itself, annexes and prior correspondence between the parties. If needed, I will request documents that help fully assess the risks."],
    contactEyebrow: "Contact",
    contactTitle: "Let us start with<br><em>a consultation</em>",
    contactLead: "Describe your situation. I will assess the prospects and suggest the next step.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    workFormat: "Work format",
    workFormatValue: "Kyiv · online across Ukraine",
    phoneAria: "Call Liudmyla",
    emailAria: "Email Liudmyla",
    formSubject: "Consultation request from the website",
    portraitAlt: "Portrait of lawyer Liudmyla",
    formName: "Your name",
    formPhone: "Phone",
    formMessage: "Briefly describe your matter",
    formButton: "Send request <span>↗</span>",
    formNote: "After clicking, your request will be sent by email.",
    formSending: "Sending your request by email...",
    footerRights: "© <span data-year></span> Liudmyla. All rights reserved.",
    backTop: "Back to top ↑"
  }
};

let currentLanguage = localStorage.getItem("site-language") === "en" ? "en" : "uk";

function tr(key) {
  return translations[currentLanguage][key];
}

function setText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = tr(key);
}

function setHTML(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = tr(key);
}

function setAttr(selector, attribute, key) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, tr(key));
}

function setAllText(selector, key) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = tr(key);
  });
}

function setLabel(fieldSelector, key) {
  const field = document.querySelector(fieldSelector);
  const label = field && field.closest("label");
  if (label && label.firstChild) label.firstChild.nodeValue = tr(key);
}

function setMenuButtonLabel() {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-label", tr(isOpen ? "menuClose" : "menuOpen"));
}

function setListItems(selector, items) {
  document.querySelectorAll(selector).forEach((item, index) => {
    if (items[index]) item.textContent = items[index];
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("site-language", language);
  document.documentElement.lang = tr("htmlLang");
  document.title = tr("title");
  setAttr('meta[name="description"]', "content", "metaDescription");
  setAttr('meta[property="og:title"]', "content", "ogTitle");
  setAttr('meta[property="og:description"]', "content", "ogDescription");
  setText(".skip-link", "skip");
  setAttr(".brand", "aria-label", "brandHome");
  setAllText(".brand small", "brandPractice");
  setAttr(".main-nav", "aria-label", "navLabel");
  setMenuButtonLabel();
  setText('.main-nav a[href="#about"]', "navAbout");
  setText('.main-nav a[href="#clients"]', "navClients");
  setText('.main-nav a[href="#services"]', "navServices");
  setText('.main-nav a[href="#process"]', "navProcess");
  setText('.main-nav a[href="#contact"]', "navContact");
  setAttr(".hero-photo", "aria-label", "heroPhotoLabel");
  setHTML(".hero-copy .eyebrow", "heroEyebrow");
  setHTML("#hero-title", "heroTitle");
  setText(".hero-lead", "heroLead");
  setText(".hero-actions .button", "heroCta");
  setHTML(".hero-actions .text-link", "heroServices");
  setHTML(".hero-side-note", "heroSide");
  setText(".scroll-cue span", "scrollCue");
  setAttr(".scroll-cue", "aria-label", "scrollCueLabel");
  setAttr(".stats", "aria-label", "statsLabel");
  setHTML(".stats-grid div:nth-child(1) span", "statsOne");
  setHTML(".stats-grid div:nth-child(2) span", "statsTwo");
  setHTML(".stats-grid div:nth-child(3) span", "statsThree");
  setHTML(".experience-stamp span", "experienceStamp");
  setAttr(".about .image-frame img", "alt", "aboutAlt");
  setText(".about-copy .eyebrow", "aboutEyebrow");
  setHTML(".about-copy h2", "aboutTitle");
  setText(".about-copy .lead", "aboutLead");
  setText(".about-copy > p:not(.eyebrow):not(.lead)", "aboutText");
  setHTML(".about-facts div:nth-child(1) p", "aboutFactOne");
  setHTML(".about-facts div:nth-child(2) p", "aboutFactTwo");
  setText(".clients .section-heading .eyebrow", "clientsEyebrow");
  setText(".clients .section-heading h2", "clientsTitle");
  setText(".clients .section-heading p:last-child", "clientsLead");
  setHTML(".client-card:nth-child(1) h3", "clientOneTitle");
  setHTML(".client-card:nth-child(2) h3", "clientTwoTitle");
  setListItems(".client-card:nth-child(1) li", tr("clientOneItems"));
  setListItems(".client-card:nth-child(2) li", tr("clientTwoItems"));
  document.querySelectorAll(".client-card .text-link").forEach((link) => { link.innerHTML = tr("discuss"); });
  setText(".services-heading .eyebrow", "servicesEyebrow");
  setText(".services-heading h2", "servicesTitle");
  setText(".services-heading > p:last-child", "servicesLead");
  document.querySelectorAll(".service-row").forEach((row, index) => {
    const title = row.querySelector("strong");
    const subtitle = row.querySelector("small");
    if (title) title.textContent = tr("serviceTitles")[index];
    if (subtitle) subtitle.textContent = tr("serviceSubtitles")[index];
  });
  setText(".process-top .eyebrow", "processEyebrow");
  setHTML(".process-top h2", "processTitle");
  document.querySelectorAll(".process-grid article").forEach((article, index) => {
    const title = article.querySelector("h3");
    const text = article.querySelector("p");
    if (title) title.textContent = tr("processTitles")[index];
    if (text) text.textContent = tr("processText")[index];
  });
  setText(".faq-intro .eyebrow", "faqEyebrow");
  setHTML(".faq-intro h2", "faqTitle");
  setText(".faq-intro > p:not(.eyebrow)", "faqLead");
  setHTML(".faq-intro .text-link", "faqLink");
  document.querySelectorAll(".accordion details").forEach((detail, index) => {
    const summary = detail.querySelector("summary");
    const answer = detail.querySelector("p");
    if (summary) summary.innerHTML = `${tr("faqQuestions")[index]}<span></span>`;
    if (answer) answer.textContent = tr("faqAnswers")[index];
  });
  setText(".contact-copy .eyebrow", "contactEyebrow");
  setHTML(".contact-copy h2", "contactTitle");
  setText(".contact-copy > p:not(.eyebrow)", "contactLead");
  setText('.contact-meta a[href^="tel:"] small', "phoneLabel");
  setText('.contact-meta a[href^="mailto:"] small', "emailLabel");
  setText(".contact-meta p small", "workFormat");
  setText(".contact-meta p span", "workFormatValue");
  setAttr('.contact-meta a[href^="tel:"]', "aria-label", "phoneAria");
  setAttr('.contact-meta a[href^="mailto:"]', "aria-label", "emailAria");
  setAttr('input[name="_subject"]', "value", "formSubject");
  setAttr(".contact-portrait-badge", "alt", "portraitAlt");
  setLabel('input[name="name"]', "formName");
  setLabel('input[name="phone"]', "formPhone");
  setLabel('textarea[name="message"]', "formMessage");
  setHTML(".contact-form .button", "formButton");
  setText("[data-form-note]", "formNote");
  setHTML(".footer-inner > p", "footerRights");
  setText(".back-top", "backTop");
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  document.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("active", option.dataset.langOption === language);
  });
  languageToggle.setAttribute("aria-pressed", String(language === "en"));
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch language to Ukrainian" : "Перемкнути мову на англійську");
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  setMenuButtonLabel();
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  setMenuButtonLabel();
  navigation.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "uk" : "en");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
applyLanguage(currentLanguage);

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
  note.textContent = tr("formSending");
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

