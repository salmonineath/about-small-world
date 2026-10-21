/** Shared class strings for the few controls that appear on several sections. */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-150";

/** The one high-emphasis action on a surface (Donate). */
export const buttonPrimary = `${buttonBase} bg-pollen text-ink hover:bg-pollen-hover`;

/** Secondary action on a dark (canopy / photo) surface. */
export const buttonOnDark = `${buttonBase} border border-white/40 text-white hover:border-white hover:bg-white/10`;

export const input =
  "block w-full rounded-md border border-ink/20 bg-white px-3.5 py-2.5 text-ink placeholder:text-ink/45 hover:border-ink/40 aria-invalid:border-error";

export const fieldError = "mt-1.5 text-sm font-medium text-error";
