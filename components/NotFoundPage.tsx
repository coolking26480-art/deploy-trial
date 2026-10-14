"use client";

import { useState, type FormEvent } from "react";
import { BriefcaseBusiness, Landmark, Search } from "lucide-react";

import Navigation from "./Navigation";

const searchTargets = [
  {
    target: "home",
    terms: ["home"],
  },
  {
    target: "qualifications",
    terms: ["academic", "qualification", "qualifications", "education", "degree"],
  },
  {
    target: "work",
    terms: ["work", "experience", "career", "employment"],
  },
  {
    target: "publications",
    terms: [
      "publication",
      "publications",
      "research",
      "paper",
      "papers",
      "journal",
      "editorial",
    ],
  },
  {
    target: "awards",
    terms: ["award", "awards", "recognition", "honour", "honors"],
  },
  {
    target: "invited-talks",
    terms: ["talk", "talks", "invited", "lecture", "lectures", "outreach"],
  },
];

export default function NotFoundPage() {
  const [query, setQuery] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const handleNavigate = (target: string) => {
    if (target === "home") {
      window.location.assign("/");
      return;
    }

    if (target === "contact") {
      window.location.assign("/contact");
      return;
    }

    window.location.assign(`/#${target}`);
  };

  const handleContact = () => {
    window.location.assign("/contact");
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      setSearchMessage("Enter something to search.");
      return;
    }

    const match = searchTargets.find(({ terms }) =>
      terms.some((term) => normalizedQuery.includes(term)),
    );

    if (!match) {
      setSearchMessage(
        "No matching section found. Try publications, work, awards, or qualifications.",
      );
      return;
    }

    handleNavigate(match.target);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation
        activePanel=""
        onNavigate={handleNavigate}
        onContact={handleContact}
      />

      <main className="pt-20">
        <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-20 md:px-10 lg:px-16">
          <div className="w-full max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
              Page not found
            </p>

            <h1 className="mt-4 text-[88px] font-light leading-none tracking-[-0.06em] text-slate-900 md:text-[120px]">
              404
            </h1>

            <h2 className="mt-6 text-2xl font-medium tracking-tight text-slate-900 md:text-3xl">
              We could not find that page.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
              The page you are looking for may have moved, been removed, or
              never existed.
            </p>

            <form
              onSubmit={handleSearch}
              className="mx-auto mt-10 w-full max-w-xl"
            >
              <div className="flex overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm transition-colors focus-within:border-blue-700">
                <div className="flex flex-1 items-center px-4">
                  <Search
                    size={18}
                    strokeWidth={1.7}
                    className="mr-3 shrink-0 text-slate-400"
                  />

                  <input
                    type="text"
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setSearchMessage("");
                    }}
                    placeholder="Search the site"
                    className="w-full bg-transparent py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 md:text-base"
                    aria-label="Search the site"
                  />
                </div>

                <button
                  type="submit"
                  className="shrink-0 bg-blue-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800 md:px-6"
                >
                  Search
                </button>
              </div>

              {searchMessage && (
                <p className="mt-3 text-sm text-slate-500" role="status">
                  {searchMessage}
                </p>
              )}
            </form>

            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="mt-8 rounded-md border border-blue-700 px-5 py-3 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
            >
              Back to Home
            </button>

            <div id="not-found-interactive-area" className="mt-16" aria-hidden="true" />
          </div>
        </section>

        <footer className="snap-end bg-slate-950 px-6 pt-12 pb-6 text-white md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.8fr]">
              <div>
                <p className="text-xl font-semibold tracking-tight">
                  Dr. Moitrayee Das
                </p>

                <p className="mt-2 text-base text-slate-400">
                  Assistant Professor of Psychology
                </p>

                <div className="mt-7 h-px w-12 bg-blue-700" />

                <p className="mt-5 max-w-sm text-base leading-7 text-slate-400">
                  Research · Teaching · Outreach
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Contact
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+917002832281"
                    className="group flex items-center gap-4 text-base text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors group-hover:border-blue-700 group-hover:text-blue-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 4.5 8.2 3l2.1 4.8-2 1.3a15.4 15.4 0 0 0 6.6 6.6l1.3-2L21 15.8 19.5 19c-.4.8-1.3 1.2-2.2 1-7.1-1.5-12.8-7.2-14.3-14.3-.2-.9.2-1.8 1-2.2Z"
                        />
                      </svg>
                    </span>

                    <span>+91 7002832281</span>
                  </a>

                  <a
                    href="mailto:moitrayee.das@flame.edu.in"
                    className="group flex items-center gap-4 text-base text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors group-hover:border-blue-700 group-hover:text-blue-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 7 7.5 6 7.5-6"
                        />
                      </svg>
                    </span>

                    <span>moitrayee.das@flame.edu.in</span>
                  </a>

                  <div className="flex items-start gap-4 text-base text-slate-300">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 10.5c0 5.2-8 10-8 10s-8-4.8-8-10a8 8 0 1 1 16 0Z"
                        />
                        <circle cx="12" cy="10.5" r="2.5" />
                      </svg>
                    </span>

                    <span className="leading-6">
                      Gat No. 1270, FLAME University,
                      <br />
                      Lavale, Pune
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Connect
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://www.linkedin.com/in/dr-moitrayee-das-she-her-25ba5b55/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-slate-700 transition-colors hover:border-blue-700">
                      <BriefcaseBusiness
                        size={18}
                        strokeWidth={1.8}
                        className="text-slate-300 transition-colors hover:text-blue-400"
                      />
                    </span>

                    <span>LinkedIn</span>

                    <span className="ml-auto text-slate-600">↗</span>
                  </a>

                  <a
                    href="https://www.flame.edu.in/faculty/moitrayee-das"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-slate-700 transition-colors hover:border-blue-700">
                      <Landmark
                        size={18}
                        strokeWidth={1.8}
                        className="text-slate-300 transition-colors hover:text-blue-400"
                      />
                    </span>

                    <span>FLAME University</span>

                    <span className="ml-auto text-slate-600">↗</span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-slate-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 3.5h8l4 4v13H6v-17Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3.5v4h4M9 12h6M9 15.5h6"
                        />
                      </svg>
                    </span>

                    <span>Curriculum Vitae</span>

                    <span className="ml-auto text-slate-600">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs text-slate-600">
              <p>© {new Date().getFullYear()} Dr. Moitrayee Das</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
