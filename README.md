# Lumière Studio

A landing page for a fictional fine art photography studio based in São Paulo, Brazil. Built with HTML, CSS, and vanilla JavaScript — no frameworks, no libraries.

## About the project

I designed and coded this from scratch as a portfolio piece. The idea was to build something that looks and feels like a real photography studio website, not just a generic template.

The page includes a hero section with a background slideshow, a portfolio gallery with hover overlays, service cards with pricing, a testimonials slider, and a working contact form with basic validation.

## What I used

- HTML5 (semantic markup, BEM naming)
- CSS3 (custom properties, flexbox, grid, animations, backdrop-filter)
- JavaScript (DOM manipulation, intersection observer for scroll reveals, slider logic)
- Google Fonts (Cormorant Garamond + DM Sans)

## Features

- Responsive layout — works on mobile, tablet, and desktop
- Smooth scroll reveal animations using Intersection Observer
- Image slideshow on the hero section
- Portfolio gallery with CSS grid and hover effects
- Testimonials carousel with dot navigation
- Hamburger menu for mobile
- Contact form with front-end validation and success state

## How to run it

Just clone the repo and open `index.html` in your browser. No build step needed.

```bash
git clone https://github.com/KarenAgg/lumiere-studio.git
cd lumiere-studio
open index.html
```

## Project structure

```
lumiere-studio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (project images)
└── README.md
```

## What I learned

This was my first full landing page built from scratch. Some things I picked up along the way:

- How to structure a larger CSS file without it turning into a mess (BEM helped a lot)
- Intersection Observer for scroll-triggered animations instead of listening to scroll events
- Building a responsive nav that actually works well on mobile
- CSS grid for the gallery layout — way more flexible than I expected

## Live preview

_Coming soon — will be deployed via GitHub Pages._

---

Built by [Karen Agg](https://github.com/KarenAgg)
