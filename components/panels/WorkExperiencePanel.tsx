"use client";

import { useState } from "react";
import WorkExperienceCategory from "../ui/WorkExperienceCategory";

const academicService = [
  "Institutional Review Board, FLAME University",
  "Anti-Ragging Committee, FLAME University",
  "Disciplinary Committee, FLAME University",
  "Discover India Project (DIP), FLAME University",
  "Faculty Mentor, Psychology Club, FLAME University (2024–2025)",
  "Faculty Point of Contact between FLAME University and the Yashwantrao Chavan Academy of Development Administration (YASHADA) (2026)",
  "Faculty Coordinator between the Psychological Services Department and Career Services, FLAME University, Pune (2025–2026)",
  "Outreach and Student Research Coordinator, Psychological Sciences Department, FLAME University, Pune (2025–2026)",
];

const earlierProjects = [
  {
    role: "Project Member",
    project: "National CSR Awards (NCSRA) Project",
    year: "2020",
  },
  {
    role: "Project Member",
    project: "Psychological Scale Development Project, Karyamitr, Mumbai",
    year: "2019",
  },
  {
    role: "Project Coordinator",
    project: "Cummins Project, Phaltan",
    year: "May–July, 2017",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex gap-4 text-[15px] leading-7 text-slate-700"
        >
          <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-slate-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectCube({
  role,
  project,
  year,
}: {
  role: string;
  project: string;
  year: string;
}) {
  return (
    <article className="border border-blue-200 bg-white px-5 py-5 transition-colors duration-200 hover:border-blue-700 md:px-6 md:py-6">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-700">
        {role}
      </p>

      <h3 className="mt-3 text-[16px] font-medium leading-6 tracking-tight text-slate-900">
        {project}
      </h3>

      <p className="mt-2 text-sm text-slate-500">{year}</p>
    </article>
  );
}

export default function WorkExperiencePanel() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  return (
    <div className="min-h-full bg-white px-8 pb-18 pt-32 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Panel heading */}
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Professional Background
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Work Experience
          </h1>
        </header>

        {/* Current Position */}
        <section>
          <div className="mb-8">
            <div className="flex gap-6">
              
              <div>
                <h2 className="text-[25px] font-medium tracking-tight text-slate-900 md:text-[29px]">
                  Assistant Professor of Psychology
                </h2>

                <p className="mt-2 text-[16px] text-slate-600">
                  FLAME University, Pune
                </p>

                <p className="mt-1 text-sm tracking-wide text-slate-400">
                  2021–Present
                </p>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mt-10">
            <WorkExperienceCategory
              title="Teaching"
              isOpen={openCategories.includes("teaching")}
              onToggle={() => toggleCategory("teaching")}
            >
              <BulletList
                items={[
                  "Courses Taught: Industrial Psychology, Cross-Cultural Psychology, and Community Psychology.",
                  "Average Teaching Evaluation: 4.5/5.",
                ]}
              />
            </WorkExperienceCategory>

            <WorkExperienceCategory
              title="Student Mentorship & Academic Contributions"
              isOpen={openCategories.includes("mentorship")}
              onToggle={() => toggleCategory("mentorship")}
            >
              <BulletList
                items={[
                  "Supervising undergraduate and postgraduate student research projects.",
                  "Guided over 10 undergraduate dissertation projects.",
                  "Guided over three interdisciplinary major projects.",
                  "Mentored undergraduate and postgraduate students in research, resulting in over 50 co-authored scholarly outputs, including journal articles, book chapters, conference papers, and opinion editorials.",
                  "Contributing to curriculum development and departmental academic and institutional initiatives.",
                ]}
              />
            </WorkExperienceCategory>

            <WorkExperienceCategory
              title="Academic Leadership, Service & Outreach"
              isOpen={openCategories.includes("leadership")}
              onToggle={() => toggleCategory("leadership")}
            >
              <BulletList
                items={[
                  "Delivered over 100 outreach sessions on mental health awareness, advocacy, psychological well-being, leadership, and workplace mental health to students, parents, teachers, counselors, school leaders, principals, government officials, and other educational stakeholders.",
                  "Delivered 25+ invited talks across universities, government organizations, and industry.",
                  "Organized three national-level psychology conferences at FLAME University, Pune.",
                  "Guest Editor, July 2026 Special Issue of the National HRD Network Journal on the theme ‘Overwork Culture in Today’s Organizations: Current State and Future Perspectives.’",
                  "Conducted Faculty Development Programs (FDPs) and Executive Education Programs.",
                ]}
              />
            </WorkExperienceCategory>

            <WorkExperienceCategory
              title="Academic Service"
              isOpen={openCategories.includes("service")}
              onToggle={() => toggleCategory("service")}
            >
              <ol className="space-y-5">
                {academicService.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-5 text-[15px] leading-7 text-slate-700"
                  >
                    <span className="w-5 shrink-0 pt-[6px] text-xs font-medium tracking-[0.1em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </WorkExperienceCategory>
          </div>
        </section>

        {/* Earlier Project Experience */}
        <section className="mt-16 md:mt-10">
          <header className="mb-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-700">
              Earlier Experience
            </p>

            <h2 className="mt-2 text-[21px] font-medium tracking-tight text-slate-900">
              Project Experience
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {earlierProjects.map((project) => (
              <ProjectCube
                key={`${project.role}-${project.project}`}
                role={project.role}
                project={project.project}
                year={project.year}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}