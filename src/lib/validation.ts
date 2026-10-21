export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Counts digits only, so "+855 92 824 223" and "092824223" are both accepted. */
export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "").length;
  return digits >= 7 && digits <= 15;
}

/** ARIA props linking an input to its error message (empty when there is no error). */
export function errorProps(inputId: string, error: string | undefined) {
  return error ? { "aria-invalid": true, "aria-describedby": `${inputId}-error` } : {};
}
