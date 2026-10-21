import { useState } from "react";
import { Link } from "react-router";
import { homeNavItems } from "../../data/homeContent";
import { cn } from "../../lib/cn";
import { Collapse } from "../ui/Collapse";

type HomeHeaderProps = {
  activeLinkId: string;
  onLinkClick: (linkId: string) => void;
};

export function HomeHeader({ activeLinkId, onLinkClick }: HomeHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-200 w-full bg-forest">
      <nav
        id="nav"
        className="relative mx-12 flex flex-wrap items-center justify-between py-2 lg:flex-nowrap lg:justify-start"
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between px-8 lg:flex-nowrap">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="underline-grow mr-4 py-[0.3125rem] text-[1.5rem] leading-[1.5] font-[550] whitespace-nowrap text-white no-underline hover:text-black focus:text-black"
          >
            Wildwood
          </Link>
          <button
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-[0.375rem] border border-black/15 bg-transparent px-3 py-1 text-[1.25rem] leading-none text-black/65 transition-shadow duration-150 ease-in-out focus:shadow-[0_0_0_0.25rem] focus:outline-0 lg:hidden motion-reduce:transition-none"
          >
            <span className="bg-toggler-icon inline-block h-[1.5em] w-[1.5em] bg-size-[100%] bg-center bg-no-repeat align-middle" />
          </button>
          <Collapse
            id="navbarNav"
            open={menuOpen}
            className="grow basis-full items-center lg:flex! lg:basis-auto"
          >
            <ul className="mb-0 ml-auto flex list-none flex-col gap-6 pl-0 lg:flex-row">
              {homeNavItems.map((item) => {
                const isActive = activeLinkId === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      data-active={isActive}
                      data-underline-focus=""
                      onClick={() => onLinkClick(item.href)}
                      className={cn(
                        "underline-grow inline-block py-2 font-bold no-underline transition-[color,background-color,border-color] duration-150 ease-in-out lg:px-2 motion-reduce:transition-none",
                        isActive
                          ? "text-black hover:text-black"
                          : "text-white hover:text-black/80 focus:text-black/80",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Collapse>
        </div>
      </nav>
    </header>
  );
}
