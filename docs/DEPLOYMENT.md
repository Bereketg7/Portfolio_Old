# Deployment Guide

Your site is static (HTML + CSS + JS), so it can be hosted free on GitHub Pages or Netlify.
Before deploying, do a quick pass through **TESTING-CHECKLIST.md**.

---

## Option A — GitHub Pages (recommended)

### 1. Create a GitHub account and repository
1. Sign in at https://github.com (create an account if needed).
2. Click **+ → New repository**.
3. Name it:
   - `portfolio` → site will live at `https://USERNAME.github.io/portfolio/`
   - **or** `USERNAME.github.io` → site will live at `https://USERNAME.github.io/` (cleaner URL)
4. Set it to **Public**, leave "Add a README" unchecked, click **Create repository**.

### 2. Upload the files

**Easiest (no command line):**
1. On the new repo page, click **uploading an existing file**.
2. Drag in *the contents* of the `portfolio` folder (so `index.html` sits at the top level, not inside another folder).
3. Click **Commit changes**.

**With Git (command line):**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### 3. Turn on Pages
1. In the repo, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–2 minutes, refresh the page; the live URL appears at the top.

> The empty `.nojekyll` file tells GitHub to serve your files exactly as they are.

### 4. Update URLs in the site
Replace `[REPLACE-username]` (and `/portfolio/` if you used `USERNAME.github.io`) in:
- `index.html` → `<link rel="canonical">`, `og:url`, `og:image`
- `sitemap.xml` → `<loc>`
- `robots.txt` → `Sitemap:` line

Commit and push again. Every push to `main` redeploys automatically.

---

## Option B — Netlify

1. Sign in at https://app.netlify.com (you can sign in with GitHub).
2. **Quickest:** go to **Sites**, drag the `portfolio` folder onto the "Deploy manually" drop zone. Done.
3. **Auto-deploy from GitHub:** **Add new site → Import an existing project → GitHub →** pick your repo.
   - Build command: *(leave empty)*
   - Publish directory: `.` (or leave blank)
   - Click **Deploy**.
4. Rename the site under **Site configuration → Change site name** (e.g. `yourname-portfolio.netlify.app`).

> Netlify also has its own form handling. You can keep Formspree, or switch by adding `data-netlify="true"` to the `<form>` and removing the `action` URL — but then the fetch code in `main.js` should post to `/` instead.

---

## Custom domain (optional, ~$10–15/year)

Buy a domain from any registrar (Namecheap, Cloudflare, Porkbun, Google Domains successor Squarespace, etc.).

### For GitHub Pages
1. Repo **Settings → Pages → Custom domain** → enter `www.yourdomain.com` → **Save**.
   (GitHub creates a `CNAME` file in your repo.)
2. At your registrar's DNS settings add:

| Type | Host / Name | Value |
|---|---|---|
| CNAME | `www` | `USERNAME.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

3. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.
4. Verify current IPs in GitHub's docs: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

### For Netlify
1. **Domain management → Add a domain** → enter your domain.
2. Either use Netlify DNS (change nameservers at your registrar to the ones Netlify shows), or add the records Netlify lists at your registrar.
3. HTTPS is issued automatically (Let's Encrypt).

After switching domains, update the canonical URL, `og:url`, `og:image`, `sitemap.xml` and `robots.txt`.

---

## After deploying

- Submit the sitemap in **Google Search Console** (https://search.google.com/search-console): add your property → Sitemaps → enter `sitemap.xml`.
- Test the social preview with LinkedIn's **Post Inspector** (https://www.linkedin.com/post-inspector/).
- Send yourself a test message through the contact form.
