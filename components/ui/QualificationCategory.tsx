"use client";

interface QualificationCategoryProps {
  number: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function QualificationCategory({
  number,
  title,
  isOpen,
  onToggle,
  children,
}: QualificationCategoryProps) {
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
            {title}
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
          <div className="pb-6 md:pb-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}