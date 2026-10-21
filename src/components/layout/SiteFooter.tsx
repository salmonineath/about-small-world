import { cn } from "../../lib/cn";
import { button, buttonOutlineWarning, formControl } from "../../lib/styles";

type FooterColumn = { title: string; links: string[] };

const columns: FooterColumn[] = [
  { title: "Quicklink", links: ["Home", "Features", "Pricing", "FAQs", "About"] },
  { title: "About us", links: ["Home", "Features", "Pricing", "FAQs", "About"] },
  { title: "Contact us", links: ["Phone", "Email", "Whatsapp", "Yahoo", "+855 092824223"] },
];

const socialIcons = ["fa-facebook", "fa-google", "fa-github", "fa-instagram", "fa-youtube"];

type SiteFooterProps = {
  /**
   * The two original pages had slightly different footers: the home page's
   * links were bold with an animated underline, and the copyright differed.
   */
  variant: "home" | "about";
  /** Home page only: id of the link marked active by the last click. */
  activeLinkId?: string;
  onLinkClick?: (linkId: string) => void;
};

export function SiteFooter({ variant, activeLinkId, onLinkClick }: SiteFooterProps) {
  const isHome = variant === "home";

  return (
    <div className={cn("bg-forest", !isHome && "mx-auto w-full px-3")}>
      <footer
        className={cn("py-12", isHome && "mx-auto w-full max-w-[1200px] px-8")}
      >
        <div className="-mx-3 flex flex-wrap text-light">
          {columns.map((column) => (
            <div
              key={column.title}
              className="mb-4 w-1/2 max-w-full shrink-0 px-3 md:w-1/6 md:flex-none"
            >
              <h5 className="heading-h4 font-bold">{column.title}</h5>
              <ul className="mb-0 flex list-none flex-col! flex-wrap pl-0">
                {column.links.map((label, index) => {
                  const linkId = `footer:${column.title}:${index}`;
                  return (
                    <li key={linkId} className="mb-2">
                      <a
                        href="#"
                        data-active={activeLinkId === linkId}
                        data-underline-focus={isHome ? "" : undefined}
                        onClick={() => onLinkClick?.(linkId)}
                        className={cn(
                          "p-0 no-underline transition-[color,background-color,border-color] duration-150 ease-in-out motion-reduce:transition-none",
                          isHome
                            ? "underline-grow inline-block font-bold text-white hover:text-[#0a58ca] focus:text-[#0a58ca]"
                            : "block text-white hover:text-white",
                        )}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="mb-4 w-full max-w-full shrink-0 px-3 md:ml-[8.33333333%] md:w-5/12 md:flex-none">
            <form>
              <h1 className="font-bold text-bs-warning">Subscribe to our Community</h1>
              <p className="text-white">Monthly digest of what's new and exciting from us.</p>
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <label htmlFor={`newsletter-${variant}`} className="sr-only">
                  Email address
                </label>
                <input
                  id={`newsletter-${variant}`}
                  type="text"
                  className={formControl}
                  placeholder="Email address"
                />
                <button type="button" className={cn(button, buttonOutlineWarning)}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="my-6 flex flex-col justify-between border-t border-border py-6 text-light sm:flex-row">
          <p className="text-white">
            {isHome
              ? "© 2024 Small World Company, All rights reserved."
              : "© 2024 Company, Inc. All rights reserved."}
          </p>
          <ul className="heading-h2 flex cursor-pointer list-none gap-4 pl-0">
            {socialIcons.map((icon) => (
              <li key={icon}>
                <i className={cn("fa-brands block!", icon)} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
