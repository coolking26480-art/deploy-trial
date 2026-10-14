"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import HomeFooter from "./HomeFooter";
import Navigation from "./Navigation";

const sections = [
  { id: "who-is-responsible", label: "1. Who is responsible for your information?" },
  { id: "what-information-do-we-collect", label: "2. What information do we collect?" },
  { id: "why-do-we-use-this-information", label: "3. Why do we use this information?" },
  {
    id: "how-is-contact-form-information-processed",
    label: "4. How is contact form information processed?",
  },
  {
    id: "how-long-do-we-retain-your-information",
    label: "5. How long do we retain your information?",
  },
  {
    id: "who-may-process-or-receive-your-information",
    label: "6. Who may process or receive your information?",
  },
  {
    id: "third-party-links-videos-social-content-and-fonts",
    label: "7. Third-party links, videos, social content and fonts",
  },
  { id: "cookies-and-similar-technologies", label: "8. Cookies and similar technologies" },
  { id: "how-do-we-protect-information", label: "9. How do we protect information?" },
  { id: "your-privacy-requests", label: "10. Your privacy requests" },
  { id: "international-visitors", label: "11. International visitors" },
  { id: "changes-to-this-privacy-policy", label: "12. Changes to this Privacy Policy" },
  { id: "contact", label: "13. Contact" },
];

export default function PrivacyPolicyPageContent() {
  const router = useRouter();
  const homeSections = new Set([
    "home",
    "qualifications",
    "work",
    "publications",
    "awards",
    "invited-talks",
  ]);

  const handleNavigate = (target: string) => {
    if (target === "contact") {
      router.push("/contact");
      return;
    }

    if (!homeSections.has(target)) {
      return;
    }

    router.push(target === "home" ? "/" : `/#${target}`);
  };

  const handleContact = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation
        activePanel=""
        onNavigate={handleNavigate}
        onContact={handleContact}
      />

      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 md:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/"
                className="font-medium text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-700">Privacy Policy</span>
            </div>
          </nav>

          <article className="mx-auto max-w-[760px] pt-8">
            <header className="border-b border-slate-200 pb-8">
              <h1 className="text-4xl font-light tracking-[-0.04em] text-slate-900 sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 text-sm text-slate-500 sm:text-base">
                Last updated: 10 October 2026
              </p>
            </header>

            <div className="mt-9 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                This Privacy Policy explains how Dr. Moitrayee Das collects,
                uses, stores and handles personal information when you visit this
                website or submit a message through its contact form.
              </p>

              <p>
                This is a personal portfolio website featuring projects, research
                interests, design work and writing. Please read this policy to
                understand what information is processed when you interact with
                the website.
              </p>
            </div>

            <nav
              aria-label="Table of contents"
              className="mt-10 rounded-sm border border-slate-200 bg-slate-50/80 p-5 sm:p-6"
            >
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Contents
              </h2>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="inline-flex items-start gap-2 text-left transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-10 text-base leading-8 text-slate-700 sm:text-[17px]">
              <section id="who-is-responsible" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  1. Who is responsible for your information?
                </h2>
                <p className="mt-4">
                  Dr. Moitrayee Das operates this personal portfolio website and
                  handles the information submitted through its contact form.
                </p>
                <p className="mt-4">
                  For questions about this Privacy Policy or requests concerning
                  personal information submitted through the website, please use
                  the contact details provided on the website.
                </p>
              </section>

              <section id="what-information-do-we-collect" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  2. What information do we collect?
                </h2>

                <h3 className="mt-5 text-lg font-medium text-slate-900">
                  Information you submit
                </h3>
                <p className="mt-4">
                  When you use the contact form, you may provide:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Name:</strong> To identify you when responding to your
                    message.
                  </li>
                  <li>
                    <strong>Email address:</strong> To reply to your enquiry.
                  </li>
                  <li>
                    <strong>Subject:</strong> To understand the topic of your
                    message.
                  </li>
                  <li>
                    <strong>Message:</strong> The content of your enquiry or
                    communication.
                  </li>
                </ul>
                <p className="mt-4">
                  Please do not include passwords, payment details, sensitive
                  personal information or other confidential information in your
                  message unless it is genuinely necessary.
                </p>

                <h3 className="mt-6 text-lg font-medium text-slate-900">
                  Information processed automatically
                </h3>
                <p className="mt-4">
                  The website may process limited technical information as part of
                  normal website delivery, security and operation. This can include
                  information handled by the hosting infrastructure or third-party
                  services.
                </p>
                <p className="mt-4">
                  The exact information processed depends on the website&apos;s
                  hosting configuration and integrations. This policy does not
                  claim that particular technical logs or identifiers are collected
                  unless the implementation has been verified.
                </p>
              </section>

              <section id="why-do-we-use-this-information" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  3. Why do we use this information?
                </h2>
                <p className="mt-4">
                  Information submitted through the contact form is used to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Receive and understand your enquiry.</li>
                  <li>Respond to your message.</li>
                  <li>Continue a conversation you initiate.</li>
                  <li>Maintain relevant correspondence and records.</li>
                  <li>
                    Protect the website and investigate misuse where reasonably
                    necessary.
                  </li>
                </ul>
                <p className="mt-4">
                  Your contact details are not intentionally collected through this
                  form for an unrelated mailing list or marketing campaign.
                </p>
              </section>

              <section
                id="how-is-contact-form-information-processed"
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  4. How is contact form information processed?
                </h2>
                <p className="mt-4">
                  When you submit the contact form, the website uses Resend, an
                  email delivery service, to process and transmit the submission to
                  the website owner&apos;s email account.
                </p>
                <p className="mt-4">
                  The submitted fields may therefore be processed by the
                  website&apos;s application, Resend and the email provider that hosts
                  the recipient&apos;s mailbox.
                </p>
                <p className="mt-4">
                  Resend operates under its own policies and terms. You can review
                  its <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800">Privacy Policy</a> and <a href="https://resend.com/security" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800">Security information</a>.
                </p>
                <p className="mt-4">
                  Resend&apos;s processing and retention practices are separate from the
                  retention of messages in the recipient&apos;s mailbox. The exact
                  processing details depend on the service configuration and
                  applicable service terms.
                </p>
              </section>

              <section id="how-long-do-we-retain-your-information" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  5. How long do we retain your information?
                </h2>
                <p className="mt-4">
                  Contact form submissions delivered to the website owner&apos;s personal
                  email account are currently retained for up to 100 years, unless
                  the messages are deleted earlier.
                </p>
                <p className="mt-4">
                  This describes the current mailbox retention arrangement. It does
                  not mean that every copy of a submission is retained for the same
                  period by Resend, the website host or any other service provider.
                </p>
                <p className="mt-4">
                  Third-party services may apply their own retention periods to
                  messages, logs, backups and related technical information. Refer to
                  their current documentation for details.
                </p>
              </section>

              <section
                id="who-may-process-or-receive-your-information"
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  6. Who may process or receive your information?
                </h2>
                <p className="mt-4">
                  Information submitted through the contact form may be processed by:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    The website owner, who receives and manages the correspondence.
                  </li>
                  <li>
                    Resend, which processes the contact form submission for email
                    delivery.
                  </li>
                  <li>
                    The email service provider hosting the recipient&apos;s mailbox.
                  </li>
                  <li>
                    Hosting or infrastructure providers, where necessary to deliver
                    and operate the website.
                  </li>
                </ul>
                <p className="mt-4">
                  These services process information according to their respective
                  roles, configurations and terms.
                </p>
              </section>

              <section
                id="third-party-links-videos-social-content-and-fonts"
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  7. Third-party links, videos, social content and fonts
                </h2>
                <p className="mt-4">
                  This website links to third-party services including LinkedIn,
                  and its Recent Media section can load YouTube and Facebook video
                  players after you select a media card. Manrope is configured
                  through Next.js&apos;s font optimization and is served as a
                  website asset at runtime.
                </p>
                <p className="mt-4">
                  An ordinary link to an external website generally behaves
                  differently from an embedded player, social feed or external
                  script. LinkedIn is linked to, but no LinkedIn embed was
                  identified in the reviewed source.
                </p>
                <p className="mt-4">
                  When you interact with or load an embedded third-party component,
                  that provider may receive technical information such as your IP
                  address, browser information and details of the requested
                  resource. The exact information and timing depend on the
                  integration.
                </p>
                <p className="mt-4">
                  Third-party providers operate under their own privacy policies and
                  may use their own technologies. Review the relevant provider&apos;s
                  privacy information before interacting with its services.
                </p>
              </section>

              <section id="cookies-and-similar-technologies" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  8. Cookies and similar technologies
                </h2>
                <p className="mt-4">
                  The website does not intentionally use an analytics service,
                  according to the current configuration described by the owner.
                  This does not establish that the website or its service providers
                  use no cookies or similar technologies.
                </p>
                <p className="mt-4">
                  Essential technologies may be used to deliver, protect or operate
                  the website. Third-party embedded content may also use
                  technologies that store information on or access information from
                  your device.
                </p>
                <p className="mt-4">
                  The website&apos;s use of these technologies should be assessed
                  against the applicable laws and the actual implementation. Where
                  consent is legally required, the relevant non-essential
                  technologies should not be activated before valid consent has been
                  obtained.
                </p>
                <p className="mt-4">
                  This Privacy Policy does not itself constitute a cookie consent
                  mechanism.
                </p>
              </section>

              <section id="how-do-we-protect-information" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  9. How do we protect information?
                </h2>
                <p className="mt-4">
                  Reasonable steps should be taken to protect contact form
                  information from unauthorised access, disclosure, alteration or
                  loss.
                </p>
                <p className="mt-4">
                  The website relies in part on the security measures of the hosting,
                  email delivery and mailbox providers involved in processing
                  submissions.
                </p>
                <p className="mt-4">
                  No method of transmitting or storing information can be guaranteed
                  to be completely secure.
                </p>
              </section>

              <section id="your-privacy-requests" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  10. Your privacy requests
                </h2>
                <p className="mt-4">
                  Depending on the applicable law and circumstances, you may have
                  rights concerning your personal information. These may include
                  requesting access, correction or deletion, or raising a concern
                  about how information is handled.
                </p>
                <p className="mt-4">
                  You can contact the website owner using the public contact details
                  on this website to make a request concerning a contact form
                  submission.
                </p>
                <p className="mt-4">
                  The owner will review the request and respond as appropriate under
                  applicable law. Requests may be subject to identity verification
                  and lawful retention requirements.
                </p>
              </section>

              <section id="international-visitors" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  11. International visitors
                </h2>
                <p className="mt-4">
                  The website is accessible to visitors worldwide. Information
                  submitted through the contact form may be processed by third-party
                  service providers whose infrastructure is located in a different
                  country from yours.
                </p>
                <p className="mt-4">
                  Applicable privacy laws and safeguards depend on the services
                  involved, the locations of processing and the circumstances in
                  which the website is used.
                </p>
              </section>

              <section id="changes-to-this-privacy-policy" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  12. Changes to this Privacy Policy
                </h2>
                <p className="mt-4">
                  This Privacy Policy may be updated when the website, its
                  integrations, its data handling practices or applicable legal
                  requirements change.
                </p>
                <p className="mt-4">
                  The latest revision date will be displayed at the top of this
                  page. Visitors should review this page periodically for relevant
                  changes.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  13. Contact
                </h2>
                <p className="mt-4">
                  If you have questions about this Privacy Policy or wish to make a
                  privacy-related request, contact Dr. Moitrayee Das using the
                  public contact information provided on this website.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
