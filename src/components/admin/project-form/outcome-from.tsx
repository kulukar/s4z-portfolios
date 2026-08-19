"use client";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import type { ProjectSchema } from "@/src/schemas/project.schema";

type OutcomeFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

export function OutcomeForm({
  register,
  errors,
  watch,
  setValue,
}: OutcomeFormProps) {
  const supportingPoints = watch("outcome.supportingPoints") ?? [];
  const takeaways = watch("outcome.takeaways") ?? [];

  /* ======================================================
     SUPPORTING POINTS
  ====================================================== */

  function addSupportingPoint() {
    setValue("outcome.supportingPoints", [...supportingPoints, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removeSupportingPoint(index: number) {
    setValue(
      "outcome.supportingPoints",
      supportingPoints.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     TAKEAWAYS
  ====================================================== */

  function addTakeaway() {
    setValue(
      "outcome.takeaways",
      [
        ...takeaways,
        {
          id: String(takeaways.length + 1).padStart(2, "0"),
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

  function removeTakeaway(index: number) {
    setValue(
      "outcome.takeaways",
      takeaways.filter((_, itemIndex) => itemIndex !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  return (
    <div className="space-y-12">
      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <FormSection
        number="01"
        title="Introduction"
        description="Main heading used to introduce the outcome of the project."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Heading</Label>

            <Input
              {...register("outcome.heading")}
              placeholder="What came out of it"
            />

            <ErrorMessage message={errors.outcome?.heading?.message} />
          </Field>

          <Field>
            <Label>Heading Highlight</Label>

            <Input
              {...register("outcome.headingHighlight")}
              placeholder="out of it"
            />

            <ErrorMessage message={errors.outcome?.headingHighlight?.message} />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          OUTCOME STATEMENT
      ================================================== */}

      <FormSection
        number="02"
        title="Outcome Statement"
        description="The main statement that summarizes what the project achieved."
      >
        <Field>
          <Label>Statement</Label>

          <Textarea
            {...register("outcome.statement")}
            placeholder="Describe the main outcome of the project..."
          />

          <ErrorMessage message={errors.outcome?.statement?.message} />
        </Field>

        <Field>
          <Label>Statement Highlight</Label>

          <Input
            {...register("outcome.statementHighlight")}
            placeholder="Optional highlighted phrase"
          />

          <ErrorMessage message={errors.outcome?.statementHighlight?.message} />
        </Field>
      </FormSection>

      {/* ==================================================
          SUPPORTING POINTS
      ================================================== */}

      <FormSection
        number="03"
        title="Supporting Points"
        description="Additional points that support the main project outcome."
      >
        <div className="space-y-3">
          {supportingPoints.map((_, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >
              <div className="flex-1">
                <div className="relative">
                  <span
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      -translate-y-1/2
                      font-display
                      text-[9px]
                      text-white/20
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <input
                    {...register(`outcome.supportingPoints.${index}`)}
                    placeholder="Supporting point..."
                    className="
                      w-full
                      border border-white/10
                      bg-[#0a0a0a]
                      py-3
                      pl-11
                      pr-3.5
                      text-sm
                      text-white/75
                      outline-none
                      transition-colors

                      placeholder:text-white/15

                      focus:border-[#3B82F6]/60
                    "
                  />
                </div>

                <ErrorMessage
                  message={errors.outcome?.supportingPoints?.[index]?.message}
                />
              </div>

              <button
                type="button"
                onClick={() => removeSupportingPoint(index)}
                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  border border-white/10
                  text-white/25
                  transition-colors

                  hover:border-red-400/40
                  hover:text-red-400
                "
                aria-label={`Remove supporting point ${index + 1}`}
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addSupportingPoint}
            className="
              flex w-full
              items-center justify-center
              gap-2
              border border-dashed border-white/15
              py-4
              text-[10px] uppercase
              tracking-[0.15em]
              text-white/35
              transition-colors

              hover:border-[#3B82F6]/60
              hover:text-[#3B82F6]
            "
          >
            <Plus size={13} />
            Add Supporting Point
          </button>
        </div>
      </FormSection>

      {/* ==================================================
          TAKEAWAYS INTRODUCTION
      ================================================== */}

      <FormSection
        number="04"
        title="Takeaways Introduction"
        description="Optional introduction before the project takeaways."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Takeaways Title</Label>

            <Input
              {...register("outcome.takeawaysTitle")}
              placeholder="What I learned"
            />

            <ErrorMessage message={errors.outcome?.takeawaysTitle?.message} />
          </Field>

          <Field>
            <Label>Takeaways Description</Label>

            <Textarea
              {...register("outcome.takeawaysDescription")}
              placeholder="Short introduction to the lessons learned..."
            />

            <ErrorMessage
              message={errors.outcome?.takeawaysDescription?.message}
            />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          TAKEAWAYS
      ================================================== */}

      <FormSection
        number="05"
        title="Takeaways"
        description="Key lessons and insights gained while working on the project."
      >
        <div className="space-y-4">
          {takeaways.map((_, index) => (
            <div
              key={index}
              className="
                relative
                border border-white/10
                bg-white/1
                p-4

                sm:p-5
              "
            >
              {/* HEADER */}

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-display text-[10px] text-[#3B82F6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-4 bg-white/10" />

                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    Takeaway
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeTakeaway(index)}
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    border border-white/10
                    text-white/25
                    transition-colors

                    hover:border-red-400/40
                    hover:text-red-400
                  "
                  aria-label={`Remove takeaway ${index + 1}`}
                >
                  <Trash2 size={13} />
                </button>
              </div>

              {/* FIELDS */}

              <div className="grid gap-5 md:grid-cols-12">
                <div className="md:col-span-2">
                  <Field>
                    <Label>ID</Label>

                    <Input
                      {...register(`outcome.takeaways.${index}.id`)}
                      placeholder="01"
                    />

                    <ErrorMessage
                      message={errors.outcome?.takeaways?.[index]?.id?.message}
                    />
                  </Field>
                </div>

                <div className="md:col-span-10">
                  <Field>
                    <Label>Title</Label>

                    <Input
                      {...register(`outcome.takeaways.${index}.title`)}
                      placeholder="Clarity comes before decoration"
                    />

                    <ErrorMessage
                      message={
                        errors.outcome?.takeaways?.[index]?.title?.message
                      }
                    />
                  </Field>
                </div>
              </div>

              <Field>
                <Label>Description</Label>

                <Textarea
                  {...register(`outcome.takeaways.${index}.description`)}
                  placeholder="Explain what you learned from this part of the project..."
                />

                <ErrorMessage
                  message={
                    errors.outcome?.takeaways?.[index]?.description?.message
                  }
                />
              </Field>
            </div>
          ))}

          <button
            type="button"
            onClick={addTakeaway}
            className="
              flex w-full
              items-center justify-center
              gap-2
              border border-dashed border-white/15
              py-4
              text-[10px] uppercase
              tracking-[0.15em]
              text-white/35
              transition-colors

              hover:border-[#3B82F6]/60
              hover:text-[#3B82F6]
            "
          >
            <Plus size={13} />
            Add Takeaway
          </button>
        </div>
      </FormSection>

      {/* ==================================================
          REFLECTION
      ================================================== */}

      <FormSection
        number="06"
        title="Reflection"
        description="Personal reflection after completing the project."
      >
        <Field>
          <Label>Reflection</Label>

          <Textarea
            {...register("outcome.reflection")}
            placeholder="Looking back at the project..."
          />

          <ErrorMessage message={errors.outcome?.reflection?.message} />
        </Field>

        <Field>
          <Label>Reflection Highlight</Label>

          <Input
            {...register("outcome.reflectionHighlight")}
            placeholder="Optional highlighted phrase"
          />

          <ErrorMessage
            message={errors.outcome?.reflectionHighlight?.message}
          />
        </Field>
      </FormSection>

      {/* ==================================================
          ENDING
      ================================================== */}

      <FormSection
        number="07"
        title="Ending"
        description="Final message shown at the end of the case study."
      >
        <Field>
          <Label>Ending Label</Label>

          <Input
            {...register("outcome.endingLabel")}
            placeholder="Final thoughts"
          />

          <ErrorMessage message={errors.outcome?.endingLabel?.message} />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Ending Title</Label>

            <Input
              {...register("outcome.endingTitle")}
              placeholder="Still learning."
            />

            <ErrorMessage message={errors.outcome?.endingTitle?.message} />
          </Field>

          <Field>
            <Label>Ending Highlight</Label>

            <Input
              {...register("outcome.endingHighlight")}
              placeholder="Still learning."
            />

            <ErrorMessage message={errors.outcome?.endingHighlight?.message} />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <FormSection
        number="08"
        title="Footer"
        description="Optional final text displayed below the outcome."
      >
        <Field>
          <Label>Footer Text</Label>

          <Textarea
            {...register("outcome.footerText")}
            placeholder="Optional footer text..."
          />

          <ErrorMessage message={errors.outcome?.footerText?.message} />
        </Field>
      </FormSection>
    </div>
  );
}

/* ======================================================
   INTERNAL COMPONENTS
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
    <div>
      <div className="mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-[10px] text-[#3B82F6]">
            {number}
          </span>

          <span className="h-px w-4 bg-white/10" />

          <h3 className="text-xs font-medium text-white/65">{title}</h3>
        </div>

        <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/25">
          {description}
        </p>
      </div>

      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[9px] uppercase tracking-[0.15em] text-white/30">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        w-full
        border border-white/10
        bg-[#0a0a0a]
        px-3.5 py-3
        text-sm text-white/75
        outline-none
        transition-colors

        placeholder:text-white/15

        focus:border-[#3B82F6]/60
      "
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={4}
      className="
        w-full
        resize-y
        border border-white/10
        bg-[#0a0a0a]
        px-3.5 py-3
        text-sm leading-6
        text-white/75
        outline-none
        transition-colors

        placeholder:text-white/15

        focus:border-[#3B82F6]/60
      "
    />
  );
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-1.5 text-[10px] text-red-400">{message}</p>;
}
