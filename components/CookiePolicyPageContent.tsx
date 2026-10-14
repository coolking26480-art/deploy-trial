"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import HomeFooter from "./HomeFooter";
import Navigation from "./Navigation";

const sections = [
  { id: "what-are-cookies", label: "1. What are cookies?" },
  { id: "why-might-this-website-use-them", label: "2. Why might this website use them?" },
  { id: "technologies-used", label: "3. Technologies used on this website" },
  { id: "third-party-content", label: "4. Third-party content" },
  { id: "consent-and-preferences", label: "5. Consent and cookie preferences" },
  { id: "browser-controls", label: "6. Managing cookies in your browser" },
  { id: "changes", label: "7. Changes to this Cookie Policy" },
  { id: "contact", label: "8. Contact" },
];

const homeSections = new Set([
  "home",
  "qualifications",
  "work",
  "publications",
  "awards",
  "invited-talks",
]);

export default function CookiePolicyPageContent() {
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
              <span className="text-slate-700">Cookie Policy</span>
            </div>
          </nav>

          <article className="mx-auto max-w-[760px] pt-8">
            <header className="border-b border-slate-200 pb-8">
              <h1 className="text-4xl font-light tracking-[-0.04em] text-slate-900 sm:text-5xl">
                Cookie Policy
              </h1>
              <p className="mt-5 text-sm text-slate-500 sm:text-base">
                Last updated: 10 October 2026
              </p>
            </header>

            <div className="mt-9 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                This Cookie Policy explains how this website may use cookies and
                similar technologies when you visit. It should be read alongside
                the website&apos;s{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                The technologies used depend on the website&apos;s configuration,
                its functionality and any third-party content that loads. This
                policy will be updated if the implementation changes.
              </p>
            </div>

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
              <section id="what-are-cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  1. What are cookies?
                </h2>
                <p className="mt-4">
                  Cookies are small pieces of data that a website or service may
                  store on your device. They can support functions such as
                  remembering preferences, maintaining sessions, security and
                  measuring website usage.
                </p>
                <p className="mt-4">
                  Similar technologies may include browser storage, pixels and
                  scripts that store or access information on your device. These
                  technologies are not all technically cookies, but some may be
                  subject to similar privacy requirements.
                </p>
              </section>

              <section id="why-might-this-website-use-them" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  2. Why might this website use them?
                </h2>
                <p className="mt-4">
                  The reviewed application source contains no intentional
                  analytics, advertising or preference-storage implementation.
                  Third-party media embeds may be requested after a visitor
                  selects a media card. The providers may use technologies of
                  their own when that content loads.
                </p>
                <p className="mt-4">
                  The deployed hosting configuration and provider-side behaviour
                  have not been independently inspected, so this audit cannot
                  establish whether infrastructure or third-party services set
                  cookies in every environment.
                </p>
              </section>

              <section id="technologies-used" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  3. Technologies used on this website
                </h2>
                <p className="mt-4">
                  The table reflects code verified in the repository. It does not
                  represent a complete inventory of cookies set by a deployed
                  host or a third-party provider.
                </p>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-6">
                    <caption className="sr-only">
                      Technologies identified in the repository review and their
                      known cookie details
                    </caption>
                    <thead>
                      <tr className="border-y border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-500">
                        <th scope="col" className="px-3 py-3">Technology/provider</th>
                        <th scope="col" className="px-3 py-3">Purpose and category</th>
                        <th scope="col" className="px-3 py-3">Party</th>
                        <th scope="col" className="px-3 py-3">Duration / consent status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <th scope="row" className="px-3 py-4 font-medium text-slate-900">
                          Application-managed cookies and browser storage
                        </th>
                        <td className="px-3 py-4">
                          No cookie, local-storage or session-storage APIs were
                          identified in reviewed application source.
                        </td>
                        <td className="px-3 py-4">First party</td>
                        <td className="px-3 py-4">
                          None identified in source; deployed runtime unknown.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-3 py-4 font-medium text-slate-900">
                          YouTube video embed
                        </th>
                        <td className="px-3 py-4">
                          Embedded media, loaded in a player after a visitor
                          selects the video.
                        </td>
                        <td className="px-3 py-4">Third party</td>
                        <td className="px-3 py-4">
                          Cookie names and duration not verified. Consent needs
                          assessment for applicable law and provider behaviour.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-3 py-4 font-medium text-slate-900">
                          Facebook video embed
                        </th>
                        <td className="px-3 py-4">
                          Embedded media, loaded in a player after a visitor
                          selects the video.
                        </td>
                        <td className="px-3 py-4">Third party</td>
                        <td className="px-3 py-4">
                          Cookie names and duration not verified. Consent needs
                          assessment for applicable law and provider behaviour.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-3 py-4 font-medium text-slate-900">
                          Manrope via Next.js next/font
                        </th>
                        <td className="px-3 py-4">
                          Website typography. Next.js serves generated font
                          assets from the website at runtime; the font is not a
                          cookie.
                        </td>
                        <td className="px-3 py-4">
                          First party at runtime
                        </td>
                        <td className="px-3 py-4">
                          Not applicable as a cookie. Build-time source download
                          is not a visitor browser request.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-3 py-4 font-medium text-slate-900">
                          YouTube, Facebook, Spotify, Instagram and LinkedIn links
                        </th>
                        <td className="px-3 py-4">
                          Ordinary links opened on the external service; not an
                          embedded feed or script in the reviewed pages.
                        </td>
                        <td className="px-3 py-4">Third party</td>
                        <td className="px-3 py-4">
                          Not applicable on this site for a link alone. External
                          service practices apply after navigation.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Provider cookie names, lifetimes and any hosting-related
                  cookies remain unknown without examining the deployed site and
                  current provider documentation.
                </p>
              </section>

              <section id="third-party-content" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  4. Third-party content
                </h2>
                <p className="mt-4">
                  The Recent Media component contains YouTube and Facebook video
                  players. The player iframe is created only after a visitor
                  selects its corresponding media card. A separate link opens
                  YouTube, Facebook, Spotify or Instagram on that service.
                  LinkedIn appears as an ordinary link; no LinkedIn embed was
                  identified in the reviewed source.
                </p>
                <p className="mt-4">
                  When an embedded player loads, the relevant provider may receive
                  technical information, including your IP address and browser
                  information, and may use its own cookies or similar
                  technologies. The precise data, cookies and timing have not
                  been verified for the deployed site.
                </p>
                <p className="mt-4">
                  For more information, see the providers&apos;{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Google Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline decoration-blue-700/70 underline-offset-2 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                  >
                    Meta Privacy Policy
                  </a>
                  . Provider terms and practices may change.
                </p>
              </section>

              <section id="consent-and-preferences" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  5. Consent and cookie preferences
                </h2>
                <p className="mt-4">
                  No consent-management interface or consent preference storage
                  was identified in the reviewed source. The repository review
                  also found no intentional analytics or advertising scripts.
                </p>
                <p className="mt-4">
                  The media player embeds are initiated by selecting a media card,
                  rather than being inserted as page-load embeds. This interaction
                  does not by itself establish that all consent requirements are
                  met. Whether prior consent is required depends on the actual
                  technologies used by the providers, where visitors are located
                  and applicable law.
                </p>
                <p className="mt-4">
                  The deployed site and provider cookies have not been inspected,
                  so a definitive consent determination cannot be made from the
                  repository alone. The owner should verify deployed behaviour
                  and applicable requirements before relying on this assessment.
                  No cookie preference controls are offered by this website at
                  present.
                </p>
              </section>

              <section id="browser-controls" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  6. Managing cookies in your browser
                </h2>
                <p className="mt-4">
                  Most browsers allow you to view, block or delete cookies through
                  their privacy or site-settings controls. Blocking certain
                  cookies may affect some website functions.
                </p>
                <p className="mt-4">
                  Browser controls are separate from any consent preferences
                  offered by this website. Local storage is a separate technology
                  from cookies; no local-storage or session-storage use was
                  identified in the reviewed application source.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  7. Changes to this Cookie Policy
                </h2>
                <p className="mt-4">
                  This policy may be updated if the website&apos;s technologies,
                  third-party integrations or relevant legal requirements change.
                  The latest revision date will be displayed at the top of the
                  page.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-light tracking-[-0.03em] text-slate-900">
                  8. Contact
                </h2>
                <p className="mt-4">
                  For questions about this Cookie Policy, contact Dr. Moitrayee
                  Das using the public contact details provided on the website.
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
