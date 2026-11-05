/**
 * Portfolio contact form -> Google Sheets (Google Apps Script web app)
 * ---------------------------------------------------------------------
 * 1. Sign in to Google, open https://script.google.com and create a New project.
 * 2. Paste this whole file into Code.gs and save.
 * 3. Select the function  setup  and press Run. Allow the permissions.
 *    It creates the spreadsheet "Portfolio Contact Messages" (link shown in View > Logs / Execution log).
 * 4. Deploy > New deployment > type: Web app
 *      Execute as: Me          Who has access: Anyone
 *    Copy the Web app URL (ends with /exec) and paste it into js/data.js  ->  API: "..."
 * 5. After editing this code later: Deploy > Manage deployments > Edit > Version: New version.
 *
 * Security: no secret or key is needed in the website. Submissions are validated here on the
 * server, spam-protected (honeypot, rate limit, duplicate check) and written to a PRIVATE sheet.
 * The public URL can only add messages - it can never read them.
 */
const ADMIN_EMAIL = 'bishal94110@gmail.com';        // receives a notification e-mail for each new message
const SHEET_NAME  = 'Contact Messages';
const SHEET_TITLE = 'Portfolio Contact Messages';
const TIMEZONE    = 'Asia/Kathmandu';
const HEADERS = ['Submission ID', 'Submitted (Nepal time)', 'Name', 'Email', 'Subject', 'Message', 'Status'];
const LIMITS = {name:[2, 80], email:[5, 120], subject:[3, 120], message:[10, 2000]};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json_(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function sheet_(){
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID'), ss;
  if (id) { ss = SpreadsheetApp.openById(id); }
  else {
    ss = SpreadsheetApp.create(SHEET_TITLE);
    props.setProperty('SHEET_ID', ss.getId());
    const sh = ss.getSheets()[0]; sh.setName(SHEET_NAME);
    sh.appendRow(HEADERS); sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#e8f0fe');
    sh.setColumnWidths(1, 2, 170); sh.setColumnWidth(6, 420);
  }
  return ss.getSheetByName(SHEET_NAME);
}

/** Run once from the editor: creates the spreadsheet and authorises the script. */
function setup(){ Logger.log('Spreadsheet: ' + sheet_().getParent().getUrl()); }

/** Neutralise spreadsheet formulas (=, +, -, @) and strip control characters. */
function safe_(v){
  v = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim();
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}
function hash_(s){ return Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s)).slice(0, 30); }

function doGet(){ return json_({ok: true, service: 'portfolio-contact'}); }   // health check only - never returns data

function doPost(e){
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.website) return json_({ok: false, error: 'Rejected.'});                       // honeypot field
    const c = {};
    for (const k in LIMITS) {
      const v = String(d[k] == null ? '' : d[k]).trim();
      if (!v) return json_({ok: false, error: 'Please fill in the ' + k + ' field.'});
      if (v.length < LIMITS[k][0]) return json_({ok: false, error: 'The ' + k + ' is too short.'});
      if (v.length > LIMITS[k][1]) return json_({ok: false, error: 'The ' + k + ' is too long.'});
      c[k] = v;
    }
    if (!EMAIL_RE.test(c.email)) return json_({ok: false, error: 'Please enter a valid email address.'});
    const token = String(d.token || '').slice(0, 80);

    const lock = LockService.getScriptLock(); lock.waitLock(20000);
    try {
      const cache = CacheService.getScriptCache();
      if (token && cache.get('t' + token)) return json_({ok: true, id: cache.get('t' + token), duplicate: true});   // same click sent twice
      const dk = 'd' + hash_(JSON.stringify(c));
      if (cache.get(dk)) return json_({ok: false, error: 'This exact message was already received.'});
      const rk = 'r' + Math.floor(Date.now() / 60000), n = +(cache.get(rk) || 0);
      if (n >= 20) return json_({ok: false, error: 'Too many messages right now. Please try again in a minute.'});
      const ek = 'e' + hash_(c.email.toLowerCase()), en = +(cache.get(ek) || 0);
      if (en >= 5) return json_({ok: false, error: 'You have sent several messages recently. Please try again later.'});

      const now = new Date();
      const id = 'MSG-' + Utilities.formatDate(now, 'UTC', 'yyyyMMdd') + '-' + Utilities.getUuid().slice(0, 5).toUpperCase();
      sheet_().appendRow([id, Utilities.formatDate(now, TIMEZONE, 'yyyy-MM-dd HH:mm:ss'),
        safe_(c.name), safe_(c.email), safe_(c.subject), safe_(c.message), 'New']);
      cache.put(rk, String(n + 1), 120); cache.put(ek, String(en + 1), 3600); cache.put(dk, '1', 300);
      if (token) cache.put('t' + token, id, 21600);
      try {
        MailApp.sendEmail({to: ADMIN_EMAIL, replyTo: c.email, subject: '[Portfolio] ' + c.subject,
          body: 'New message (' + id + ')\n\nName: ' + c.name + '\nEmail: ' + c.email + '\n\n' + c.message});
      } catch (mailErr) { /* e-mail is optional; the row is already saved */ }
      return json_({ok: true, id: id});
    } finally { lock.releaseLock(); }
  } catch (err) {
    return json_({ok: false, error: 'Invalid request.'});
  }
}
