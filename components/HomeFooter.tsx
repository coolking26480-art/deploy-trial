import { BriefcaseBusiness, FileText, Landmark, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer
      id="home-footer"
      className="snap-end bg-slate-950 px-6 pt-24 md:pt-12 pb-6 text-white md:px-10 lg:px-16 font-sans"    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.8fr]">

          {/* Identity & Bio */}
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

            {/* Privacy Policy under Research · Teaching · Outreach */}
            <div className="mt-3">
              <Link
                href="/privacy-policy"
                className="text-sm font-light text-slate-400 underline transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="mx-2 text-slate-600" aria-hidden="true">
                ·
              </span>
              <Link
                href="/terms"
                className="text-sm font-light text-slate-400 underline transition-colors hover:text-white"
              >
                Terms of Use
              </Link>
              <span className="mx-2 text-slate-600" aria-hidden="true">
                ·
              </span>
              <Link
                href="/cookie-policy"
                className="text-sm font-light text-slate-400 underline transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Contact Details */}
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
                  <Phone size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span>+91 7002832281</span>
              </a>

              <a
                href="mailto:moitrayee.das@flame.edu.in"
                className="group flex items-center gap-4 text-base text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors group-hover:border-blue-700 group-hover:text-blue-400">
                  <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span>moitrayee.das@flame.edu.in</span>
              </a>

              <div className="flex items-start gap-4 text-base text-slate-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400">
                  <MapPin size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="leading-6">
                  Gat No. 1270, FLAME University,
                  <br />
                  Lavale, Pune
                </span>
              </div>
            </div>
          </div>

          {/* Links / Connect */}
<div>
  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
    Connect
  </p>

  <div className="mt-6 space-y-3">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/dr-moitrayee-das-she-her-25ba5b55/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-base text-slate-400 transition-colors hover:text-white"
    >
      <span className="flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-400 transition-colors duration-200 group-hover:border-blue-600 group-hover:bg-blue-600/10 group-hover:text-blue-500">
        <BriefcaseBusiness
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </span>
      <span className="transition-colors duration-200 group-hover:text-white">
        LinkedIn
      </span>
      <span className="ml-auto text-slate-600 transition-colors duration-200 group-hover:text-slate-300">
        ↗
      </span>
    </a>

    {/* FLAME University */}
    <a
      href="https://www.flame.edu.in/faculty/moitrayee-das"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-base text-slate-400 transition-colors hover:text-white"
    >
      <span className="flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-400 transition-colors duration-200 group-hover:border-blue-600 group-hover:bg-blue-600/10 group-hover:text-blue-500">
        <Landmark
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </span>
      <span className="transition-colors duration-200 group-hover:text-white">
        FLAME University
      </span>
      <span className="ml-auto text-slate-600 transition-colors duration-200 group-hover:text-slate-300">
        ↗
      </span>
    </a>

    {/* Curriculum Vitae */}
    <a
      href="#"
      className="group flex items-center gap-3 text-base text-slate-400 transition-colors hover:text-white"
    >
      <span className="flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-400 transition-colors duration-200 group-hover:border-blue-600 group-hover:bg-blue-600/10 group-hover:text-blue-500">
        <FileText size={16} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="transition-colors duration-200 group-hover:text-white">
        Curriculum Vitae
      </span>
      <span className="ml-auto text-slate-600 transition-colors duration-200 group-hover:text-slate-300">
        ↗
      </span>
    </a>
  </div>
</div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Dr. Moitrayee Das</p>
        </div>
      </div>
    </footer>
  );
}