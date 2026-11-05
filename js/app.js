/* Page renderers - content comes from js/data.js */
const IC = { layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>', user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>', cap: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>', award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.5-1.5 7 5-3 5 3-1.5-7"/>', send: '<path d="M21 3 3 10l7 3 3 7 8-17Z"/>', tools: '<path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-1-1-3 3-3Z"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>' };
const ico = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : "";

/* King of Hearts - back of the profile flip card (inline SVG, no image file needed) */
const KING = `<svg viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="King of Hearts playing card"><defs>
<path id="kht" d="M0 -5C-11 -17 -23 -2 0 15C23 -2 11 -17 0 -5Z"/>
<clipPath id="kclip"><rect x="46" y="52" width="208" height="158"/></clipPath>
<linearGradient id="kgold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d77a"/><stop offset="1" stop-color="#b8861b"/></linearGradient>
<g id="kh" clip-path="url(#kclip)">
 <rect x="46" y="52" width="208" height="158" fill="#fbeccb"/><path d="M46 52h208L46 210Z" fill="#f4dba3" opacity=".55"/>
 <path d="M52 210V178Q62 150 110 164L150 190L190 164Q238 150 248 178V210Z" fill="#c8102e" stroke="#7a0b1c" stroke-width="2"/>
 <path d="M112 164L150 192L188 164L188 176L150 204L112 176Z" fill="#fffdf6" stroke="#9a8f78" stroke-width="1.5"/>
 <g fill="#2b2b2b"><circle cx="126" cy="176" r="2.2"/><circle cx="140" cy="186" r="2.2"/><circle cx="160" cy="186" r="2.2"/><circle cx="174" cy="176" r="2.2"/></g>
 <path d="M60 196h46M194 196h46" stroke="url(#kgold)" stroke-width="4" stroke-linecap="round"/>
 <path d="M122 110Q112 142 128 160L136 140Z" fill="#8a5a2b"/><path d="M178 110Q188 142 172 160L164 140Z" fill="#8a5a2b"/>
 <ellipse cx="150" cy="122" rx="28" ry="32" fill="#f3c9a3" stroke="#8a5a3a" stroke-width="1.6"/>
 <path d="M122 132Q124 172 150 184Q176 172 178 132Q168 152 150 152Q132 152 122 132Z" fill="#7a4a22"/><path d="M134 138Q150 128 166 138Q150 146 134 138Z" fill="#6a3d1a"/>
 <circle cx="139" cy="118" r="2.6" fill="#2b1d12"/><circle cx="161" cy="118" r="2.6" fill="#2b1d12"/><path d="M132 110Q139 106 146 110M154 110Q161 106 168 110" stroke="#6a3d1a" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M150 120v10" stroke="#c9946b" stroke-width="2" stroke-linecap="round"/>
 <path d="M112 94L108 64L128 80L150 58L172 80L192 64L188 94Z" fill="url(#kgold)" stroke="#7a5a10" stroke-width="2" stroke-linejoin="round"/>
 <rect x="112" y="90" width="76" height="12" rx="2" fill="#c8102e" stroke="#7a0b1c" stroke-width="1.5"/>
 <circle cx="150" cy="66" r="4.5" fill="#c8102e"/><circle cx="108" cy="64" r="3.5" fill="#fff"/><circle cx="192" cy="64" r="3.5" fill="#fff"/><circle cx="130" cy="96" r="2.5" fill="#f6d77a"/><circle cx="150" cy="96" r="2.5" fill="#f6d77a"/><circle cx="170" cy="96" r="2.5" fill="#f6d77a"/>
 <path d="M80 206V112" stroke="url(#kgold)" stroke-width="5" stroke-linecap="round"/><circle cx="80" cy="104" r="9" fill="url(#kgold)" stroke="#7a5a10" stroke-width="1.5"/><path d="M80 92v-8M76 88h8" stroke="#7a5a10" stroke-width="2.5" stroke-linecap="round"/>
 <use href="#kht" transform="translate(222 82) scale(.55)" fill="#c8102e"/><use href="#kht" transform="translate(222 118) scale(.4)" fill="#c8102e"/>
</g></defs>
<rect x="3" y="3" width="294" height="414" rx="22" fill="#fffaf0" stroke="url(#kgold)" stroke-width="4"/><rect x="14" y="14" width="272" height="392" rx="14" fill="none" stroke="#d4a537" stroke-width="1" stroke-dasharray="2 5"/>
<rect x="46" y="52" width="208" height="316" rx="6" fill="#fbeccb" stroke="#1b2a5c" stroke-width="3"/>
<use href="#kh"/><use href="#kh" transform="rotate(180 150 210)"/><path d="M46 210H254" stroke="#1b2a5c" stroke-width="2" opacity=".45"/>
<text x="30" y="58" fill="#c8102e" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="34" text-anchor="middle">K</text><use href="#kht" transform="translate(30 82) scale(.62)" fill="#c8102e"/>
<g transform="rotate(180 150 210)"><text x="30" y="58" fill="#c8102e" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="34" text-anchor="middle">K</text><use href="#kht" transform="translate(30 82) scale(.62)" fill="#c8102e"/></g></svg>`;

R.hero = el => {
  const S = SITE, b = S.heroButtons.map((x, i) => `<a class="pill${i ? "" : " pri"}" href="${esc(x[1])}">${esc(x[0])}</a>`).join("") + (S.cv ? `<a class="pill" href="${esc(S.cv)}" download>Download CV</a>` : "") + S.links.slice(0, 2).map(l => `<a class="pill" href="${esc(l[1])}"${ext(l[1])}>${esc(l[0])} &#8599;</a>`).join("");
  el.innerHTML = `<div class="hero-text"><p class="eyebrow mono">${esc(S.location)}</p><h1><b>${esc(S.first)}</b> ${esc(S.last)}</h1>${S.roles.map(r => `<p class="role">${esc(r)}</p>`).join("")}
 <p class="term mono" aria-label="${esc(S.typing[0])}"><span class="pr">~/portfolio</span> <span class="dl">$</span> <span id="typed">${esc(S.typing[0])}</span><i class="caret"></i></p>
 <p class="lead">${esc(S.tagline)}</p><blockquote>${esc(S.quote)}</blockquote>
 <div class="livebar"><span class="greet" id="greet"></span><span class="chip2">exp <b id="exp"></b></span><span class="chip2"><i class="dot"></i><b id="clock"></b> ${esc(S.tzLabel)}</span></div>
 <div class="pills">${b}</div></div>
 <div class="portrait"><div class="ring" aria-hidden="true"><i class="glow"></i><div class="clip"><i class="spin"></i></div></div>
  <div class="flip" role="button" tabindex="0" aria-pressed="false" aria-label="King of Hearts card. Activate to flip to the profile picture."><div class="tilt"><div class="flip-inner">
   <div class="face front">${S.kingCard ? `<img class="card-image king-image" src="${esc(S.kingCard)}" alt="King of Hearts playing card" width="900" height="1200">` : KING}</div>
   <div class="face back"><img class="card-image profile-image" src="${esc(S.photo)}" alt="Portrait of ${esc(S.first)} ${esc(S.last)}" width="900" height="1200"></div></div></div></div>
  <p class="hint mono">Click or tap the card to flip</p></div>`;
  /* flip card: click / tap / keyboard + subtle 3D tilt on hover (mouse only) */
  const kingImage = el.querySelector(".king-image");
  if (kingImage) kingImage.addEventListener("error", () => { el.querySelector(".face.front").innerHTML = KING; }, { once: true });
  const f = el.querySelector(".flip"), tilt = el.querySelector(".tilt");
  const toggle = () => { f.classList.add("flipping"); f.classList.toggle("flipped"); f.setAttribute("aria-pressed", f.classList.contains("flipped")); setTimeout(() => f.classList.remove("flipping"), 900) };
  f.addEventListener("click", toggle); f.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle() } });
  f.addEventListener("pointermove", e => { if (e.pointerType !== "mouse") return; const r = f.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; tilt.style.transform = `rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg)` });
  f.addEventListener("pointerleave", () => { tilt.style.transform = "" });
  /* terminal typing effect */
  const out = el.querySelector("#typed"), ph = S.typing; if (out && ph.length > 1 && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
    let i = 0, c = ph[0].length, del = true, wait = 0;
    const run = () => { if (wait > 0) { wait--; return } const w = ph[i]; if (del) { c--; if (c <= 0) { del = false; i = (i + 1) % ph.length } } else { c++; if (c >= ph[i].length) { del = true; wait = 22 } } out.textContent = ph[i].slice(0, Math.max(c, 0)) }; setInterval(run, 70); wait = 24
  }
};
R.about = el => { el.innerHTML = `<div class="sec-h"><p class="label mono">&#9671; ABOUT</p><h2>About</h2></div><div class="about-grid"><div>${SITE.about.map(p => `<p>${esc(p)}</p>`).join("")}${cur === "index" ? '<p><a class="more" href="about.html">More about me &rarr;</a></p>' : ""}</div><aside><h3>Focus</h3><ul class="focus">${SITE.focus.map(f => `<li>${esc(f)}</li>`).join("")}</ul></aside></div>` };
const card = o => `<article class="card ${o.cls || ""}"><div class="chead"><span class="ibox">${ico(o.icon)}</span><span class="label mono">&#9671; ${o.label}</span></div><h3><a class="stretch" href="${o.href}">${o.title}</a></h3><p class="cdesc">${esc(o.desc)}</p>${o.body || ""}<div class="cfoot"><span class="mono">${o.count}</span><span class="go">${ico("arrow")}</span></div></article>`;
R.bento = el => {
  const S = SITE, C = S.cards;
  el.innerHTML = card({ cls: "span2", icon: "layers", label: "PROJECTS", title: "Projects", desc: C.projects, href: "projects.html", count: S.projects.length + " PROJECTS", body: `<div class="minis">${S.projects.slice(0, 4).map(p => `<div class="mini"><b>${esc(p.title)}</b><span class="mono">${esc(p.org)} · ${esc(p.type)}</span></div>`).join("")}</div>` })
    + card({ cls: "span2", icon: "tools", label: "SKILLS", title: "Skills", desc: C.skills, href: "about.html", count: S.skills.length + " SKILLS", body: `<div class="tags">${S.skills.map(s => `<span class="tg">${esc(s)}</span>`).join("")}</div>` })
    + card({ icon: "user", label: "ABOUT", title: "About", desc: C.about, href: "about.html", count: "MY STORY" })
    + card({ icon: "brief", label: "EXPERIENCE", title: "Experience", desc: C.experience, href: "about.html#experience", count: S.experience.length + " POSTINGS" })
    + card({ icon: "cap", label: "EDUCATION", title: "Education", desc: C.education, href: "about.html#education", count: S.education.length + " DEGREES" })
    + card({ icon: "award", label: "TRAINING", title: "Training", desc: C.training, href: "about.html#training", count: S.training.length + " PROGRAMS" })
    + card({ cls: "span4", icon: "send", label: "CONTACT", title: "Contact", desc: C.contact, href: "contact.html", count: (S.links.length + 1) + " LINKS" })
};
R.timeline = el => { el.innerHTML = SITE.experience.map(x => `<div><span class="mono">${esc(x.period)}</span><h3>${esc(x.role)}</h3><p class="org">${esc(x.org)}</p><p>${esc(x.desc)}</p></div>`).join("") };
R.edu = el => { el.innerHTML = SITE.education.map(x => `<div class="rowi"><div><b>${esc(x.degree)}</b><br><span class="muted">${esc(x.school)}</span></div><span class="mono">${esc(x.year)}</span></div>`).join("") };
R.training = el => { el.innerHTML = SITE.training.map(x => `<div class="rowi"><div><b>${esc(x.title)}</b><br><span class="muted">${esc(x.org)}</span></div><span class="mono">${esc(x.year)}</span></div>`).join("") };
R.skills = el => { el.innerHTML = SITE.skills.map(s => `<span class="tg">${esc(s)}</span>`).join("") };
R.projects = el => {
  const types = ["All", ...new Set(SITE.projects.map(p => p.type))]; let t = "All";
  const draw = () => {
    el.innerHTML = `<div class="chips">${types.map(x => `<button class="chip${x === t ? " on" : ""}" data-t="${esc(x)}">${esc(x)}</button>`).join("")}</div><div class="pgrid">${SITE.projects.filter(p => t === "All" || p.type === t).map(p => `<article class="card"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><div class="chead"><span class="label mono">&#9671; ${esc(p.type).toUpperCase()}</span><span class="mono">${esc(p.year)}</span></div><h3>${esc(p.title)}</h3><p class="org">${esc(p.org)}</p><p class="cdesc">${esc(p.desc)}</p><div class="tags">${p.tags.map(g => `<span class="tg">${esc(g)}</span>`).join("")}</div>${p.link ? `<p><a class="more" href="${esc(p.link)}"${ext(p.link)}>Visit project &#8599;</a></p>` : ""}</article>`).join("")}</div>`;
    el.querySelectorAll(".chip").forEach(b => b.onclick = () => { t = b.dataset.t; draw(); initReveal() })
  }; draw()
};

/* Contact form -> Google Sheets through Apps Script (google-apps-script/Code.gs). Success is shown ONLY after the server confirms. */
R.contact = el => {
  const S = SITE; el.innerHTML = `<div class="cinfo"><p>Open to conversations, collaborations and new opportunities. Send a message and it reaches me directly.</p><p class="mailline"><a class="more" href="mailto:${esc(S.email)}">${esc(S.email)}</a> <button class="chip" id="cp" type="button">Copy</button></p><ul class="focus">${S.links.map(l => `<li><a href="${esc(l[1])}"${ext(l[1])}>${esc(l[0])} &#8599;</a></li>`).join("")}</ul><p class="muted"><small>I usually reply within 1&ndash;2 working days.</small></p></div>
 <form class="cform" id="mf" novalidate><p class="mono label">&#9671; SEND A MESSAGE</p>
 <label for="n">Name</label><input id="n" name="name" autocomplete="name" maxlength="80"><span class="err" data-e="name"></span>
 <label for="e">Email</label><input id="e" name="email" type="email" autocomplete="email" maxlength="120"><span class="err" data-e="email"></span>
 <label for="s">Subject</label><input id="s" name="subject" maxlength="120"><span class="err" data-e="subject"></span>
 <label for="m">Message</label><textarea id="m" name="message" rows="5" maxlength="2000"></textarea><span class="err" data-e="message"></span><small class="muted" id="cc">0 / 2000</small>
 <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
 <p><button class="pill pri sbtn" type="submit" id="sb"><span class="lbl">Send message</span><span class="spinner" aria-hidden="true"></span></button></p><div id="fs" class="fstat" role="status" aria-live="polite"></div></form>`;
  document.getElementById("cp").onclick = async e => { try { await navigator.clipboard.writeText(S.email); toast("info", "Copied", S.email, 2500) } catch (x) { toast("info", "Email", S.email, 4000) } };
  const f = document.getElementById("mf"), btn = document.getElementById("sb"), fs = document.getElementById("fs"), opened = Date.now(); let busy = false, token = newToken();
  function newToken() { return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now() + "-" + Math.random().toString(16).slice(2) }
  const F = f.elements; F.message.addEventListener("input", () => document.getElementById("cc").textContent = F.message.value.length + " / 2000");
  const showErr = er => { f.querySelectorAll("[data-e]").forEach(s => { s.textContent = er[s.dataset.e] || "" }); f.querySelectorAll("input,textarea").forEach(i => i.setAttribute("aria-invalid", er[i.name] ? "true" : "false")) };
  f.addEventListener("submit", async e => {
    e.preventDefault(); if (busy) return;
    const v = { name: F.name.value.trim(), email: F.email.value.trim(), subject: F.subject.value.trim(), message: F.message.value.trim() }, er = {};
    if (v.name.length < 2) er.name = "Please enter your name."; if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) er.email = "Please enter a valid email address."; if (v.subject.length < 3) er.subject = "Please add a short subject."; if (v.message.length < 10) er.message = "Please write at least 10 characters.";
    showErr(er); const first = Object.keys(er)[0]; if (first) { toast("error", "Please check the form", er[first]); F[first].focus(); return }
    if (F.website.value || Date.now() - opened < 2000) { toast("error", "Please wait", "Take a moment and try again."); return }
    if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(SITE.API)) { toast("error", "Contact form not connected", "The Google Sheets link is not set yet (see README). You can email me directly instead.", 9000); fs.className = "fstat bad"; fs.textContent = "Not connected: set API in js/data.js."; return }
    const sig = JSON.stringify(v); let last = null; try { last = JSON.parse(localStorage.getItem("lastMsg") || "null") } catch (x) { }
    if (last && last.sig === sig && Date.now() - last.t < 300000) { toast("info", "Already sent", "This exact message was sent a moment ago."); return }
    busy = true; btn.disabled = true; btn.classList.add("loading"); btn.querySelector(".lbl").textContent = "Sending…"; fs.className = "fstat"; fs.textContent = "";
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 20000);
    try {
      const r = await fetch(SITE.API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ ...v, token, website: F.website.value }), signal: ctl.signal });
      const j = await r.json(); if (!j.ok) throw new Error(j.error || "The server rejected the message.");
      try { localStorage.setItem("lastMsg", JSON.stringify({ sig, t: Date.now() })) } catch (x) { } token = newToken(); f.reset(); document.getElementById("cc").textContent = "0 / 2000"; showErr({});
      fs.className = "fstat ok"; fs.innerHTML = `<b>Message sent.</b> Thank you! Reference: <span class="mono">${esc(j.id)}</span>`; toast("success", "Message sent", "Thank you — I will get back to you soon.")
    }
    catch (err) { const m = err.name === "AbortError" ? "The request timed out. Please check your connection and try again." : (err.name === "TypeError" ? "Network error. Please check your connection and try again." : err.message); fs.className = "fstat bad"; fs.textContent = m; toast("error", "Could not send", m, 8000) }
    finally { clearTimeout(to); busy = false; btn.disabled = false; btn.classList.remove("loading"); btn.querySelector(".lbl").textContent = "Send message" }
  })
};

R.playground = el => { el.innerHTML = ""; };

function openGame(name) {
  const panel = document.getElementById("talkPanel");
  const launcher = panel && panel.querySelector("#gameLauncher");
  const consolePanel = panel && panel.querySelector("#gameConsole");
  if (!panel || !launcher || !consolePanel) return;
  if (name !== "flappy" && name !== "basketball") return;
  if (window.__gameAnimation) cancelAnimationFrame(window.__gameAnimation);
  window.__gameAnimation = 0;
  panel.classList.add("playing");
  launcher.classList.add("hidden");
  consolePanel.classList.remove("hidden");
  consolePanel.dataset.game = name;
  consolePanel.querySelector(".game-console-title").textContent = name === "flappy" ? "Flappy Bird" : "Basketball";
  consolePanel.querySelector(".game-console-hint").textContent = name === "flappy" ? "Tap, press Space, or use the flap button." : "Pull the ball down and left, then release to shoot.";
  consolePanel.querySelectorAll("[data-game]").forEach(button => button.classList.toggle("active", button.dataset.game === name));
  const canvas = consolePanel.querySelector("canvas");
  canvas.setAttribute("aria-label", `${name === "flappy" ? "Flappy Bird" : "Basketball"} game canvas`);
  if (name === "flappy") initFlappyGame(canvas);
  else initBasketballGame(canvas);
  panel.querySelector(".talk-body").scrollTop = panel.querySelector(".talk-body").scrollHeight;
}

function closeGame() {
  if (window.__gameAnimation) cancelAnimationFrame(window.__gameAnimation);
  window.__gameAnimation = 0;
  const panel = document.getElementById("talkPanel");
  if (!panel) return;
  panel.classList.remove("playing");
  panel.querySelector("#gameConsole").classList.add("hidden");
  panel.querySelector("#gameLauncher").classList.remove("hidden");
}

function setupGamePanel() {
  if (window.__gameKeysBound) return;
  window.__gameKeysBound = true;
  document.addEventListener("keydown", e => {
    const consolePanel = document.querySelector("#talkPanel #gameConsole");
    if (!consolePanel || consolePanel.classList.contains("hidden")) return;
    if (e.code === "Space" && consolePanel.dataset.game === "flappy") {
      e.preventDefault();
      if (typeof window.__flapBird === "function") window.__flapBird();
    }
    if (e.key === "Escape") closeGame();
  });
}

function showGameLauncher(panel) {
  if (!panel) return;
  panel.classList.remove("playing");
  panel.querySelector("#gameConsole").classList.add("hidden");
  panel.querySelector("#gameLauncher").classList.remove("hidden");
  panel.querySelector("#assistantInput").focus();
}

function initFlappyGame(canvas) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const status = document.querySelector("#gameConsole .game-console-status");
  const state = { bird: { x: 84, y: H / 2, vy: 0, r: 15 }, pipes: [], score: 0, started: false, over: false, lastPipe: 0 };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#101c36"); sky.addColorStop(1, "#172c4a");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#213653"; ctx.fillRect(0, H - 44, W, 44);
    ctx.fillStyle = "#52d6b3"; ctx.fillRect(0, H - 44, W, 5);
    for (const pipe of state.pipes) {
      ctx.fillStyle = "#45c99a";
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
      ctx.fillRect(pipe.x, pipe.top + pipe.gap, pipe.width, H - pipe.top - pipe.gap - 44);
      ctx.fillStyle = "#68e5b3";
      ctx.fillRect(pipe.x - 4, pipe.top - 10, pipe.width + 8, 10);
      ctx.fillRect(pipe.x - 4, pipe.top + pipe.gap, pipe.width + 8, 10);
    }
    ctx.fillStyle = "#ffc857"; ctx.beginPath(); ctx.arc(state.bird.x, state.bird.y, state.bird.r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#172033"; ctx.beginPath(); ctx.arc(state.bird.x + 5, state.bird.y - 4, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgba(8, 16, 31, .75)"; ctx.fillRect(12, 12, 104, 32);
    ctx.fillStyle = "#fff"; ctx.font = "600 16px 'IBM Plex Mono', monospace"; ctx.fillText(`SCORE  ${state.score}`, 22, 33);
    if (!state.started || state.over) {
      ctx.fillStyle = "rgba(8, 16, 31, .76)"; ctx.fillRect(28, 145, W - 56, 100);
      ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.font = "700 22px sans-serif";
      ctx.fillText(state.over ? "Run over" : "Ready when you are", W / 2, 184);
      ctx.font = "14px sans-serif"; ctx.fillStyle = "#c8d5ea";
      ctx.fillText(state.over ? `Score: ${state.score} · Tap to try again` : "Tap the canvas or press FLAP", W / 2, 212);
      ctx.textAlign = "start";
    }
  };
  const reset = () => {
    state.bird = { x: 84, y: H / 2, vy: 0, r: 15 };
    state.pipes = []; state.score = 0; state.started = false; state.over = false; state.lastPipe = 0;
    status.textContent = "Your score: 0";
    draw();
  };
  const flap = () => {
    if (state.over) reset();
    state.started = true;
    state.bird.vy = -6.2;
    status.textContent = `Score: ${state.score}. Keep flying.`;
    if (!window.__gameAnimation) window.__gameAnimation = requestAnimationFrame(step);
  };
  function step(now) {
    if (state.started && !state.over) {
      state.bird.vy += 0.32;
      state.bird.y += state.bird.vy;
      if (!state.lastPipe || now - state.lastPipe > 1450) {
        state.pipes.push({ x: W + 12, width: 48, top: 58 + Math.random() * 108, gap: 122, passed: false });
        state.lastPipe = now;
      }
      state.pipes.forEach(pipe => {
        pipe.x -= 2.5;
        if (!pipe.passed && pipe.x + pipe.width < state.bird.x) {
          pipe.passed = true; state.score += 1; status.textContent = `Score: ${state.score}. Keep flying.`;
        }
        const overlapsX = state.bird.x + state.bird.r > pipe.x && state.bird.x - state.bird.r < pipe.x + pipe.width;
        if (overlapsX && (state.bird.y - state.bird.r < pipe.top || state.bird.y + state.bird.r > pipe.top + pipe.gap)) state.over = true;
      });
      state.pipes = state.pipes.filter(pipe => pipe.x + pipe.width > -10);
      if (state.bird.y - state.bird.r < 0 || state.bird.y + state.bird.r > H - 44) state.over = true;
    }
    if (state.over) status.textContent = `Run over. Final score: ${state.score}. Tap FLAP to restart.`;
    draw();
    const activeConsole = document.querySelector("#talkPanel #gameConsole");
    if (state.started && !state.over && activeConsole && !activeConsole.classList.contains("hidden") && activeConsole.dataset.game === "flappy") {
      window.__gameAnimation = requestAnimationFrame(step);
    } else {
      window.__gameAnimation = 0;
    }
  }
  canvas.onpointerdown = flap;
  canvas.onclick = () => canvas.focus();
  canvas.onkeydown = e => { if (e.code === "Space") { e.preventDefault(); flap(); } };
  const flapButton = document.querySelector("#gameConsole [data-flap]");
  flapButton.onclick = flap;
  document.querySelector("#gameConsole [data-game-restart]").onclick = reset;
  window.__flapBird = flap;
  reset();
}

function initBasketballGame(canvas) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const status = document.querySelector("#gameConsole .game-console-status");
  const hoop = { x: 290, y: 142, width: 70 };
  const state = { ball: { x: 76, y: 360, vx: 0, vy: 0, active: false }, score: 0, shots: 0, dragging: false, pointer: null, raf: 0, scored: false };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#101c36"); bg.addColorStop(1, "#172c4a");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#243959"; ctx.fillRect(0, H - 38, W, 38);
    ctx.strokeStyle = "#8394ae"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(340, 82); ctx.lineTo(340, 265); ctx.stroke();
    ctx.fillStyle = "#e7edf7"; ctx.fillRect(318, 82, 44, 5);
    ctx.strokeStyle = "#ff6978"; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(hoop.x, hoop.y); ctx.lineTo(hoop.x + hoop.width, hoop.y); ctx.stroke();
    ctx.strokeStyle = "rgba(230, 238, 250, .55)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(hoop.x + 5, hoop.y + 3); ctx.lineTo(hoop.x + 18, hoop.y + 42); ctx.lineTo(hoop.x + hoop.width - 18, hoop.y + 42); ctx.lineTo(hoop.x + hoop.width - 5, hoop.y + 3); ctx.stroke();
    ctx.fillStyle = "rgba(8, 16, 31, .75)"; ctx.fillRect(12, 12, 144, 32);
    ctx.fillStyle = "#fff"; ctx.font = "600 15px 'IBM Plex Mono', monospace"; ctx.fillText(`BUCKETS  ${state.score} / 5`, 20, 33);
    ctx.fillStyle = "#c8d5ea"; ctx.font = "12px 'IBM Plex Mono', monospace"; ctx.fillText(`SHOT ${Math.min(state.shots + 1, 5)} OF 5`, 280, 33);
    if (state.dragging && state.pointer) {
      ctx.strokeStyle = "#ffc857"; ctx.lineWidth = 2; ctx.setLineDash([5, 5]);
      ctx.beginPath(); ctx.moveTo(state.ball.x, state.ball.y); ctx.lineTo(state.pointer.x, state.pointer.y); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.fillStyle = "#f49a38"; ctx.beginPath(); ctx.arc(state.ball.x, state.ball.y, 13, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#9a5120"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(state.ball.x, state.ball.y, 13, -.8, 2.3); ctx.moveTo(state.ball.x - 12, state.ball.y); ctx.lineTo(state.ball.x + 12, state.ball.y); ctx.stroke();
    if (state.shots >= 5 && !state.ball.active) {
      ctx.fillStyle = "rgba(8, 16, 31, .78)"; ctx.fillRect(28, 150, W - 56, 92);
      ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.font = "700 22px sans-serif"; ctx.fillText("Nice run!", W / 2, 187);
      ctx.font = "14px sans-serif"; ctx.fillStyle = "#c8d5ea"; ctx.fillText(`${state.score} buckets · Tap restart to play again`, W / 2, 214); ctx.textAlign = "start";
    }
    const statusText = state.shots >= 5 ? `Final score: ${state.score} out of 5.` : `${5 - state.shots} shots left · ${state.score} buckets.`;
    if (status.textContent !== statusText) status.textContent = statusText;
  };
  const resetBall = () => { state.ball = { x: 76, y: 360, vx: 0, vy: 0, active: false }; state.scored = false; };
  const reset = () => { state.score = 0; state.shots = 0; state.dragging = false; state.pointer = null; resetBall(); draw(); };
  const pointerPosition = e => {
    const rect = canvas.getBoundingClientRect();
    return { x: (e.clientX - rect.left) * W / rect.width, y: (e.clientY - rect.top) * H / rect.height };
  };
  const finishShot = () => {
    state.ball.active = false;
    state.shots += 1;
    if (state.shots < 5) resetBall();
    draw();
  };
  const step = () => {
    if (state.ball.active) {
      const previousY = state.ball.y;
      state.ball.vy += .22;
      state.ball.x += state.ball.vx;
      state.ball.y += state.ball.vy;
      const passedRim = previousY < hoop.y && state.ball.y >= hoop.y && state.ball.vy > 0;
      if (passedRim && state.ball.x > hoop.x + 8 && state.ball.x < hoop.x + hoop.width - 8 && !state.scored) {
        state.score += 1; state.scored = true;
        setTimeout(() => { if (state.ball.active) finishShot(); }, 320);
      }
      if (!state.ball.active || state.ball.y > H - 51 || state.ball.x > W + 20 || state.ball.x < -20) finishShot();
    }
    draw();
    const activeConsole = document.querySelector("#talkPanel #gameConsole");
    if (activeConsole && !activeConsole.classList.contains("hidden") && activeConsole.dataset.game === "basketball") window.__gameAnimation = requestAnimationFrame(step);
    else window.__gameAnimation = 0;
  };
  canvas.onpointerdown = e => {
    if (state.shots >= 5 || state.ball.active) return;
    const point = pointerPosition(e);
    if (Math.hypot(point.x - state.ball.x, point.y - state.ball.y) > 42) return;
    canvas.setPointerCapture(e.pointerId);
    state.dragging = true; state.pointer = point;
    draw();
  };
  canvas.onpointermove = e => { if (state.dragging) { state.pointer = pointerPosition(e); draw(); } };
  canvas.onpointerup = e => {
    if (!state.dragging) return;
    const point = pointerPosition(e);
    const dx = Math.max(-125, Math.min(-18, point.x - state.ball.x));
    const dy = Math.max(35, Math.min(150, point.y - state.ball.y));
    state.dragging = false; state.pointer = null;
    const gravity = .22;
    const rise = state.ball.y - hoop.y;
    const verticalSpeed = 9.9 + Math.min(1.5, dy - 35) * .012;
    const timeToRim = (verticalSpeed + Math.sqrt(verticalSpeed * verticalSpeed - 2 * gravity * rise)) / gravity;
    const aimOffset = (point.x - (state.ball.x - 42)) * .03;
    state.ball.vx = (hoop.x + hoop.width / 2 - state.ball.x) / timeToRim + aimOffset;
    state.ball.vy = -verticalSpeed; state.ball.active = true;
    draw();
  };
  canvas.onpointercancel = () => { state.dragging = false; state.pointer = null; draw(); };
  document.querySelector("#gameConsole [data-game-restart]").onclick = reset;
  reset();
  window.__gameAnimation = requestAnimationFrame(step);
}

function setupTalkAssistant() {
  const trigger = document.getElementById("talkTrigger"); if (!trigger || document.getElementById("talkPanel")) return; const panel = document.createElement("div"); panel.id = "talkPanel"; panel.className = "talk-panel hidden"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Let's Talk and Play assistant"); panel.innerHTML = `<div class="talk-header"><div><p class="mono">Let's Talk &amp; Play</p><h3>Developer Assistant</h3></div><div class="talk-actions"><button class="mini-btn" type="button" data-min="1" aria-label="Minimize chat">—</button><button class="mini-btn" type="button" data-close="1" aria-label="Close chat">×</button></div></div><div class="talk-body"><div class="welcome">Hi! I help with project questions, skills, and collaboration.</div><div class="quick-replies"><button type="button" class="quick-btn">Who are you?</button><button type="button" class="quick-btn">What are your skills?</button><button type="button" class="quick-btn">What technologies do you use?</button><button type="button" class="quick-btn">What projects have you developed?</button><button type="button" class="quick-btn">How can I contact you?</button><button type="button" class="quick-btn">Are you available for collaboration?</button><button type="button" class="quick-btn play-btn" data-action="play">Let's Play</button></div><div class="game-launcher hidden" id="gameLauncher"><div class="game-launcher-head"><span class="mono">QUICK PLAY</span><span>Choose a game</span></div><div class="game-launcher-grid"><button type="button" class="game-launch-btn" data-game="flappy"><span aria-hidden="true">✦</span> Flappy Bird</button><button type="button" class="game-launch-btn" data-game="basketball"><span aria-hidden="true">◉</span> Basketball</button></div></div><div class="game-console hidden" id="gameConsole"><div class="game-console-top"><button class="game-back" type="button" aria-label="Back to game selection">←</button><div class="game-console-heading"><span class="mono">MINI ARCADE</span><h4 class="game-console-title"></h4></div><button class="game-restart" type="button" data-game-restart aria-label="Restart game">↻</button></div><div class="game-console-tabs"><button type="button" class="game-tab" data-game="flappy">Flappy</button><button type="button" class="game-tab" data-game="basketball">Basketball</button></div><canvas id="gameCanvas" width="420" height="420" tabindex="0"></canvas><p class="game-console-hint"></p><p class="game-console-status" aria-live="polite"></p><button class="game-action" type="button" data-flap>FLAP <span>SPACE</span></button></div><div class="chat-log" id="chatLog" aria-live="polite"></div></div><form class="talk-input" id="assistantForm"><input id="assistantInput" type="text" placeholder="Ask me something..." aria-label="Type a message" autocomplete="off" /><button type="submit" id="assistantSend">Send</button></form>`; document.body.appendChild(panel);
  const chatLog = document.getElementById("chatLog"); const addMessage = (text, from) => { const row = document.createElement("div"); row.className = "chat-row " + from; row.textContent = text; chatLog.appendChild(row); chatLog.scrollTop = chatLog.scrollHeight; };
  const respond = (text) => {
    const q = text.toLowerCase(); const skillText = SITE.skills.slice(0, 6).join(", ");
    if (q.includes("play") || q.includes("game")) { showGameLauncher(panel); addMessage("Absolutely — pick a game and I’ll launch it here.", "bot"); return; }
    const msg = ((q.includes("who") || q.includes("you")) ? `I’m ${SITE.first} ${SITE.last}, a developer focused on ${SITE.roles.join(" • ")}. I build thoughtful digital experiences and practical software solutions.` : (q.includes("skill") || q.includes("skills")) ? `My core strengths include ${skillText}. I enjoy product thinking, clean systems, research, and collaboration.` : (q.includes("technolog") || q.includes("tech")) ? `I work with modern frontend and web tooling, including HTML, CSS, JavaScript, Git, APIs, responsive design, and product-focused implementation workflows.` : (q.includes("project") || q.includes("developed")) ? `I build portfolio work, prototypes, internal tools, and polished web experiences. You can explore the selected work in the projects section of this portfolio.` : (q.includes("contact") || q.includes("email") || q.includes("reach")) ? `You can reach me at ${SITE.email}. The contact form is also available on the contact page.` : (q.includes("available") || q.includes("collab") || q.includes("collaboration")) ? `Yes — I’m open to collaboration, product ideas, design partnerships, and thoughtful development work. Reach out with a brief summary and timeline.` : `I can help with project questions, skill details, tech stack, and collaboration possibilities. Try one of the quick replies.`);
    addMessage(msg, "bot");
  };
  addMessage("Welcome! I’m here to answer quick questions about the portfolio, my work, and collaboration.", "bot");
  trigger.setAttribute("aria-controls", "talkPanel"); trigger.setAttribute("aria-expanded", "false");
  trigger.addEventListener("click", () => { const opened = panel.classList.contains("hidden"); panel.classList.toggle("hidden", !opened); panel.classList.remove("minimized"); trigger.setAttribute("aria-expanded", String(opened)); if (opened) panel.querySelector("#assistantInput").focus(); else closeGame(); });
  panel.querySelector("[data-close='1']").addEventListener("click", () => { closeGame(); panel.classList.add("hidden"); trigger.setAttribute("aria-expanded", "false"); trigger.focus(); });
  panel.querySelector("[data-min='1']").addEventListener("click", () => {
    const minimizing = !panel.classList.contains("minimized");
    if (minimizing) closeGame();
    panel.classList.toggle("minimized", minimizing);
  });
  panel.querySelectorAll(".quick-btn").forEach(btn => btn.addEventListener("click", () => {
    const q = btn.textContent.trim(); addMessage(q, "user");
    if (btn.classList.contains("play-btn") || /play|game/i.test(q)) { showGameLauncher(panel); addMessage("Pick a quick round to start.", "bot"); return; }
    respond(q);
  }));
  panel.querySelectorAll(".game-launch-btn, .game-tab").forEach(btn => btn.addEventListener("click", () => openGame(btn.dataset.game)));
  panel.querySelector(".game-back").addEventListener("click", () => { closeGame(); panel.querySelector(".talk-body").scrollTop = panel.querySelector(".talk-body").scrollHeight; });
  const form = panel.querySelector("#assistantForm"), input = panel.querySelector("#assistantInput");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const value = input.value.trim(); if (!value) return; addMessage(value, "user");
    if (/play|game/i.test(value)) { showGameLauncher(panel); addMessage("Pick a quick round to start.", "bot"); }
    else { respond(value); }
    input.value = "";
  });
}
