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
    heroProfileName: "Людмила",
    heroProfileRole: "Юрист · нерухомість · бізнес",
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
    heroProfileName: "Liudmyla",
    heroProfileRole: "Lawyer · real estate · business",
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
  setAttr(".hero-profile img", "alt", "portraitAlt");
  setText(".hero-profile strong", "heroProfileName");
  setText(".hero-profile span", "heroProfileRole");
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

function initHeroHoverMotion() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = hero.querySelector(".hero-reveal-canvas");
  const context = canvas ? canvas.getContext("2d") : null;
  if (!canvas || !context) return;

  const image = new Image();
  image.src = "assets/liudmyla-lawyer.png";

  const maskCanvas = document.createElement("canvas");
  const maskContext = maskCanvas.getContext("2d");
  const photoCanvas = document.createElement("canvas");
  const photoContext = photoCanvas.getContext("2d");
  if (!maskContext || !photoContext) return;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const target = { cursorX: 50, cursorY: 45, x: 0, y: 0 };
  const current = { ...target };
  const pointer = { active: false, x: 0, y: 0, lastX: 0, lastY: 0 };
  const splashes = [];
  let rect = hero.getBoundingClientRect();
  let pixelRatio = 1;
  let frame = 0;

  function getPhotoBounds() {
    const side = Math.max(24, (rect.width - 1180) / 2);
    const top = rect.width < 1024 ? rect.height * 0.22 : rect.height * 0.17;
    return {
      x: side,
      y: top,
      width: rect.width - side * 2,
      height: Math.min(540, rect.height * (rect.width < 1024 ? 0.48 : 0.64))
    };
  }

  function drawCover(drawContext, source, bounds) {
    const sourceRatio = source.width / source.height;
    const boundsRatio = bounds.width / bounds.height;
    let sourceWidth = source.width;
    let sourceHeight = source.height;
    let sourceX = 0;
    let sourceY = 0;

    if (sourceRatio > boundsRatio) {
      sourceWidth = source.height * boundsRatio;
      sourceX = (source.width - sourceWidth) * 0.58;
    } else {
      sourceHeight = source.width / boundsRatio;
      sourceY = (source.height - sourceHeight) * 0.5;
    }

    drawContext.drawImage(source, sourceX, sourceY, sourceWidth, sourceHeight, bounds.x, bounds.y, bounds.width, bounds.height);
  }

  function resizeCanvas() {
    rect = hero.getBoundingClientRect();
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * pixelRatio));
    const height = Math.max(1, Math.round(rect.height * pixelRatio));

    [canvas, maskCanvas, photoCanvas].forEach((item) => {
      item.width = width;
      item.height = height;
    });

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    [context, maskContext, photoContext].forEach((drawContext) => {
      drawContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    });
  }

  function renderPhotoLayer() {
    photoContext.clearRect(0, 0, rect.width, rect.height);
    if (!image.complete || !image.naturalWidth) return;

    const bounds = getPhotoBounds();
    drawCover(photoContext, image, bounds);

    const veil = photoContext.createLinearGradient(bounds.x, 0, bounds.x + bounds.width, 0);
    veil.addColorStop(0, "rgba(240,237,227,.02)");
    veil.addColorStop(0.18, "rgba(240,237,227,.08)");
    veil.addColorStop(0.82, "rgba(240,237,227,.24)");
    veil.addColorStop(1, "rgba(240,237,227,.48)");
    photoContext.fillStyle = veil;
    photoContext.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
  }

  function paintSoftSpot(spot) {
    const gradient = maskContext.createRadialGradient(spot.x, spot.y, spot.radius * 0.05, spot.x, spot.y, spot.radius);
    gradient.addColorStop(0, `rgba(255,255,255,${0.95 * spot.alpha})`);
    gradient.addColorStop(0.42, `rgba(255,255,255,${0.7 * spot.alpha})`);
    gradient.addColorStop(0.72, `rgba(255,255,255,${0.26 * spot.alpha})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    maskContext.fillStyle = gradient;
    maskContext.beginPath();
    maskContext.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
    maskContext.fill();
  }

  function addRevealSplash(x, y, dx, dy) {
    const speed = Math.hypot(dx, dy);
    const angle = speed > 0.5 ? Math.atan2(dy, dx) : -0.2;
    const baseRadius = clamp(42 + speed * 0.55, 46, 118);
    const sideAngle = angle + Math.PI / 2;
    const pull = clamp(speed * 0.55, 8, 58);
    const spots = [
      { offset: 0, side: 0, radius: 1, alpha: 1, drift: 0.08 },
      { offset: -pull * 0.8, side: -baseRadius * 0.34, radius: 0.62, alpha: 0.78, drift: 0.13 },
      { offset: -pull * 1.35, side: baseRadius * 0.22, radius: 0.48, alpha: 0.68, drift: 0.17 },
      { offset: -pull * 1.9, side: -baseRadius * 0.08, radius: 0.34, alpha: 0.52, drift: 0.22 },
      { offset: pull * 0.38, side: baseRadius * 0.3, radius: 0.38, alpha: 0.48, drift: 0.1 },
      { offset: pull * 0.22, side: -baseRadius * 0.46, radius: 0.3, alpha: 0.42, drift: 0.09 }
    ];

    spots.forEach((spot, index) => {
      const px = x + Math.cos(angle) * spot.offset + Math.cos(sideAngle) * spot.side;
      const py = y + Math.sin(angle) * spot.offset + Math.sin(sideAngle) * spot.side;
      splashes.push({
        x: px,
        y: py,
        radius: baseRadius * spot.radius,
        alpha: spot.alpha,
        life: 1,
        vx: Math.cos(angle) * spot.drift * speed * (index < 4 ? -1 : 0.5),
        vy: Math.sin(angle) * spot.drift * speed * (index < 4 ? -1 : 0.5)
      });
    });

    if (splashes.length > 120) splashes.splice(0, splashes.length - 120);
  }

  function paintRevealSplash() {
    for (let index = splashes.length - 1; index >= 0; index -= 1) {
      const spot = splashes[index];
      paintSoftSpot(spot);
      spot.x += spot.vx;
      spot.y += spot.vy;
      spot.radius *= 1.006;
      spot.life -= 0.028;
      spot.alpha = Math.max(0, spot.alpha * 0.965);
      if (spot.life <= 0 || spot.alpha <= 0.03) splashes.splice(index, 1);
    }
  }

  function render() {
    current.cursorX += (target.cursorX - current.cursorX) * 0.1;
    current.cursorY += (target.cursorY - current.cursorY) * 0.1;
    current.x += (target.x - current.x) * 0.1;
    current.y += (target.y - current.y) * 0.1;

    hero.style.setProperty("--hero-cursor-x", `${current.cursorX.toFixed(2)}%`);
    hero.style.setProperty("--hero-cursor-y", `${current.cursorY.toFixed(2)}%`);
    hero.style.setProperty("--hero-x", `${current.x.toFixed(2)}px`);
    hero.style.setProperty("--hero-y", `${current.y.toFixed(2)}px`);

    maskContext.globalCompositeOperation = "destination-out";
    maskContext.fillStyle = pointer.active ? "rgba(0,0,0,.022)" : "rgba(0,0,0,.055)";
    maskContext.fillRect(0, 0, rect.width, rect.height);
    maskContext.globalCompositeOperation = "source-over";

    if (pointer.active) {
      const dx = pointer.x - pointer.lastX;
      const dy = pointer.y - pointer.lastY;
      pointer.lastX += (pointer.x - pointer.lastX) * 0.2;
      pointer.lastY += (pointer.y - pointer.lastY) * 0.2;
      addRevealSplash(pointer.x, pointer.y, dx, dy);
    }

    paintRevealSplash();

    context.clearRect(0, 0, rect.width, rect.height);
    context.drawImage(photoCanvas, 0, 0, rect.width, rect.height);
    context.globalCompositeOperation = "destination-in";
    context.drawImage(maskCanvas, 0, 0, rect.width, rect.height);
    context.globalCompositeOperation = "source-over";

    frame = requestAnimationFrame(render);
  }

  function updatePointer(event) {
    if (event.pointerType === "touch") return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    pointer.x = x;
    pointer.y = y;
    if (!pointer.active) {
      pointer.lastX = x;
      pointer.lastY = y;
    }
    pointer.active = true;
    hero.classList.add("is-revealing");
    target.cursorX = (x / rect.width) * 100;
    target.cursorY = (y / rect.height) * 100;
    target.x = ((x / rect.width) - 0.5) * 18;
    target.y = ((y / rect.height) - 0.5) * 14;
  }

  function leavePointer() {
    pointer.active = false;
    hero.classList.remove("is-revealing");
    Object.assign(target, { cursorX: 50, cursorY: 45, x: 0, y: 0 });
  }

  image.addEventListener("load", renderPhotoLayer, { once: true });
  resizeCanvas();
  renderPhotoLayer();
  frame = requestAnimationFrame(render);

  hero.addEventListener("pointermove", updatePointer, { passive: true });
  hero.addEventListener("pointerenter", updatePointer, { passive: true });
  hero.addEventListener("pointerleave", leavePointer);
  window.addEventListener("resize", () => {
    resizeCanvas();
    renderPhotoLayer();
  }, { passive: true });
  window.addEventListener("beforeunload", () => cancelAnimationFrame(frame), { once: true });
}

initHeroHoverMotion();

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

