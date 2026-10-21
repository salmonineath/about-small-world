/** Error message for the input with `inputId`; renders nothing without an error. */
export function FieldError({ inputId, error, className }: { inputId: string; error?: string; className: string }) {
  if (!error) return null;
  return (
    <p id={`${inputId}-error`} className={className}>
      {error}
    </p>
  );
}
