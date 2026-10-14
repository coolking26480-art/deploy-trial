
"use client";

import Navigation from "../../components/Navigation";
import ContactForm from "../../components/ContactForm";
import HomeFooter from "../../components/HomeFooter";

const homeSections = new Set([
  "home",
  "qualifications",
  "work",
  "publications",
  "awards",
  "invited-talks",
]);

export default function ContactPage() {
  const handleNavigate = (target: string) => {
    if (target === "contact") {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    if (!homeSections.has(target)) {
      return;
    }

    window.location.assign(target === "home" ? "/" : `/#${target}`);
  };

  const handleContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation
        activePanel=""
        onNavigate={handleNavigate}
        onContact={handleContact}
      />

      <main className="pt-20">
        <section className="px-6 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto grid min-h-[calc(100svh-13rem)] w-full max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 xl:gap-32">
            <section
              aria-labelledby="contact-information-heading"
              className="max-w-xl"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Get in touch
              </p>

              <h1
                id="contact-information-heading"
                className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[56px]"
              >
                Dr. Moitrayee <span className="text-blue-700">Das</span>
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Assistant Professor of Psychology
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                For academic enquiries, research collaborations, teaching, or
                speaking engagements, please get in touch.
              </p>

              <dl className="mt-12 space-y-8 sm:mt-14">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </dt>

                  <dd className="mt-2 text-lg font-light leading-8 sm:text-xl">
                    <a
                      href="mailto:moitrayee.das@flame.edu.in"
                      className="break-words text-lg font-light text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:text-xl"
                    >
                      moitrayee.das@flame.edu.in
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Phone
                  </dt>

                  <dd className="mt-2 text-lg font-light leading-8 sm:text-xl">
                    <a
                      href="tel:+917002832281"
                      className="text-lg font-light text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:text-xl"
                    >
                      +91 7002832281
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Address
                  </dt>

                  <dd className="mt-2 text-lg font-light leading-8 text-slate-700 sm:text-xl">
                    Gat No. 1270, FLAME University,
                    <br />
                    Lavale, Pune
                  </dd>
                </div>
              </dl>
            </section>

            <section
              aria-labelledby="contact-form-heading"
              className="w-full max-w-2xl lg:justify-self-end"
            >
              <h2
                id="contact-form-heading"
                className="mt-0 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl"
              >
                Leave a message
              </h2>

              <ContactForm />
            </section>
          </div>
        </section>

        <HomeFooter />
      </main>
    </div>
  );
}