"use client";

import type { ReactNode } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { ProjectSchema } from "@/src/schemas/project.schema";
import { ImageUpload } from "@/src/components/admin/image-upload";

type BasicInfoFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
  watch: UseFormWatch<ProjectSchema>;
  setValue: UseFormSetValue<ProjectSchema>;
};

type FieldProps = {
  label: string;
  description?: string;
  error?: string;
  children: ReactNode;
};

type CheckboxFieldProps = {
  title: string;
  description: string;
  registration: UseFormRegisterReturn;
};

export function BasicInfoForm({
  register,
  errors,
  watch,
  setValue,
}: BasicInfoFormProps) {
  const basicErrors = errors.basic;

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Project Number"
          description="Number displayed in the portfolio."
          error={basicErrors?.number?.message}
        >
          <input
            {...register("basic.number")}
            type="text"
            placeholder="01"
            className={inputClassName}
          />
        </Field>

        <Field
          label="Order"
          description="Controls the project display order."
          error={basicErrors?.order?.message}
        >
          <input
            {...register("basic.order", {
              valueAsNumber: true,
            })}
            type="number"
            min={1}
            placeholder="1"
            className={inputClassName}
          />
        </Field>
      </div>

      {/* ==================================================
          TITLE
      ================================================== */}

      <Field
        label="Project Title"
        description="Main title used across the portfolio."
        error={basicErrors?.title?.message}
      >
        <input
          {...register("basic.title")}
          type="text"
          placeholder="Ground Detector"
          className={inputClassName}
        />
      </Field>

      {/* ==================================================
          SLUG
      ================================================== */}

      <Field
        label="Slug"
        description="Used as the public URL for this project."
        error={basicErrors?.slug?.message}
      >
        <div
          className="
            flex items-center
            border border-white/10
            bg-white/[0.02]
            transition-colors

            focus-within:border-[#3B82F6]/60
          "
        >
          <span
            className="
              shrink-0
              border-r border-white/10
              px-4 py-3
              text-xs
              text-white/20
            "
          >
            /work/
          </span>

          <input
            {...register("basic.slug")}
            type="text"
            placeholder="ground-detector"
            className="
              min-w-0
              flex-1
              bg-transparent
              px-4 py-3
              text-sm
              text-white/75
              outline-none

              placeholder:text-white/15
            "
          />
        </div>
      </Field>

      {/* ==================================================
          CATEGORY
      ================================================== */}

      <Field
        label="Category"
        description="Project discipline or category."
        error={basicErrors?.category?.message}
      >
        <input
          {...register("basic.category")}
          type="text"
          placeholder="Monitoring System / UI/UX Design"
          className={inputClassName}
        />
      </Field>

      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <Field
        label="Description"
        description="Short description used in project previews."
        error={basicErrors?.description?.message}
      >
        <textarea
          {...register("basic.description")}
          rows={5}
          placeholder="A short description of the project..."
          className={`${inputClassName} resize-y leading-6`}
        />
      </Field>

      <div>
        <ImageUpload
          label="Cover / Hero Image"
          description="Main image used for the project cover and case study hero. JPG, PNG or WebP. Maximum 10 MB."
          value={watch("basic.coverImage")}
          onChange={(url) =>
            setValue("basic.coverImage", url, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
          aspect="video"
        />

        {basicErrors?.coverImage?.message && (
          <p className="mt-2 text-xs text-red-400">
            {basicErrors.coverImage.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Role"
          description="Your role in this project."
          error={basicErrors?.role?.message}
        >
          <input
            {...register("basic.role")}
            type="text"
            placeholder="UI/UX Designer"
            className={inputClassName}
          />
        </Field>

        <Field
          label="Context"
          description="Project or industry context."
          error={basicErrors?.context?.message}
        >
          <input
            {...register("basic.context")}
            type="text"
            placeholder="Railway Monitoring"
            className={inputClassName}
          />
        </Field>
      </div>

      {/* ==================================================
          PLATFORM + YEAR
      ================================================== */}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Platform"
          description="Platform where the product is used."
          error={basicErrors?.platform?.message}
        >
          <input
            {...register("basic.platform")}
            type="text"
            placeholder="Web Dashboard"
            className={inputClassName}
          />
        </Field>

        <Field
          label="Year"
          description="Project year."
          error={basicErrors?.year?.message}
        >
          <input
            {...register("basic.year")}
            type="text"
            placeholder="2025"
            className={inputClassName}
          />
        </Field>
      </div>

      {/* ==================================================
          READ TIME
      ================================================== */}

      <Field
        label="Read Time"
        description="Estimated time to read the case study."
        error={basicErrors?.readTime?.message}
      >
        <input
          {...register("basic.readTime")}
          type="text"
          placeholder="7–10 Min"
          className={inputClassName}
        />
      </Field>

      {/* ==================================================
          PROJECT SETTINGS
      ================================================== */}

      <div className="border-t border-white/10 pt-8">
        <div>
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-white/40
            "
          >
            Project Settings
          </p>

          <p className="mt-1 text-xs leading-5 text-white/20">
            Control how this project appears on your portfolio.
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <CheckboxField
            title="Featured Project"
            description="Show this project in selected or featured work."
            registration={register("basic.featured")}
          />

          <CheckboxField
            title="Published"
            description="Make this case study publicly accessible."
            registration={register("basic.published")}
          />
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   FIELD
====================================================== */

function Field({ label, description, error, children }: FieldProps) {
  return (
    <div>
      <div className="mb-2">
        <label
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.15em]
            text-white/40
          "
        >
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
   CHECKBOX FIELD
====================================================== */

function CheckboxField({
  title,
  description,
  registration,
}: CheckboxFieldProps) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-start
        gap-3
        border border-white/10
        bg-white/[0.01]
        p-4
        transition-colors

        hover:border-white/20
        hover:bg-white/[0.02]
      "
    >
      <input
        type="checkbox"
        {...registration}
        className="
          mt-0.5
          h-4 w-4
          shrink-0
          cursor-pointer
          accent-[#3B82F6]
        "
      />

      <span className="min-w-0">
        <span
          className="
            block
            text-sm
            font-medium
            text-white/65
          "
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-xs
            leading-5
            text-white/25
          "
        >
          {description}
        </span>
      </span>
    </label>
  );
}

/* ======================================================
   STYLES
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

  hover:border-white/20

  focus:border-[#3B82F6]/60
  focus:bg-white/[0.03]
`;
