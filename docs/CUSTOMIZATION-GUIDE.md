# Customization Guide

Everything you need to change is marked **`[REPLACE]`**. In VS Code press **Ctrl+Shift+F** (Cmd+Shift+F on Mac) and search `[REPLACE]` to jump through all of them.

The design ("Night Cockpit", Concept A) is documented in **`docs/DESIGN-SYSTEM.md`**, and the approved mockup is **`docs/mockups/concept-a.html`**. Read its checklist (section 6) before you publish.

**Where things live**

| File | What it controls |
|---|---|
| `index.html` | All text, links, images and the order of sections |
| `css/tokens.css` | Every color, font, size, spacing, radius, shadow and animation timing, for both themes, plus the Bootstrap overrides |
| `css/style.css` | How each component looks (navbar, hero, cards, timeline…). Uses only tokens, so you rarely need to edit it |
| `js/main.js` | Theme toggle, navbar scroll effect, fade-ins, project filter, copy-email button, contact form |

---

## 1. Your text (`index.html`)

| What | Where in `index.html` |
|---|---|
| Browser tab title, Google description | `<title>` and `<meta name="description">` in `<head>` |
| Social share card | `og:title`, `og:description`, `og:url`, `og:image` in `<head>` |
| Name in navbar | `.brand-name` inside `<a class="navbar-brand">` |
| "Available" status | `.annunciator` (desktop) and the "Available · Contact me" button in the mobile menu. Delete both if you're not job-hunting |
| Hero: location, name, statement, role line | `<section id="home">` |
| Hero readouts (Years / Sims / GROL) | `<dl class="readouts">` — values are marked with `<!-- [REPLACE] -->` comments |
| Bio and flight-log facts | `<section id="about">` — the `.flight-log` card holds the key/value rows |
| Skills | `<section id="skills">` — each `<li>` in a `.badge-list` is one badge; `.skill-usage` is the line at the bottom of each card. Its meter has 3 bars: `<i class="on"></i>` is filled, `<i></i>` is empty; update the `aria-label` ("In projects: 2 of 3") to match |
| Projects | `<section id="projects">` (see section 5 below) |
| Jobs | `<section id="experience">` — each `<li class="route-item">` is one job, newest first |
| Degrees and certifications | `<section id="education">` — each `<li>` in a `.checklist` |
| Email, response time, social links | `<section id="contact">` — the email appears in **four** places: the link text, its `href`, `data-email` on the copy button, and `data-fallback-email` on the form |
| Footer name and "Source on GitHub" link | `<footer>` |

**Section labels.** Each section starts with a waypoint label, e.g. `<p class="waypoint-label label-mono">03 / Projects</p>`. If you remove or reorder sections, renumber them.

**Add a skill group:** copy one `<div class="col-12 col-md-6 col-xl-3 reveal">…</div>` block in Skills and change its `SYS 0X` label. With 5 groups, change `col-xl-3` to `col-xl-4` on all of them.

**Add a job:** copy a whole `<li class="route-item reveal">…</li>` block. Only the current job keeps the `is-current` class (filled amber diamond).

**Mark a certification as done:** change `<li class="pending">` to `<li class="done">`, swap `bi-hourglass-split` for `bi-check2-square`, and delete the `In progress` chip.

---

## 2. Colors (`css/tokens.css`)

Light-mode colors are in the first block (`:root`), dark-mode colors in the `[data-bs-theme="dark"]` block. Each color has a job:

| Token | Used for |
|---|---|
| `--c-bg`, `--c-surface`, `--c-surface-2` | Page background, cards/navbar, alternate sections and image mats |
| `--c-border` | Decorative hairlines only |
| `--c-border-strong` | Outlines people must see: inputs, toggle, filter chips (needs 3:1 contrast) |
| `--c-text`, `--c-muted` | Main and secondary text |
| `--c-primary`, `--c-primary-hover` | Amber fills: main buttons, active filter, markers |
| `--c-primary-text` | Amber used **as text** or focus ring (darker in light mode so it stays readable) |
| `--c-on-primary` | Text on amber buttons |
| `--c-secondary`, `--c-on-secondary` | Panel-navy secondary buttons |
| `--c-accent` | Cyan: links in text, timeline dates |
| `--c-success`, `--c-error` (+ `-bg`) | Form results, checklist ticks, availability dot |

**Example — switch the accent from amber to a sky blue:**

```css
/* light block */
--c-primary: #38BDF8; --c-primary-hover: #0EA5E9; --c-primary-text: #075985; --c-on-primary: #0B1320;
/* dark block */
--c-primary: #38BDF8; --c-primary-hover: #7DD3FC; --c-primary-text: #7DD3FC; --c-on-primary: #0B1320;
```

Then update `--bs-primary` and `--bs-primary-rgb` in the Bootstrap overrides block, and the two `<meta name="theme-color">` tags in `index.html` if you change the backgrounds.

**Always check contrast** at https://webaim.org/resources/contrastchecker/ — text needs at least 4.5:1, outlines 3:1. The current values are all verified in `docs/DESIGN-SYSTEM.md`.

---

## 3. Fonts

1. Pick fonts at https://fonts.google.com and copy the `<link>` they give you.
2. Replace the Google Fonts `<link href="https://fonts.googleapis.com/css2?...">` in `index.html`. Request only the weights you use (currently Inter 400/500/600, Space Grotesk 500/700, JetBrains Mono 500).
3. In `css/tokens.css`, update `--font-heading`, `--font-body` and `--font-mono`.

Sizes are tokens too (`--fs-h1`, `--fs-body`, …). They use `clamp()` so they shrink smoothly on phones.

---

## 4. Images

| File | Size | Notes |
|---|---|---|
| `assets/images/profile.svg` | 4:5 portrait, e.g. 800×1000 | Save your photo as `profile.webp` (or `.jpg`) and update the hero `<img src>`. Keep `width="480" height="600"` (the ratio matters, not the numbers) |
| `assets/images/project-1.svg` … `project-5.svg` | 1200×675 (16:9) | Real screenshots of each project; update each `src` and `alt`. On large screens the featured image fills a taller left panel and is cropped at the sides, so keep important content centered |
| `assets/images/og-image.png` | 1200×630 | Preview card when your link is shared |
| `favicon.ico`, `assets/images/favicon.svg` | 32×32 / any | Optional: generate one at https://realfavicongenerator.net |

- Compress at https://squoosh.app (WebP, quality ~75), under ~200 KB each.
- Real UI only; no fake laptop mockups; no employer-confidential screens.
- Write `alt` text that says what the screenshot shows.
- Keep `loading="lazy"` on project images, but **not** on the hero portrait.

---

## 5. Add a new project card

1. In `index.html`, find the last project block (`<!-- Project 5 -->`).
2. Copy the whole block of the last project, from `<div class="col-12 col-md-6 project-item reveal" …>` to its closing `</div>`, paste it after, and edit:

```html
<!-- Project 6 -->
<div class="col-12 col-md-6 project-item reveal" data-category="web data">   <!-- 1. categories, space-separated -->
  <article class="card project-card h-100">
    <div class="project-media">
      <img src="assets/images/project-6.webp" loading="lazy" width="1200" height="675"
           alt="2. What the screenshot shows">
    </div>
    <div class="card-body d-flex flex-column">
      <p class="fig label-mono">Fig. 06 · Web</p>                         <!-- 3. figure number + category -->
      <h3 class="h5 card-title">4. Project name</h3>
      <p class="card-text">5. One-line summary of what it does.</p>
      <dl class="spec">
        <div><dt>Stack</dt><dd>6. Tech · Tech · Tech</dd></div>
        <div><dt>Role</dt><dd>7. Your role</dd></div>
        <div class="result"><dt>Result</dt><dd>8. A measured outcome</dd></div>
      </dl>
      <div class="card-actions">
        <a href="https://github.com/USERNAME/repo" class="btn btn-outline-primary" target="_blank" rel="noopener"
           aria-label="Project name source code on GitHub (opens in new tab)"><i class="bi bi-github" aria-hidden="true"></i> GitHub</a>
        <!-- 9. Delete this Live button if there's no demo -->
        <a href="https://demo-link" class="btn btn-primary" target="_blank" rel="noopener"
           aria-label="Project name live demo (opens in new tab)"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> Live</a>
      </div>
    </div>
  </article>
</div>
```

**Grid balance:** the featured card spans the full width; the others are 2-up (`col-md-6`). Keep an even number of non-featured cards (currently four) so none sits alone, or give a lone last card `col-12`.

**Change the featured project:** move the `project-card--featured` class and the `Featured` chip to another card, give its column `col-12`, and give the old featured card's column `col-12 col-md-6`. Put the featured card first in the grid.

**Categories:** `data-category` words must match the filter buttons' `data-filter` (`simulation`, `web`, `data`). New category: add a button in `.filter-bar`, e.g. `<button type="button" class="btn-filter" data-filter="hardware" aria-pressed="false">Hardware</button>`. No JavaScript changes needed.

Add a matching write-up to `docs/PROJECT-CASE-STUDIES.md` and, if you like, a "Case study" button that links to it (copy the one on the featured card).

---

## 6. Resume download

Export `docs/RESUME.md` to PDF (instructions are at the top of that file) and save it as `assets/resume/Bereket-Gebremedhin-Resume.pdf`, replacing the placeholder. If you rename it, update the hero button's `href`.

---

## 7. Contact form (Formspree)

1. Sign up free at https://formspree.io, click **New Form**, enter the email that should receive messages.
2. Copy the form ID (the part after `/f/`).
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action`.
4. Replace `[REPLACE]@email.com` in `data-fallback-email` (and the other three email spots listed in section 1).
5. Deploy, then send yourself a test message; Formspree asks you to confirm the first one.

Until step 3 is done, the form opens the visitor's email app instead.

---

## 8. Remove a section

Delete the whole `<section id="…">…</section>` block **and** its `<li class="nav-item">` in the navbar, then renumber the waypoint labels.

## 9. Default theme

The site follows the visitor's OS setting until they click the toggle. To force dark by default, in the small `<script>` in `<head>` change
`saved || (prefersLight ? 'light' : 'dark')` → `saved || 'dark'`.

## 10. Animations

Durations and easing are tokens (`--dur-*`, `--ease-*`) in `tokens.css`. Fade-ins, the pulse on the availability dot and card lifts all switch off automatically for visitors who turn on "Reduce motion" in their OS.
