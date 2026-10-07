# Portfolio Visual Design Plan

> **Decision (Oct 3, 2026): Concept A, Night Cockpit, is the chosen design.** The approved mockup is `docs/mockups/concept-a.html`; open it in a browser to see the target look in both themes.
>
> Design reference for this site. Every token below is implemented in `css/tokens.css`; components are in `css/style.css`. Change a value in `tokens.css` and the whole site follows.

The recommended look is **Night Cockpit**: a dark instrument-panel palette with amber "annunciator" accents, set in Space Grotesk and Inter, with real flight-instrument motifs instead of decoration. It reads as precise and technical to aviation hiring managers, and stays clean enough for software recruiters.

## Brief and assumptions

Blank fields in the request were filled with these working assumptions. Change any of them and the plan adjusts.

| Field | Working assumption |
| --- | --- |
| Name and title | Bereket Gebremedhin, Aircraft Simulator Engineer \| Full-Stack Developer |
| Primary audience | Hiring managers and recruiters for flight simulator technician and engineer roles at airlines and training centers |
| Secondary audience | Software and tooling teams in aviation; occasional freelance clients |
| Impression | Precise, technical, trustworthy, calm under pressure, modern |
| Likes | Glass-cockpit displays, engineering drawings, quiet dark UIs with one strong accent |
| Dislikes | Clutter, neon gradients, default Bootstrap blue, stock "centered name + three icons" heroes |
| Constraint | Plain HTML, CSS, Bootstrap 5.3 and a little vanilla JS; deployable to GitHub Pages |

**What the audience does on the site.** A recruiter decides in under 10 seconds whether you fit, then hunts for three things: current role, proof of hands-on troubleshooting, and a resume. A technical manager then scans one or two projects for depth. Every layout decision below serves that order: role and resume first, proof second, depth third.

## Implementation notes (how the built site differs from the plan)

- **Projects:** five cards. The featured project spans the full width with its screenshot on the left and details on the right on large screens (as in the approved mockup); the other four form a 2 × 2 grid (`col-md-6`). The portfolio itself is linked from the footer ("Source on GitHub") instead of taking a card.
- **Skills:** each card ends with a usage line and a 3-bar meter (filled bars = how often the skill is used), taken from the mockup.
- **Hero:** the portrait bezel carries a small `CAM 01 · DFW` tag; readouts show sample values marked with `[REPLACE]` comments.
- **Every project card** shows STACK, ROLE and RESULT, so cards line up in height.
- **Mobile availability:** the navbar annunciator becomes a full-width "Available · Contact me" button inside the mobile menu.
- **Theme attribute:** the site uses Bootstrap's `data-bs-theme`; `tokens.css` also accepts `data-theme`.

## 1. Design direction

Three concepts were considered. Night Cockpit wins because it signals your domain in the first second without looking themed or gimmicky.

|  | A. Night Cockpit (recommended) | B. Engineering Blueprint | C. Flight Deck Minimal |
| --- | --- | --- | --- |
| Mood | Calm, focused, mission-ready; a dimmed flight deck at night | Methodical, drafted, "shows the work" | Quiet, editorial, Swiss-style restraint |
| Palette | Panel navy #0B1320, surface #131E30, annunciator amber #F5A524, instrument cyan #5CC8E0 | Cobalt #10264A, drafting white #F4F7FB, line blue #7FA7D9, red-pencil #D64545 | Paper #FAFAF7, graphite #1C1F24, signal orange #D9480F, one hairline gray #D9DBDF |
| Typography | Space Grotesk headings (engineered, slightly technical), Inter body, JetBrains Mono for data labels | IBM Plex Sans + IBM Plex Mono (engineering heritage, drawing-title feel) | Inter Tight headings, Inter body, very large display sizes |
| Signature motif | Instrument readouts: status "annunciator" chips, a heading-tape section divider, a 48px radar grid | Title blocks, dimension lines, grid paper, revision tags on cards | Huge numerals, generous white space, a single orange rule |
| Fits the audience because | Aviation managers recognize the visual language instantly; dark UI mirrors sim-bay and cockpit conditions; amber reads as "attention, verified" | Speaks strongly to engineers; implies rigor and documentation | Universally professional; nothing for any reviewer to dislike |
| Risks | Can tip into "video game" if overused: motifs stay small and functional | Blue-on-blue drifts toward generic tech; heavy line art hurts readability on phones | Says nothing about aviation; easy to look like a template |

**Recommendation: A, Night Cockpit.** It is the only concept that tells an aviation hiring manager "this person lives in simulators" before they read a word, while its restraint (one accent color, motifs used as real UI, not wallpaper) keeps it credible for software roles. It also matches the site already built, so the design work refines rather than restarts. Two ideas are borrowed from B: the faint grid in the hero and monospace "spec" labels on project cards.

**Rules that keep it from looking themed:**

- One accent (amber) does all the calling to action. Cyan is reserved for data and links, never buttons.
- Every motif carries information: the annunciator chip states your availability, the heading tape marks the section number, the readouts are real numbers.
- No airplane clip art, no cockpit photos as backgrounds, no glowing gradients.

## 2. Design system

Every text pair below passes WCAG AA (4.5:1 for body text); most pass AAA (7:1). Ratios were computed with the WCAG relative-luminance formula, not estimated.

### Color tokens

| Token | Role | Dark mode | Light mode |
| --- | --- | --- | --- |
| `--c-bg` | Page background | #0B1320 | #F6F8FB |
| `--c-surface` | Cards, navbar, inputs | #131E30 | #FFFFFF |
| `--c-surface-2` | Alternate sections, image frames | #1A2840 | #EEF2F7 |
| `--c-border` | Hairlines, dividers (decorative) | #2A3B57 | #D3DBE6 |
| `--c-border-strong` | Input and toggle outlines (UI, needs 3:1) | #6B7C96 | #7A869A |
| `--c-text` | Headings, body | #E6EDF6 | #13213A |
| `--c-muted` | Secondary text, captions | #A3B1C6 | #4A5870 |
| `--c-primary` | Amber: buttons, active states, key marks | #F5A524 | #F5A524 |
| `--c-primary-hover` | Button hover fill | #FFB941 | #E0901A |
| `--c-primary-text` | Amber used as text or focus ring | #F5B748 | #8A4F00 |
| `--c-on-primary` | Text on amber | #111111 | #111111 |
| `--c-secondary` | Panel navy: secondary buttons, chips | #24364F | #1A2840 |
| `--c-on-secondary` | Text on secondary | #E6EDF6 | #FFFFFF |
| `--c-accent` | Instrument cyan: links in prose, data, timeline dates | #5CC8E0 | #0E6C86 |
| `--c-success` | Form success, "available" annunciator | #4ADE80 | #157F3D |
| `--c-error` | Form errors | #F87171 | #B42318 |

### Contrast check (text on background)

| Pair | Dark: on bg / surface / surface-2 | Light: on bg / surface / surface-2 | Result |
| --- | --- | --- | --- |
| Text | 15.8 / 14.2 / 12.5 | 15.1 / 16.1 / 14.3 | AAA |
| Muted | 8.6 / 7.7 / 6.8 | 6.8 / 7.2 / 6.4 | AA, mostly AAA |
| Primary-text | 10.4 / 9.4 / 8.3 | 6.2 / 6.6 / 5.8 | AA |
| Accent | 9.6 / 8.6 / 7.6 | 5.6 / 6.0 / 5.3 | AA |
| Success | 10.7 / 9.6 / 8.5 | 4.8 / 5.1 / 4.5 | AA |
| Error | 6.7 / 6.0 / 5.3 | 6.2 / 6.6 / 5.9 | AA |
| On-primary on primary | 9.3 | 9.3 | AAA |
| On-secondary on secondary | 10.4 | 14.8 | AAA |
| Border-strong vs surface (UI, 3:1 rule) | 3.9 | 3.7 | Pass |

**Three traps the table exposes, and their fixes:**

- Amber is too light to be text in light mode (about 2:1). Light mode uses `--c-primary-text` #8A4F00 for any amber words, links and focus rings; the amber fill stays for buttons because their black label carries 9.3:1.
- `--c-border` (about 1.5:1) is decorative only. Anything a user must find, such as an input edge or the theme toggle, uses `--c-border-strong`.
- Never put `--c-muted` on `--c-secondary` in light mode (2.1:1).

### Typography

Fonts (Google Fonts, `display=swap`): **Space Grotesk** 500, 700 for headings; **Inter** 400, 500, 600 for body; **JetBrains Mono** 500 for small data labels only. Three families sounds like many, but the mono is one weight used under 14px, and it carries the "instrument readout" feel cheaply.

| Style | Font / weight | Size (rem) desktop | Size (rem) mobile | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display (hero name) | Space Grotesk 700 | 4.0 | 2.5 | 1.05 | -0.02em |
| h1 | Space Grotesk 700 | 3.0 | 2.25 | 1.1 | -0.02em |
| h2 (section titles) | Space Grotesk 700 | 2.25 | 1.75 | 1.15 | -0.01em |
| h3 (card titles) | Space Grotesk 500 | 1.5 | 1.25 | 1.25 | 0 |
| h4 | Space Grotesk 500 | 1.25 | 1.125 | 1.3 | 0 |
| h5 | Inter 600 | 1.125 | 1.0625 | 1.4 | 0 |
| h6 | Inter 600 | 1.0 | 1.0 | 1.4 | 0 |
| Lead | Inter 400 | 1.25 | 1.125 | 1.6 | 0 |
| Body | Inter 400 | 1.0 | 1.0 | 1.65 | 0 |
| Small | Inter 500 | 0.875 | 0.875 | 1.5 | 0 |
| Label (mono) | JetBrains Mono 500, uppercase | 0.75 | 0.75 | 1.4 | 0.12em |

Use `clamp()` between the two columns so sizes scale smoothly. Keep body lines at 60 to 75 characters (`max-width: 68ch`).

### Spacing

An 8px rhythm with a 4px half-step. Bootstrap's built-in spacers cover 4 to 48px; 32, 64 and 96px are added as custom classes because the CDN build can't be re-compiled.

| Token | px | rem | Bootstrap utility | Use |
| --- | --- | --- | --- | --- |
| `--space-1` | 4 | 0.25 | `*-1` | Icon to text, tag padding |
| `--space-2` | 8 | 0.5 | `*-2` | Badge gaps, button icon gap |
| `--space-3` | 16 | 1 | `*-3` | Card inner gaps, form rows |
| `--space-4` | 24 | 1.5 | `*-4`, `g-4` | Card padding, grid gutters |
| `--space-5` | 32 | 2 | custom `.mb-32`, `.gap-32` | Title to content |
| `--space-6` | 48 | 3 | `*-5` | Between section sub-blocks |
| `--space-7` | 64 | 4 | custom `.py-64` | Section padding, mobile |
| `--space-8` | 96 | 6 | custom `.section` | Section padding, desktop |

### Shape, depth and borders

| Token | Value | Use |
| --- | --- | --- |
| `--radius-xs` | 4px | Tech tags, mono labels |
| `--radius-sm` | 8px | Buttons, inputs |
| `--radius-md` | 14px | Cards, image frames, timeline cards |
| `--radius-pill` | 999px | Skill badges, filter chips, theme toggle |
| `--shadow-sm` | Dark: 0 1px 2px rgba(0,0,0,.4). Light: 0 1px 2px rgba(19,33,58,.06) | Inputs, navbar on scroll |
| `--shadow-md` | Dark: 0 12px 32px rgba(0,0,0,.35). Light: 0 12px 32px rgba(19,33,58,.08) | Cards on hover only |
| Border | 1px solid `--c-border`; 2px for outline buttons; 4px left amber stripe on "readout" blocks |  |

Cards are flat at rest (border only) and gain the shadow on hover. That keeps a dark page from looking muddy with stacked shadows.

### Iconography (Bootstrap Icons 1.11)

- Outline icons by default; the `-fill` variant only for an active or selected state.
- Sizes: 1em inline with text; 20px in buttons; 24px for navbar, social and toggle; 32px for skill-group headers. Never larger: icons support labels, they don't replace them.
- Color: `--c-muted` at rest, `--c-primary-text` on hover or for category headers.
- Every decorative icon gets `aria-hidden="true"`; icon-only buttons get an `aria-label`.
- Core set: `bi-airplane-engines` (brand), `bi-speedometer2` (skills: simulation), `bi-cpu`, `bi-code-slash`, `bi-people`, `bi-github`, `bi-box-arrow-up-right`, `bi-linkedin`, `bi-envelope`, `bi-sun` / `bi-moon-stars`.

### Imagery

- **Profile photo:** natural color, plain or out-of-focus background, cropped at the shoulders, 4:5 portrait. It sits in a rounded-rectangle "display bezel" (14px radius, 1px border, small amber corner ticks), not the usual circle.
- **Project screenshots:** real UI only, 16:9, never inside fake laptop mockups. Each sits in a frame: `--c-surface-2` mat with 8px padding and a mono caption strip such as `FIG. 01 · SIM TELEMETRY`.
- **No employer-confidential imagery.** Sim-bay photos only with permission; otherwise use your own screenshots built on sample data.
- **Illustrations:** line-only inline SVG using the color tokens (heading tape, grid, instrument arcs), so they switch with the theme.
- **Formats:** WebP at quality 75, under 200KB each; `loading="lazy"` on everything below the hero, `width` and `height` always set.

### Motion

| Element | Animation | Duration | Easing |
| --- | --- | --- | --- |
| Section content | Fade in + rise 12px, once, staggered 60ms (max 4 items) | 400ms | cubic-bezier(.2,.7,.2,1) |
| Project card hover | Rise 2px, border to amber, shadow-md | 180ms | ease-out |
| Buttons | Fill and border color change | 150ms | ease |
| Navbar on scroll | Height 72 to 60px, background solidifies | 200ms | ease |
| Theme toggle | Icon rotates 90° and cross-fades | 250ms | ease |
| Availability annunciator | Dot pulses 3 times on load, then stays still | 1.6s each | ease-in-out |

Reduced motion (`prefers-reduced-motion: reduce`): content appears instantly, no transforms, no pulse, `scroll-behavior: auto`. Color changes stay because they carry state.

## 3. Layout and wireframes

The page reads like a flight plan: each section gets a mono "waypoint" label (`01 / ABOUT`) above its title, and the layout deliberately breaks the even three-column rhythm in the hero, projects and experience so it never looks like a template. Container: Bootstrap `.container` (max 1320px); content text capped at 68ch.

### Navbar

```
DESKTOP (≥992px)                                                    height 72 → 60 on scroll
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ✈ YOUR NAME  SIM ENG     About Skills Projects Experience Contact  [● AVAILABLE] [☀] │
└════════════════ amber scroll-progress line grows left → right ═══════════════════════┘

MOBILE (<992px)
┌────────────────────────────────────┐
│ ✈ YOUR NAME            [☀] [≡]     │
├────────────────────────────────────┤  open:
│ About                              │  full-width panel, 48px rows
│ Skills  ...                        │
│ [● AVAILABLE · Contact me]         │  annunciator becomes a full button
└────────────────────────────────────┘
```

- Grid: `navbar-expand-lg`; brand `flex-grow-1` on mobile; links `ms-auto`; annunciator and toggle `order-lg-last`.
- Hierarchy: 1) your name, 2) availability chip, 3) links.
- Hook: the **availability annunciator** (green dot + mono `AVAILABLE`, links to Contact) and a 2px amber **scroll-progress line** under the bar, like an altitude tape filling.

### Hero

```
DESKTOP
┌───────────────────────────────────────────┬─────────────────────────────────┐
│ N 32.78° W 96.80° · DALLAS, TX  (mono)    │  ┌───────────────────────────┐  │
│                                           │  │                           │  │
│ Your Name                     (display)   │  │   portrait, 4:5, in a     │  │
│ I keep full-flight simulators             │  │   "display bezel"         │  │
│ training-ready, and build the             │  │  ⌐                    ¬   │  │
│ software that helps.            (lead)    │  └───────────────────────────┘  │
│                                           │  ┌───────┬───────┬───────────┐  │
│ [ View projects ]  [ Download resume ↓ ]  │  │ YRS   │ SIMS  │ GROL      │  │
│                                           │  │ 03+   │ 06    │ IN PROG   │  │
│ Aircraft Simulator Engineer @ CAE         │  └───────┴───────┴───────────┘  │
└───────────────────────────────────────────┴─────────────────────────────────┘
      faint 48px grid behind, fading out toward the bottom-left

MOBILE
┌──────────────────────────┐
│ N 32.78° W 96.80° · DFW  │
│ Your Name                │
│ I keep full-flight ...   │
│ [ View projects      ]   │  buttons full width, stacked
│ [ Download resume ↓  ]   │
│ ┌────────────────────┐   │
│ │ portrait 4:5       │   │  max 280px wide
│ └────────────────────┘   │
│ YRS 03+ │ SIMS 06 │ GROL │  readout strip, 3 columns
└──────────────────────────┘
```

- Grid: `row align-items-center g-4 g-lg-5`; text `col-lg-7`, visual `col-lg-5`; both `col-12` on mobile. Text is left-aligned on every screen size.
- Hierarchy: 1) name, 2) the one-line value statement (what you do, in plain words), 3) the two buttons, 4) photo and readouts.
- Hook: the **coordinates label** and the **readout strip** (three real numbers in mono). Recruiters get your location and seniority before reading a sentence.
- Min height `min(88vh, 760px)` so the next section peeks above the fold on laptops.

### About

```
DESKTOP
01 / ABOUT
Briefing
┌─────────────────────────────────────┬──────────────────────────────┐
│ 2–3 short paragraphs of bio (68ch)  │ ┃ FLIGHT LOG (mono label)     │
│                                     │ ┃ Current   Simulator Eng, CAE│
│ "What I'm good at" — 3 bullets with │ ┃ Focus     Motion · Visuals  │
│  amber check marks                  │ ┃ Base      Dallas, TX        │
│                                     │ ┃ Studying  FCC GROL 1 & 3    │
└─────────────────────────────────────┴──────────────────────────────┘

MOBILE: bio first, flight-log card below, full width.
```

- Grid: `col-lg-7` bio, `col-lg-5` card (`offset` none, `g-4 g-lg-5`).
- Hierarchy: 1) first sentence of bio (bold, `fs-5`), 2) flight-log facts, 3) remaining paragraphs.
- Hook: the **flight-log card**: a key/value readout with a 4px amber left stripe, so the facts a recruiter scans for sit in one block.

### Skills

```
DESKTOP
02 / SKILLS
Systems I work on
┌ SYS 01 ─────────────┐┌ SYS 02 ─────────────┐┌ SYS 03 ─────────────┐┌ SYS 04 ────────────┐
│ ◎ Simulation &      ││ ⌁ Electronics &     ││ </> Software        ││ ☺ Professional     │
│   avionics          ││   systems           ││                     ││                    │
│ (Motion) (Visuals)  ││ (Schematics) (DMM)  ││ (JavaScript)(Python)││ (Root cause) (Docs)│
│ (Avionics) (Host)   ││ (TCP/IP) (Linux)    ││ (SQL) (Git) (Node)  ││ (Handover)         │
│ DAILY ▸ ●●●          ││ DAILY ▸ ●●●         ││ PROJECTS ▸ ●●○      ││                    │
└─────────────────────┘└─────────────────────┘└─────────────────────┘└────────────────────┘

TABLET: 2 × 2.   MOBILE: 1 column; badges wrap.
```

- Grid: `row g-4`; each group `col-12 col-md-6 col-xl-3`.
- Hierarchy: 1) group titles, 2) badges, 3) a usage line per group.
- Hook: groups labelled like aircraft systems (`SYS 01`). Instead of meaningless percentage bars, each group gets an honest **usage line** ("Daily at work" / "In projects" / "Learning").

### Projects

```
DESKTOP
03 / PROJECTS
Selected work                          MODE  [ALL] [SIMULATION] [WEB] [DATA]
┌──────────────────────────────────────────────────┬────────────────────────┐
│ FIG. 01 · FEATURED                               │ FIG. 02                │
│ ┌──────────────────────────────────────────────┐ │ ┌────────────────────┐ │
│ │ screenshot 16:9                              │ │ │ screenshot 16:9    │ │
│ └──────────────────────────────────────────────┘ │ └────────────────────┘ │
│ Sim Telemetry Dashboard                          │ Fault Log Analyzer     │
│ One-line summary                                 │ One-line summary       │
│ STACK  JS · Chart.js · Python                    │ STACK  Python · pandas │
│ RESULT  Pre-session check 10 → 2 min             │ RESULT  ...            │
│ [Case study]  [GitHub]  [Live ↗]                 │ [GitHub]               │
└──────────────────────────────────────────────────┴────────────────────────┘
┌────────────────┐┌────────────────┐┌────────────────┐
│ FIG. 03        ││ FIG. 04        ││ FIG. 05        │  remaining cards, 3-up
└────────────────┘└────────────────┘└────────────────┘

MOBILE: filter becomes a horizontally scrollable chip row; cards 1-up; featured card same as others.
```

- Grid: featured card `col-12 col-lg-8`, second `col-12 col-md-6 col-lg-4`, the rest `col-12 col-md-6 col-lg-4`.
- Hierarchy: 1) screenshot, 2) project name, 3) the RESULT line, 4) stack and buttons.
- Hook: **figure captions and a mono spec block** (STACK / ROLE / RESULT) on every card, like an engineering drawing. Leading with a measured result tells managers you think in outcomes.

### Experience

```
DESKTOP
04 / EXPERIENCE
Flight path
  2024 – NOW   ◆━━ ┌──────────────────────────────────────────────┐
  (mono)       ┃   │ Aircraft Simulator Engineer · CAE · Dallas   │
               ┃   │ • Achievement with a number                  │
               ┃   │ • Achievement with a number                  │
               ┃   └──────────────────────────────────────────────┘
  2021 – 2024  ◇━━ ┌──────────────────────────────────────────────┐
               ┃   │ Previous role · Company                      │
               ┃   └──────────────────────────────────────────────┘
               ◇   (origin)

MOBILE
◆ 2024 – NOW (mono, above card)
┃ ┌─────────────────────────┐
┃ │ Role · Company          │
┃ └─────────────────────────┘
```

- Grid: one `row`; dates `col-md-3` (right-aligned), cards `col-md-9`; on mobile dates stack above each card and the route line sits at the left edge.
- Hierarchy: 1) role and company, 2) dates, 3) the first achievement bullet.
- Hook: the timeline is a **route with waypoints**: diamond markers (current job filled amber, past jobs outlined), the line drawn as a solid flight path. It quietly says "career trajectory" without a single plane icon.

### Education and certifications

```
DESKTOP
05 / CREDENTIALS
Checklist
┌──────────────────────────────────┬──────────────────────────────────┐
│ EDUCATION                        │ CERTIFICATIONS                   │
│ ☑ Degree · School · Year         │ ◐ FCC GROL Elements 1 & 3        │
│ ☑ Full-stack training · Provider │    [IN PROGRESS] (amber chip)    │
│                                  │ ☑ Certification · Issuer · Year  │
└──────────────────────────────────┴──────────────────────────────────┘

MOBILE: two cards stacked.
```

- Grid: `col-12 col-md-6` each.
- Hierarchy: 1) credential name, 2) status, 3) issuer and year.
- Hook: a **pre-flight checklist**: completed items get a check, in-progress items an amber `IN PROGRESS` chip. Showing the GROL as "in progress" turns a gap into evidence of momentum.

### Contact

```
DESKTOP
06 / CONTACT
Open a channel
┌──────────────────────────────┬────────────────────────────────────────┐
│ Hiring for simulator or      │ ┌ Name ──────────┐ ┌ Email ───────────┐│
│ avionics roles? Let's talk.  │ └────────────────┘ └──────────────────┘│
│                              │ ┌ Subject ─────────────────────────────┐│
│ you@email.com   [Copy]       │ └──────────────────────────────────────┘│
│ RESPONSE TIME  < 48 H (mono) │ ┌ Message ─────────────────────────────┐│
│                              │ │                                      ││
│ [in] [gh] [yt] [✉]           │ └──────────────────────────────────────┘│
│                              │ [ Send message ]   status line          │
└──────────────────────────────┴────────────────────────────────────────┘

MOBILE: intro, email and socials first; form below, fields full width.
```

- Grid: `col-lg-5` intro, `col-lg-7` form; fields `col-md-6` (name, email) and `col-12`.
- Hierarchy: 1) the invitation line, 2) direct email with copy button, 3) form.
- Hook: a **one-click copy** of your email and a mono **response-time readout**. Many recruiters prefer email to forms; giving them both removes friction.

### Footer

```
DESKTOP
────────────────────────────────────────────────────────────────────────
✈ YOUR NAME · END OF FLIGHT PLAN        © 2026 · Built with HTML, CSS & Bootstrap   ↑ Back to top

MOBILE: three lines, centered; back-to-top as a 44px button.
```

- Grid: `d-flex flex-column flex-md-row justify-content-between`.
- Hierarchy: 1) back to top, 2) name, 3) credits.
- Hook: the closing mono line **END OF FLIGHT PLAN** bookends the waypoint labels used through the page.

## 4. Component specs

All interactive elements are at least 44×44px, show a 3px focus ring offset 3px in `--c-primary-text`, and change state through color plus one non-color cue (border, icon or underline).

### Buttons

| State | Primary (amber) | Outline | Secondary (panel) |
| --- | --- | --- | --- |
| Default | Fill `--c-primary`, text `--c-on-primary`, Inter 600 1rem, padding 12×22px, radius 8px, min-height 48px | Transparent, 2px border `--c-primary`, text `--c-primary-text` | Fill `--c-secondary`, text `--c-on-secondary`, 1px border `--c-border-strong` |
| Hover | Fill `--c-primary-hover`, icon nudges 2px right (arrow icons only) | Fill `--c-primary`, text `--c-on-primary` | Border `--c-primary` |
| Focus-visible | Hover look + 3px ring `--c-primary-text`, offset 3px | Same ring | Same ring |
| Active | `translateY(1px)`, no shadow | Same | Same |
| Disabled | 45% opacity, `cursor: not-allowed`, no hover change, `aria-disabled` or `disabled` | Same | Same |
| Loading (form submit) | Label to "Sending…", spinner icon, disabled, `aria-busy="true"` | n/a | n/a |

Small size (cards): 36px tall visually but padded to a 44px hit area with `::after` or a min-height on touch screens. Icon + label always; never icon-only except the theme toggle and social links.

### Navbar

| State | Spec |
| --- | --- |
| Default (top of page) | Height 72px; background `--c-bg` at 80% opacity with 12px backdrop blur; no border |
| Scrolled (> 24px) | Height 60px; background `--c-surface` at 92%; 1px bottom border `--c-border`; `--shadow-sm`; 2px amber progress line at the bottom edge |
| Links | Inter 500 0.95rem, `--c-muted`; hover `--c-text`; active section (ScrollSpy) `--c-text` with a 2px amber underline 6px below |
| Mobile open | Panel drops below the bar, full width, `--c-surface`, 1px border, radius 14px, 48px row height, links 1.0625rem; availability chip becomes a full-width secondary button; focus moves into the panel; Esc closes it |

### Project cards

| State | Spec |
| --- | --- |
| Default | `--c-surface`, 1px `--c-border`, radius 14px, no shadow. Image frame: `--c-surface-2` mat, 8px padding, 16:9, inner radius 8px. Mono caption `FIG. 0X · CATEGORY` in `--c-muted` 0.75rem above the title. Title h3. Summary in `--c-muted`, two lines max. Spec block: mono labels `STACK` / `RESULT` with values in Inter |
| Hover / focus-within | Rises 2px, border `--c-primary`, `--shadow-md`; screenshot scales 1.02 inside its frame (clipped) |
| Featured | Spans `col-lg-8`, image 16:9 at larger size, `FEATURED` amber mono chip, adds a Case study button |
| Filtered out | `d-none`; a visually hidden live region announces "Showing 3 projects" |

The whole card is not a link (it holds several buttons); each button has its own descriptive `aria-label`.

### Skill badges and chips

| Type | Spec |
| --- | --- |
| Skill badge | Pill, padding 4×12px, Inter 500 0.85rem, `--c-text` on `--c-surface-2`, 1px `--c-border`. Not interactive, so no hover change |
| Tech tag (cards) | Radius 4px, JetBrains Mono 0.72rem uppercase, `--c-primary-text`, 1px border `--c-primary` at 50% opacity |
| Filter chip | Pill, min-height 44px, `--c-muted` + 1px `--c-border-strong`; selected: fill `--c-primary`, text `--c-on-primary`, `aria-pressed="true"` |
| Annunciator | Mono 0.72rem uppercase, padding 6×10px, radius 4px, 8px dot in `--c-success` (pulses 3 times), text `--c-text`, 1px `--c-border-strong` |

### Timeline items

- Route line: 2px solid `--c-border-strong`, 11px from the left edge (mobile) or between date and card columns (desktop).
- Waypoint: 14px diamond (`rotate(45deg)` square). Current job filled `--c-primary` with a 4px `--c-bg` ring; past jobs 2px `--c-primary` outline, `--c-bg` fill.
- Date: JetBrains Mono 0.8rem, `--c-accent`.
- Card: `--c-surface`, 1px border, radius 14px, padding 24px; role in h3, company · city in `--c-muted`; bullets with 6px spacing, max three per job.

### Form inputs

| State | Spec |
| --- | --- |
| Default | Height 48px (textarea 140px min), `--c-surface`, 1px `--c-border-strong`, radius 8px, Inter 1rem (prevents iOS zoom), label above in Inter 500 0.9rem `--c-text`; placeholder only as an example, never as the label |
| Hover | Border `--c-text` at 60% |
| Focus | Border `--c-primary-text`, plus a 3px ring of `--c-primary` at 25% |
| Error | Border `--c-error`, `bi-exclamation-circle` icon inside right, message below in `--c-error` 0.875rem, `aria-invalid="true"`, `aria-describedby` points to the message; first invalid field receives focus on submit |
| Success (after valid blur) | Border `--c-success`, `bi-check2` icon inside right; no message text needed |
| Form-level result | Status box below the button: success = `--c-success` 1px border with tinted background and `bi-check-circle`; error = same in `--c-error` with your email as fallback; inside `role="status"` |

### Dark-mode toggle

- 44×44px round button, 1px `--c-border-strong`, transparent fill, 20px icon.
- Shows the mode you will switch to: `bi-sun` in dark mode, `bi-moon-stars` in light mode. `aria-label="Switch to light mode"` updates on every change.
- Hover: border `--c-primary`, icon `--c-primary-text`. Click: icon rotates 90° and cross-fades (250ms; instant under reduced motion).
- First visit follows `prefers-color-scheme`; the choice is saved to `localStorage` and applied by a tiny inline script in `<head>` to avoid a flash of the wrong theme.

## 5. Ready-to-use CSS

Paste this into `css/tokens.css` and load it after Bootstrap and before `style.css`. Light mode is the `:root` default; dark mode overrides it. Bootstrap 5.3 switches themes with `data-bs-theme`, so both `data-theme` and `data-bs-theme` are supported. The file passed a CSS syntax validator.

Add JetBrains Mono to the existing Google Fonts link: `&family=JetBrains+Mono:wght@500`. Use Bootstrap's `.btn-primary`, `.btn-outline-primary` and `.btn-secondary` classes; the overrides restyle them, so no custom button classes are needed.

```css
/* =========================================================
   NIGHT COCKPIT — design tokens
   Light mode is the :root default; dark mode overrides below.
   Bootstrap 5.3 switches themes with data-bs-theme, so both
   attribute names are supported.
   ========================================================= */
:root,
[data-theme="light"],
[data-bs-theme="light"] {
  /* ---- Color ---- */
  --c-bg: #F6F8FB;
  --c-surface: #FFFFFF;
  --c-surface-2: #EEF2F7;
  --c-border: #D3DBE6;          /* decorative only */
  --c-border-strong: #7A869A;   /* inputs, toggles: 3.7:1 */
  --c-text: #13213A;            /* 16.1:1 on surface */
  --c-muted: #4A5870;           /* 7.2:1 */
  --c-primary: #F5A524;         /* fills only in light mode */
  --c-primary-hover: #E0901A;
  --c-primary-text: #8A4F00;    /* amber as text: 6.6:1 */
  --c-on-primary: #111111;      /* 9.3:1 on amber */
  --c-secondary: #1A2840;
  --c-on-secondary: #FFFFFF;
  --c-accent: #0E6C86;          /* 6.0:1 */
  --c-success: #157F3D;         /* 5.1:1 */
  --c-error: #B42318;           /* 6.6:1 */
  --c-success-bg: #ECFDF3;
  --c-error-bg: #FEF3F2;
  --c-grid: rgba(19, 33, 58, 0.06);

  /* ---- Typography ---- */
  --font-heading: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;

  --fs-display: clamp(2.5rem, 1.6rem + 3.6vw, 4rem);
  --fs-h1: clamp(2.25rem, 1.8rem + 1.8vw, 3rem);
  --fs-h2: clamp(1.75rem, 1.45rem + 1.2vw, 2.25rem);
  --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  --fs-h4: clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem);
  --fs-h5: clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem);
  --fs-h6: 1rem;
  --fs-lead: clamp(1.125rem, 1.06rem + 0.3vw, 1.25rem);
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-label: 0.75rem;

  --lh-tight: 1.1;
  --lh-heading: 1.25;
  --lh-body: 1.65;

  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  --tracking-tight: -0.02em;
  --tracking-label: 0.12em;
  --measure: 68ch;

  /* ---- Spacing (8px rhythm) ---- */
  --space-1: 0.25rem;  /* 4  */
  --space-2: 0.5rem;   /* 8  */
  --space-3: 1rem;     /* 16 */
  --space-4: 1.5rem;   /* 24 */
  --space-5: 2rem;     /* 32 */
  --space-6: 3rem;     /* 48 */
  --space-7: 4rem;     /* 64 */
  --space-8: 6rem;     /* 96 */

  /* ---- Shape & depth ---- */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-pill: 999px;
  --border-width: 1px;
  --shadow-sm: 0 1px 2px rgba(19, 33, 58, 0.06);
  --shadow-md: 0 12px 32px rgba(19, 33, 58, 0.08);
  --focus-ring: 0 0 0 3px var(--c-bg), 0 0 0 6px var(--c-primary-text);

  /* ---- Icons ---- */
  --icon-sm: 1em;
  --icon-md: 1.25rem;  /* 20 */
  --icon-lg: 1.5rem;   /* 24 */
  --icon-xl: 2rem;     /* 32 */

  /* ---- Motion ---- */
  --dur-fast: 150ms;
  --dur-base: 200ms;
  --dur-reveal: 400ms;
  --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);
  --ease-std: ease;

  /* ---- Layout ---- */
  --nav-h: 72px;
  --nav-h-scrolled: 60px;
  --tap-min: 44px;
}

[data-theme="dark"],
[data-bs-theme="dark"] {
  --c-bg: #0B1320;
  --c-surface: #131E30;
  --c-surface-2: #1A2840;
  --c-border: #2A3B57;
  --c-border-strong: #6B7C96;   /* 3.9:1 on surface */
  --c-text: #E6EDF6;            /* 15.8:1 on bg */
  --c-muted: #A3B1C6;           /* 8.6:1 */
  --c-primary: #F5A524;
  --c-primary-hover: #FFB941;
  --c-primary-text: #F5B748;    /* 10.4:1 */
  --c-on-primary: #111111;
  --c-secondary: #24364F;
  --c-on-secondary: #E6EDF6;
  --c-accent: #5CC8E0;          /* 9.6:1 */
  --c-success: #4ADE80;
  --c-error: #F87171;
  --c-success-bg: #0F2A1E;
  --c-error-bg: #3A1A20;
  --c-grid: rgba(230, 237, 246, 0.05);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* =========================================================
   Bootstrap 5.3 overrides — map Bootstrap's variables to the
   tokens so its components (buttons, forms, navbar, badges)
   match without recompiling Sass.
   ========================================================= */
:root,
[data-theme],
[data-bs-theme] {
  --bs-body-font-family: var(--font-body);
  --bs-body-font-size: var(--fs-body);
  --bs-body-line-height: var(--lh-body);
  --bs-body-bg: var(--c-bg);
  --bs-body-color: var(--c-text);
  --bs-emphasis-color: var(--c-text);
  --bs-secondary-color: var(--c-muted);
  --bs-secondary-bg: var(--c-surface-2);
  --bs-tertiary-bg: var(--c-surface);
  --bs-heading-color: var(--c-text);
  --bs-link-color: var(--c-accent);
  --bs-link-hover-color: var(--c-text);
  --bs-border-color: var(--c-border);
  --bs-border-radius: var(--radius-sm);
  --bs-border-radius-sm: var(--radius-xs);
  --bs-border-radius-lg: var(--radius-md);
  --bs-border-radius-pill: var(--radius-pill);
  --bs-focus-ring-color: var(--c-primary-text);
  --bs-focus-ring-width: 3px;
  --bs-form-valid-color: var(--c-success);
  --bs-form-valid-border-color: var(--c-success);
  --bs-form-invalid-color: var(--c-error);
  --bs-form-invalid-border-color: var(--c-error);
  --bs-primary: #F5A524;
  --bs-primary-rgb: 245, 165, 36;
}

body {
  font-family: var(--font-body);
  background-color: var(--c-bg);
  color: var(--c-text);
}

h1, h2, h3, h4, .h1, .h2, .h3, .h4, .display-1, .display-2, .display-3, .display-4 {
  font-family: var(--font-heading);
  line-height: var(--lh-heading);
  letter-spacing: var(--tracking-tight);
}
h1, .h1 { font-size: var(--fs-h1); font-weight: var(--fw-bold); line-height: var(--lh-tight); }
h2, .h2 { font-size: var(--fs-h2); font-weight: var(--fw-bold); }
h3, .h3 { font-size: var(--fs-h3); font-weight: var(--fw-medium); letter-spacing: 0; }
h4, .h4 { font-size: var(--fs-h4); font-weight: var(--fw-medium); letter-spacing: 0; }
h5, .h5 { font-size: var(--fs-h5); font-weight: var(--fw-semibold); }
h6, .h6 { font-size: var(--fs-h6); font-weight: var(--fw-semibold); }
.lead { font-size: var(--fs-lead); }
small, .small { font-size: var(--fs-small); }

/* Mono label used for waypoints, captions, readouts */
.label-mono {
  font-family: var(--font-mono);
  font-size: var(--fs-label);
  font-weight: var(--fw-medium);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--c-muted);
}

/* Buttons */
.btn {
  --bs-btn-font-weight: var(--fw-semibold);
  --bs-btn-padding-y: 0.75rem;
  --bs-btn-padding-x: 1.375rem;
  --bs-btn-border-radius: var(--radius-sm);
  --bs-btn-focus-box-shadow: var(--focus-ring);
  min-height: var(--tap-min);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: background-color var(--dur-fast) var(--ease-std),
              border-color var(--dur-fast) var(--ease-std),
              color var(--dur-fast) var(--ease-std);
}
.btn-primary {
  --bs-btn-bg: var(--c-primary);
  --bs-btn-border-color: var(--c-primary);
  --bs-btn-color: var(--c-on-primary);
  --bs-btn-hover-bg: var(--c-primary-hover);
  --bs-btn-hover-border-color: var(--c-primary-hover);
  --bs-btn-hover-color: var(--c-on-primary);
  --bs-btn-active-bg: var(--c-primary-hover);
  --bs-btn-active-border-color: var(--c-primary-hover);
  --bs-btn-active-color: var(--c-on-primary);
  --bs-btn-disabled-bg: var(--c-primary);
  --bs-btn-disabled-border-color: var(--c-primary);
  --bs-btn-disabled-color: var(--c-on-primary);
  --bs-btn-disabled-opacity: 0.45;
}
.btn-outline-primary {
  --bs-btn-color: var(--c-primary-text);
  --bs-btn-border-color: var(--c-primary);
  --bs-btn-border-width: 2px;
  --bs-btn-hover-bg: var(--c-primary);
  --bs-btn-hover-border-color: var(--c-primary);
  --bs-btn-hover-color: var(--c-on-primary);
  --bs-btn-active-bg: var(--c-primary-hover);
  --bs-btn-active-border-color: var(--c-primary-hover);
  --bs-btn-active-color: var(--c-on-primary);
  --bs-btn-disabled-color: var(--c-primary-text);
  --bs-btn-disabled-border-color: var(--c-primary);
}
.btn-secondary {
  --bs-btn-bg: var(--c-secondary);
  --bs-btn-border-color: var(--c-border-strong);
  --bs-btn-color: var(--c-on-secondary);
  --bs-btn-hover-bg: var(--c-secondary);
  --bs-btn-hover-border-color: var(--c-primary);
  --bs-btn-hover-color: var(--c-on-secondary);
  --bs-btn-active-bg: var(--c-secondary);
  --bs-btn-active-border-color: var(--c-primary);
  --bs-btn-active-color: var(--c-on-secondary);
}
.btn:active { transform: translateY(1px); }
.btn:disabled, .btn.disabled { cursor: not-allowed; }

/* Cards */
.card {
  --bs-card-bg: var(--c-surface);
  --bs-card-border-color: var(--c-border);
  --bs-card-border-radius: var(--radius-md);
  --bs-card-inner-border-radius: calc(var(--radius-md) - 1px);
  --bs-card-spacer-y: var(--space-4);
  --bs-card-spacer-x: var(--space-4);
  --bs-card-color: var(--c-text);
}

/* Forms */
.form-control,
.form-select {
  min-height: 48px;
  font-size: 1rem;              /* 16px stops iOS zoom on focus */
  background-color: var(--c-surface);
  color: var(--c-text);
  border: var(--border-width) solid var(--c-border-strong);
  border-radius: var(--radius-sm);
}
.form-control::placeholder { color: var(--c-muted); opacity: 1; }
.form-control:hover { border-color: color-mix(in srgb, var(--c-text) 60%, transparent); }
.form-control:focus,
.form-select:focus {
  background-color: var(--c-surface);
  color: var(--c-text);
  border-color: var(--c-primary-text);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-primary) 25%, transparent);
}
.form-label { font-weight: var(--fw-medium); font-size: 0.9rem; }

/* Navbar */
.navbar {
  --bs-navbar-color: var(--c-muted);
  --bs-navbar-hover-color: var(--c-text);
  --bs-navbar-active-color: var(--c-text);
  --bs-navbar-brand-color: var(--c-text);
  --bs-navbar-brand-hover-color: var(--c-text);
  --bs-navbar-toggler-border-color: var(--c-border-strong);
  --bs-navbar-toggler-focus-width: 3px;
  --bs-navbar-nav-link-padding-x: 0.9rem;
}
.navbar-toggler { min-width: var(--tap-min); min-height: var(--tap-min); }

/* Badges */
.badge {
  --bs-badge-font-weight: var(--fw-medium);
  --bs-badge-border-radius: var(--radius-pill);
  --bs-badge-color: var(--c-text);
}

/* Focus: one ring everywhere */
:focus-visible {
  outline: 3px solid var(--c-primary-text);
  outline-offset: 3px;
}

/* Custom spacing utilities Bootstrap's CDN build lacks */
.mb-32 { margin-bottom: var(--space-5) !important; }
.gap-32 { gap: var(--space-5) !important; }
.py-64 { padding-block: var(--space-7) !important; }
.section { padding-block: var(--space-7); }
@media (min-width: 992px) { .section { padding-block: var(--space-8); } }

/* Reveal motion + reduced-motion fallback */
.js .reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--dur-reveal) var(--ease-out),
              transform var(--dur-reveal) var(--ease-out);
}
.js .reveal.is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .js .reveal { opacity: 1; transform: none; }
}
```

## 6. Design review checklist

Run this on the finished site in both themes, at 375px, 768px and 1280px wide.

**Consistency**

- [ ] Every color in the CSS comes from a `--c-*` token; no stray hex values in `style.css`
- [ ] Amber appears only on actions, active states and key marks; cyan only on links and data
- [ ] Every section has a waypoint label (`0X / NAME`) and an h2 in the same style
- [ ] One radius per component type (8px controls, 14px cards, pills for chips)

**Spacing and alignment**

- [ ] Section padding is 64px on mobile and 96px on desktop, everywhere
- [ ] Text, cards and buttons share one left edge inside the container
- [ ] Body text lines stay at or under 68 characters
- [ ] Card heights align in each row; buttons sit at the card bottom

**Contrast and accessibility**

- [ ] Amber is never used as text in light mode (only `--c-primary-text`)
- [ ] Inputs, toggle and filter chips use `--c-border-strong` (3:1 or better)
- [ ] A visible focus ring appears on every interactive element when tabbing
- [ ] State never relies on color alone (icon, border or text change too)
- [ ] Lighthouse Accessibility 95+ and zero WAVE contrast errors in both themes

**Tap targets and mobile**

- [ ] Every button, link, chip, toggle and social icon is at least 44×44px
- [ ] At least 8px between adjacent tap targets
- [ ] No horizontal scroll at 320px; filter chips scroll inside their own row
- [ ] Form inputs are 16px text (no iOS zoom on focus)

**Visual hierarchy**

- [ ] In a 5-second look at the hero, a stranger can say your name, role and location
- [ ] Resume download is visible without scrolling on a 1366×768 laptop
- [ ] Each project card leads with a measured RESULT line
- [ ] Squint test: one clear focal point per section, not three competing ones

**Fonts and images**

- [ ] Google Fonts load with `display=swap` and `preconnect`; only the weights listed here are requested
- [ ] Hero image is not lazy-loaded; all images below it are
- [ ] Every `<img>` has `width`, `height` and meaningful `alt` text
- [ ] Images are WebP under 200KB; no layout shift as they load (CLS under 0.1)
- [ ] No employer-confidential screens or photos anywhere
