import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { defaultProjectValues } from "@/src/lib/defaults/project";
import { getNextProjectMeta } from "@/src/lib/queries/project";
import { ProjectForm } from "@/src/components/admin/project-form/project-form";

export default async function NewProjectPage() {
  const nextMeta = await getNextProjectMeta();

  const defaultValues = {
    ...defaultProjectValues,

    basic: {
      ...defaultProjectValues.basic,

      number: nextMeta.number,
      order: nextMeta.order,
    },
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <Link
          href="/admin/projects"
          className="
            inline-flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.15em]
            text-white/25
            transition-colors
            hover:text-white/60
          "
        >
          <ArrowLeft size={12} />
          Projects
        </Link>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#3B82F6]" />

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#3B82F6]">
              New Project
            </p>
          </div>

          <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
            Create Project
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/30">
            Create a new case study for your portfolio.
          </p>
        </div>
      </div>

      <ProjectForm mode="create" defaultValues={defaultValues} />
    </div>
  );
}
