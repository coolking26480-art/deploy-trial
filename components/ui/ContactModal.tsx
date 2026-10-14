"use client";

import { FormEvent, useEffect, useRef } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Backend connection will be added in Step 2.
     */
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/35 px-5 py-8 backdrop-blur-[2px]"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]"
      >
        {/* Header */}
        <div className="border-b border-slate-200 px-7 py-6 md:px-9">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Get in touch
          </p>

          <h2
            id="contact-modal-title"
            className="mt-2 pr-10 text-2xl font-semibold tracking-tight text-slate-900 md:text-[26px]"
          >
            Contact Dr. Moitrayee Das
          </h2>

          <p className="mt-3 max-w-[430px] text-sm leading-6 text-slate-500">
            Please leave your contact details and a message. I will get back
            to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-7 py-7 md:px-9 md:py-8">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Phone number
                <span className="ml-2 font-normal text-slate-400">
                  Optional
                </span>
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91"
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-slate-800"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="How can I help?"
                className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex items-center justify-end">
            <button
              type="submit"
              className="rounded-md bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              Send Message
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}