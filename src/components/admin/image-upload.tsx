"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { ImagePlus, Loader2, RefreshCw, Trash2, Upload } from "lucide-react";

type ImageUploadProps = {
  value?: string;
  onChange: (url: string) => void;

  label?: string;
  description?: string;

  aspect?: "video" | "square" | "portrait";
};

export function ImageUpload({
  value,
  onChange,
  label = "Image",
  description = "JPG, PNG or WebP. Maximum 10 MB.",
  aspect = "video",
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, PNG, and WebP images are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10 MB.");
      return;
    }

    try {
      setIsUploading(true);

      const blob = await upload(`portfolio/${Date.now()}-${file.name}`, file, {
        access: "public",

        handleUploadUrl: "/api/blob/upload",
      });

      onChange(blob.url);
    } catch (uploadError) {
      console.error("Blob upload error:", uploadError);

      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Failed to upload image.",
      );
    } finally {
      setIsUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    void handleFile(file);
  }

  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-3/4",
  }[aspect];

  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
            {label}
          </p>

          <p className="mt-1 text-[10px] text-white/20">{description}</p>
        </div>

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            disabled={isUploading}
            className="
              flex items-center gap-1.5
              text-[10px] text-white/25
              transition-colors

              hover:text-red-400

              disabled:pointer-events-none
              disabled:opacity-30
            "
          >
            <Trash2 size={11} />
            Remove
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
      />

      {value ? (
        <div className="group relative">
          <div
            className={`
              relative
              ${aspectClass}
              overflow-hidden
              border border-white/10
              bg-[#0a0a0a]
            `}
          >
            <Image
              src={value}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />

            <div
              className="
                absolute inset-0
                flex items-center justify-center
                bg-black/0
                opacity-0
                transition-all

                group-hover:bg-black/50
                group-hover:opacity-100
              "
            >
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={isUploading}
                className="
                  inline-flex items-center gap-2
                  bg-white
                  px-4 py-2.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-black

                  transition-colors

                  hover:bg-[#3B82F6]
                  hover:text-white
                "
              >
                <RefreshCw size={12} />
                Change Image
              </button>
            </div>

            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Loader2 size={15} className="animate-spin" />
                  Uploading...
                </div>
              </div>
            )}
          </div>

          <p className="mt-2 truncate text-[9px] text-white/15">{value}</p>
        </div>
      ) : (
        <button
          type="button"
          disabled={isUploading}
          onClick={() => inputRef.current?.click()}
          className={`
            group
            relative
            flex w-full
            ${aspectClass}
            items-center
            justify-center
            overflow-hidden

            border border-dashed
            border-white/15

            bg-white/1

            transition-colors

            hover:border-[#3B82F6]/60
            hover:bg-[#3B82F6]/3

            disabled:pointer-events-none
            disabled:opacity-50
          `}
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <Loader2 size={20} className="animate-spin text-[#3B82F6]" />

              <p className="mt-3 text-xs text-white/40">Uploading image...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center px-6 text-center">
              <span
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  text-white/30

                  transition-colors

                  group-hover:border-[#3B82F6]/40
                  group-hover:text-[#3B82F6]
                "
              >
                <ImagePlus size={17} />
              </span>

              <p className="mt-4 text-xs text-white/45">Choose an image</p>

              <div className="mt-1 flex items-center gap-1.5 text-[10px] text-white/20">
                <Upload size={10} />
                JPG, PNG or WebP
              </div>
            </div>
          )}
        </button>
      )}

      {error && <p className="mt-2 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}
