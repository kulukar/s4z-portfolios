"use client";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import type { ProjectSchema } from "@/src/schemas/project.schema";
import { ImageUpload } from "../image-upload";

type SolutionFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

export function SolutionForm({
  register,
  errors,
  watch,
  setValue,
}: SolutionFormProps) {
  const designDetails = watch("solution.designDetails") ?? [];

  function addDesignDetail() {
    setValue(
      "solution.designDetails",
      [
        ...designDetails,
        {
          label: "",
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

  function removeDesignDetail(index: number) {
    setValue(
      "solution.designDetails",
      designDetails.filter((_, itemIndex) => itemIndex !== index),
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
        description="Main heading and introduction for the solution section."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Heading</Label>

            <Input
              {...register("solution.heading")}
              placeholder="Designing the solution"
            />

            <ErrorMessage message={errors.solution?.heading?.message} />
          </Field>

          <Field>
            <Label>Heading Highlight</Label>

            <Input
              {...register("solution.headingHighlight")}
              placeholder="the solution"
            />

            <ErrorMessage
              message={errors.solution?.headingHighlight?.message}
            />
          </Field>
        </div>

        <Field>
          <Label>Description</Label>

          <Textarea
            {...register("solution.description")}
            placeholder="Explain the overall direction of the final solution..."
          />

          <ErrorMessage message={errors.solution?.description?.message} />
        </Field>
      </FormSection>

      {/* ==================================================
          DASHBOARD
      ================================================== */}

      <FormSection
        number="02"
        title="Dashboard"
        description="Main dashboard presentation and supporting explanation."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Title</Label>

            <Input
              {...register("solution.dashboard.title")}
              placeholder="A clearer dashboard"
            />

            <ErrorMessage
              message={errors.solution?.dashboard?.title?.message}
            />
          </Field>

          <Field>
            <Label>Title Highlight</Label>

            <Input
              {...register("solution.dashboard.titleHighlight")}
              placeholder="dashboard"
            />

            <ErrorMessage
              message={errors.solution?.dashboard?.titleHighlight?.message}
            />
          </Field>
        </div>

        <Field>
          <Label>Description</Label>

          <Textarea
            {...register("solution.dashboard.description")}
            placeholder="Explain what the dashboard solves..."
          />

          <ErrorMessage
            message={errors.solution?.dashboard?.description?.message}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <ImageUpload
              label="Dashboard Image"
              value={watch("solution.dashboard.image")}
              onChange={(url) =>
                setValue("solution.dashboard.image", url, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            />

            <ErrorMessage
              message={errors.solution?.dashboard?.image?.message}
            />
          </Field>

          <Field>
            <Label>Image Alt</Label>

            <Input
              {...register("solution.dashboard.imageAlt")}
              placeholder="Dashboard interface"
            />

            <ErrorMessage
              message={errors.solution?.dashboard?.imageAlt?.message}
            />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          DESIGN DETAILS
      ================================================== */}

      <FormSection
        number="03"
        title="Design Details"
        description="Key design decisions used throughout the interface."
      >
        <div className="space-y-4">
          {designDetails.map((_, index) => (
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
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                  Detail {String(index + 1).padStart(2, "0")}
                </p>

                <button
                  type="button"
                  onClick={() => removeDesignDetail(index)}
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    border border-white/10
                    text-white/25
                    transition-colors

                    hover:border-red-400/40
                    hover:text-red-400
                  "
                  aria-label={`Remove design detail ${index + 1}`}
                >
                  <Trash2 size={13} />
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field>
                  <Label>Label</Label>

                  <Input
                    {...register(`solution.designDetails.${index}.label`)}
                    placeholder="01 / Clarity"
                  />

                  <ErrorMessage
                    message={
                      errors.solution?.designDetails?.[index]?.label?.message
                    }
                  />
                </Field>

                <Field>
                  <Label>Title</Label>

                  <Input
                    {...register(`solution.designDetails.${index}.title`)}
                    placeholder="Information at a glance"
                  />

                  <ErrorMessage
                    message={
                      errors.solution?.designDetails?.[index]?.title?.message
                    }
                  />
                </Field>
              </div>

              <Field>
                <Label>Description</Label>

                <Textarea
                  {...register(`solution.designDetails.${index}.description`)}
                  placeholder="Explain this design decision..."
                />

                <ErrorMessage
                  message={
                    errors.solution?.designDetails?.[index]?.description
                      ?.message
                  }
                />
              </Field>
            </div>
          ))}

          <button
            type="button"
            onClick={addDesignDetail}
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
            Add Design Detail
          </button>
        </div>
      </FormSection>

      {/* ==================================================
          MONITORING
      ================================================== */}

      <FormSection
        number="04"
        title="Monitoring"
        description="Monitoring interface and the principle behind the design."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Title</Label>

            <Input
              {...register("solution.monitoring.title")}
              placeholder="Monitoring made easier"
            />

            <ErrorMessage
              message={errors.solution?.monitoring?.title?.message}
            />
          </Field>

          <Field>
            <Label>Title Highlight</Label>

            <Input
              {...register("solution.monitoring.titleHighlight")}
              placeholder="easier"
            />

            <ErrorMessage
              message={errors.solution?.monitoring?.titleHighlight?.message}
            />
          </Field>
        </div>

        <Field>
          <Label>Description</Label>

          <Textarea
            {...register("solution.monitoring.description")}
            placeholder="Explain the monitoring experience..."
          />

          <ErrorMessage
            message={errors.solution?.monitoring?.description?.message}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Image</Label>

            <Input
              {...register("solution.monitoring.image")}
              placeholder="/images/projects/project/monitoring.jpg"
            />

            <ErrorMessage
              message={errors.solution?.monitoring?.image?.message}
            />
          </Field>

          <Field>
            <Label>Image Alt</Label>

            <Input
              {...register("solution.monitoring.imageAlt")}
              placeholder="Monitoring interface"
            />

            <ErrorMessage
              message={errors.solution?.monitoring?.imageAlt?.message}
            />
          </Field>
        </div>

        <Field>
          <Label>Principle</Label>

          <Textarea
            {...register("solution.monitoring.principle")}
            placeholder="Optional design principle..."
          />

          <ErrorMessage
            message={errors.solution?.monitoring?.principle?.message}
          />
        </Field>
      </FormSection>

      {/* ==================================================
          DATA VISUALIZATION
      ================================================== */}

      <FormSection
        number="05"
        title="Data Visualization"
        description="How information and data are presented visually."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Title</Label>

            <Input
              {...register("solution.dataVisualization.title")}
              placeholder="Making data readable"
            />

            <ErrorMessage
              message={errors.solution?.dataVisualization?.title?.message}
            />
          </Field>

          <Field>
            <Label>Title Highlight</Label>

            <Input
              {...register("solution.dataVisualization.titleHighlight")}
              placeholder="readable"
            />

            <ErrorMessage
              message={
                errors.solution?.dataVisualization?.titleHighlight?.message
              }
            />
          </Field>
        </div>

        <Field>
          <Label>Description</Label>

          <Textarea
            {...register("solution.dataVisualization.description")}
            placeholder="Explain how the visualization helps users..."
          />

          <ErrorMessage
            message={errors.solution?.dataVisualization?.description?.message}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Image</Label>

            <Input
              {...register("solution.dataVisualization.image")}
              placeholder="/images/projects/project/data-visualization.jpg"
            />

            <ErrorMessage
              message={errors.solution?.dataVisualization?.image?.message}
            />
          </Field>

          <Field>
            <Label>Image Alt</Label>

            <Input
              {...register("solution.dataVisualization.imageAlt")}
              placeholder="Data visualization interface"
            />

            <ErrorMessage
              message={errors.solution?.dataVisualization?.imageAlt?.message}
            />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          INTERFACE DETAILS
      ================================================== */}

      <FormSection
        number="06"
        title="Interface Details"
        description="Additional interface screens and supporting details."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Title</Label>

            <Input
              {...register("solution.interfaceDetails.title")}
              placeholder="Details that support the experience"
            />

            <ErrorMessage
              message={errors.solution?.interfaceDetails?.title?.message}
            />
          </Field>

          <Field>
            <Label>Title Highlight</Label>

            <Input
              {...register("solution.interfaceDetails.titleHighlight")}
              placeholder="experience"
            />

            <ErrorMessage
              message={
                errors.solution?.interfaceDetails?.titleHighlight?.message
              }
            />
          </Field>
        </div>

        <Field>
          <Label>Description</Label>

          <Textarea
            {...register("solution.interfaceDetails.description")}
            placeholder="Explain the supporting interface details..."
          />

          <ErrorMessage
            message={errors.solution?.interfaceDetails?.description?.message}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Primary Image</Label>

            <Input
              {...register("solution.interfaceDetails.primaryImage")}
              placeholder="/images/projects/project/detail-primary.jpg"
            />

            <ErrorMessage
              message={errors.solution?.interfaceDetails?.primaryImage?.message}
            />
          </Field>

          <Field>
            <Label>Primary Image Alt</Label>

            <Input
              {...register("solution.interfaceDetails.primaryImageAlt")}
              placeholder="Primary interface detail"
            />

            <ErrorMessage
              message={
                errors.solution?.interfaceDetails?.primaryImageAlt?.message
              }
            />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Secondary Image</Label>

            <Input
              {...register("solution.interfaceDetails.secondaryImage")}
              placeholder="/images/projects/project/detail-secondary.jpg"
            />

            <ErrorMessage
              message={
                errors.solution?.interfaceDetails?.secondaryImage?.message
              }
            />
          </Field>

          <Field>
            <Label>Secondary Image Alt</Label>

            <Input
              {...register("solution.interfaceDetails.secondaryImageAlt")}
              placeholder="Secondary interface detail"
            />

            <ErrorMessage
              message={
                errors.solution?.interfaceDetails?.secondaryImageAlt?.message
              }
            />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          RESULT
      ================================================== */}

      <FormSection
        number="07"
        title="Result"
        description="Closing statement for the solution section."
      >
        <Field>
          <Label>Text</Label>

          <Textarea
            {...register("solution.result.text")}
            placeholder="Describe the result of the final design..."
          />

          <ErrorMessage message={errors.solution?.result?.text?.message} />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <Label>Highlight</Label>

            <Input
              {...register("solution.result.highlight")}
              placeholder="Optional highlighted phrase"
            />

            <ErrorMessage
              message={errors.solution?.result?.highlight?.message}
            />
          </Field>

          <Field>
            <Label>Principle</Label>

            <Input
              {...register("solution.result.principle")}
              placeholder="Optional principle"
            />

            <ErrorMessage
              message={errors.solution?.result?.principle?.message}
            />
          </Field>
        </div>
      </FormSection>

      {/* ==================================================
          CLOSING
      ================================================== */}

      <FormSection
        number="08"
        title="Closing"
        description="Optional closing text before the outcome section."
      >
        <Field>
          <Label>Closing Text</Label>

          <Textarea
            {...register("solution.closingText")}
            placeholder="Optional closing paragraph..."
          />

          <ErrorMessage message={errors.solution?.closingText?.message} />
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
        w-full resize-y
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
