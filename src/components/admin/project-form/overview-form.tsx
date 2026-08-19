"use client";

import { Plus, Trash2 } from "lucide-react";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { ProjectSchema } from "@/src/schemas/project.schema";

type OverviewFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

export function OverviewForm({
  register,
  errors,
  watch,
  setValue,
}: OverviewFormProps) {
  const overviewErrors = errors.overview;

  const storyParagraphs = watch("overview.storyParagraphs") ?? [];

  const tools = watch("overview.tools") ?? [];

  const contributions = watch("overview.contributions") ?? [];

  /* ======================================================
     STORY PARAGRAPHS
  ====================================================== */

  function addStoryParagraph() {
    setValue("overview.storyParagraphs", [...storyParagraphs, ""], {
      shouldDirty: true,
    });
  }

  function removeStoryParagraph(index: number) {
    setValue(
      "overview.storyParagraphs",
      storyParagraphs.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
      },
    );
  }

  /* ======================================================
     TOOLS
  ====================================================== */

  function addTool() {
    setValue("overview.tools", [...tools, ""], {
      shouldDirty: true,
    });
  }

  function removeTool(index: number) {
    setValue(
      "overview.tools",
      tools.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
      },
    );
  }

  /* ======================================================
     CONTRIBUTIONS
  ====================================================== */

  function addContribution() {
    setValue("overview.contributions", [...contributions, ""], {
      shouldDirty: true,
    });
  }

  function removeContribution(index: number) {
    setValue(
      "overview.contributions",
      contributions.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
      },
    );
  }

  return (
    <div className="space-y-10">
      {/* ==================================================
          PROJECT STATEMENT
      ================================================== */}

      <div className="space-y-6">
        <FormGroupTitle
          title="Project Statement"
          description="Main statement introducing the project overview."
        />

        <Field label="Statement" error={overviewErrors?.statement?.message}>
          <textarea
            {...register("overview.statement")}
            rows={4}
            placeholder="Ground Detector is a monitoring dashboard..."
            className={`${inputClassName} resize-y leading-6`}
          />
        </Field>

        <Field
          label="Statement Highlight"
          description="Optional highlighted part of the statement."
          error={overviewErrors?.statementHighlight?.message}
        >
          <input
            {...register("overview.statementHighlight")}
            placeholder="easier to understand."
            className={inputClassName}
          />
        </Field>
      </div>

      {/* ==================================================
          PROJECT STORY
      ================================================== */}

      <div className="border-t border-white/10 pt-8">
        <FormGroupTitle
          title="Project Story"
          description="Explain the context, challenge, and thinking behind the project."
        />

        <div className="mt-6 space-y-6">
          <Field
            label="Story Title"
            error={overviewErrors?.storyTitle?.message}
          >
            <input
              {...register("overview.storyTitle")}
              placeholder="Understanding the project"
              className={inputClassName}
            />
          </Field>

          <Field
            label="Story Highlight"
            description="Optional highlighted part of the story title."
            error={overviewErrors?.storyHighlight?.message}
          >
            <input
              {...register("overview.storyHighlight")}
              placeholder="beyond the interface."
              className={inputClassName}
            />
          </Field>

          {/* STORY PARAGRAPHS */}

          <div>
            <ArrayHeader
              title="Story Paragraphs"
              description="Paragraphs used to explain the project story."
              onAdd={addStoryParagraph}
            />

            <div className="mt-4 space-y-3">
              {storyParagraphs.length === 0 ? (
                <EmptyState
                  text="No story paragraphs yet."
                  onAdd={addStoryParagraph}
                />
              ) : (
                storyParagraphs.map((_, index) => (
                  <ArrayItem
                    key={`story-${index}`}
                    number={index + 1}
                    onRemove={() => removeStoryParagraph(index)}
                  >
                    <textarea
                      {...register(`overview.storyParagraphs.${index}`)}
                      rows={4}
                      placeholder={`Paragraph ${index + 1}`}
                      className={`${inputClassName} resize-y leading-6`}
                    />

                    {overviewErrors?.storyParagraphs?.[index]?.message && (
                      <p className="mt-2 text-xs text-red-400">
                        {overviewErrors.storyParagraphs[index]?.message}
                      </p>
                    )}
                  </ArrayItem>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          TOOLS
      ================================================== */}

      <div className="border-t border-white/10 pt-8">
        <ArrayHeader
          title="Tools"
          description="Tools used during the project."
          onAdd={addTool}
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {tools.length === 0 ? (
            <div className="sm:col-span-2">
              <EmptyState text="No tools added yet." onAdd={addTool} />
            </div>
          ) : (
            tools.map((_, index) => (
              <ArrayItem
                key={`tool-${index}`}
                number={index + 1}
                onRemove={() => removeTool(index)}
                compact
              >
                <input
                  {...register(`overview.tools.${index}`)}
                  placeholder="Figma"
                  className={inputClassName}
                />

                {overviewErrors?.tools?.[index]?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {overviewErrors.tools[index]?.message}
                  </p>
                )}
              </ArrayItem>
            ))
          )}
        </div>
      </div>

      {/* ==================================================
          CONTRIBUTION
      ================================================== */}

      <div className="border-t border-white/10 pt-8">
        <FormGroupTitle
          title="Contribution"
          description="Describe your responsibilities and contribution to the project."
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field
            label="Contribution Title"
            error={overviewErrors?.contributionTitle?.message}
          >
            <input
              {...register("overview.contributionTitle")}
              placeholder="What I worked on"
              className={inputClassName}
            />
          </Field>

          <Field
            label="Contribution Highlight"
            error={overviewErrors?.contributionHighlight?.message}
          >
            <input
              {...register("overview.contributionHighlight")}
              placeholder="across the project."
              className={inputClassName}
            />
          </Field>
        </div>

        <div className="mt-6">
          <ArrayHeader
            title="Contribution Items"
            description="Individual responsibilities displayed in the case study."
            onAdd={addContribution}
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {contributions.length === 0 ? (
              <div className="sm:col-span-2">
                <EmptyState
                  text="No contributions added yet."
                  onAdd={addContribution}
                />
              </div>
            ) : (
              contributions.map((_, index) => (
                <ArrayItem
                  key={`contribution-${index}`}
                  number={index + 1}
                  onRemove={() => removeContribution(index)}
                  compact
                >
                  <input
                    {...register(`overview.contributions.${index}`)}
                    placeholder="UI Design"
                    className={inputClassName}
                  />

                  {overviewErrors?.contributions?.[index]?.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {overviewErrors.contributions[index]?.message}
                    </p>
                  )}
                </ArrayItem>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   FIELD
====================================================== */

type FieldProps = {
  label: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, description, error, children }: FieldProps) {
  return (
    <div>
      <div className="mb-2">
        <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
          {label}
        </label>

        {description && (
          <p className="mt-1 text-[11px] leading-5 text-white/20">
            {description}
          </p>
        )}
      </div>

      {children}

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

/* ======================================================
   GROUP TITLE
====================================================== */

type FormGroupTitleProps = {
  title: string;
  description?: string;
};

function FormGroupTitle({ title, description }: FormGroupTitleProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-white/70">{title}</h3>

      {description && (
        <p className="mt-1 text-xs leading-5 text-white/25">{description}</p>
      )}
    </div>
  );
}

/* ======================================================
   ARRAY HEADER
====================================================== */

type ArrayHeaderProps = {
  title: string;
  description?: string;
  onAdd: () => void;
};

function ArrayHeader({ title, description, onAdd }: ArrayHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <FormGroupTitle title={title} description={description} />

      <button
        type="button"
        onClick={onAdd}
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          border
          border-white/10
          px-3
          py-2
          text-[9px]
          uppercase
          tracking-[0.15em]
          text-white/35
          transition-colors

          hover:border-white/25
          hover:text-white
        "
      >
        <Plus size={12} />
        Add
      </button>
    </div>
  );
}

/* ======================================================
   ARRAY ITEM
====================================================== */

type ArrayItemProps = {
  number: number;
  onRemove: () => void;
  compact?: boolean;
  children: React.ReactNode;
};

function ArrayItem({
  number,
  onRemove,
  compact = false,
  children,
}: ArrayItemProps) {
  return (
    <div
      className={`
        border
        border-white/10
        bg-white/1
        ${compact ? "p-3" : "p-4"}
      `}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-[10px] text-white/20">
          {String(number).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove item ${number}`}
          className="
            inline-flex
            h-7
            w-7
            items-center
            justify-center
            text-white/20
            transition-colors

            hover:text-red-400
          "
        >
          <Trash2 size={13} />
        </button>
      </div>

      {children}
    </div>
  );
}

/* ======================================================
   EMPTY STATE
====================================================== */

type EmptyStateProps = {
  text: string;
  onAdd: () => void;
};

function EmptyState({ text, onAdd }: EmptyStateProps) {
  return (
    <button
      type="button"
      onClick={onAdd}
      className="
        flex
        min-h-24
        w-full
        items-center
        justify-center
        border
        border-dashed
        border-white/10
        px-5
        text-xs
        text-white/20
        transition-colors

        hover:border-white/20
        hover:text-white/40
      "
    >
      <span className="inline-flex items-center gap-2">
        <Plus size={12} />

        {text}
      </span>
    </button>
  );
}

/* ======================================================
   STYLE
====================================================== */

const inputClassName = `
  w-full
  border border-white/10
  bg-white/[0.02]
  px-4 py-3
  text-sm
  text-white/75
  outline-none
  transition-colors
  placeholder:text-white/15
  focus:border-[#3B82F6]/60
`;
