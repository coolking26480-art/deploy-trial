"use client";

import { useState } from "react";
import { publicationCategories } from "../../lib/publications";
import PublicationCategory from "../ui/PublicationCategory";

export default function PublicationsPanel() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    "journal-articles",
  );

  const handleToggle = (categoryId: string) => {
    setOpenCategory((current) =>
      current === categoryId ? null : categoryId,
    );
  };

  return (
    <div className="min-h-full bg-white px-8 pb-18 pt-32 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Research
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Publications
          </h1>
        </header>

        <div>
  {publicationCategories.map((category, index) => {
    const isConferenceCategory =
      category.id === "conference-presentations";

    if (!isConferenceCategory) {
      return (
        <PublicationCategory
          key={category.id}
          title={category.title}
          publications={category.publications}
          isOpen={openCategory === category.id}
          onToggle={() => handleToggle(category.id)}
          index={index}
        />
      );
    }

    const isOpen = openCategory === category.id;

    return (
      <section
        key={category.id}
        className="border-t border-slate-300"
      >
        {/* Conference heading */}
        <button
  type="button"
  onClick={() => handleToggle(category.id)}
  aria-expanded={isOpen}
  className="flex w-full items-center justify-between py-[22px] text-left transition-colors hover:text-blue-700"
>
  <span className="flex items-center gap-6">
    {/* Serial number */}
    <span
      className={`w-7 text-xs font-medium tracking-[0.12em] ${
        isOpen ? "text-blue-700" : "text-slate-400"
      }`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    {/* Heading + count */}
    <span
      className={`text-[21px] font-medium tracking-tight ${
        isOpen ? "text-blue-700" : "text-slate-900"
      }`}
    >
      {category.title}{" "}
      <span className="relative -top-px text-[15px] font-normal text-slate-400">
        ({category.publications.length})
      </span>
    </span>
  </span>

  {/* Expand icon */}
  <span
    aria-hidden="true"
    className={`text-[25px] font-light leading-none text-slate-400 transition-transform duration-300 ${
      isOpen ? "rotate-45" : ""
    }`}
  >
    +
  </span>
</button>

        {/* Conference entries */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pb-4">
              {category.publications.map(
                (conference, conferenceIndex) => (
                  <article
                    key={`${category.id}-${conferenceIndex}`}
                    className="border-t border-slate-100 py-6"
                  >
                    {/* Date */}
                    {conference.date && (
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        {conference.date}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="max-w-4xl text-[18px] font-medium leading-7 tracking-tight text-slate-900">
                      {conference.citation}
                    </h3>

                    {/* Authors */}
                    {conference.authors && (
                      <p className="mt-4 text-[15px] text-slate-600">
                        {conference.authors}
                      </p>
                    )}

                    {/* Type + Venue */}
                    {(conference.type || conference.venue) && (
                      <p className="mt-2 max-w-4xl text-[15px] leading-7 text-slate-500">
                        {conference.type && (
                          <span className="text-slate-700">
                            {conference.type}
                          </span>
                        )}

                        {conference.type && conference.venue && (
                          <> · </>
                        )}

                        {conference.venue}
                      </p>
                    )}
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    );
  })}
</div>
      </div>
    </div>
  );
}