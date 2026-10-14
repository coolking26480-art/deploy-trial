"use client";

import { useState } from "react";
import QualificationCategory from "../ui/QualificationCategory";

const diplomas = [
  {
    title: "Diploma in Art Therapy",
    institution: "Asha the Hope, Bangalore",
    year: "2022",
  },
  {
    title: "Post Graduate Diploma in Applied Buddhist Psychology",
    institution: "",
    year: "2021–2022",
  },
  {
    title: "Executive Post Graduate Diploma in Analytics (EPGDA)",
    institution: "Tata Institute of Social Sciences, Mumbai",
    year: "2019–2020",
  },
  {
    title: "Diploma in Human Resources Management",
    institution: "Welingkar Institute, Mumbai",
    year: "2015–2016",
  },
  {
    title: "Diploma in Industrial Management",
    institution: "Welingkar Institute, Mumbai",
    year: "2013–2014",
  },
];

const certifications = [
  {
    title: "QPR Suicide Prevention Gatekeeper Program",
    institution: "SPIF, Bangalore",
    year: "2023",
  },
  {
    title: "Certificate Course in Sleep Counseling Certification",
    institution: "ICHARS",
    year: "2023",
  },
  {
    title: "Certificate Course in Primer on Tobacco Cessation Module",
    institution: "NIMHANS",
    year: "2023",
  },
  {
    title: "Certificate Course in Buddhist Philosophy",
    institution: "Tibet House, Delhi",
    year: "2022",
  },
  {
    title: "Certificate Course in Marketing Management",
    institution: "Welingkar Institute, Mumbai",
    year: "2021 · Pursuing",
  },
  {
    title: "Short-term Certificate Course in Forensic Science and Criminology",
    institution: "International Forensic Sciences, Pune",
    year: "2021",
  },
  {
    title: "Short-term Certificate Course in Peace Studies",
    institution: "University of Mumbai",
    year: "2020",
  },
  {
    title:
      "Short-term Certificate Course in Forensic Psychology and Criminal Profiling",
    institution: "International Forensic Sciences, Pune",
    year: "2019",
  },
  {
    title: "Certificate Program in Forensic Science",
    institution: "St Xavier’s College, Mumbai",
    year: "2018",
  },
  {
    title: "Advanced Certificate Course in Industrial Management",
    institution: "Welingkar Institute, Mumbai",
    year: "2013",
  },
];

const degrees = [
  {
    title:
      "Doctor of Philosophy (Ph.D) in Management and Labour Studies",
    institution: "Tata Institute of Social Sciences (TISS), Mumbai",
    year: "2017–2020",
  },
  {
    title:
      "Master of Philosophy (M.Phil) in Management and Labour Studies",
    institution: "Tata Institute of Social Sciences (TISS), Mumbai",
    year: "2015–2017",
  },
  {
    title: "Master of Arts (M.A.) in Applied Psychology",
    detail: "Specialization in Industrial Psychology",
    institution: "University of Mumbai",
    year: "2013–2015",
  },
  {
    title: "Bachelor of Arts (B.A.) in Psychology",
    detail: "Psychology Major",
    institution: "Sophia College, University of Mumbai",
    year: "2009–2012",
  },
];

function QualificationEntry({
  number,
  title,
  detail,
  institution,
  year,
}: {
  number?: number;
  title: string;
  detail?: string;
  institution: string;
  year: string;
}) {
  return (
    <article className="border-b border-slate-100 py-5 last:border-b-0 md:py-6">
      <div className="flex gap-4">
        {number !== undefined && (
          <span className="mt-1 w-5 shrink-0 text-xs text-slate-400">
            {number}.
          </span>
        )}

        <div className="min-w-0">
          <h3 className="text-sm font-medium leading-6 text-slate-800 md:text-base">
            {title}
          </h3>

          {detail && (
            <p className="mt-0.5 text-sm leading-6 text-slate-500">
              {detail}
            </p>
          )}

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {institution}
          </p>

          <p className="mt-0.5 text-xs tracking-wide text-slate-400">
            {year}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AcademicQualificationsPanel() {
  const [openDiplomas, setOpenDiplomas] = useState(false);
    const [openCertifications, setOpenCertifications] = useState(false);

  return (
    <div className="min-h-full px-6 pb-20 pt-28 md:px-12 md:pb-24 md:pt-32 lg:px-16">
      <div className="mx-auto max-w-5xl">

        {/* Panel heading */}
        <header className="mb-10 md:mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            EDUCATION
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Academic Qualifications 
          </h1>
        </header>

        {/* Education */}
        <section>
          <div className="mb-6 border-b border-slate-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Degrees
            </h2>
          </div>

          <div>
            {degrees.map((degree) => (
              <QualificationEntry
                key={degree.title}
                title={degree.title}
                detail={degree.detail}
                institution={degree.institution}
                year={degree.year}
              />
            ))}
          </div>
        </section>

        {/* Diplomas + Certifications */}
        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
          <QualificationCategory
  number="01"
  title="Diplomas"
  isOpen={openDiplomas}
  onToggle={() => setOpenDiplomas((current) => !current)}
>
            <div>
              {diplomas.map((diploma, index) => (
                <QualificationEntry
                  key={diploma.title}
                  number={index + 1}
                  title={diploma.title}
                  institution={diploma.institution}
                  year={diploma.year}
                />
              ))}
            </div>
          </QualificationCategory>

          <QualificationCategory
  number="02"
  title="Certifications"
  isOpen={openCertifications}
  onToggle={() => setOpenCertifications((current) => !current)}
>
            <div>
              {certifications.map((certification, index) => (
                <QualificationEntry
                  key={certification.title}
                  number={index + 1}
                  title={certification.title}
                  institution={certification.institution}
                  year={certification.year}
                />
              ))}

              <div className="pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  + 10 additional certificate courses completed through
                  reputed online platforms including Coursera and edX.
                </p>
              </div>
            </div>
          </QualificationCategory>
        </div>
      </div>
    </div>
  );
}