"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  FormEvent,
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
    useState<ContactFormData>(
      initialForm,
    );

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
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
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
        <div>
          <label
            htmlFor="name"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
          >
            Name *
          </label>

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
            className="mt-3 w-full border-b border-midnight/[0.12] bg-transparent py-4 text-base outline-none transition-colors placeholder:text-midnight/25 focus:border-gold dark:border-white/[0.12] dark:placeholder:text-white/22"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
          >
            Email *
          </label>

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
            className="mt-3 w-full border-b border-midnight/[0.12] bg-transparent py-4 text-base outline-none transition-colors placeholder:text-midnight/25 focus:border-gold dark:border-white/[0.12] dark:placeholder:text-white/22"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="organisation"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
          >
            Organisation
          </label>

          <input
            id="organisation"
            name="organisation"
            type="text"
            value={form.organisation}
            onChange={(event) =>
              updateField(
                "organisation",
                event.target.value,
              )
            }
            placeholder="Optional"
            className="mt-3 w-full border-b border-midnight/[0.12] bg-transparent py-4 text-base outline-none transition-colors placeholder:text-midnight/25 focus:border-gold dark:border-white/[0.12] dark:placeholder:text-white/22"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
          >
            Enquiry type *
          </label>

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
            className="mt-3 w-full border-b border-midnight/[0.12] bg-transparent py-4 text-base outline-none transition-colors focus:border-gold dark:border-white/[0.12]"
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
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
        >
          Subject *
        </label>

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
          className="mt-3 w-full border-b border-midnight/[0.12] bg-transparent py-4 text-base outline-none transition-colors placeholder:text-midnight/25 focus:border-gold dark:border-white/[0.12] dark:placeholder:text-white/22"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-midnight/42 dark:text-white/36"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          value={form.message}
          onChange={(event) =>
            updateField(
              "message",
              event.target.value,
            )
          }
          placeholder="Tell us about the problem, opportunity or question..."
          className="mt-3 w-full resize-none rounded-[1.4rem] border border-midnight/[0.1] bg-white/20 p-5 text-base leading-7 outline-none transition-colors placeholder:text-midnight/25 focus:border-gold dark:border-white/[0.1] dark:bg-white/[0.018] dark:placeholder:text-white/22"
        />
      </div>

      {status === "error" &&
        error && (
          <div
            role="alert"
            className="rounded-[1.2rem] border border-red-500/20 bg-red-500/[0.05] px-5 py-4 text-sm leading-6 text-red-700 dark:text-red-300"
          >
            {error}
          </div>
        )}

      {status === "success" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-[1.2rem] border border-gold/25 bg-gold/[0.06] px-5 py-4"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

          <div>
            <p className="text-sm font-semibold">
              Message received.
            </p>

           <p className="mt-1 text-sm leading-6 text-midnight/48 dark:text-white/44">
                Thanks for getting in touch.
                Your enquiry has been sent
                successfully.
                </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5 border-t border-midnight/[0.08] pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-6 text-midnight/38 dark:text-white/34">
          Fields marked with * are
          required.
        </p>

        <button
          type="submit"
          disabled={
            status === "sending"
          }
          className="group inline-flex min-h-14 items-center justify-center gap-7 rounded-full bg-midnight px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#13283d] disabled:pointer-events-none disabled:opacity-55 dark:bg-gold dark:text-midnight dark:hover:bg-[#ffc15d]"
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