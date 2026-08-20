"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ImagePlus, Loader2, Save, Upload } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  createPlaygroundItem,
  updatePlaygroundItem,
} from "@/src/lib/actions/playground";

import {
  playgroundSchema,
  type PlaygroundSchema,
} from "@/src/schemas/playground.schema";
import { compressImage } from "@/src/lib/image/compress-image";

type PlaygroundFormProps = {
  mode: "create" | "edit";

  itemId?: string;

  defaultValues: PlaygroundSchema;
};

export function PlaygroundForm({
  mode,
  itemId,
  defaultValues,
}: PlaygroundFormProps) {
  const router = useRouter();

  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,

    formState: { errors, isSubmitting, isDirty },
  } = useForm<PlaygroundSchema>({
    resolver: zodResolver(playgroundSchema),

    defaultValues,
  });

  const image = watch("image");
  const published = watch("published");

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

    if (file.size > 20 * 1024 * 1024) {
      setMessage("Ukuran gambar original maksimal 20 MB.");
      event.target.value = "";
      return;
    }

    setIsUploading(true);

    try {
      const compressedFile = await compressImage(file, {
        maxDimension: 2400,
        quality: 0.85,
      });

      console.log("=== IMAGE COMPRESSION ===");
      console.log("Original:", `${(file.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(
        "Compressed:",
        `${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`,
      );

      const blob = await upload(
        `playground/${Date.now()}-${compressedFile.name}`,
        compressedFile,
        {
          access: "public",
          handleUploadUrl: "/api/blob/upload",
        },
      );

      setValue("image", blob.url, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setSuccess(true);
      setMessage("Gambar berhasil diupload.");
    } catch (error) {
      console.error("PLAYGROUND_IMAGE_UPLOAD_ERROR:", error);

      setSuccess(false);
      setMessage("Gagal mengupload gambar.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  async function onSubmit(values: PlaygroundSchema) {
    setMessage(null);
    setSuccess(false);

    try {
      const result =
        mode === "create"
          ? await createPlaygroundItem(values)
          : await updatePlaygroundItem(itemId!, values);

      if (!result.success) {
        setMessage(result.message ?? "Gagal menyimpan playground.");

        return;
      }

      setSuccess(true);
      setMessage(result.message);

      reset(values);

      if (mode === "create" && result.item) {
        router.push(`/admin/playground/${result.item.id}/edit`);

        router.refresh();

        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);

      setSuccess(false);

      setMessage("Terjadi kesalahan saat menyimpan playground.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <section>
        <SectionHeader
          number="01"
          title="Artwork"
          description="Upload the visual displayed in the playground gallery."
        />

        <div className="mt-6 border border-white/10 bg-white/1 p-5 sm:p-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
              Image
            </p>

            <div
              className="
                relative
                mt-3
                aspect-video
                w-full
                overflow-hidden
                border border-white/10
                bg-[#101010]
              "
            >
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt="Playground preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="
                    flex h-full
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    text-white/20
                  "
                >
                  <ImagePlus size={28} strokeWidth={1.25} />

                  <p className="text-xs">No image uploaded</p>
                </div>
              )}
            </div>

            <div
              className="
                mt-4
                flex flex-col
                gap-3

                sm:flex-row
                sm:items-center
              "
            >
              <label
                className={`
                  inline-flex
                  w-fit
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-full
                  border border-white/10
                  px-4 py-2.5

                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/50

                  transition-all

                  hover:border-[#3B82F6]
                  hover:bg-[#3B82F6]
                  hover:text-white

                  ${isUploading ? "pointer-events-none opacity-40" : ""}
                `}
              >
                {isUploading ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Uploading
                  </>
                ) : (
                  <>
                    <Upload size={13} />
                    Upload Image
                  </>
                )}

                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>

              {image && (
                <p className="max-w-xl truncate text-xs text-white/20">
                  {image}
                </p>
              )}
            </div>

            <input type="hidden" {...register("image")} />

            {errors.image && (
              <p className="mt-2 text-xs text-red-400">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-10">
        <SectionHeader
          number="02"
          title="Information"
          description="Basic information shown alongside the playground visual."
        />

        <div
          className="
            mt-6
            grid gap-5
            border border-white/10
            bg-white/1
            p-5

            sm:grid-cols-2
            sm:p-6
          "
        >
          <Field label="Title" error={errors.title?.message}>
            <input
              {...register("title")}
              placeholder="Dashboard Exploration"
              className={inputClass}
            />
          </Field>

          <Field label="Category" error={errors.category?.message}>
            <input
              {...register("category")}
              placeholder="UI Exploration"
              className={inputClass}
            />
          </Field>

          <Field label="Year" error={errors.year?.message}>
            <input
              {...register("year")}
              placeholder="2026"
              className={inputClass}
            />
          </Field>

          <Field label="Number" error={errors.number?.message}>
            <input {...register("number")} className={inputClass} />
          </Field>

          <Field label="Order" error={errors.order?.message}>
            <input
              type="number"
              min={1}
              {...register("order", {
                valueAsNumber: true,
              })}
              className={inputClass}
            />
          </Field>

          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
              Publishing
            </p>

            <button
              type="button"
              onClick={() =>
                setValue("published", !published, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
              className="
                mt-3
                flex h-11
                w-full
                items-center
                justify-between
                border border-white/10
                bg-white/2
                px-4
                transition-colors

                hover:border-white/20
              "
            >
              <span className="text-sm text-white/60">
                {published ? "Published" : "Draft"}
              </span>

              <span
                className={`
                  relative
                  h-5 w-9
                  rounded-full
                  transition-colors

                  ${published ? "bg-emerald-400" : "bg-white/10"}
                `}
              >
                <span
                  className={`
                    absolute
                    top-0.5
                    h-4 w-4
                    rounded-full
                    bg-white
                    transition-transform

                    ${published ? "translate-x-4.5" : "translate-x-0.5"}
                  `}
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <div
        className="
          sticky bottom-4 z-20

          flex flex-col gap-3

          border border-white/10
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
            px-5 py-2.5

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

              {mode === "create" ? "Create Item" : "Save Changes"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
        {label}
      </p>

      <div className="mt-3">{children}</div>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

type SectionHeaderProps = {
  number: string;
  title: string;
  description: string;
};

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

      <p className="mt-2 max-w-xl text-xs leading-5 text-white/30 sm:text-sm sm:leading-6">
        {description}
      </p>
    </div>
  );
}

const inputClass = `
  h-11
  w-full
  border
  border-white/10
  bg-white/2
  px-3

  text-sm
  text-white/80
  outline-none

  transition-colors

  placeholder:text-white/15

  focus:border-[#3B82F6]/70
`;
