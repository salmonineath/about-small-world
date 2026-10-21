import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Collapse } from "../ui/Collapse";

const navItems = [
  { to: "/#why", label: "Why forests" },
  { to: "/#plant", label: "What we plant" },
  { to: "/#faq", label: "FAQ" },
  { to: "/about", label: "About us" },
];

const linkClass =
  "block rounded-md px-3 py-2 font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-pollen aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-canopy text-white">
      <nav aria-label="Main" className="wrap flex flex-wrap items-center gap-x-6 py-3">
        <Link to="/" onClick={close} className="mr-auto flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path d="M16 3c-5 5-9 10-9 15a9 9 0 0 0 18 0c0-5-4-10-9-15z" fill="currentColor" className="text-pollen" />
            <path d="M16 13v17" stroke="currentColor" strokeWidth="2.5" className="text-canopy" />
          </svg>
          Wildwood
        </Link>

        <button
          type="button"
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 rounded-md p-2 hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Collapse id="site-menu" open={menuOpen} className="basis-full md:flex! md:basis-auto">
          <ul className="flex flex-col gap-1 pt-2 pb-3 md:flex-row md:items-center md:p-0">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.to.includes("#") ? (
                  <Link to={item.to} onClick={close} className={linkClass}>
                    {item.label}
                  </Link>
                ) : (
                  <NavLink to={item.to} onClick={close} className={linkClass}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="mt-2 md:mt-0 md:ml-3">
              <Link
                to="/#donate"
                onClick={close}
                className="inline-flex rounded-full bg-pollen px-5 py-2 font-semibold text-ink transition-colors hover:bg-pollen-hover"
              >
                Donate
              </Link>
            </li>
          </ul>
        </Collapse>
      </nav>
    </header>
  );
}
