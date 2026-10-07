# Project Case Studies

Each case study follows **Problem → Approach → Tech → Challenges → Result**.
These are *sample* write-ups based on the project cards on the site. Replace details and every `[REPLACE]` with what you actually built and measured. If a project doesn't exist yet, either build a small version or remove it from the site and this file. Never claim results you can't explain in an interview.

> **Confidentiality:** don't publish employer-proprietary code, data, screenshots, or system details. Use synthetic/sample data in public repos.

---

## 1. Sim Telemetry Dashboard

**Role:** Solo developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/sim-telemetry-dashboard) · [Live demo](https://[REPLACE-demo-link])

**Problem.** Checking a simulator's health meant walking between consoles and logs for the motion, visual, and host systems. Issues were often noticed only after a training session was affected.

**Approach.** Built a single web page that shows the status of each subsystem in real time, with color-coded thresholds and a short history chart so trends are visible before they become faults.

**Tech.** Python data publisher (sample/simulated data) → WebSockets → vanilla JavaScript front end with Chart.js; Bootstrap for layout.

**Challenges.**
- Keeping charts smooth with frequent updates — solved by batching updates and capping history length.
- Reconnecting gracefully when the data feed drops, with a visible "stale data" warning.

**Result.** [REPLACE: e.g. "Demonstrated in a team meeting; cut the pre-session health check from ~10 minutes to under 2 in testing."]

---

## 2. Fault Log Analyzer

**Role:** Solo developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/fault-log-analyzer)

**Problem.** The same faults kept recurring, but logs were long text files, so patterns were hard to see and fixes targeted symptoms.

**Approach.** Wrote a script that parses log files, normalizes fault codes and timestamps, stores them in a small database, and produces a ranked "repeat offenders" report by subsystem and time window.

**Tech.** Python, pandas, SQLite, matplotlib for charts, CSV/HTML report output.

**Challenges.**
- Inconsistent log formats across systems — handled with per-format regex parsers and unit tests.
- Avoiding double-counting the same event logged by multiple components.

**Result.** [REPLACE: e.g. "Identified 3 recurring faults that accounted for ~40% of logged events in the sample set; reporting time dropped from hours to minutes."]

---

## 3. Web Instrument Panel

**Role:** Solo developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/web-instrument-panel) · [Live demo](https://[REPLACE-demo-link])

**Problem.** I wanted a lightweight way to visualize flight data (and to show non-engineers what a simulator is doing) without specialized software.

**Approach.** Recreated basic primary flight instruments (attitude indicator, altimeter, airspeed) in the browser, driven by a JSON data stream or a built-in demo flight.

**Tech.** SVG, vanilla JavaScript (`requestAnimationFrame`), CSS transforms.

**Challenges.**
- Smooth needle and horizon motion without jitter — interpolated between data points.
- Keeping gauges readable and accessible: text readouts alongside graphics, respecting reduced-motion.

**Result.** [REPLACE: e.g. "Runs at 60 fps on a mid-range phone; used as a demo in my YouTube video on how simulators work."]

---

## 4. Maintenance Task Tracker

**Role:** Full-stack developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/maintenance-tracker) · [Live demo](https://[REPLACE-demo-link])

**Problem.** Shift tasks, parts requests, and handover notes lived in a shared spreadsheet that was easy to overwrite and hard to search.

**Approach.** Built a web app with tasks, status, assignee, parts used, and a handover log per shift, plus search and filters.

**Tech.** Node.js, Express, PostgreSQL, Bootstrap 5, server-side validation; deployed on [REPLACE: Render / Railway / Fly.io].

**Challenges.**
- Designing a schema flexible enough for different task types without becoming messy.
- Basic authentication and role-based access so only leads can close tasks.

**Result.** [REPLACE: e.g. "Prototype tested with sample data; handover note time dropped from ~15 to ~5 minutes in a dry run."]

---

## 5. FCC GROL Practice Quiz

**Role:** Solo developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/grol-quiz) · [Live demo](https://[REPLACE-demo-link])

**Problem.** Studying for FCC Elements 1 and 3 with static question lists made it hard to focus on weak topics.

**Approach.** Built a browser quiz that loads questions from JSON, tracks accuracy per topic, and resurfaces missed questions more often (simple spaced repetition).

**Tech.** HTML, CSS, vanilla JavaScript, JSON; progress saved in `localStorage`.

**Challenges.**
- Making spaced repetition simple enough to implement and explain.
- Accessible multiple-choice controls (keyboard navigation, clear focus, screen-reader feedback).

**Result.** [REPLACE: e.g. "Practice scores rose from 62% to 88% over three weeks of study."]

---

## 6. This Portfolio

**Role:** Designer & developer · **Links:** [GitHub](https://github.com/[REPLACE-username]/portfolio) · [Live](https://[REPLACE-username].github.io/portfolio/)

**Problem.** I needed one place to show both my simulator engineering experience and my software work to recruiters.

**Approach.** Planned a design system first ("Night Cockpit": tokens, wireframes, component specs), then built a single-page site where every aviation motif carries information: waypoint section labels, hero readouts, a flight-path timeline and a credentials checklist.

**Tech.** HTML5, CSS3 custom properties (design tokens mapped onto Bootstrap 5's variables), vanilla JS, Formspree, GitHub Pages.

**Challenges.**
- WCAG AA contrast in both light and dark themes with an amber accent — used a darker amber for text in light mode.
- No flash of the wrong theme on load — set the theme in a tiny inline script before CSS paints.

**Result.** [REPLACE: Lighthouse scores, e.g. "Performance 98, Accessibility 100, Best Practices 100, SEO 100."]
