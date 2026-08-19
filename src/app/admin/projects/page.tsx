import Link from "next/link";
import { ArrowUpRight, Eye, Plus } from "lucide-react";

import { getAllProjects } from "@/src/lib/queries/project";

export default async function AdminProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <div
        className="
          flex flex-col gap-6
          border-b border-white/10
          pb-8

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
            Management
          </p>

          <h1
            className="
              mt-3
              font-display
              text-4xl
              font-medium
              tracking-[-0.04em]

              sm:text-5xl
            "
          >
            Projects
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
            Manage portfolio projects, case studies, publishing, and project
            order.
          </p>
        </div>

        {/* New project kita aktifkan nanti */}

        <button
          type="button"
          disabled
          className="
            inline-flex
            w-fit
            cursor-not-allowed
            items-center gap-2
            rounded-full
            border border-white/10
            px-4 py-2.5
            text-[10px]
            uppercase
            tracking-[0.16em]
            text-white/20
          "
        >
          <Plus size={14} />
          New Project
        </button>
      </div>
      {/* ==================================================
          PROJECT COUNT
      ================================================== */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          All Projects
        </p>

        <p className="text-xs text-white/25">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>
      {/* ==================================================
          PROJECT LIST
      ================================================== */}
      <div className="mt-5 border-t border-white/10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group
              grid gap-5
              border-b border-white/10
              py-6

              sm:grid-cols-12
              sm:items-center

              md:py-7
            "
          >
            {/* NUMBER */}

            <div className="sm:col-span-1">
              <span
                className="
                  font-display
                  text-lg
                  tracking-[-0.03em]
                  text-white/20
                "
              >
                {project.number}
              </span>
            </div>

            {/* PROJECT */}

            <div className="sm:col-span-4">
              <p
                className="
                  font-display
                  text-xl
                  font-medium
                  tracking-[-0.025em]
                  text-white/85

                  sm:text-2xl
                "
              >
                {project.title}
              </p>

              <p className="mt-1 text-xs text-white/25">/work/{project.slug}</p>
            </div>

            {/* CATEGORY */}

            <div className="sm:col-span-3">
              <p
                className="
                  max-w-xs
                  text-xs
                  leading-5
                  text-white/35
                "
              >
                {project.category}
              </p>
            </div>

            {/* ORDER */}

            <div className="sm:col-span-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                Order
              </p>

              <p className="mt-1 text-sm text-white/50">{project.order}</p>
            </div>

            {/* STATUS */}

            <div className="sm:col-span-1">
              <div className="flex items-center gap-2">
                <span
                  className={`
                    h-1.5 w-1.5
                    rounded-full

                    ${project.published ? "bg-emerald-400" : "bg-white/20"}
                  `}
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                  "
                >
                  {project.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            {/* ACTIONS */}

            <div
              className="
                flex items-center gap-2

                sm:col-span-2
                sm:justify-end
              "
            >
              {/* VIEW */}

              {project.published && (
                <Link
                  href={`/work/${project.slug}`}
                  target="_blank"
                  aria-label={`View ${project.title}`}
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/30
                    transition-all

                    hover:border-white/25
                    hover:text-white
                  "
                >
                  <Eye size={14} strokeWidth={1.5} />
                </Link>
              )}

              {/* EDIT */}

              <Link
                href={`/admin/projects/${project.id}/edit`}
                aria-label={`Edit ${project.title}`}
                className="
                  group/edit
                  flex h-9
                  items-center gap-2
                  rounded-full
                  border border-white/10
                  px-3
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                  transition-all

                  hover:border-[#3B82F6]
                  hover:bg-[#3B82F6]
                  hover:text-white
                "
              >
                Edit
                <ArrowUpRight
                  size={12}
                  className="
                    transition-transform

                    group-hover/edit:-translate-y-0.5
                    group-hover/edit:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* ==================================================
          EMPTY STATE
      ================================================== */}
      {projects.length === 0 && (
        <div
          className="
            border-b border-white/10
            py-20
            text-center
          "
        >
          <p
            className="
              font-display
              text-2xl
              tracking-[-0.03em]
              text-white/50
            "
          >
            No projects yet.
          </p>

          <p className="mt-2 text-sm text-white/25">
            Your portfolio projects will appear here.
          </p>
        </div>
      )}
      <div
        className="
          mt-10
          flex items-center justify-between
          border-t border-white/10
          pt-5
        "
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
          Portfolio CMS
        </p>

        <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
          {String(projects.length).padStart(2, "0")} Projects
        </p>
      </div>
    </main>
  );
}
