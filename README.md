# Aly Mahmoud — Portfolio

A single-page portfolio built around a "detection readout" visual identity —
bounding boxes, confidence scores, and terminal-style type — to match the
actual subject matter: computer vision and LLM systems.

## Files

```
index.html   → all content/markup
style.css    → all styling (one theme, no framework)
script.js    → mobile nav + scroll reveal + skill bar animation
assets/
  Aly_Mahmoud_Resume.pdf  → linked from the "Download résumé" button
  aly-hero.jpg            → placeholder photo in the hero section
  aly-about.jpg           → placeholder photo in the About section
```

No build step, no dependencies. It's plain HTML/CSS/JS, so it runs anywhere
a static file can be served.

## Adding your photos

Two placeholder images are in `assets/` right now — green-bordered boxes
that say "REPLACE ME" so it's obvious where they go and what size they
expect:

| File | Used in | Aspect ratio | Suggested size |
|---|---|---|---|
| `assets/aly-hero.jpg` | Hero section, right side | 3:4 (portrait) | ~900×1200px |
| `assets/aly-about.jpg` | About section, left side | 4:5 (portrait) | ~900×1125px |

To swap them in:

1. Crop/export your photo to roughly that aspect ratio (doesn't have to be
   exact — `object-fit: cover` will crop to fit, just avoid extreme
   mismatches that cut off your head).
2. Name the file exactly `aly-hero.jpg` or `aly-about.jpg` (or change the
   `src=` in `index.html` if you'd rather use your own filenames/`.png`).
3. Drop it into the `assets/` folder, replacing the placeholder, and
   re-upload/push to your repo.

Casual photos work well here — the design wraps them in a "detection frame"
(corner brackets, a confidence-score tag) so even an informal photo reads as
intentional, not like a stray headshot.

## Deploying to GitHub Pages (yourusername.github.io)

You have two options depending on whether you want this at the root of your
GitHub Pages domain or as a project page.

### Option A — Root site (`alymodrik41.github.io`)

This makes the site live at `https://alymodrik41.github.io`.

1. Create a **new repository** named exactly: `AlyModrik41.github.io`
   (must match your GitHub username exactly, case doesn't matter for the repo
   but the format `username.github.io` does).
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder
   to the root of that repo (drag-and-drop on github.com works, or use git
   — instructions below).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes. Your site will be live at `https://alymodrik41.github.io`.

### Option B — Project page (`alymodrik41.github.io/portfolio`)

Use this if you'd rather keep your existing `AlyModrik41.github.io` repo (if
you have one) untouched, or want the site under a sub-path.

1. Create a repo with any name, e.g. `portfolio`.
2. Upload the same files to its root.
3. Settings → Pages → Source: branch `main`, folder `/ (root)`. Save.
4. Live at `https://alymodrik41.github.io/portfolio`.

### Deploying via git (command line)

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/AlyModrik41/AlyModrik41.github.io.git
git push -u origin main
```

Then enable Pages as in step 3–4 above (Pages sometimes auto-enables for
`username.github.io` repos with no extra steps needed).

## Before you deploy — quick checklist

- [ ] Replace `assets/aly-hero.jpg` and `assets/aly-about.jpg` with real
      photos (see "Adding your photos" above) — they're currently green
      placeholder boxes.
- [ ] Double check the phone number and email in the contact section match
      what you want public (`ali1972014@gmail.com`, `+20 101 429 3585`).
- [ ] The "View repository" links on Projects 2, 3, and 5 (RAG System, LLM
      Agents, ExoPlanet Classification) currently point to your GitHub
      profile root since I couldn't confirm exact repo names for those —
      update the `href` in `index.html` once you confirm/create those repo
      URLs.
- [ ] Confirm `assets/Aly_Mahmoud_Resume.pdf` is your latest résumé version.

## Customizing

- **Colors** live as CSS variables at the top of `style.css` under `:root`
  — change `--accent` (phosphor green) or `--signal` (orange) to retheme
  everything in one place.
- **Copy** is all directly in `index.html`, organized by section comment
  (`HERO`, `WORK`, `STACK`, `EXPERIENCE`, `CONTACT`).
- **Skill bar percentages** are set inline via `style="--v:92%"` on each
  `.bar-fill` element in the Stack section.
