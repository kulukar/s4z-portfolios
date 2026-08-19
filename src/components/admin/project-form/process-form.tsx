"use client";

import { Plus, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { ProjectSchema } from "@/src/schemas/project.schema";
import { ImageUpload } from "@/src/components/admin/image-upload";

type ProcessFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

export function ProcessForm({
  register,
  errors,
  watch,
  setValue,
}: ProcessFormProps) {
  const steps = watch("process.steps") ?? [];

  const rawInformation = watch("process.information.rawInformation") ?? [];

  const groups = watch("process.information.groups") ?? [];

  const priorities = watch("process.information.priorities") ?? [];

  const principleLines = watch("process.structure.principleLines") ?? [];

  const decisions = watch("process.refinement.decisions") ?? [];

  /* ======================================================
     STEPS
  ====================================================== */

  function addStep() {
    setValue("process.steps", [...steps, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removeStep(index: number) {
    setValue(
      "process.steps",
      steps.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     RAW INFORMATION
  ====================================================== */

  function addRawInformation() {
    setValue("process.information.rawInformation", [...rawInformation, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removeRawInformation(index: number) {
    setValue(
      "process.information.rawInformation",
      rawInformation.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     INFORMATION GROUPS
  ====================================================== */

  function addGroup() {
    setValue(
      "process.information.groups",
      [
        ...groups,
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

  function removeGroup(index: number) {
    setValue(
      "process.information.groups",
      groups.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     PRIORITIES
  ====================================================== */

  function addPriority() {
    setValue("process.information.priorities", [...priorities, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removePriority(index: number) {
    setValue(
      "process.information.priorities",
      priorities.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     PRINCIPLE LINES
  ====================================================== */

  function addPrincipleLine() {
    setValue("process.structure.principleLines", [...principleLines, ""], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function removePrincipleLine(index: number) {
    setValue(
      "process.structure.principleLines",
      principleLines.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  /* ======================================================
     DESIGN DECISIONS
  ====================================================== */

  function addDecision() {
    setValue(
      "process.refinement.decisions",
      [
        ...decisions,
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

  function removeDecision(index: number) {
    setValue(
      "process.refinement.decisions",
      decisions.filter((_, i) => i !== index),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );
  }

  return (
    <div className="space-y-10">
      {/* ==================================================
          PROCESS HEADER
      ================================================== */}

      <FormSection
        number="01"
        title="Process Introduction"
        description="Main heading and introduction displayed at the beginning of the process section."
      >
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Heading" error={errors.process?.heading?.message}>
              <input
                {...register("process.heading")}
                placeholder="Figuring out what"
                className={inputClass}
              />
            </Field>

            <Field
              label="Heading Highlight"
              error={errors.process?.headingHighlight?.message}
            >
              <input
                {...register("process.headingHighlight")}
                placeholder="actually matters."
                className={inputClass}
              />
            </Field>
          </div>

          <Field
            label="Description"
            error={errors.process?.description?.message}
          >
            <textarea
              {...register("process.description")}
              rows={4}
              placeholder="Before thinking about colors or components..."
              className={textareaClass}
            />
          </Field>

          <div>
            <FieldLabel
              label="Process Steps"
              description="Shown in the process index below the introduction."
            />

            <div className="mt-3 space-y-2">
              {steps.map((_, index) => (
                <StringItem
                  key={index}
                  index={index}
                  onRemove={() => removeStep(index)}
                >
                  <input
                    {...register(`process.steps.${index}` as const)}
                    placeholder={
                      index === 0
                        ? "Understand"
                        : index === 1
                          ? "Structure"
                          : "Refine"
                    }
                    className={inputClass}
                  />
                </StringItem>
              ))}

              <AddButton label="Add Process Step" onClick={addStep} />
            </div>
          </div>
        </div>
      </FormSection>

      {/* ==================================================
          INFORMATION
      ================================================== */}

      <FormSection
        number="02"
        title="Information"
        description="Content used in the information and prioritization stage."
      >
        <div className="space-y-8">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Heading"
                error={errors.process?.information?.heading?.message}
              >
                <input
                  {...register("process.information.heading")}
                  placeholder="Making sense"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Heading Highlight"
                error={errors.process?.information?.headingHighlight?.message}
              >
                <input
                  {...register("process.information.headingHighlight")}
                  placeholder="of the data."
                  className={inputClass}
                />
              </Field>
            </div>

            <Field
              label="Description"
              error={errors.process?.information?.description?.message}
            >
              <textarea
                {...register("process.information.description")}
                rows={4}
                placeholder="The system had multiple types of technical information..."
                className={textareaClass}
              />
            </Field>
          </div>

          {/* RAW INFORMATION */}

          <SubSection
            title="Raw Information"
            description="Initial pieces of information before they were organized."
          >
            <div className="space-y-2">
              {rawInformation.map((_, index) => (
                <StringItem
                  key={index}
                  index={index}
                  onRemove={() => removeRawInformation(index)}
                >
                  <input
                    {...register(
                      `process.information.rawInformation.${index}` as const,
                    )}
                    placeholder="Sensor Data"
                    className={inputClass}
                  />
                </StringItem>
              ))}

              <AddButton
                label="Add Raw Information"
                onClick={addRawInformation}
              />
            </div>
          </SubSection>

          {/* GROUPS */}

          <SubSection
            title="Information Groups"
            description="How related information was organized into meaningful groups."
          >
            <div className="space-y-3">
              {groups.map((_, index) => (
                <ArrayCard
                  key={index}
                  number={String(index + 1).padStart(2, "0")}
                  label="Information Group"
                  onRemove={() => removeGroup(index)}
                >
                  <div className="grid gap-5">
                    <Field
                      label="Title"
                      error={
                        errors.process?.information?.groups?.[index]?.title
                          ?.message
                      }
                    >
                      <input
                        {...register(
                          `process.information.groups.${index}.title` as const,
                        )}
                        placeholder="Monitoring Data"
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Description"
                      error={
                        errors.process?.information?.groups?.[index]
                          ?.description?.message
                      }
                    >
                      <textarea
                        {...register(
                          `process.information.groups.${index}.description` as const,
                        )}
                        rows={3}
                        placeholder="Measurements and values coming from the system."
                        className={textareaClass}
                      />
                    </Field>
                  </div>
                </ArrayCard>
              ))}

              <AddButton label="Add Information Group" onClick={addGroup} />
            </div>
          </SubSection>

          {/* PRIORITIES */}

          <SubSection
            title="Prioritization"
            description="Questions or principles used to establish information hierarchy."
          >
            <div className="grid gap-5">
              <Field
                label="Priority Heading"
                error={errors.process?.information?.priorityHeading?.message}
              >
                <input
                  {...register("process.information.priorityHeading")}
                  placeholder="What deserves attention first?"
                  className={inputClass}
                />
              </Field>

              <div>
                <FieldLabel label="Priorities" />

                <div className="mt-3 space-y-2">
                  {priorities.map((_, index) => (
                    <StringItem
                      key={index}
                      index={index}
                      onRemove={() => removePriority(index)}
                    >
                      <input
                        {...register(
                          `process.information.priorities.${index}` as const,
                        )}
                        placeholder="What needs attention first?"
                        className={inputClass}
                      />
                    </StringItem>
                  ))}

                  <AddButton label="Add Priority" onClick={addPriority} />
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      </FormSection>

      {/* ==================================================
          STRUCTURE
      ================================================== */}

      <FormSection
        number="03"
        title="Structure"
        description="Early interface direction, wireframe, and design principle."
      >
        <div className="space-y-8">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Heading"
                error={errors.process?.structure?.heading?.message}
              >
                <input
                  {...register("process.structure.heading")}
                  placeholder="Shaping the"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Heading Highlight"
                error={errors.process?.structure?.headingHighlight?.message}
              >
                <input
                  {...register("process.structure.headingHighlight")}
                  placeholder="experience."
                  className={inputClass}
                />
              </Field>
            </div>

            <Field
              label="Description"
              error={errors.process?.structure?.description?.message}
            >
              <textarea
                {...register("process.structure.description")}
                rows={4}
                placeholder="Once the information had a clearer structure..."
                className={textareaClass}
              />
            </Field>
          </div>

          {/* WIREFRAME */}

          <SubSection
            title="Wireframe"
            description="Early structure image displayed in the case study."
          >
            <div className="grid gap-5">
              <div>
                <ImageUpload
                  label="Wireframe Image"
                  description="Upload the early structure or wireframe used in the case study."
                  value={watch("process.structure.image")}
                  onChange={(url) =>
                    setValue("process.structure.image", url, {
                      shouldDirty: true,
                      shouldValidate: true,
                    })
                  }
                />

                {errors.process?.structure?.image?.message && (
                  <p className="mt-2 text-[10px] text-red-400">
                    {errors.process.structure.image.message}
                  </p>
                )}
              </div>

              <Field
                label="Image Alt"
                error={errors.process?.structure?.imageAlt?.message}
              >
                <input
                  {...register("process.structure.imageAlt")}
                  placeholder="Project early dashboard wireframe"
                  className={inputClass}
                />
              </Field>
            </div>
          </SubSection>

          {/* EARLY DIRECTION */}

          <SubSection
            title="Early Direction"
            description="Explanation shown beside the wireframe."
          >
            <div className="grid gap-5">
              <Field
                label="Direction Title"
                error={errors.process?.structure?.directionTitle?.message}
              >
                <input
                  {...register("process.structure.directionTitle")}
                  placeholder="Started rough."
                  className={inputClass}
                />
              </Field>

              <Field
                label="Direction Description"
                error={errors.process?.structure?.directionDescription?.message}
              >
                <textarea
                  {...register("process.structure.directionDescription")}
                  rows={4}
                  placeholder="At this stage, the focus wasn't visual polish..."
                  className={textareaClass}
                />
              </Field>
            </div>
          </SubSection>

          {/* PRINCIPLE */}

          <SubSection
            title="Design Principle"
            description="Short lines shown underneath the early direction."
          >
            <div className="space-y-2">
              {principleLines.map((_, index) => (
                <StringItem
                  key={index}
                  index={index}
                  onRemove={() => removePrincipleLine(index)}
                >
                  <input
                    {...register(
                      `process.structure.principleLines.${index}` as const,
                    )}
                    placeholder="Structure first."
                    className={inputClass}
                  />
                </StringItem>
              ))}

              <AddButton
                label="Add Principle Line"
                onClick={addPrincipleLine}
              />
            </div>
          </SubSection>
        </div>
      </FormSection>

      {/* ==================================================
          REFINEMENT
      ================================================== */}

      <FormSection
        number="04"
        title="Refinement"
        description="Before and after comparison and the decisions behind the final interface."
      >
        <div className="space-y-8">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Heading"
                error={errors.process?.refinement?.heading?.message}
              >
                <input
                  {...register("process.refinement.heading")}
                  placeholder="From structure"
                  className={inputClass}
                />
              </Field>

              <Field
                label="Heading Highlight"
                error={errors.process?.refinement?.headingHighlight?.message}
              >
                <input
                  {...register("process.refinement.headingHighlight")}
                  placeholder="to interface."
                  className={inputClass}
                />
              </Field>
            </div>

            <Field
              label="Description"
              error={errors.process?.refinement?.description?.message}
            >
              <textarea
                {...register("process.refinement.description")}
                rows={4}
                placeholder="The final direction came from refining the hierarchy..."
                className={textareaClass}
              />
            </Field>
          </div>

          {/* BEFORE / AFTER */}

          <SubSection
            title="Before & After"
            description="Images used for the wireframe-to-final comparison."
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* BEFORE */}

              <div className="space-y-5">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/20">
                  Before
                </p>

                <div>
                  <ImageUpload
                    label="Before Image"
                    description="Upload the interface before refinement."
                    value={watch("process.refinement.beforeImage")}
                    onChange={(url) =>
                      setValue("process.refinement.beforeImage", url, {
                        shouldDirty: true,
                        shouldValidate: true,
                      })
                    }
                  />

                  {errors.process?.refinement?.beforeImage?.message && (
                    <p className="mt-2 text-[10px] text-red-400">
                      {errors.process.refinement.beforeImage.message}
                    </p>
                  )}
                </div>

                <Field
                  label="Image Alt"
                  error={errors.process?.refinement?.beforeImageAlt?.message}
                >
                  <input
                    {...register("process.refinement.beforeImageAlt")}
                    placeholder="Project wireframe"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* AFTER */}

              <div className="space-y-5">
                <p className="text-[9px] uppercase tracking-[0.16em] text-[#3B82F6]">
                  After
                </p>

                <div>
                  <ImageUpload
                    label="After Image"
                    description="Upload the final interface after refinement."
                    value={watch("process.refinement.afterImage")}
                    onChange={(url) =>
                      setValue("process.refinement.afterImage", url, {
                        shouldDirty: true,
                        shouldValidate: true,
                      })
                    }
                  />

                  {errors.process?.refinement?.afterImage?.message && (
                    <p className="mt-2 text-[10px] text-red-400">
                      {errors.process.refinement.afterImage.message}
                    </p>
                  )}
                </div>

                <Field
                  label="Image Alt"
                  error={errors.process?.refinement?.afterImageAlt?.message}
                >
                  <input
                    {...register("process.refinement.afterImageAlt")}
                    placeholder="Project final dashboard"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>
          </SubSection>

          {/* DECISIONS */}

          <SubSection
            title="Design Decisions"
            description="The main decisions that shaped the final interface."
          >
            <div className="space-y-3">
              {decisions.map((_, index) => (
                <ArrayCard
                  key={index}
                  number={String(index + 1).padStart(2, "0")}
                  label="Design Decision"
                  onRemove={() => removeDecision(index)}
                >
                  <div className="grid gap-5">
                    <Field
                      label="Title"
                      error={
                        errors.process?.refinement?.decisions?.[index]?.title
                          ?.message
                      }
                    >
                      <input
                        {...register(
                          `process.refinement.decisions.${index}.title` as const,
                        )}
                        placeholder="Hierarchy"
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Description"
                      error={
                        errors.process?.refinement?.decisions?.[index]
                          ?.description?.message
                      }
                    >
                      <textarea
                        {...register(
                          `process.refinement.decisions.${index}.description` as const,
                        )}
                        rows={3}
                        placeholder="Important conditions given stronger visual priority."
                        className={textareaClass}
                      />
                    </Field>
                  </div>
                </ArrayCard>
              ))}

              <AddButton label="Add Design Decision" onClick={addDecision} />
            </div>
          </SubSection>
        </div>
      </FormSection>

      {/* ==================================================
          CLOSING
      ================================================== */}

      <FormSection
        number="05"
        title="Closing"
        description="Short closing statement displayed at the bottom of the process section."
      >
        <Field
          label="Closing Text"
          error={errors.process?.closingText?.message}
        >
          <input
            {...register("process.closingText")}
            placeholder="Information → Structure → Clarity"
            className={inputClass}
          />
        </Field>
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
  children: ReactNode;
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

function FieldLabel({
  label,
  description,
}: {
  label: string;
  description?: string;
}) {
  return (
    <div>
      <p className={labelClass}>{label}</p>

      {description && (
        <p className="mt-1 text-[10px] leading-5 text-white/20">
          {description}
        </p>
      )}
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
  children: ReactNode;
};

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
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
   SUB SECTION
====================================================== */

type SubSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

function SubSection({ title, description, children }: SubSectionProps) {
  return (
    <div className="border-t border-white/[0.07] pt-6">
      <div className="mb-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
          {title}
        </p>

        {description && (
          <p className="mt-1.5 max-w-lg text-[11px] leading-5 text-white/20">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}

/* ======================================================
   ARRAY CARD
====================================================== */

type ArrayCardProps = {
  number: string;
  label: string;
  onRemove: () => void;
  children: ReactNode;
};

function ArrayCard({ number, label, onRemove, children }: ArrayCardProps) {
  return (
    <div className="border border-white/10 bg-black/10 p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs text-[#3B82F6]">{number}</span>

          <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
            {label}
          </p>
        </div>

        <RemoveButton onClick={onRemove} />
      </div>

      {children}
    </div>
  );
}

/* ======================================================
   STRING ITEM
====================================================== */

type StringItemProps = {
  index: number;
  onRemove: () => void;
  children: ReactNode;
};

function StringItem({ index, onRemove, children }: StringItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-11 w-9 shrink-0 items-center justify-center border border-white/10 text-[9px] text-white/20">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="min-w-0 flex-1">{children}</div>

      <RemoveButton onClick={onRemove} />
    </div>
  );
}

/* ======================================================
   BUTTONS
====================================================== */

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex w-full
        items-center justify-center
        gap-2
        border
        border-dashed
        border-white/10
        px-4
        py-3
        text-[9px]
        uppercase
        tracking-[0.14em]
        text-white/30
        transition-all
        hover:border-[#3B82F6]/40
        hover:bg-[#3B82F6]/5
        hover:text-[#3B82F6]
      "
    >
      <Plus size={13} />
      {label}
    </button>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex h-8 w-8
        shrink-0
        items-center justify-center
        rounded-full
        border
        border-white/10
        text-white/25
        transition-all
        hover:border-red-400/30
        hover:bg-red-400/10
        hover:text-red-400
      "
      aria-label="Remove item"
    >
      <Trash2 size={13} />
    </button>
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
  px-3.5
  py-3
  text-sm
  text-white/80
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
