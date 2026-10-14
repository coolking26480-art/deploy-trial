"use client";

import { useState, type FormEvent } from "react";

import {
  type ContactField,
  type ContactSubmission,
  type ContactValidationErrors,
  validateContactSubmission,
} from "../lib/contact-validation";

const initialValues: ContactSubmission = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const labelClassName =
  "mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500";

const baseInputClassName =
  "w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-[21px] font-light leading-8 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus-visible:border-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:text-2xl";

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<
    Partial<Record<ContactField, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const updateField = (field: ContactField, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setStatus("");

    if (touched[field] || submitted) {
      setErrors(validateContactSubmission(nextValues).errors);
    }
  };

  const handleBlur = (field: ContactField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validateContactSubmission(values).errors);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validation = validateContactSubmission(values);
    setErrors(validation.errors);
    setStatus("");

    if (!validation.data) {
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus(
          result.error ?? "Your message could not be sent. Please try again.",
        );
        return;
      }

      setValues(initialValues);
      setTouched({});
      setSubmitted(false);
      setErrors({});
      setStatus("Thank you. Your message has been sent.");
    } catch {
      setStatus("Unable to send your message right now. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const fieldError = (field: ContactField) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        className="mt-2 text-sm text-red-600"
      >
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="mt-10 space-y-7 sm:mt-12 sm:space-y-8"
    >
      <div>
        <label htmlFor="contact-name" className={labelClassName}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
          required
          placeholder="Your name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`${baseInputClassName} ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClassName}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder="Your email address"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          onBlur={() => handleBlur("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`${baseInputClassName} ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {fieldError("email")}
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClassName}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={180}
          placeholder="What would you like to discuss?"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          onBlur={() => handleBlur("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={`${baseInputClassName} ${
            errors.subject ? "border-red-500" : ""
          }`}
        />
        {fieldError("subject")}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={5000}
          required
          placeholder="Write your message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={`${baseInputClassName} min-h-36 resize-y leading-8 ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        {status && (
          <p className="text-sm text-slate-600" role="status" aria-live="polite">
            {status}
          </p>
        )}
        <button
          type="submit"
          disabled={isSending}
          className="rounded-sm bg-blue-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 disabled:cursor-wait disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
