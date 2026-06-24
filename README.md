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
```

No build step, no dependencies. It's plain HTML/CSS/JS, so it runs anywhere
a static file can be served.

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

- [ ] Swap in your real headshot or remove the visual entirely if you'd
      rather keep it abstract (it's currently pure SVG/CSS, no photo).
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
