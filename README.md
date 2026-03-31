# shewag-secops.online

> Hands-on Blue Team & SOC Training Labs — Free, offline-first, no account required.

---

## 📁 Folder Structure

```
shewag-secops/
├── index.html                    # Homepage
├── labs.html                     # Labs listing
├── about.html                    # About page
├── blog.html                     # Blog / writeups
├── contact.html                  # Contact page
├── 404.html                      # Custom 404
├── robots.txt                    # SEO crawl rules
├── sitemap.xml                   # XML sitemap
├── _headers                      # Cloudflare security headers
├── _redirects                    # Cloudflare redirects
├── labs/
│   ├── soc-alert-triage.html
│   ├── rdp-brute-force.html
│   └── suspicious-powershell.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── main.js
│   │   └── components.js
│   └── images/
│       └── og-image.png          # Add your OG image here (1200x630px)
└── .github/
    └── workflows/
        └── deploy.yml            # Auto-deploy to GitHub Pages
```

---

## 🚀 Deployment: GitHub Pages

### Step 1 — Push to GitHub

```bash
cd shewag-secops
git init
git add .
git commit -m "Initial MVP launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shewag-secops.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The `deploy.yml` workflow runs automatically on every push to `main`

### Step 3 — Add Custom Domain

1. In **Settings → Pages → Custom domain**, enter: `shewag-secops.online`
2. Check "Enforce HTTPS"
3. Create a file `CNAME` in your repo root:
   ```
   shewag-secops.online
   ```

---

## 🌐 DNS Setup (for shewag-secops.online)

In your domain registrar / DNS provider (Cloudflare recommended):

### If using GitHub Pages:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

### If using Cloudflare Pages (alternative):
```
CNAME   @       YOUR_PROJECT.pages.dev
CNAME   www     YOUR_PROJECT.pages.dev
```

---

## ☁️ Alternative: Cloudflare Pages

1. Push repo to GitHub (same as above)
2. Log into [pages.cloudflare.com](https://pages.cloudflare.com)
3. **Create a project** → Connect to GitHub → Select your repo
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**
6. In **Custom domains**, add `shewag-secops.online`

> Cloudflare Pages auto-reads `_headers` and `_redirects` — security headers and redirects work out of the box.

---

## 📬 Contact Form Setup (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form, copy your Form ID (e.g., `xabcdefg`)
3. Open `assets/js/main.js` and replace:
   ```js
   const formspreeId = 'YOUR_FORMSPREE_ID';
   ```
   with:
   ```js
   const formspreeId = 'xabcdefg';
   ```

Free tier: 50 submissions/month — plenty for an MVP.

---

## 🖼 OG Image

Add a 1200×630px image to `assets/images/og-image.png` for social sharing previews.
Use Canva or Figma with a dark cybersecurity theme matching the site.

---

## 📈 SEO Checklist

- [x] Meta title + description on every page
- [x] Canonical URLs
- [x] Open Graph + Twitter card tags
- [x] JSON-LD structured data (homepage + lab pages)
- [x] robots.txt
- [x] sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Add OG image (1200×630px)
- [ ] Verify domain in Search Console

### Submit sitemap:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://shewag-secops.online`
3. Submit sitemap: `https://shewag-secops.online/sitemap.xml`

---

## 🔮 Future Scalability Roadmap

### Phase 2 — Content Growth
- Add 10+ more labs across DFIR, Threat Hunting, SIEM
- Add lab difficulty progression paths (Beginner → Advanced tracks)
- Add printable PDF cheat sheets

### Phase 3 — Light Backend (Free tier)
- **Supabase** (free tier): Store lab completion, user progress
- **Netlify Functions** or **Cloudflare Workers**: API for form handling, dynamic lab counts
- **Utterances** (GitHub Issues-based): Free comments on blog posts

### Phase 4 — Community
- GitHub Discussions for lab Q&A
- Discord server for the community
- Contribution guide for community labs (PR-based)

### Phase 5 — Monetization (optional)
- Gumroad or Lemon Squeezy: Sell lab bundles / certificates
- GitHub Sponsors: Accept donations
- Patreon: Monthly supporters for early access

---

## 🔧 Local Development

No build step required — it's plain HTML/CSS/JS.

```bash
# Option 1: Python (built-in)
python3 -m http.server 8080

# Option 2: Node.js (if installed)
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Open: `http://localhost:8080`

---

## 📝 Adding a New Lab

1. Copy `labs/soc-alert-triage.html` to `labs/your-lab-name.html`
2. Update: title, meta tags, canonical URL, difficulty badge, content
3. Add the lab card to `labs.html` and featured section on `index.html`
4. Update `sitemap.xml` with the new URL
5. Commit and push → auto-deploys

---

*Built for defenders, by a defender. — shewag-secops.online*
