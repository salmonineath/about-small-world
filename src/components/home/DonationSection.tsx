import { useRef, useState, type FormEvent } from "react";
import { useSelectedRect } from "../../hooks/useSelectedRect";
import { cn } from "../../lib/cn";
import { buttonPrimary, fieldError, input } from "../../lib/styles";
import { EMAIL_PATTERN, errorProps, isValidPhone } from "../../lib/validation";
import { FieldError } from "../ui/FieldError";
import { Reveal } from "../ui/Reveal";

const PRESET_AMOUNTS = [10, 25, 50, 100];

type Field = "firstName" | "lastName" | "email" | "phone" | "amount";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Donor = { name: string; amount: string };

type TextFieldConfig = {
  name: Exclude<Field, "amount">;
  label: string;
  type: string;
  autoComplete: string;
  wide?: boolean;
  optional?: boolean;
};

const textFields: TextFieldConfig[] = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name", optional: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", wide: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", wide: true },
];

const rules: Array<{ field: Field; isValid: (value: string) => boolean; message: string }> = [
  { field: "amount", isValid: (value) => Number(value) >= 1, message: "Choose an amount of at least $1." },
  { field: "firstName", isValid: Boolean, message: "Enter your first name." },
  { field: "email", isValid: (value) => EMAIL_PATTERN.test(value), message: "Enter an email address like name@example.com." },
  { field: "phone", isValid: isValidPhone, message: "Enter a phone number with 7 to 15 digits." },
];

/** Errors keyed by field, in the order the fields appear on screen. */
function validate(values: Values): Errors {
  const failed = rules.filter((rule) => !rule.isValid(values[rule.field]));
  return Object.fromEntries(failed.map((rule) => [rule.field, rule.message]));
}

export function DonationSection() {
  const [donor, setDonor] = useState<Donor | null>(null);

  return (
    <section id="donate" className="bg-lichen">
      <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">Plant trees with us</h2>
          <p className="mt-6 max-w-[48ch] text-lg text-ink/80">
            Your gift pays for native seedlings, the local crews who plant them, and the care young
            trees need in their first years.
          </p>
        </Reveal>

        <Reveal step={1} className="rounded-lg bg-white p-6 shadow-[0_1px_2px_rgb(24_38_28/0.06),0_8px_32px_-8px_rgb(24_38_28/0.12)] sm:p-8">
          {donor ? (
            <DonationThanks donor={donor} onReset={() => setDonor(null)} />
          ) : (
            <DonationForm onDonated={setDonor} />
          )}
        </Reveal>
      </div>
    </section>
  );
}

function DonationThanks({ donor, onReset }: { donor: Donor; onReset: () => void }) {
  return (
    <div role="status">
      <h3 className="text-2xl font-bold">Thank you, {donor.name}.</h3>
      <p className="mt-3 text-ink/80">
        Your ${donor.amount} donation was received. This is a demo site, so no payment was taken.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 font-semibold text-moss underline underline-offset-4 hover:text-ink"
      >
        Make another donation
      </button>
    </div>
  );
}

function DonationForm({ onDonated }: { onDonated: (donor: Donor) => void }) {
  const [amount, setAmount] = useState("25");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const read = (name: string) => String(form.get(name) ?? "").trim();
    const values: Values = {
      firstName: read("firstName"),
      lastName: read("lastName"),
      email: read("email"),
      phone: read("phone"),
      amount,
    };
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) document.getElementById(`donate-${firstInvalid}`)?.focus();
    else onDonated({ name: values.firstName, amount });
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <AmountPicker amount={amount} onChange={setAmount} error={errors.amount} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {textFields.map((field) => (
          <TextField key={field.name} field={field} error={errors[field.name]} />
        ))}
      </div>
      <button type="submit" className={cn(buttonPrimary, "mt-8 w-full")}>
        {Number(amount) >= 1 ? `Donate $${amount}` : "Donate"}
      </button>
    </form>
  );
}

type AmountPickerProps = { amount: string; onChange: (amount: string) => void; error?: string };

function AmountPicker({ amount, onChange, error }: AmountPickerProps) {
  const presetIndex = PRESET_AMOUNTS.indexOf(Number(amount));
  const isPreset = presetIndex !== -1;
  const optionRefs = useRef<Array<HTMLElement | null>>([]);
  // The "Other" box is the last option; the pill sits there for a typed amount.
  const pill = useSelectedRect(optionRefs, isPreset ? presetIndex : PRESET_AMOUNTS.length, "amount");
  const setRef = (index: number) => (node: HTMLElement | null) => {
    optionRefs.current[index] = node;
  };

  return (
    <fieldset>
      <legend className="font-semibold">Amount</legend>
      <div className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {/* One pill slides behind the options to the selected amount. */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 rounded-md bg-canopy transition-[translate,width,height] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ translate: `${pill.left}px ${pill.top}px`, width: pill.width, height: pill.height }}
        />
        {PRESET_AMOUNTS.map((preset, index) => (
          <label key={preset} ref={setRef(index)} className="relative cursor-pointer">
            <input
              type="radio"
              name="amount-preset"
              value={preset}
              checked={amount === String(preset)}
              onChange={() => onChange(String(preset))}
              className="peer sr-only"
            />
            <span className="block rounded-md border border-ink/20 py-2.5 text-center font-semibold transition-[color,border-color] duration-300 peer-checked:border-canopy peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-pollen hover:border-ink/40">
              ${preset}
            </span>
          </label>
        ))}
        <div ref={setRef(PRESET_AMOUNTS.length)} className="relative col-span-2 sm:col-span-1">
          <label htmlFor="donate-amount" className="sr-only">
            Other amount in dollars
          </label>
          <input
            id="donate-amount"
            type="number"
            inputMode="numeric"
            min={1}
            placeholder="Other"
            value={isPreset ? "" : amount}
            onChange={(event) => onChange(event.target.value)}
            {...errorProps("donate-amount", error)}
            className={cn(
              input,
              // `!` so these beat the shared input colours regardless of CSS order.
              "bg-transparent! text-center font-semibold transition-[color,border-color] duration-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none",
              !isPreset && "border-canopy! text-white! placeholder:text-white/60!",
            )}
          />
        </div>
      </div>
      <FieldError inputId="donate-amount" error={error} className={fieldError} />
    </fieldset>
  );
}

function TextField({ field, error }: { field: TextFieldConfig; error?: string }) {
  const id = `donate-${field.name}`;

  return (
    <div className={cn(field.wide && "sm:col-span-2")}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {field.label}
        {field.optional && <span className="font-normal text-ink/60"> (optional)</span>}
      </label>
      <input
        id={id}
        name={field.name}
        type={field.type}
        autoComplete={field.autoComplete}
        {...errorProps(id, error)}
        className={input}
      />
      <FieldError inputId={id} error={error} className={fieldError} />
    </div>
  );
}
