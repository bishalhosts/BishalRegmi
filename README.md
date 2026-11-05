# Developer Portfolio (GitHub Pages + Google Sheets contact form)
Plain HTML + CSS + vanilla JavaScript. No frameworks, no build step. Free hosting on GitHub Pages; Google Apps Script + Google Sheets store contact messages.

## What is included
- **Developer dark theme** (light mode available from the header button): navy background, subtle grid, soft glows and a few drifting code symbols.
- **Profile flip card**: click / tap / press Enter on the **King of Hearts** card to flip to the profile portrait (3D flip, hover tilt and shine). Both images are replaceable in `js/data.js`.
- **Animated glowing ring** (rotating light + soft pulse) around the profile card.
- **Single-line Nepali calendar** under the menu on every page: `आज: १८ कार्तिक २०८३, बुधबार | 04 November 2026`. Uses a built-in Bikram Sambat table (BS 2000-2100), so it needs no internet or API and changes by itself at midnight (Nepal time).
- **Live info**: Nepal clock (Asia/Kathmandu), greeting by time of day, years of experience, auto copyright year, terminal typing line.
- **Floating Let's Talk & Play assistant** with portfolio-focused quick replies and a local keyword-based chat helper.
- **Let's Play mini-arcade inside the assistant**: Flappy Bird supports tap / Space / flap controls; Basketball uses a drag-and-release shot challenge. Both games include restart and back controls and are built with HTML5 canvas and vanilla JavaScript.
- **Contact form -> Google Sheets** with validation, loading spinner, toast notifications, double-click / duplicate protection and spam protection.

## 1. Edit your content
Open `js/data.js` and replace every `[bracketed]` placeholder. Add your profile portrait to `assets/images/` and set `photo:`. To replace the King artwork, add your image to `assets/images/` and set `kingCard:` to its relative path, for example `kingCard: "assets/images/my-king-card.png"`. Leave `kingCard: ""` to use the built-in King of Hearts artwork. `careerStart` drives the "years of experience" chip. Colours are variables at the top of `css/style.css`.

**Recommended image sizes for the flip card**
- Profile portrait (`photo`): **900 x 1200 px** (3:4) recommended.
- King card artwork (`kingCard`): **900 x 1260 px** (5:7) recommended for the card design shown. The card displays the complete image without cropping and softly blurs the sides to fill the 3:4 card frame.

PNG, JPG, and WebP are suitable. Other image sizes also work; the complete image stays visible, with a blurred extension filling any leftover frame area.

## 2. Connect the contact form to Google Sheets (about 10 minutes)
1. Sign in to Google (bishal94110@gmail.com is already set as the notification e-mail in the script) and open https://script.google.com -> **New project**.
2. Delete the sample code and paste the whole of `google-apps-script/Code.gs`. Save.
3. Choose the function **setup** in the toolbar and press **Run**. Allow the permissions (Google may show "unverified app" - choose Advanced -> continue, it is your own script). Open **Execution log** to see the link of the new spreadsheet **Portfolio Contact Messages**.
4. **Deploy -> New deployment -> select type: Web app.** Set *Execute as*: **Me** and *Who has access*: **Anyone**. Click Deploy and copy the **Web app URL** (it ends with `/exec`).
5. Paste the URL into `js/data.js`: `API: "https://script.google.com/macros/s/.../exec"`.
6. Example config template: `google-apps-script/config.example.js` shows where to paste the deployed URL before editing `js/data.js`.
7. Upload the site to GitHub and send a test message from the Contact page. A new row appears in the sheet (ID, Nepal date and time, name, email, subject, message, status) and you get an e-mail.
8. Later changes to `Code.gs`: **Deploy -> Manage deployments -> Edit -> Version: New version**.

**Security:** no key or password exists anywhere in the website files. The public Web app URL can only add messages; it can never read them. The server validates every field, blocks formula injection, rejects spam (hidden field, rate limit, duplicate check) and keeps the sheet private to your Google account. Until `API` is set, the form shows a clear "not connected" error instead of pretending to send.

## 3. Publish on GitHub Pages
Create a repository named `yourusername.github.io`, upload all files of this folder (including `.nojekyll`), then Settings -> Pages -> Deploy from branch `main` / root. Put the final address in `siteUrl` in `js/data.js`.

## Notes
- The Nepali calendar table covers BS 2000-2100 (to about 2043 AD) and was checked against a reference library on thousands of dates. Official future calendars are published yearly; the table is correct for the published data.
- Browser requirement: any modern browser (Chrome, Edge, Safari, Firefox).
