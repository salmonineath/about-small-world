import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { EMAIL_PATTERN, errorProps } from "../../lib/validation";
import { FieldError } from "../ui/FieldError";

const exploreLinks = [
  { to: "/#why", label: "Why forests matter" },
  { to: "/#plant", label: "What we plant" },
  { to: "/#donate", label: "Donate" },
  { to: "/#faq", label: "FAQ" },
  { to: "/about", label: "About us" },
  { to: "/about#supporters", label: "Supporters" },
];

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-canopy-deep text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.6fr]">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">Wildwood</p>
          <p className="mt-2 max-w-[28ch] text-sm">
            A reforestation project by Small World Company.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="tel:+85592824223" className="hover:text-white hover:underline">
                +855 92 824 223
              </a>
            </li>
          </ul>
        </div>

        <NewsletterForm />
      </div>

      <div className="wrap text-sm">
        <p className="border-t border-white/10 py-6">© {YEAR} Small World Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div>
      <h2 className="text-sm font-semibold text-white">Monthly field notes</h2>
      <p className="mt-3 text-sm">One email a month on what we planted and where.</p>
      {subscribed ? (
        <p role="status" className="mt-4 text-sm font-medium text-fern">
          You're on the list. (This demo site doesn't send email yet.)
        </p>
      ) : (
        <NewsletterFields onSubscribed={() => setSubscribed(true)} />
      )}
    </div>
  );
}

function NewsletterFields({ onSubscribed }: { onSubscribed: () => void }) {
  const [error, setError] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    if (EMAIL_PATTERN.test(email)) onSubscribed();
    else setError("Enter an email address like name@example.com.");
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...errorProps("newsletter-email", error)}
          className="min-w-0 flex-1 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/45 hover:border-white/45"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
        >
          Subscribe
        </button>
      </div>
      <FieldError inputId="newsletter-email" error={error} className="mt-2 text-sm font-medium text-pollen" />
    </form>
  );
}
