# Small World Company

## Description
Small World Company is a collaborative project by Visal, Neath, and Rachana. Our mission is to create innovative solutions that connect people and ideas from around the globe.

The site ("Wildwood") was originally written in plain HTML, CSS, JavaScript and Bootstrap.
It has been migrated to **React + TypeScript + Tailwind CSS** (built with Vite) while keeping
the original design and behaviour. The original files are kept in [`legacy/`](legacy/) for reference.

## Features
- Global connectivity
- Innovative solutions
- Collaborative environment

## Requirements
- Node.js 20.19+ (or 22.12+) and npm

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Small-World-Company.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Small-World-Company
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Scripts

| Command             | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the dev server at http://localhost:5173                       |
| `npm run build`     | Type-check and build the production site into `dist/`              |
| `npm run preview`   | Serve the production build locally at http://localhost:4173        |
| `npm run typecheck` | Run the TypeScript compiler only                                    |
| `npm run lint`      | Lint with oxlint                                                    |
| `npm run legacy`    | Serve the original HTML site from `legacy/` at http://localhost:5501 (for side-by-side comparison) |

Before committing, also run `fallow audit` (see `AGENTS.md`).

## Pages and URLs

| URL           | Page                                       |
| ------------- | ------------------------------------------ |
| `/`           | Home (was `index.html`)                    |
| `/about`      | About (was `about.html`)                   |
| `/index.html`, `/about.html` | Redirect to the new URLs, so old links keep working |

In-page links such as `/#trees` or `/#faq` work as before.

**Deploying:** this is a single-page app, so the host must serve `index.html` for every
path (for example `/about`). `npm run dev` and `npm run preview` already do this. On static
hosts, add the usual SPA fallback rule (Netlify `_redirects`: `/* /index.html 200`;
Vercel: a rewrite of `/(.*)` to `/index.html`).

## Project structure

```text
src/
├── main.tsx                # React entry point (router setup)
├── App.tsx                 # Routes, legacy URL redirects, scroll reset between pages
├── index.css               # Tailwind setup, theme tokens, Bootstrap-equivalent base styles
├── pages/                  # HomePage, AboutPage
├── components/
│   ├── home/               # Home page sections (header, hero, cards, donation form, FAQ…)
│   ├── about/              # About page sections (stats, progress, team, timeline…)
│   ├── layout/SiteFooter   # Footer shared by both pages
│   └── ui/                 # Collapse, Modal, Aos (scroll-reveal) building blocks
├── hooks/                  # useInView, useCycle, useAosReveal, usePresence, useModalBehavior
├── data/                   # Page content (cards, FAQ, stats, team, supporters…)
└── lib/                    # Small helpers and shared Bootstrap-style class strings
public/images/              # Local images (the "Friend Forest" logo)
legacy/                     # The original HTML/CSS/JS site, unchanged
```

## Styling notes
- Tailwind is loaded **without its Preflight reset**. The original design relied on
  Bootstrap's "Reboot" defaults (heading sizes, margins, link colours…). Those defaults are
  recreated in the `base` layer of `src/index.css`.
- Tailwind breakpoints are set to Bootstrap's (576 / 768 / 992 / 1200 / 1400px), so the
  responsive layout switches at the same widths as before.
- Many classes use exact arbitrary values (e.g. `text-[1.25rem]`, `rounded-[0.375rem]`)
  on purpose: they are the original Bootstrap values.

## Technology we use
```bash
1.React + TypeScript
2.Tailwind CSS
3.Vite
4.React Router
```

## Contributing
We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors
- Visal
- Neath
- Rachana

## Acknowledgments
- Thanks to all our contributors and supporters.
- Special thanks to the open-source community.
