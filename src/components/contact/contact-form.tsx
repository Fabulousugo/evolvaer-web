"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Loader2,
  Radio,
} from "lucide-react";
import {
  type FormEvent,
  useState,
} from "react";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

type ContactFormData = {
  name: string;
  email: string;
  organisation: string;
  enquiry: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  organisation: "",
  enquiry: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] =
    useState<ContactFormData>(initialForm);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [error, setError] =
    useState("");

  const updateField = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.enquiry ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");

      setError(
        "Please complete all required fields.",
      );

      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Unable to send your message.",
        );
      }

      setForm(initialForm);
      setStatus("success");
    } catch (err) {
      setStatus("error");

      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative"
    >
      {/* =====================================================
          HONEYPOT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            updateField(
              "website",
              event.target.value,
            )
          }
        />
      </div>

      {/* =====================================================
          FORM HEADER
      ===================================================== */}

      <div className="mb-10 flex flex-col gap-6 border-b border-[#0A1D2F]/[0.075] pb-8 dark:border-white/[0.075] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA]">
              Communication channel
            </span>
          </div>

          <h3 className="mt-4 text-[1.8rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white sm:text-[2rem]">
            Tell us what you&apos;re
            thinking.
          </h3>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-30 motion-reduce:animate-none" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
          </span>

          <span className="font-mono text-[0.42rem] uppercase tracking-[0.14em] text-[#0A1D2F]/28 dark:text-white/24">
            Channel open
          </span>
        </div>
      </div>

      {/* =====================================================
          IDENTITY
      ===================================================== */}

      <FormSection
        number="01"
        title="About you"
        accent="#2563EB"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel
              htmlFor="name"
              required
            >
              Name
            </FieldLabel>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) =>
                updateField(
                  "name",
                  event.target.value,
                )
              }
              placeholder="Your name"
              className={inputClassName}
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="email"
              required
            >
              Email
            </FieldLabel>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) =>
                updateField(
                  "email",
                  event.target.value,
                )
              }
              placeholder="you@company.com"
              className={inputClassName}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="organisation">
              Organisation
            </FieldLabel>

            <input
              id="organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              value={form.organisation}
              onChange={(event) =>
                updateField(
                  "organisation",
                  event.target.value,
                )
              }
              placeholder="Optional"
              className={inputClassName}
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="enquiry"
              required
            >
              Enquiry type
            </FieldLabel>

            <div className="relative">
              <select
                id="enquiry"
                name="enquiry"
                required
                value={form.enquiry}
                onChange={(event) =>
                  updateField(
                    "enquiry",
                    event.target.value,
                  )
                }
                className={`${inputClassName} appearance-none pr-12`}
              >
                <option value="">
                  Select one
                </option>

                <option value="technology">
                  Technology opportunity
                </option>

                <option value="product-venture">
                  Product or venture
                </option>

                <option value="research">
                  Research collaboration
                </option>

                <option value="partnership">
                  Partnership
                </option>

                <option value="careers">
                  Careers & collaboration
                </option>

                <option value="general">
                  General enquiry
                </option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#22D3EE]" />
            </div>
          </Field>
        </div>
      </FormSection>

      {/* =====================================================
          CONVERSATION
      ===================================================== */}

      <FormSection
        number="02"
        title="The conversation"
        accent="#22D3EE"
      >
        <Field>
          <FieldLabel
            htmlFor="subject"
            required
          >
            Subject
          </FieldLabel>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={(event) =>
              updateField(
                "subject",
                event.target.value,
              )
            }
            placeholder="What would you like to discuss?"
            className={inputClassName}
          />
        </Field>

        <div className="mt-5">
          <Field>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <FieldLabel
                htmlFor="message"
                required
              >
                Message
              </FieldLabel>

              <span className="text-[0.68rem] text-[#0A1D2F]/30 dark:text-white/26">
                Problem · context · possibility
              </span>
            </div>

            <textarea
              id="message"
              name="message"
              rows={8}
              required
              value={form.message}
              onChange={(event) =>
                updateField(
                  "message",
                  event.target.value,
                )
              }
              placeholder="Tell us about the problem, opportunity or question..."
              className="mt-3 min-h-[13rem] w-full resize-y rounded-[1.4rem] border border-[#0A1D2F]/[0.09] bg-white/[0.48] px-5 py-5 text-base leading-7 text-[#0A1D2F] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#0A1D2F]/25 hover:border-[#0A1D2F]/15 focus:border-[#22D3EE]/55 focus:bg-white/[0.68] focus:shadow-[0_0_0_3px_rgba(34,211,238,.05)] dark:border-white/[0.09] dark:bg-white/[0.025] dark:text-white dark:placeholder:text-white/22 dark:hover:border-white/[0.15] dark:focus:border-[#22D3EE]/45 dark:focus:bg-white/[0.04]"
            />
          </Field>
        </div>
      </FormSection>

      {/* =====================================================
          STATUS
      ===================================================== */}

      <div
        aria-live="polite"
        className="mt-7"
      >
        {status === "error" &&
          error && (
            <div
              role="alert"
              className="flex items-start gap-4 rounded-[1.25rem] border border-red-500/20 bg-red-500/[0.055] px-5 py-4 text-sm leading-6 text-red-700 dark:text-red-300"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />

              <div>
                <p className="font-semibold">
                  Unable to send
                </p>

                <p className="mt-1 opacity-80">
                  {error}
                </p>
              </div>
            </div>
          )}

        {status === "success" && (
          <div
            role="status"
            className="relative overflow-hidden rounded-[1.25rem] border border-[#10B981]/25 bg-[#10B981]/[0.055] px-5 py-5"
          >
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-[#10B981]"
            />

            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0A1D2F] dark:text-white">
                  Message received.
                </p>

                <p className="mt-1 max-w-lg text-sm leading-6 text-[#0A1D2F]/48 dark:text-white/44">
                  Thanks for getting in
                  touch. Your enquiry has
                  been sent successfully.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          TRANSMIT
      ===================================================== */}

      <div className="mt-8 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.075] pt-7 dark:border-white/[0.075] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Radio className="h-3.5 w-3.5 text-[#22D3EE]" />

            <p className="text-[0.48rem] font-semibold uppercase tracking-[0.15em] text-[#0A1D2F]/32 dark:text-white/28">
              Ready to transmit
            </p>
          </div>

          <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/36 dark:text-white/32">
            Fields marked with * are
            required.
          </p>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-13 items-center justify-center gap-5 rounded-full bg-[#2563EB] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:shadow-[0_16px_44px_rgba(37,99,235,.22)] disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-55"
        >
          {status === "sending" ? (
            <>
              Sending

              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send enquiry

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ============================================================
   FORM SECTION
============================================================ */

function FormSection({
  number,
  title,
  accent,
  children,
}: {
  number: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="mb-6 flex items-center gap-3">
        <span
          className="font-mono text-[0.44rem]"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>

        <span
          className="h-px w-6"
          style={{
            backgroundColor: `${accent}45`,
          }}
        />

        <span className="text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/34 dark:text-white/29">
          {title}
        </span>
      </div>

      {children}
    </section>
  );
}

/* ============================================================
   FIELD
============================================================ */

function Field({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/42 dark:text-white/36"
    >
      {children}

      {required && (
        <span
          aria-hidden="true"
          className="text-[#22D3EE]"
        >
          *
        </span>
      )}
    </label>
  );
}

const inputClassName =
  "mt-3 w-full rounded-[1rem] border border-[#0A1D2F]/[0.085] bg-white/[0.44] px-4 py-4 text-base text-[#0A1D2F] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#0A1D2F]/25 hover:border-[#0A1D2F]/15 focus:border-[#22D3EE]/55 focus:bg-white/[0.68] focus:shadow-[0_0_0_3px_rgba(34,211,238,.05)] dark:border-white/[0.085] dark:bg-white/[0.025] dark:text-white dark:placeholder:text-white/22 dark:hover:border-white/[0.15] dark:focus:border-[#22D3EE]/45 dark:focus:bg-white/[0.04]";