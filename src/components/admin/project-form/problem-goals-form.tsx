"use client";

import { Plus, Trash2 } from "lucide-react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { ProjectSchema } from "@/src/schemas/project.schema";

type ProblemGoalsFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

export function ProblemGoalsForm({
  register,
  errors,
  watch,
  setValue,
}: ProblemGoalsFormProps) {
  const challenges = watch("problemGoals.challenges") ?? [];
  const principleLines = watch("problemGoals.principleLines") ?? [];

  function addChallenge() {
    setValue(
      "problemGoals.challenges",
      [
        ...challenges,
        {
          title: "",
          description: "",
        },
      ],
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  function removeChallenge(index: number) {
    setValue(
      "problemGoals.challenges",
      challenges.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  function addPrincipleLine() {
    setValue("problemGoals.principleLines", [...principleLines, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removePrincipleLine(index: number) {
    setValue(
      "problemGoals.principleLines",
      principleLines.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  return (
    <div className="space-y-10">
      {/* =========================================
          SECTION INTRO
      ========================================= */}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Heading" error={errors.problemGoals?.heading?.message}>
          <input
            {...register("problemGoals.heading")}
            placeholder="A lot to monitor."
            className={inputClass}
          />
        </Field>

        <Field
          label="Heading Highlight"
          error={errors.problemGoals?.headingHighlight?.message}
        >
          <input
            {...register("problemGoals.headingHighlight")}
            placeholder="Not a lot of room for confusion."
            className={inputClass}
          />
        </Field>
      </div>

      {/* =========================================
          CHALLENGE STATEMENT
      ========================================= */}

      <FormSection
        number="01"
        title="Challenge Statement"
        description="Introduce the main design problem before breaking it down."
      >
        <div className="grid gap-5">
          <Field
            label="Statement"
            error={errors.problemGoals?.challengeStatement?.message}
          >
            <textarea
              {...register("problemGoals.challengeStatement")}
              rows={4}
              placeholder="The interface needed to show enough technical information..."
              className={textareaClass}
            />
          </Field>

          <Field
            label="Statement Highlight"
            error={errors.problemGoals?.challengeStatementHighlight?.message}
          >
            <textarea
              {...register("problemGoals.challengeStatementHighlight")}
              rows={3}
              placeholder="without forcing users to process everything at once."
              className={textareaClass}
            />
          </Field>
        </div>
      </FormSection>

      {/* =========================================
          CHALLENGES
      ========================================= */}

      <FormSection
        number="02"
        title="Challenges"
        description="Individual problems discovered during the project."
      >
        <div className="space-y-3">
          {challenges.length === 0 && (
            <EmptyState text="No challenges added yet." />
          )}

          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="
                border
                border-white/10
                bg-black/10
                p-4

                sm:p-5
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-[#3B82F6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                    Challenge
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeChallenge(index)}
                  aria-label={`Remove challenge ${index + 1}`}
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/25
                    transition-all

                    hover:border-red-400/30
                    hover:bg-red-400/10
                    hover:text-red-400
                  "
                >
                  <Trash2 size={13} />
                </button>
              </div>

              <div className="grid gap-5">
                <Field
                  label="Title"
                  error={
                    errors.problemGoals?.challenges?.[index]?.title?.message
                  }
                >
                  <input
                    {...register(
                      `problemGoals.challenges.${index}.title` as const,
                    )}
                    placeholder="Too much information"
                    className={inputClass}
                  />
                </Field>

                <Field
                  label="Description"
                  error={
                    errors.problemGoals?.challenges?.[index]?.description
                      ?.message
                  }
                >
                  <textarea
                    {...register(
                      `problemGoals.challenges.${index}.description` as const,
                    )}
                    rows={3}
                    placeholder="Explain the problem and why it mattered..."
                    className={textareaClass}
                  />
                </Field>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addChallenge}
            className={addButtonClass}
          >
            <Plus size={13} />
            Add Challenge
          </button>
        </div>
      </FormSection>

      {/* =========================================
          GOAL
      ========================================= */}

      <FormSection
        number="03"
        title="Project Goal"
        description="Explain what the design needed to achieve."
      >
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Goal" error={errors.problemGoals?.goal?.message}>
              <input
                {...register("problemGoals.goal")}
                placeholder="Make the condition"
                className={inputClass}
              />
            </Field>

            <Field
              label="Goal Highlight"
              error={errors.problemGoals?.goalHighlight?.message}
            >
              <input
                {...register("problemGoals.goalHighlight")}
                placeholder="easy to understand at a glance."
                className={inputClass}
              />
            </Field>
          </div>

          <Field
            label="Goal Description"
            error={errors.problemGoals?.goalDescription?.message}
          >
            <textarea
              {...register("problemGoals.goalDescription")}
              rows={4}
              placeholder="Keep the technical detail available without overwhelming the interface..."
              className={textareaClass}
            />
          </Field>
        </div>
      </FormSection>

      {/* =========================================
          DESIGN PRINCIPLE
      ========================================= */}

      <FormSection
        number="04"
        title="Design Principle"
        description="The principle that guided your design decisions."
      >
        <Field
          label="Principle Title"
          error={errors.problemGoals?.principleTitle?.message}
        >
          <input
            {...register("problemGoals.principleTitle")}
            placeholder="Design principle"
            className={inputClass}
          />
        </Field>

        <div className="mt-5 space-y-3">
          <div>
            <p className={labelClass}>Principle Lines</p>

            <p className="mt-1 text-[10px] leading-4 text-white/20">
              Each line will appear separately in the case study.
            </p>
          </div>

          {principleLines.length === 0 && (
            <EmptyState text="No principle lines added yet." />
          )}

          {principleLines.map((_, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  w-6
                  shrink-0
                  text-[9px]
                  text-white/20
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <input
                {...register(`problemGoals.principleLines.${index}` as const)}
                placeholder={index === 0 ? "Clear first." : "Detailed second."}
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => removePrincipleLine(index)}
                aria-label={`Remove principle line ${index + 1}`}
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  border border-white/10
                  text-white/25
                  transition-all

                  hover:border-red-400/30
                  hover:bg-red-400/10
                  hover:text-red-400
                "
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addPrincipleLine}
            className={addButtonClass}
          >
            <Plus size={13} />
            Add Principle Line
          </button>
        </div>
      </FormSection>
    </div>
  );
}

/* ======================================================
   FIELD
====================================================== */

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <p className={labelClass}>{label}</p>

      <div className="mt-2">{children}</div>

      {error && <p className="mt-2 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

/* ======================================================
   FORM SECTION
====================================================== */

type FormSectionProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="border-t border-white/10 pt-8">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-[10px] text-[#3B82F6]">
            {number}
          </span>

          <span className="h-px w-4 bg-white/10" />

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
            {title}
          </p>
        </div>

        <p className="mt-2 max-w-lg text-xs leading-5 text-white/25">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}

/* ======================================================
   EMPTY STATE
====================================================== */

function EmptyState({ text }: { text: string }) {
  return (
    <div
      className="
        flex min-h-24
        items-center justify-center
        border border-dashed border-white/10
        px-4
        text-center
      "
    >
      <p className="text-[10px] text-white/20">{text}</p>
    </div>
  );
}

/* ======================================================
   STYLES
====================================================== */

const labelClass = "text-[9px] uppercase tracking-[0.16em] text-white/30";

const inputClass = `
  w-full
  border border-white/10
  bg-white/[0.02]
  px-3.5 py-3
  text-sm text-white/80
  outline-none
  transition-all

  placeholder:text-white/15

  focus:border-[#3B82F6]/60
  focus:bg-white/[0.035]
`;

const textareaClass = `
  ${inputClass}
  resize-y
  leading-6
`;

const addButtonClass = `
  flex w-full
  items-center justify-center
  gap-2
  border border-dashed border-white/10
  px-4 py-3
  text-[9px]
  uppercase
  tracking-[0.14em]
  text-white/30
  transition-all

  hover:border-[#3B82F6]/40
  hover:text-[#3B82F6]
`;
