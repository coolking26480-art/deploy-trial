"use client";

import type { Publication } from "../../lib/publications";
import List from "./List";

interface PublicationCategoryProps {
  title: string;
  publications: Publication[];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function PublicationCategory({
  title,
  publications,
  isOpen,
  onToggle,
  index,
}: PublicationCategoryProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <section className="border-t border-slate-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-[22px] text-left transition-colors hover:text-blue-700"
      >
        <span className="flex items-center gap-6">
          <span
            className={`w-7 text-xs font-medium tracking-[0.12em] ${
              isOpen ? "text-blue-700" : "text-slate-400"
            }`}
          >
            {number}
          </span>

          <span
  className={`text-[21px] font-medium tracking-tight ${
    isOpen ? "text-blue-700" : "text-slate-900"
  }`}
>
  {title}{" "}
  <span className="relative -top-px text-[15px] font-normal text-slate-400">
    ({publications.length})
  </span>
</span>
        </span>

        <span
          aria-hidden="true"
          className={`text-[25px] font-light leading-none text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <List>
            {publications.map((publication, index) => (
              <article
                key={`${title}-${index}`}
                className="py-6 first:pt-1"
              >
                <p className="max-w-4xl text-[15px] leading-7 text-slate-700">
                  {publication.citation}
                </p>

                {publication.url && (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
                  >
                    {publication.linkLabel ?? "View publication"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
}