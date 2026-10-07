# Testing Checklist

Tick each box before you share your link. Re-run after big changes.

## 0. Placeholders
- [ ] Searched the whole project for `[REPLACE]` — zero results left (except in docs you don't publish)
- [ ] Searched for `YOUR_FORM_ID` — replaced with your Formspree ID
- [ ] Real resume PDF is at `assets/resume/` and the Download button opens it
- [ ] Real profile photo and project images in place, each with meaningful `alt` text

## 1. Responsiveness
Use Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M).
- [ ] 360 px (small phone): no sideways scrolling, text readable, buttons easy to tap
- [ ] 768 px (tablet): projects show 2 per row, skills 2 per row
- [ ] 1280 px+ (desktop): projects 3 per row, skills 4 per row
- [ ] Hamburger menu opens/closes and closes after tapping a link
- [ ] Landscape phone: hero still fits and is usable
- [ ] Zoom browser to 200%: nothing overlaps or gets cut off
- [ ] Test on at least one real phone

## 2. Browsers
- [ ] Chrome (Windows/Mac)
- [ ] Firefox
- [ ] Safari (Mac and iPhone)
- [ ] Edge
- [ ] Samsung Internet / Chrome on Android

## 3. Accessibility
- [ ] **Lighthouse** (Chrome DevTools → Lighthouse → Mobile → Analyze): Accessibility ≥ 95
- [ ] **WAVE** (https://wave.webaim.org or the browser extension): 0 errors, 0 contrast errors
- [ ] **Keyboard only:** Tab from the top — the "Skip to main content" link appears first, every link/button gets a visible amber outline, order is logical, form is fully usable
- [ ] Theme toggle works with Enter/Space and its label changes ("Switch to light/dark mode")
- [ ] Project filter buttons work with keyboard
- [ ] Contrast checked in **both** light and dark mode
- [ ] Turn on OS "Reduce motion" (Windows: Settings → Accessibility → Visual effects → Animation effects off; Mac: Accessibility → Display → Reduce motion): content appears without fade-ins
- [ ] Optional screen reader check: NVDA (Windows) or VoiceOver (Mac/iPhone) reads headings in order, image alt text, and form errors

## 4. Performance & SEO
- [ ] Lighthouse Performance ≥ 90 (mobile), SEO = 100, Best Practices ≥ 95
- [ ] Every image under ~200 KB (compress at https://squoosh.app)
- [ ] Images below the hero have `loading="lazy"` and `width`/`height`
- [ ] `<title>` and meta description are unique and accurate
- [ ] Canonical URL, `og:url`, `og:image` point to your live site
- [ ] `https://YOURSITE/sitemap.xml` and `https://YOURSITE/robots.txt` load
- [ ] Favicon shows in the browser tab
- [ ] Share preview looks right in LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)

## 5. Links
- [ ] Every navbar link scrolls to the right section and highlights when you scroll there
- [ ] "View Projects" and "Back to top" work
- [ ] All GitHub / Live demo buttons open the correct page in a new tab (no 404s)
- [ ] Remove "Live" buttons for projects without a demo
- [ ] LinkedIn, GitHub, YouTube, email icons go to the right place
- [ ] Optional: run https://validator.w3.org/checklink on your live URL

## 6. Contact form
- [ ] Submitting empty shows red error messages, sets `aria-invalid`, and moves focus to the first problem
- [ ] Invalid email (e.g. `abc@`) shows the email error
- [ ] Valid submission shows the green "Thanks!" message and clears the form
- [ ] You received the message in your inbox (check spam; confirm the first Formspree email)
- [ ] With the network offline (DevTools → Network → Offline), you see the red error message with your email address
- [ ] Submit button shows "Sending…" and is disabled while sending (no double submissions)

## 7. Theme
- [ ] Toggle switches light ↔ dark
- [ ] Reload the page: your choice is remembered
- [ ] No flash of the wrong theme on reload
- [ ] With no saved choice, the site follows the OS light/dark setting

## 8. Design review
- [ ] Run the design checklist in `docs/DESIGN-SYSTEM.md` (section 6) in both themes at 375, 768 and 1280 px
- [ ] Navbar shrinks after scrolling and the amber progress line grows to full width at the bottom of the page
- [ ] "Copy email" button copies the address and announces "Email copied" (works on the live https site, not from a file:// page)
- [ ] Featured project spans the full width (image left on desktop); the other cards form a 2 × 2 grid with no lone card
- [ ] Side-by-side check: the live site matches `docs/mockups/concept-a.html` in both themes
- [ ] Waypoint labels are numbered in order (01–06)

## 9. Code quality
- [ ] HTML validates: https://validator.w3.org (upload `index.html` or enter your URL)
- [ ] CSS validates: https://jigsaw.w3.org/css-validator/
- [ ] DevTools Console shows no red errors
- [ ] Final content proofread (spelling, dates, numbers you can back up)
