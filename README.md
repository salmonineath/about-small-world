# Small World Company

## Description
Small World Company is a collaborative project by Visal, Neath, and Rachana. Our mission is to create innovative solutions that connect people and ideas from around the globe.

The site ("Wildwood") was originally written in plain HTML, CSS, JavaScript and Bootstrap.
It has been migrated to **React + TypeScript + Tailwind CSS** (built with Vite) and redesigned
around a "field guide" idea: the species we plant are the centrepiece of the home page.

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
├── App.tsx                 # Routes, legacy URL redirects, scroll handling (top of page / #section)
├── index.css               # Tailwind setup, colour + font tokens, base styles
├── pages/                  # HomePage, AboutPage
├── components/
│   ├── home/               # Home sections (hero, field guide, donation form, FAQ…)
│   ├── about/              # About sections (impact, progress, timeline, supporters, team)
│   ├── layout/             # SiteHeader and SiteFooter, shared by both pages
│   └── ui/                 # Collapse (menu / FAQ), FieldError
├── hooks/                  # useInView
├── data/                   # Page content (species, FAQ, stats, team, supporters…)
└── lib/                    # Class-name helper, shared button/input styles, form validation
```

## Design notes
- Colours and fonts are defined once as Tailwind theme tokens in `src/index.css`
  (`canopy`, `lichen`, `paper`, `ink`, `moss`, `fern`, `pollen`). Pollen yellow is
  reserved for the Donate action.
- Type: Schibsted Grotesk for everything; Newsreader italic only for Latin species names.
- Forms validate inline (no `alert()`), and the donation and newsletter forms are demos:
  nothing is charged or stored.
- Motion is limited to the hero entrance, the field-guide photo change, the FAQ and the
  progress bars, and is switched off for people who prefer reduced motion.

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
