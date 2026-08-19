import Link from "next/link";
import { ArrowUpRight, ExternalLink, Plus } from "lucide-react";

import { ProjectActions } from "@/src/components/admin/project/project-actions";
import { ProjectStatusActions } from "@/src/components/admin/project/project-status-actions";
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

        <Link
          href="/admin/projects/new"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full

            border
            border-white/10

            px-4
            py-2.5

            text-[10px]
            uppercase
            tracking-[0.16em]
            text-white/50

            transition-all

            hover:border-[#3B82F6]
            hover:bg-[#3B82F6]
            hover:text-white
          "
        >
          <Plus
            size={14}
            strokeWidth={1.5}
            className="
              transition-transform
              group-hover:rotate-90
            "
          />
          New Project
        </Link>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          All Projects
        </p>

        <p className="text-xs text-white/25">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>

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

            <div className="sm:col-span-4">
              <div className="flex flex-wrap items-center gap-2">
                <p
                  className="
                    font-display
                    text-xl
                    font-medium
                    tracking-tight
                    text-white/85

                    sm:text-2xl
                  "
                >
                  {project.title}
                </p>

                {project.featured && (
                  <span
                    className="
                      rounded-full
                      border border-amber-400/20
                      bg-amber-400/5
                      px-2 py-1
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      text-amber-400
                    "
                  >
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-white/25">/work/{project.slug}</p>
            </div>

            <div className="sm:col-span-2">
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

            <div className="sm:col-span-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/20">
                Order
              </p>

              <p className="mt-1 text-sm text-white/50">{project.order}</p>
            </div>

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

            <div
              className="
                flex flex-wrap
                items-center
                gap-2

                sm:col-span-3
                sm:justify-end
              "
            >
              <ProjectStatusActions
                projectId={project.id}
                published={project.published}
                featured={project.featured}
              />

              {project.published && (
                <Link
                  href={`/work/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  title="View live project"
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/30
                    transition-all

                    hover:border-[#3B82F6]/50
                    hover:bg-[#3B82F6]/5
                    hover:text-[#3B82F6]
                  "
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                </Link>
              )}

              <ProjectActions
                projectId={project.id}
                projectTitle={project.title}
              />

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

          <Link
            href="/admin/projects/new"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-white/10
              px-4 py-2.5
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/40
              transition-all

              hover:border-[#3B82F6]
              hover:bg-[#3B82F6]
              hover:text-white
            "
          >
            <Plus size={13} />
            Create First Project
          </Link>
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
