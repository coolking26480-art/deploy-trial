interface HomePanelProps {
  onNavigate: (target: string) => void;
}

import { BriefcaseBusiness, Landmark } from "lucide-react";
import { awards } from "@/lib/awardsData";
import PodcastGallery from "../ui/Poop";
import RecentMedia from "../ui/RecentMedia";
import HomeFooter from "../HomeFooter"; // Adjust the import path if needed

export default function HomePanel({ onNavigate }: HomePanelProps) {
  const featuredAwards = awards.slice(0, 3);

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden bg-white text-slate-900 snap-y snap-mandatory scroll-smooth">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="snap-start snap-always px-6 pb-20 pt-28 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.82fr_1.5fr_0.82fr] xl:gap-10">

            {/* =====================================================
                LEFT: PORTRAIT CARD
            ===================================================== */}
            <div className="order-2 self-start lg:order-1">
              <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 px-8 py-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)] md:px-10">

                {/* Portrait area */}
                <div className="flex items-center justify-center pb-6">
                  <div className="w-full max-w-[280px] text-center">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <img
                        src="/images/home/head.webp"
                        alt="Dr. Moitrayee Das"
                        className="h-[380px] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Identity */}
                <div className="pt-2">
                  <div className="mb-7 h-px w-12 bg-blue-700" />

                  <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[26px]">
                    Dr. Moitrayee Das
                  </h1>

                  <p className="mt-3 max-w-[240px] text-xs font-medium uppercase leading-6 tracking-[0.16em] text-slate-500">
                    Assistant Professor of Psychology
                  </p>
                </div>

              </div>
            </div>

            {/* =====================================================
                CENTER: INTRODUCTION
            ===================================================== */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="flex items-center gap-5">
                <span className="h-px w-9 shrink-0 bg-blue-700" />
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                  Psychology · Research · Mental Health
                </span>
              </div>

              <h2 className="mt-5 text-[58px] font-semibold leading-[0.94] tracking-[-0.04em] text-slate-900 sm:text-[64px] lg:text-[60px] xl:text-[68px]">
                Dr. Moitrayee
                <br />
                <span className="font-normal text-blue-800">
                  Das
                </span>
              </h2>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-blue-700">
                Assistant Prof., FLAME University
              </p>

              <p className="mt-7 max-w-[620px] text-[15px] leading-8 text-slate-600">
                Dr. Das is an Assistant Professor of Psychology at FLAME University, Pune. She received her PhD & M.Phil. in Management and Labour Studies from the Tata Institute of Social Sciences (TISS), Mumbai and has also completed an Executive Post Graduate Diploma in Analytics from the same. Moitrayee currently teaches Industrial and Cross-Cultural Psychology at FLAME.
                <br />She loves to pursue different courses and has completed 5 Diploma and 21 Certificate courses from different institutes.
              </p>

              {/* Statistics */}
              <div className="mt-8 grid max-w-[620px] grid-cols-3 border-y border-slate-200">
                <div className="py-6 pr-5">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    100+
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Mental Health
                    <br />
                    Sessions
                  </p>
                </div>

                <div className="border-l border-slate-200 px-5 py-6">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    50+
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Co-authored
                    <br />
                    Research Works
                  </p>
                </div>

                <div className="border-l border-slate-200 px-5 py-6">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    200+
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Opinion
                    <br />
                    Editorials
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("publications")}
                  className="rounded-full bg-blue-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  View Research
                  <span className="ml-3" aria-hidden="true">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("invited-talks")}
                  className="rounded-full border border-blue-700 px-8 py-3 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50"
                >
                  See Outreach
                  <span className="ml-3" aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* =====================================================
                RIGHT: AWARDS CARD
            ===================================================== */}
            <aside className="order-3 lg:flex lg:items-center lg:-mt-65">
              <div className="w-full rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-[0_4px_20px_rgba(15,23,42,0.025)] md:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-700">
                  Recognition
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  &amp; Awards
                </h3>

                <div className="mt-8">
                  {featuredAwards.map((award, index) => (
                    <div
                      key={`${award.title}-${index}`}
                      className={
                        index === 0
                          ? "flex items-start justify-between gap-5 border-b border-slate-200 py-5 first:pt-0"
                          : index < featuredAwards.length - 1
                            ? "flex items-start justify-between gap-5 border-b border-slate-200 py-5"
                            : "flex items-start justify-between gap-5 py-5"
                      }
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {award.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {award.display}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-medium text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("awards")}
                  className="mt-7 text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
                >
                  View All Awards
                  <span className="ml-2" aria-hidden="true">→</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
      <section className="snap-start snap-always scroll-mt-0">
  <PodcastGallery />
</section>

      {/* =========================================================
          HOME FOOTER COMPONENT
      ========================================================= */}
      <HomeFooter />
    </div>
  );
}