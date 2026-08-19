import Link from "next/link";
import { ArrowUpRight, FolderKanban } from "lucide-react";

import { getAllProjects } from "@/src/lib/queries/project";

export default async function AdminPage() {
  const projects = await getAllProjects();

  const publishedProjects = projects.filter(
    (project) => project.published,
  ).length;

  const draftProjects = projects.length - publishedProjects;

  return (
    <main>
      {/* HEADER */}

      <div className="border-b border-white/10 pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
          Overview
        </p>

        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
          Portfolio CMS
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
          Manage your projects and case study content from one place.
        </p>
      </div>

      {/* STATS */}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="border border-white/10 p-5">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Total Projects
          </p>

          <p className="mt-6 font-display text-4xl tracking-[-0.04em]">
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="border border-white/10 p-5">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Published
          </p>

          <p className="mt-6 font-display text-4xl tracking-[-0.04em]">
            {String(publishedProjects).padStart(2, "0")}
          </p>
        </div>

        <div className="border border-white/10 p-5">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
            Draft
          </p>

          <p className="mt-6 font-display text-4xl tracking-[-0.04em]">
            {String(draftProjects).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* PROJECT MANAGEMENT */}

      <div className="mt-10">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          Management
        </p>

        <Link
          href="/admin/projects"
          className="
            group
            mt-4 flex items-center justify-between
            border-y border-white/10
            py-6
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/10
                text-white/35
                transition-colors

                group-hover:border-[#3B82F6]
                group-hover:text-[#3B82F6]
              "
            >
              <FolderKanban size={16} strokeWidth={1.5} />
            </div>

            <div>
              <p className="font-display text-xl tracking-[-0.025em] text-white/80">
                Projects
              </p>

              <p className="mt-1 text-xs text-white/25">
                Manage portfolio projects and case studies.
              </p>
            </div>
          </div>

          <ArrowUpRight
            size={17}
            className="
              text-white/25
              transition-all

              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-[#3B82F6]
            "
          />
        </Link>
      </div>
    </main>
  );
}
