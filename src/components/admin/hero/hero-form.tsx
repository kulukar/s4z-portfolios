"use client";

import Image from "next/image";
import { useState } from "react";
import { upload } from "@vercel/blob/client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  GripVertical,
  ImageIcon,
  Loader2,
  Plus,
  Save,
  Trash2,
  Upload,
} from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

import { updateSiteHero } from "@/src/lib/actions/hero";
import { siteHeroSchema, type SiteHeroSchema } from "@/src/schemas/hero.schema";

type HeroFormProps = {
  defaultValues: SiteHeroSchema;
};

type SectionHeaderProps = {
  number: string;
  title: string;
  description: string;
};

const inputClassName = `
  w-full
  border border-white/10
  bg-white/[0.02]
  px-4 py-3
  text-sm
  text-white/80
  outline-none
  transition-colors

  placeholder:text-white/15

  focus:border-[#3B82F6]/70
`;

const labelClassName = `
  text-[9px]
  uppercase
  tracking-[0.16em]
  text-white/30
`;

export function HeroForm({ defaultValues }: HeroFormProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SiteHeroSchema>({
    resolver: zodResolver(siteHeroSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "headlines",
  });

  const backgroundImage = watch("backgroundImage");
  const available = watch("available");

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setMessage(null);
    setSuccess(false);

    if (!file.type.startsWith("image/")) {
      setMessage("File harus berupa gambar.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessage("Ukuran gambar maksimal 10 MB.");
      event.target.value = "";
      return;
    }

    try {
      setIsUploading(true);

      const blob = await upload(`hero/${Date.now()}-${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/blob/upload",
      });

      setValue("backgroundImage", blob.url, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setSuccess(true);
      setMessage("Background image berhasil diupload.");
    } catch (error) {
      console.error("HERO_IMAGE_UPLOAD_ERROR:", error);

      setSuccess(false);
      setMessage("Gagal mengupload background image.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  async function onSubmit(values: SiteHeroSchema) {
    setMessage(null);
    setSuccess(false);

    try {
      const result = await updateSiteHero(values);

      if (!result.success) {
        setMessage(result.message ?? "Failed to update hero.");
        return;
      }

      setSuccess(true);
      setMessage(result.message ?? "Hero updated successfully.");

      reset(values);
    } catch (error) {
      console.error(error);

      setSuccess(false);
      setMessage("Something went wrong while updating the hero.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
      <section>
        <SectionHeader
          number="01"
          title="Introduction"
          description="Small introductory text displayed above the main headline."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <div className="space-y-2">
            <label htmlFor="eyebrow" className={labelClassName}>
              Eyebrow
            </label>

            <input
              id="eyebrow"
              {...register("eyebrow")}
              placeholder="- UI/UX Designer"
              className={inputClassName}
            />

            {errors.eyebrow && (
              <p className="text-xs text-red-400">{errors.eyebrow.message}</p>
            )}
          </div>
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="02"
          title="Headlines"
          description="Build the main hero headline using one or more lines."
        />

        <div className="mt-6 space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="
                border
                border-white/10
                bg-white/1
                p-4

                sm:p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-4
                "
              >
                <div className="flex items-center gap-3">
                  <GripVertical
                    size={15}
                    strokeWidth={1.5}
                    className="text-white/15"
                  />

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-white/30
                    "
                  >
                    Headline {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <button
                  type="button"
                  disabled={fields.length === 1}
                  onClick={() => remove(index)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    border
                    border-white/10

                    text-white/25

                    transition-colors

                    hover:border-red-400/40
                    hover:text-red-400

                    disabled:cursor-not-allowed
                    disabled:opacity-20
                  "
                  aria-label={`Remove headline ${index + 1}`}
                >
                  <Trash2 size={13} strokeWidth={1.5} />
                </button>
              </div>

              <div
                className="
                  mt-5
                  grid
                  gap-4

                  md:grid-cols-[1fr_180px]
                "
              >
                <div className="space-y-2">
                  <label
                    htmlFor={`headline-${index}`}
                    className={labelClassName}
                  >
                    Text
                  </label>

                  <input
                    id={`headline-${index}`}
                    {...register(`headlines.${index}.text`)}
                    placeholder="I make interfaces"
                    className={inputClassName}
                  />

                  {errors.headlines?.[index]?.text && (
                    <p className="text-xs text-red-400">
                      {errors.headlines[index]?.text?.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor={`headline-style-${index}`}
                    className={labelClassName}
                  >
                    Style
                  </label>

                  <select
                    id={`headline-style-${index}`}
                    {...register(`headlines.${index}.style`)}
                    className={inputClassName}
                  >
                    <option value="primary" className="bg-[#111111]">
                      Primary
                    </option>

                    <option value="muted" className="bg-[#111111]">
                      Muted
                    </option>

                    <option value="accent" className="bg-[#111111]">
                      Accent
                    </option>
                  </select>
                </div>
              </div>
            </div>
          ))}

          {errors.headlines?.root?.message && (
            <p className="text-xs text-red-400">
              {errors.headlines.root.message}
            </p>
          )}

          <button
            type="button"
            onClick={() =>
              append({
                text: "",
                style: "muted",
              })
            }
            className="
              group
              inline-flex
              items-center
              gap-2

              border
              border-dashed
              border-white/15

              px-4
              py-3

              text-[9px]
              uppercase
              tracking-[0.16em]
              text-white/30

              transition-all

              hover:border-[#3B82F6]
              hover:text-white
            "
          >
            <Plus
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                group-hover:rotate-90
              "
            />
            Add Headline
          </button>
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="03"
          title="Description"
          description="Supporting introduction displayed below the main headline."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <div className="space-y-2">
            <label htmlFor="description" className={labelClassName}>
              Description
            </label>

            <textarea
              id="description"
              {...register("description")}
              rows={5}
              className={`${inputClassName} resize-y leading-6`}
            />

            {errors.description && (
              <p className="text-xs text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="04"
          title="Background"
          description="Main visual used as the hero background."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <input type="hidden" {...register("backgroundImage")} />

          {backgroundImage ? (
            <div
              className="
                relative
                aspect-16/8
                overflow-hidden
                bg-[#101010]
              "
            >
              <Image
                src={backgroundImage}
                alt="Hero background preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                "
              >
                <label
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2

                    bg-black/70

                    px-4
                    py-2.5

                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-white/70

                    backdrop-blur-md

                    transition-colors

                    hover:bg-[#3B82F6]
                    hover:text-white
                  "
                >
                  {isUploading ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <Upload size={13} strokeWidth={1.5} />
                  )}

                  {isUploading ? "Uploading..." : "Change Image"}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    disabled={isUploading}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          ) : (
            <label
              className="
                flex
                min-h-60
                cursor-pointer
                flex-col
                items-center
                justify-center
                gap-3

                border
                border-dashed
                border-white/15

                bg-white/1

                text-white/25

                transition-colors

                hover:border-[#3B82F6]/60
                hover:text-white/60
              "
            >
              {isUploading ? (
                <Loader2 size={22} className="animate-spin" />
              ) : (
                <ImageIcon size={24} strokeWidth={1.25} />
              )}

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                "
              >
                {isUploading ? "Uploading..." : "Upload Background"}
              </span>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                disabled={isUploading}
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}

          {errors.backgroundImage && (
            <p className="mt-2 text-xs text-red-400">
              {errors.backgroundImage.message}
            </p>
          )}
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="05"
          title="Call to Action"
          description="Primary action displayed below the hero description."
        />

        <div
          className="
            mt-6
            grid
            gap-5

            border
            border-white/10
            bg-white/1

            p-5

            sm:p-6
            md:grid-cols-2
          "
        >
          <div className="space-y-2">
            <label htmlFor="ctaLabel" className={labelClassName}>
              Button Label
            </label>

            <input
              id="ctaLabel"
              {...register("ctaLabel")}
              placeholder="View My Work"
              className={inputClassName}
            />

            {errors.ctaLabel && (
              <p className="text-xs text-red-400">{errors.ctaLabel.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="ctaUrl" className={labelClassName}>
              Button URL
            </label>

            <input
              id="ctaUrl"
              {...register("ctaUrl")}
              placeholder="#work"
              className={inputClassName}
            />

            {errors.ctaUrl && (
              <p className="text-xs text-red-400">{errors.ctaUrl.message}</p>
            )}
          </div>
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="06"
          title="Availability"
          description="Control the availability status displayed at the bottom of the hero."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <div
            className="
              flex
              items-center
              justify-between
              gap-6

              border-b
              border-white/10

              pb-5
            "
          >
            <div>
              <p className="text-sm text-white/70">Available for work</p>

              <p className="mt-1 text-xs leading-5 text-white/25">
                Show or hide your availability indicator.
              </p>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                {...register("available")}
                className="peer sr-only"
              />

              <span
                className="
                  h-6
                  w-11

                  rounded-full

                  bg-white/10

                  transition-colors

                  peer-checked:bg-[#3B82F6]
                "
              />

              <span
                className="
                  absolute
                  left-1

                  h-4
                  w-4

                  rounded-full
                  bg-white

                  transition-transform

                  peer-checked:translate-x-5
                "
              />
            </label>
          </div>

          <div
            className={`
              mt-5
              space-y-2

              transition-opacity

              ${available ? "opacity-100" : "opacity-40"}
            `}
          >
            <label htmlFor="availableText" className={labelClassName}>
              Status Text
            </label>

            <input
              id="availableText"
              {...register("availableText")}
              disabled={!available}
              placeholder="Available for work"
              className={`${inputClassName} disabled:cursor-not-allowed`}
            />

            {errors.availableText && (
              <p className="text-xs text-red-400">
                {errors.availableText.message}
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        className="
          mt-12
          border-t
          border-white/10
          pt-10

          sm:mt-14
        "
      >
        <SectionHeader
          number="07"
          title="Scroll Link"
          description="Secondary navigation displayed at the bottom-right of the hero."
        />

        <div
          className="
            mt-6
            grid
            gap-5

            border
            border-white/10
            bg-white/1

            p-5

            sm:p-6
            md:grid-cols-2
          "
        >
          <div className="space-y-2">
            <label htmlFor="scrollLabel" className={labelClassName}>
              Label
            </label>

            <input
              id="scrollLabel"
              {...register("scrollLabel")}
              placeholder="Scroll to explore"
              className={inputClassName}
            />

            {errors.scrollLabel && (
              <p className="text-xs text-red-400">
                {errors.scrollLabel.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="scrollUrl" className={labelClassName}>
              URL
            </label>

            <input
              id="scrollUrl"
              {...register("scrollUrl")}
              placeholder="#work"
              className={inputClassName}
            />

            {errors.scrollUrl && (
              <p className="text-xs text-red-400">{errors.scrollUrl.message}</p>
            )}
          </div>
        </div>
      </section>

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
          disabled={isSubmitting || isUploading || !isDirty}
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
