"use client";

import type { FieldErrors, UseFormRegister } from "react-hook-form";

import type { ProjectSchema } from "@/src/schemas/project.schema";

type HeroFormProps = {
  register: UseFormRegister<ProjectSchema>;
  errors: FieldErrors<ProjectSchema>;
};

export function HeroForm({ register, errors }: HeroFormProps) {
  const heroErrors = errors.hero;

  return (
    <div className="space-y-6">
      <Field
        label="Eyebrow"
        description="Small category text displayed above the main headline."
        error={heroErrors?.eyebrow?.message}
      >
        <input
          {...register("hero.eyebrow")}
          placeholder="Monitoring System / UI/UX Design"
          className={inputClassName}
        />
      </Field>

      <Field
        label="Headline"
        description="Main statement displayed in the project hero."
        error={heroErrors?.headline?.message}
      >
        <textarea
          {...register("hero.headline")}
          rows={4}
          placeholder="Turning technical railway monitoring data into something easier to read at a glance."
          className={`${inputClassName} resize-y leading-6`}
        />
      </Field>

      <Field
        label="Description"
        description="Supporting introduction shown below the headline."
        error={heroErrors?.description?.message}
      >
        <textarea
          {...register("hero.description")}
          rows={5}
          placeholder="A monitoring dashboard designed to bring sensor data, system conditions, and operational information into one clear interface..."
          className={`${inputClassName} resize-y leading-6`}
        />
      </Field>
    </div>
  );
}

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
