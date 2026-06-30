# CloseConnect — Phase 1

A clean, mobile-friendly resource directory. First school: **University of San Diego (USD)**.
Built so a future networking/advice-board feature can be added without a rewrite, and so the
whole thing can be re-skinned for a different university by editing two files.

## View it

Double-click `index.html` — it opens in your browser. No install, no server, no internet
needed for the site itself (the resource *links* go out to USD pages).

This folder is also a Git repository connected to Netlify: commit and push in GitHub Desktop
and the live site updates automatically.

## How it's organized

```
CloseConnect/
├── index.html          ← page structure (rarely needs editing)
├── assets/
│   ├── styles.css       ← look & feel
│   └── app.js           ← tabs / search / filter logic (you won't need to touch this)
└── data/
    ├── school.js        ← THE school: name, tagline, colors, logo  ← edit me
    └── resources.js     ← THE resource list                        ← edit me
```

Everything school-specific lives in `data/`. The word "USD" appears nowhere in the
layout or styling — only in the data files — so swapping schools is a data change, not a
rebuild.

## Add or edit a resource

Open `data/resources.js` and copy one block:

```js
{
  name: "Resource name",
  category: "Career",          // Career, Entrepreneurship, Academic Support,
                               // Wellness, Engineering & CS, Alumni, General
  audience: "both",            // "undergrad" | "grad_alumni" | "both"
  description: "Short, plain-language description.",
  link: "https://…",
  school: "USD",
  location: "Building Room",   // optional
  verify: true                 // optional — shows a small "Verify link" flag
}
```

- `audience` controls which of the three tabs it appears under.
- `category` controls the filter chips (new categories appear automatically).

## Launch a new school

1. In `data/school.js`, change `id`, `name`, `tagline`, `colors`, and logo.
2. In `data/resources.js`, replace the list with that school's resources and set each
   `school` field to match the new `id`.

That's it — no other files change.

## Links still worth a final check before wide sharing

A few entries are marked with `verify: true` (they show a small "Verify link" flag on the
card). These came from notes that couldn't be fully confirmed against USD's public pages:

- **Brink Consulting** — confirm the current name and link.
- **Entrepreneurship Club** — confirm the direct org page.
- **Logic Center** — confirm it has its own page (currently points to the CAS tutoring hub).
- **Alumni Email & Google Workspace** — confirm the alumni-specific policy with ITS.

## Out of scope for Phase 1 (coming later)

User accounts, posting questions/advice (the networking board), and alumni-to-student
matching. The code is structured so these can be layered on without redoing Phase 1.
