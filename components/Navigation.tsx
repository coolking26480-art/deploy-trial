"use client";

import { useState } from "react";

interface NavigationProps {
  activePanel: string;
  onNavigate: (target: string) => void;
  onContact: () => void;
}

const navigationItems = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Academic Qualifications",
    target: "qualifications",
  },
  {
    label: "Work Experience",
    target: "work",
  },
  {
    label: "Publications",
    target: "publications",
  },
  {
    label: "Awards",
    target: "awards",
  },
  {
    label: "Invited Talks",
    target: "invited-talks",
  },
];

export default function Navigation({
  activePanel,
  onNavigate,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  const handleContact = () => {
    setMobileMenuOpen(false);
    onNavigate("contact");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="relative flex h-20 w-full items-center overflow-visible border-b border-slate-200 bg-white px-5 shadow-[0_4px_16px_rgba(15,23,42,0.06)] md:px-10 lg:px-14">

        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="shrink-0 text-left"
          aria-label="Go to home"
        >
          <span className="block text-sm font-semibold tracking-tight text-slate-900 md:text-base">
            Dr. Moitrayee Das
          </span>
        </button>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="ml-auto hidden min-w-0 items-center gap-3 md:flex md:gap-6">
          {/* Navigation links */}
          <div className="no-scrollbar flex min-w-0 items-center gap-3 overflow-x-auto md:gap-7">
            {navigationItems.map((item) => {
              const isActive = activePanel === item.target;

              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => onNavigate(item.target)}
                  className={`relative shrink-0 whitespace-nowrap py-2 text-sm transition-colors md:text-base ${
                    isActive
                      ? "font-medium text-blue-700"
                      : "text-slate-500 hover:text-blue-700"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-blue-700" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Contact */}
          <button
            type="button"
            onClick={handleContact}
            className="shrink-0 rounded-md border border-blue-700 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-700 hover:text-white md:px-4"
          >
            Contact
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="ml-auto flex h-10 w-10 items-center justify-center text-slate-900 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-[4px] h-px w-5 bg-slate-900 transition-transform duration-200 ${
                mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[10px] h-px w-5 bg-slate-900 transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[16px] h-px w-5 bg-slate-900 transition-transform duration-200 ${
                mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* ================= MOBILE MENU ================= */}
        <div
  className={`absolute left-0 right-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hidden ${
    mobileMenuOpen
      ? "visible translate-y-0 opacity-100"
      : "invisible -translate-y-2 opacity-0"
  }`}
>
          <div className="px-5 pb-5 pt-3">
            <div className="border-t border-slate-100">
              {navigationItems.map((item) => {
                const isActive = activePanel === item.target;

                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => handleNavigate(item.target)}
                    className={`flex w-full items-center justify-between border-b border-slate-100 py-4 text-left text-[15px] transition-colors ${
                      isActive
                        ? "font-medium text-blue-700"
                        : "text-slate-700 hover:text-blue-700"
                    }`}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                    )}
                  </button>
                );
              })}

              {/* Mobile Contact */}
              <button
                type="button"
                onClick={handleContact}
                className="mt-4 w-full rounded-md border border-blue-700 px-4 py-3 text-left text-[15px] font-medium text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}