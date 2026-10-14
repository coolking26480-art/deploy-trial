"use client";

import { useState } from "react";

const talksByYear = {
  "2026": [
    "Invitation to a convening on student mental health and well-being in higher education in India (1st August, 2026).",
    "Teacher Training Program on Mental Health at St. Miras College for Girls, Pune (28th August, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (28th July, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (2nd July, 2026).",
    "Five-day training program for the Directorate General of Shipping and its allied offices at the Yashwantrao Chavan Academy of Development Administration (YASHADA, Pune) (7th July, 2026).",
    "Foundation Training Programme for Class I Officers of the Directorate of AYUSH at YASHADA, Pune (3rd July, 2026).",
    'The State Institute of Rural Development (SIRD), YASHADA, Pune, organised the "Training for BDOs (Block Development Officers)—Management & Administrative Programme" under the Ministry of Rural Development (MoRD) on 8th June, 2026.',
    "Teacher Training Program on mental health awareness and advocacy at Vidya Prathisthan English Medium School, Baramati (4th July, 2026).",
    "Invited to the podcast titled 'The Next Lesson,' hosted by Hemali Dalal, Managing Director of JBCN Schools (19th May, 2026).",
    "Lecture on heuristics and biases in the Post-Promotion Administrative Training Programme for Deputy Commissioners of Goods & Service Tax (GST), organised under the State Training Policy (21st May, 2026).",
    "Conducted a Faculty Development Program (FDP) on “The Psychology of Wellbeing at the Workplace” at Fr. Agnel Business School, FCRIMS (15th April, 2026).",
    "Conducted Advanced Teacher Training Seminar Series at PineGrove School, Himachal Pradesh, on Mental Health (March 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (6th March, 2026).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (13th February, 2026).",
    "Speaker Coach for TEDx FLAME University (10th January, 2026).",
    "Conducted a session for Class 1 Officers of the Directorate General of Shipping, Government of India (9th January, 2026).",
  ],

  "2025": [
    "Conducted a session on mental health at the workplace for employees of Bridgestone India (10th September, 2025).",
    "Resource person for the MPSC officers' training for a batch of 140 officers at YASHADA (5th December, 2025).",
    "Nurturing Future Leadership Programme (NFLP) on Mental Health Awareness and Advocacy as a Leadership Skill at FLAME University, Pune (22nd August, 2025).",
    "Invited as the first guest for the first edition of the podcast Project - IMPACT HOUR at FLAME University, Pune (18th July, 2025).",
    "Invited speaker at the International Career and College Counselling (IC3) Conference at Kalyani School, Pune (11th June, 2025).",
    "Research Mentor for the Incubation Centre under the Entrepreneurship Cell at FLAME University, Pune (May 2025).",
    "Conducted a teacher training workshop for university professors across Maharashtra under the Maharashtra State Faculty Development Academy (MSFDA), Sangli, Maharashtra (March 2025).",
    "Speaker Coach for TEDx FLAME University (10th January, 2025).",
  ],

  "2024": [
    "Panel discussion on “Navigating Stress and Nurturing Work-Life Balance in Modern Workplaces” at National Institute of Bank Management (NIBM), Pune (14th November, 2024).",
    "Invited speaker in the International HR Symposium on Emerging Trends in OB/HR at Jindal Global Business School (11th November, 2024).",
    "Conducted a Faculty Development Program (FDP) at Savitribai Phule Pune University, organised by the UGC MMTTC, on mental health awareness and advocacy (18th December, 2024).",
    "Conducted a session on Gen Z and Gen Alpha masterclass with educators at FLAME University, Pune (October 2024).",
    "Conducted a session on Gen Z and Gen Alpha masterclass with educators at FLAME University, Pune (January 2024).",
  ],
};

const galleryImages = [
  "images/invited-talks/ITO (1).jpeg",
  "images/invited-talks/ITO (2).jpeg",
  "images/invited-talks/ITO (3).jpeg",
  "images/invited-talks/ITO (4).jpeg",
  "images/invited-talks/ITO (5).jpeg",
  "images/invited-talks/ITO (6).jpeg",
  "images/invited-talks/ITO (7).jpeg",
  "images/invited-talks/ITO (8).jpeg",
  "images/invited-talks/ITO (9).jpeg",
  "images/invited-talks/ITO (10).jpeg",
  "images/invited-talks/ITO (11).jpeg",
  "images/invited-talks/ITO (12).jpeg",
  "images/invited-talks/ITO (13).jpeg",
  "images/invited-talks/ITO (14).jpg",
      "images/invited-talks/ITO (15).jpg",
      "images/invited-talks/ITO (16).jpg",  
      "images/invited-talks/ITO (1).png",

];

export default function InvitedTalksPanel() {
  const [openYear, setOpenYear] = useState<string | null>("2026");

  return (
  <div className="min-h-full bg-white px-8 pb-18 pt-30 md:px-12 lg:px-16">
    <div className="mx-auto max-w-6xl">

      {/* TOP SECTION — 60 / 40 */}
      <div className="grid gap-14 lg:grid-cols-[7fr_3fr] lg:gap-16">

        {/* LEFT — Heading + Engagements */}
        <div>
          <header className="mb-12">
            <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
              Outreach
            </p>

            <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
              Invited Talks, Workshops & Training Programs
            </h1>
          </header>

          {/* Engagements */}
          <section>
            <div className="mb-5">
              <p className="text-[14px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Engagements
              </p>
            </div>

            <div>
              {Object.entries(talksByYear)
                .sort(
                  ([yearA], [yearB]) =>
                    Number(yearB) - Number(yearA)
                )
                .map(([year, talks]) => {
                  const isOpen = openYear === year;

                  return (
                    <section
                      key={year}
                      className="border-t border-slate-300"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenYear(isOpen ? null : year)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-[22px] text-left transition-colors hover:text-blue-700"
                      >
                        <span
                          className={`text-[21px] font-medium tracking-tight ${
                            isOpen
                              ? "text-blue-700"
                              : "text-slate-900"
                          }`}
                        >
                          {year}
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
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-4">
                            {talks.map((talk, index) => (
                              <article
                                key={`${year}-${index}`}
                                className="flex gap-6 border-t border-slate-100 py-5"
                              >
                                <span className="w-7 shrink-0 pt-1 text-xs font-medium tracking-[0.12em] text-slate-400">
                                  {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="max-w-4xl text-[15px] leading-7 text-slate-700">
                                  {talk}
                                </p>
                              </article>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                })}
            </div>
          </section>
        </div>

        {/* RIGHT — Video */}
          <div className="lg:pt-2">
            <div className="rounded-xl bg-slate-100 p-5 md:p-6">

              {/* Video + Caption aligned as one unit */}
              <div className="mx-auto max-w-[250px]">

                {/* Vertical video */}
                <div className="overflow-hidden bg-black">
                  <video
                    src="videos\Talk.mp4"
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Caption */}
                <p className="mt-4 text-left text-[11px] leading-5 text-slate-500">
                  Masterclass with GenZ, (2024).
                </p>

              </div>

            </div>
          </div>


      </div>

      {/* PHOTO COLLAGE — BELOW BOTH COLUMNS */}
      {/* PHOTO COLLAGE — BELOW BOTH COLUMNS */}
<div className="mt-8 border-t border-slate-200 pt-6">

  <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
    
    {[
      "images/invited-talks/I T (1).webp",
  "images/invited-talks/I T (2).webp",
  "images/invited-talks/I T (3).webp",
  "images/invited-talks/I T (4).webp",
  "images/invited-talks/I T (5).webp",
  "images/invited-talks/I T (6).webp",
  "images/invited-talks/I T (7).webp",
  "images/invited-talks/I T (8).webp",
  "images/invited-talks/I T (9).webp",
  "images/invited-talks/I T (10).webp",
  "images/invited-talks/I T (11).webp",
  "images/invited-talks/I T (12).webp",
  "images/invited-talks/I T (13).webp",
  "images/invited-talks/I T (14).webp",
  "images/invited-talks/I T (15).webp"

    ].map((src, index) => (
      <div
        key={src}
        className="mb-3 break-inside-avoid overflow-hidden rounded-sm border border-slate-200 bg-slate-50"
      >
        <img
          src={src}
          alt={`Invited talk ${index + 1}`}
          className="block h-auto w-full"
        />
      </div>
    ))}

  </div>

</div>

    </div>
  </div>
);
}