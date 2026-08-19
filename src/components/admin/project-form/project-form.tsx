"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, Save } from "lucide-react";
import { useForm } from "react-hook-form";

import { updateProject } from "@/src/lib/actions/project";
import {
  projectSchema,
  type ProjectSchema,
} from "@/src/schemas/project.schema";

import { BasicInfoForm } from "./basic-info-form";
import { HeroForm } from "./hero-form";
import { OverviewForm } from "./overview-form";
import { ProblemGoalsForm } from "./problem-goals-form";
import { ProcessForm } from "./process-form";
import { SolutionForm } from "./solution-form";
import { OutcomeForm } from "./outcome-from";

type ProjectFormProps = {
  projectId: string;
  defaultValues: ProjectSchema;
};

type SectionHeaderProps = {
  number: string;
  title: string;
  description: string;
};

export function ProjectForm({ projectId, defaultValues }: ProjectFormProps) {
  const router = useRouter();

  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  async function onSubmit(values: ProjectSchema) {
    setMessage(null);
    setSuccess(false);

    try {
      const result = await updateProject(projectId, values);

      if (!result.success) {
        setMessage(result.message ?? "Failed to update project.");
        return;
      }

      setSuccess(true);
      setMessage(result.message ?? "Project updated successfully.");

      reset(values);

      router.refresh();
    } catch (error) {
      console.error(error);

      setSuccess(false);
      setMessage("Something went wrong while updating the project.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
      <section id="basic" className="scroll-mt-28">
        <SectionHeader
          number="01"
          title="Basic Info"
          description="General project information used across the portfolio."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <BasicInfoForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      <section
        id="hero"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="02"
          title="Hero"
          description="Project introduction, headline, and supporting description."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <HeroForm register={register} errors={errors} />
        </div>
      </section>

      <section
        id="overview"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="03"
          title="Overview"
          description="Project story, tools, role, and contribution."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <OverviewForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      <section
        id="problem-goals"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="04"
          title="Problem & Goals"
          description="Challenges, project goals, and design principles."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <ProblemGoalsForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      <section
        id="process"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="05"
          title="Process"
          description="Information structure, exploration, and refinement."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <ProcessForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      <section
        id="solution"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="06"
          title="Solution"
          description="Final interface, design details, and visualization."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <SolutionForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      {/* ==================================================
          07 — OUTCOME
      ================================================== */}

      <section
        id="outcome"
        className="
          mt-12
          scroll-mt-28
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="07"
          title="Outcome"
          description="Project outcome, lessons, and final reflection."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <OutcomeForm
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </section>

      {/* ==================================================
          ACTION BAR
      ================================================== */}

      <div
        className="
          sticky
          bottom-4
          z-20

          mt-12

          flex
          flex-col
          gap-3

          border
          border-white/10

          bg-[#0d0d0d]/95

          p-3

          shadow-2xl
          backdrop-blur-xl

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="min-h-5">
          {message ? (
            <div className="flex items-center gap-2">
              {success && <Check size={13} className="text-emerald-400" />}

              <p
                className={
                  success ? "text-xs text-emerald-400" : "text-xs text-red-400"
                }
              >
                {message}
              </p>
            </div>
          ) : (
            <p className="text-xs text-white/20">
              {isDirty ? "You have unsaved changes." : "No unsaved changes."}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isDirty}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            bg-white

            px-5
            py-2.5

            text-[10px]
            font-medium
            uppercase
            tracking-[0.15em]
            text-black

            transition-all

            hover:bg-[#3B82F6]
            hover:text-white

            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Saving
            </>
          ) : (
            <>
              <Save size={14} />
              Save Changes
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ======================================================
   SECTION HEADER
====================================================== */

function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="border-b border-white/10 pb-5">
      <div className="flex items-center gap-3">
        <span className="font-display text-xs text-[#3B82F6]">{number}</span>

        <span className="h-px w-5 bg-white/10" />

        <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
          Section
        </p>
      </div>

      <h2
        className="
          mt-3
          font-display
          text-2xl
          font-medium
          tracking-[-0.03em]
          text-white/85

          sm:text-3xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-2
          max-w-xl
          text-xs
          leading-5
          text-white/30

          sm:text-sm
          sm:leading-6
        "
      >
        {description}
      </p>
    </div>
  );
}
