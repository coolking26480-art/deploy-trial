"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import HomeFooter from "./HomeFooter";
import Navigation from "./Navigation";

const sections = [
  { id: "purpose", label: "1. Purpose of this website" },
  { id: "intellectual-property", label: "2. Intellectual property and ownership" },
  { id: "acceptable-use", label: "3. Acceptable use" },
  { id: "accuracy-and-availability", label: "4. Accuracy and availability" },
  { id: "projects-research-and-opinions", label: "5. Projects, research and opinions" },
  { id: "external-links", label: "6. External links and third-party services" },
  { id: "contact-form", label: "7. Contact form and communications" },
  { id: "limitation-of-liability", label: "8. Limitation of liability" },
  { id: "privacy-and-cookies", label: "9. Privacy and cookies" },
  { id: "changes", label: "10. Changes to these terms" },
  { id: "applicable-law", label: "11. Applicable law" },
  { id: "contact", label: "12. Contact" },
];

const homeSections = new Set([
  "home",
  "qualifications",
  "work",
  "publications",
  "awards",
  "invited-talks",
]);

export default function TermsOfUsePageContent() {
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation
        activePanel=""
        onNavigate={handleNavigate}
        onContact={() => handleNavigate("contact")}
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
              <span className="text-slate-700">Terms of Use</span>
            </div>
          </nav>

          <article className="mx-auto max-w-[760px] pt-8">
            <header className="border-b border-slate-200 pb-8">
              <h1 className="text-4xl font-light tracking-[-0.04em] text-slate-900 sm:text-5xl">
                Terms of Use
              </h1>
              <p className="mt-5 text-sm text-slate-500 sm:text-base">
                Last updated: 10 October 2026
              </p>
            </header>

            <p className="mt-9 text-base leading-8 text-slate-600 sm:text-lg">
              These Terms of Use apply to your access to and use of this personal
              portfolio website operated by Dr. Moitrayee Das. By accessing the website,
              you agree to use it responsibly and in accordance with these terms.
              If you do not agree, please discontinue using the website.
            </p>

            <nav
              aria-label="Table of contents"
              className="mt-10 border-y border-slate-200 py-6"
            >
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Contents
              </h2>
              <ol className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-10 space-y-10 text-base leading-8 text-slate-700 sm:text-[17px]">
              <section id="purpose" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  1. Purpose of this website
                </h2>
                <p className="mt-4">
                  This website presents personal projects, research interests,
                  design work, writing and related professional information. It is
                  provided primarily for informational and portfolio purposes.
                </p>
                <p className="mt-4">
                  The content does not constitute professional, legal, medical,
                  financial or other specialist advice.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  2. Intellectual property and ownership
                </h2>
                <p className="mt-4">
                  Unless otherwise stated, original content created by Dr. Moitrayee Das
                  and published on this website, including text, original designs,
                  graphics, project descriptions and other creative work, is owned
                  by Dr. Moitrayee Das or used with appropriate permission.
                </p>
                <p className="mt-4">
                  Third-party materials, trademarks, logos, photographs, videos,
                  publications and other content remain the property of their
                  respective owners. Their appearance on this website does not
                  imply ownership by Dr. Moitrayee Das or endorsement by their owners.
                </p>
                <p className="mt-4">
                  You may view the website and share links to publicly accessible
                  pages. You must not reproduce, republish, distribute,
                  commercially exploit or present original material from this
                  website as your own without appropriate permission, unless
                  permitted by applicable law or an applicable licence.
                </p>
                <p className="mt-4">
                  If a project includes collaborators or third-party assets,
                  ownership and permitted use may differ. Check the relevant
                  credits and licence terms before reusing such material.
                </p>
              </section>

              <section id="acceptable-use" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  3. Acceptable use
                </h2>
                <p className="mt-4">You agree not to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Use the website for unlawful purposes.</li>
                  <li>
                    Attempt to gain unauthorised access to the website, its systems
                    or its data.
                  </li>
                  <li>
                    Interfere with the website&apos;s operation, availability or
                    security.
                  </li>
                  <li>
                    Introduce malicious code or deliberately abuse its forms or
                    functionality.
                  </li>
                  <li>
                    Misrepresent the ownership or authorship of website content.
                  </li>
                  <li>
                    Use automated methods to access or collect information in a way
                    that violates applicable law or the rights of others.
                  </li>
                </ul>
                <p className="mt-4">
                  Nothing in these terms excludes activities permitted by
                  applicable law.
                </p>
              </section>

              <section id="accuracy-and-availability" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  4. Accuracy and availability
                </h2>
                <p className="mt-4">
                  Reasonable care is taken to present information accurately, but
                  project descriptions, technical details, links and other content
                  may become outdated or contain errors.
                </p>
                <p className="mt-4">
                  The website and its content are provided on an informational
                  basis and may be updated, changed, suspended or removed without
                  notice.
                </p>
                <p className="mt-4">
                  To the extent permitted by applicable law, no guarantee is made
                  that the website will always be available, uninterrupted,
                  error-free or suitable for every purpose.
                </p>
              </section>

              <section id="projects-research-and-opinions" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  5. Projects, research and opinions
                </h2>
                <p className="mt-4">
                  Projects, research summaries, demonstrations and other materials
                  are presented to describe work, interests or ideas. They may be
                  experimental, educational, incomplete or subject to revision.
                </p>
                <p className="mt-4">
                  Opinions expressed on this website are personal unless
                  explicitly stated otherwise. Their publication does not
                  necessarily represent the views of any university, employer,
                  collaborator or other organisation.
                </p>
                <p className="mt-4">
                  Do not assume that a project demonstration or research discussion
                  is a validated product, clinical tool or professional
                  recommendation unless explicitly documented as such.
                </p>
              </section>

              <section id="external-links" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  6. External links and third-party services
                </h2>
                <p className="mt-4">
                  This website may link to or incorporate third-party websites,
                  platforms, videos, fonts or other services. These are provided
                  for convenience or to present relevant content.
                </p>
                <p className="mt-4">
                  Third-party services operate independently and may have their
                  own terms, privacy policies and technical practices. Dr. Moitrayee Das
                  does not control the availability or content of external
                  websites.
                </p>
                <p className="mt-4">
                  A link does not automatically imply endorsement, partnership or
                  responsibility for the linked service. Review the relevant third
                  party&apos;s terms before using its services.
                </p>
              </section>

              <section id="contact-form" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  7. Contact form and communications
                </h2>
                <p className="mt-4">
                  The contact form allows visitors to send enquiries using the
                  fields provided on the website.
                </p>
                <p className="mt-4">
                  You should submit accurate contact information and avoid
                  including passwords, payment information or sensitive
                  confidential information that is unnecessary for your enquiry.
                </p>
                <p className="mt-4">
                  Submitting a message does not guarantee a response, an offer of
                  employment, a collaboration, an agreement or the formation of a
                  contractual relationship.
                </p>
                <p className="mt-4">
                  Information submitted through the form is handled as described in
                  the website&apos;s{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  8. Limitation of liability
                </h2>
                <p className="mt-4">
                  To the extent permitted by applicable law, Dr. Moitrayee Das will not be
                  liable for indirect or consequential loss arising from the use
                  of, or inability to use, this website or reliance on its content.
                </p>
                <p className="mt-4">
                  Nothing in these terms excludes or limits liability where such
                  exclusion or limitation is prohibited by applicable law. Nothing
                  here affects any rights that cannot lawfully be waived.
                </p>
                <p className="mt-4">
                  Do not interpret this section as removing consumer or other
                  mandatory legal protections that apply to you.
                </p>
              </section>

              <section id="privacy-and-cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  9. Privacy and cookies
                </h2>
                <p className="mt-4">
                  Use of the website is also subject to its{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and, where available, its Cookie Policy and cookie preferences
                  interface.
                </p>
                <p className="mt-4">
                  These documents explain the website&apos;s information-handling
                  practices and the use of cookies or similar technologies. They
                  should be read alongside these terms.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  10. Changes to these terms
                </h2>
                <p className="mt-4">
                  These Terms of Use may be updated when the website, its
                  functionality or relevant legal requirements change.
                </p>
                <p className="mt-4">
                  The latest revision date will appear at the top of this page.
                  Continued use after updated terms are published may be subject
                  to the revised terms to the extent permitted by applicable law.
                </p>
              </section>

              <section id="applicable-law" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  11. Applicable law
                </h2>
                <p className="mt-4">
                  Applicable laws may depend on the circumstances of use and the
                  legal requirements that govern the website and its operator.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Owner review recommended: no jurisdiction, governing-law clause
                  or exclusive court venue has been specified. Seek appropriate
                  legal advice if a specific governing-law clause is needed.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  12. Contact
                </h2>
                <p className="mt-4">
                  For questions about these Terms of Use, contact Dr. Moitrayee Das
                  through the public contact details provided on this website.
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
