import type { FormEvent } from "react";
import { cn } from "../../lib/cn";
import { button, buttonSuccess, formControl } from "../../lib/styles";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DonationField = {
  id: string;
  label: string;
  type: "email" | "number" | "text";
  placeholder: string;
};

const fields: DonationField[] = [
  { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
  { id: "number", label: "Phone", type: "number", placeholder: "Phone Number" },
  { id: "first-name", label: "First Name", type: "text", placeholder: "First Name" },
  { id: "last-name", label: "Last Name", type: "text", placeholder: "Last Name" },
];

type DonationValues = { email: string; number: string; firstName: string; lastName: string };

/**
 * The alert() messages the original main.js showed for a submission, in
 * order (including the extra alert when every field is empty).
 */
function getDonationAlerts(values: DonationValues) {
  const allEmpty = Object.values(values).every((value) => value === "");
  return allEmpty
    ? ["please fill out your information", getResultMessage(values)]
    : [getResultMessage(values)];
}

function getResultMessage({ email, number }: DonationValues) {
  if (!EMAIL_PATTERN.test(email)) return "Please fill your email.";
  const phoneLengthOk = number.length >= 7 && number.length <= 15;
  return phoneLengthOk ? "Thank you so much" : "Please enter your phone number";
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const value = (name: string) => String(form.get(name) ?? "").trim();
  const alerts = getDonationAlerts({
    email: value("email"),
    number: value("number"),
    firstName: value("first-name"),
    lastName: value("last-name"),
  });
  alerts.forEach((message) => alert(message));
}

export function DonationSection() {
  return (
    <section id="donate" className="ml-[30px]">
      <div className="-mx-3 flex flex-wrap">
        <div className="mb-4 w-full max-w-full shrink-0 px-3 sm:mb-0 sm:w-1/2">
          <h5 className="heading-h2 mt-12 mb-6 text-center">Please Donation</h5>
          <form id="user-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.id} className="mt-6 text-[0.875em] text-muted">
                <label htmlFor={field.id} className="mb-2 text-black">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  className={formControl}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div className="mx-auto mt-6 grid w-1/2 gap-2">
              <button type="submit" className={cn(button, buttonSuccess)}>
                Donate
              </button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-full shrink-0 px-3 sm:w-1/2">
          <div className="bg-donate-panel flex h-[80vh] flex-col items-center justify-center text-white">
            <img src="/images/forest-removebg-preview-1.png" alt="Friend Forest" width={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
