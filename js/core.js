const esc = s =>
  String(s == null ? "" : s).replace(
    /[&<>"']/g,
    c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c])
  );

const cur =
  (location.pathname.split("/").pop() || "index.html")
    .replace(".html", "") || "index";

let _t = null;

try {
  _t = localStorage.getItem("theme");
} catch (e) {}

document.documentElement.dataset.theme = _t || "dark";

function setTheme(m) {
  document.documentElement.dataset.theme = m;

  try {
    localStorage.setItem("theme", m);
  } catch (e) {}

  const b = document.getElementById("themeBtn");

  if (b) {
    b.textContent = m === "dark" ? "Light" : "Dark";
    b.setAttribute(
      "aria-label",
      "Switch to " + (m === "dark" ? "light" : "dark") + " mode"
    );
  }
}

const NAV = [
  ["index", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["contact", "Contact"]
];

const BS_DAYS = [
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
  [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
  [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31],
  [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
  [31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30]
];

const BS_START = 2000;
const BS_ANCHOR = Date.UTC(1943, 3, 14);

const BS_MONTHS = [
  "बैशाख",
  "जेठ",
  "असार",
  "श्रावण",
  "भदौ",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पौष",
  "माघ",
  "फागुन",
  "चैत्र"
];

const BS_WEEK = [
  "आइतबार",
  "सोमबार",
  "मङ्गलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार"
];

const EN_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const neNum = n =>
  String(n).replace(/\d/g, d => "०१२३४५६७८९"[d]);

function toBS(y, m, d) {
  let diff = Math.round(
    (Date.UTC(y, m - 1, d) - BS_ANCHOR) / 864e5
  );

  if (diff < 0) return null;

  let by = BS_START;

  for (; by - BS_START < BS_DAYS.length; by++) {
    const yl = BS_DAYS[by - BS_START].reduce(
      (a, b) => a + b,
      0
    );

    if (diff < yl) break;

    diff -= yl;
  }

  if (by - BS_START >= BS_DAYS.length) return null;

  const ms = BS_DAYS[by - BS_START];
  let bm = 0;

  while (diff >= ms[bm]) {
    diff -= ms[bm];
    bm++;
  }

  return {
    y: by,
    m: bm,
    d: diff + 1
  };
}

function nepalNow() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: SITE.timezone,
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    })
      .formatToParts(new Date())
      .filter(x => x.type !== "literal")
      .map(x => [x.type, +x.value])
  );

  p.wd = new Date(
    Date.UTC(p.year, p.month - 1, p.day)
  ).getUTCDay();

  return p;
}

function layout() {
  document.getElementById("site-header").innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <header class="nav">
      <div class="wrap navin">
        <a class="brand" href="index.html">
          <span class="mono-badge">${esc(SITE.initials)}</span>
          <span>${esc(SITE.first)} ${esc(SITE.last)}</span>
        </a>
        <button class="burger" aria-label="Menu" aria-expanded="false">
          Menu
        </button>
        <nav>
          <ul class="menu">
            ${NAV.map(
              ([p, l]) => `
                <li>
                  <a href="${p}.html" class="${cur === p ? "on" : ""}">
                    ${l}
                  </a>
                </li>
              `
            ).join("")}
          </ul>
        </nav>
        <button id="themeBtn" class="tbtn" type="button"></button>
      </div>
    </header>
  `;

  document.getElementById("site-header").insertAdjacentHTML(
    "afterend",
    `
      <div class="ribbon">
        <div class="wrap rib">
          <div class="datebar" aria-label="Today's date">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="16" rx="2"/>
              <path d="M8 3v4M16 3v4M3 10h18"/>
            </svg>
            <span class="np" id="npd"></span>
            <span class="sep">|</span>
            <span class="en" id="end"></span>
          </div>
          <div class="rclock" title="Local time in Nepal">
            <i class="dot"></i>
            <b id="rclk"></b>
            <small>${esc(SITE.tzLabel)}</small>
          </div>
        </div>
      </div>
    `
  );

  document.getElementById("site-footer").innerHTML = `
    <footer class="wrap foot-site">
      <p class="mono">
        ${esc(SITE.location.split("·")[0].trim())} ·
        <span id="fclock"></span>
        ${esc(SITE.tzLabel)} · Updated ${esc(SITE.updated)}
      </p>
      <p class="mono">
        &copy;
        <span id="yr">${new Date().getFullYear()}</span>
        ${esc(SITE.first)} ${esc(SITE.last)}
      </p>
    </footer>
    <button class="fab" id="talkTrigger" type="button">
      <i></i>Let's Talk &amp; Play
    </button>
    <div id="toasts" aria-live="polite"></div>
  `;

  const bg = document.createElement("div");
  bg.className = "bg";
  bg.setAttribute("aria-hidden", "true");

  const S = [
    "{ }",
    "</>",
    "=>",
    "[ ]",
    "01",
    "&&",
    "#",
    "( )",
    "//",
    "++"
  ];

  bg.innerHTML = Array.from(
    { length: 12 },
    (_, i) => `
      <span
        class="sym"
        style="
          left:${(i * 83 + 11) % 96}%;
          top:${(i * 47 + 9) % 90}%;
          animation-duration:${16 + (i * 5) % 15}s;
          animation-delay:-${(i * 3) % 14}s;
          font-size:${1 + (i % 3) * 0.4}rem
        "
      >
        ${S[i % S.length]}
      </span>
    `
  ).join("");

  document.body.prepend(bg);

  const b = document.querySelector(".burger");
  const m = document.querySelector(".menu");

  b.onclick = () =>
    b.setAttribute(
      "aria-expanded",
      m.classList.toggle("open")
    );

  document.getElementById("themeBtn").onclick = () =>
    setTheme(
      document.documentElement.dataset.theme === "dark"
        ? "light"
        : "dark"
    );

  setTheme(document.documentElement.dataset.theme);

  addEventListener(
    "scroll",
    () => document.body.classList.toggle("scrolled", scrollY > 20),
    { passive: true }
  );

  const ld = document.createElement("script");

  ld.type = "application/ld+json";

  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.first + " " + SITE.last,
    jobTitle: SITE.roles[0],
    url: SITE.siteUrl || location.href,
    email: SITE.email,
    sameAs: SITE.links.map(l => l[1])
  });

  document.head.appendChild(ld);
}

function toast(type, title, msg, ms) {
  const w = document.getElementById("toasts");

  if (!w) return;

  const t = document.createElement("div");

  t.className = "toast " + type;
  t.setAttribute(
    "role",
    type === "error" ? "alert" : "status"
  );

  t.innerHTML = `
    <b>${esc(title)}</b>
    <span>${esc(msg || "")}</span>
    <button aria-label="Dismiss">&times;</button>
  `;

  const close = () => {
    t.classList.add("out");
    setTimeout(() => t.remove(), 350);
  };

  t.querySelector("button").onclick = close;

  w.appendChild(t);

  setTimeout(close, ms || 6500);
}

let _lastDate = "";

function tick() {
  const n = nepalNow();

  const set = (id, v) => {
    const e = document.getElementById(id);

    if (e && e.textContent !== v) {
      e.textContent = v;
    }
  };

  const key = n.year + "-" + n.month + "-" + n.day;

  if (key !== _lastDate) {
    _lastDate = key;

    const b = toBS(n.year, n.month, n.day);

    set(
      "npd",
      b
        ? `आज: ${neNum(b.d)} ${BS_MONTHS[b.m]} ${neNum(b.y)}, ${BS_WEEK[n.wd]}`
        : `आज: ${BS_WEEK[n.wd]}`
    );

    set(
      "end",
      String(n.day).padStart(2, "0") +
        " " +
        EN_MONTHS[n.month - 1] +
        " " +
        n.year
    );

    const yr = document.getElementById("yr");

    if (yr) {
      yr.textContent = n.year;
    }
  }

  const h12 = ((n.hour + 11) % 12) + 1;

  const clock =
    String(h12).padStart(2, "0") +
    ":" +
    String(n.minute).padStart(2, "0") +
    ":" +
    String(n.second).padStart(2, "0") +
    " " +
    (n.hour < 12 ? "AM" : "PM");

  set("rclk", clock);
  set("clock", clock);

  set(
    "fclock",
    String(n.hour).padStart(2, "0") +
      ":" +
      String(n.minute).padStart(2, "0") +
      ":" +
      String(n.second).padStart(2, "0")
  );

  const g =
    n.hour < 5
      ? "Good night"
      : n.hour < 12
        ? "Good morning"
        : n.hour < 17
          ? "Good afternoon"
          : n.hour < 21
            ? "Good evening"
            : "Good night";

  set("greet", g + " — नमस्ते");

  const yrs = n.year - SITE.careerStart;

  set("exp", yrs > 0 ? yrs + "+ yrs" : "new");
}

function initReveal() {
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          es =>
            es.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            }),
          { threshold: 0.2 }
        )
      : null;

  document
    .querySelectorAll(
      ".card,.tl>*,.rowi,.sec-h,.about-grid>*,.chips,.cform,.cinfo"
    )
    .forEach(el => {
      if (!io) {
        el.classList.add("in");
        return;
      }

      el.classList.add("rv");
      io.observe(el);
    });
}

const R = {};

document.addEventListener("DOMContentLoaded", () => {
  layout();

  document.querySelectorAll("[data-render]").forEach(e => {
    const f = R[e.dataset.render];

    if (f) {
      try {
        f(e);
      } catch (err) {
        console.error(err);
      }
    }
  });

  tick();
  setInterval(tick, 1000);
  initReveal();
  setupGamePanel();
  setupTalkAssistant();
});