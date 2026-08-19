"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, Star } from "lucide-react";

import {
  toggleProjectFeatured,
  toggleProjectPublished,
} from "@/src/lib/actions/project";

type ProjectStatusActionsProps = {
  projectId: string;
  published: boolean;
  featured: boolean;
};

export function ProjectStatusActions({
  projectId,
  published,
  featured,
}: ProjectStatusActionsProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [currentPublished, setCurrentPublished] = useState(published);

  const [currentFeatured, setCurrentFeatured] = useState(featured);

  function handlePublished() {
    startTransition(async () => {
      const result = await toggleProjectPublished(projectId);

      if (!result.success) {
        window.alert(result.message);
        return;
      }

      if (typeof result.published === "boolean") {
        setCurrentPublished(result.published);
      }

      router.refresh();
    });
  }

  function handleFeatured() {
    startTransition(async () => {
      const result = await toggleProjectFeatured(projectId);

      if (!result.success) {
        window.alert(result.message);
        return;
      }

      if (typeof result.featured === "boolean") {
        setCurrentFeatured(result.featured);
      }

      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-2">
      {/* PUBLISHED */}

      <button
        type="button"
        onClick={handlePublished}
        disabled={isPending}
        title={currentPublished ? "Move to draft" : "Publish project"}
        aria-label={
          currentPublished ? "Move project to draft" : "Publish project"
        }
        className={`
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border
          transition-all

          disabled:cursor-not-allowed
          disabled:opacity-30

          ${
            currentPublished
              ? `
                border-emerald-400/30
                bg-emerald-400/5
                text-emerald-400

                hover:border-emerald-400/60
                hover:bg-emerald-400/10
              `
              : `
                border-white/10
                text-white/30

                hover:border-white/25
                hover:bg-white/5
                hover:text-white
              `
          }
        `}
      >
        {isPending ? (
          <Loader2 size={14} className="animate-spin" />
        ) : currentPublished ? (
          <Eye size={14} strokeWidth={1.5} />
        ) : (
          <EyeOff size={14} strokeWidth={1.5} />
        )}
      </button>

      {/* FEATURED */}

      <button
        type="button"
        onClick={handleFeatured}
        disabled={isPending}
        title={currentFeatured ? "Remove from featured" : "Add to featured"}
        aria-label={
          currentFeatured
            ? "Remove project from featured"
            : "Add project to featured"
        }
        className={`
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border
          transition-all

          disabled:cursor-not-allowed
          disabled:opacity-30

          ${
            currentFeatured
              ? `
                border-amber-400/30
                bg-amber-400/5
                text-amber-400

                hover:border-amber-400/60
                hover:bg-amber-400/10
              `
              : `
                border-white/10
                text-white/30

                hover:border-white/25
                hover:bg-white/5
                hover:text-white
              `
          }
        `}
      >
        {isPending ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <Star
            size={14}
            strokeWidth={1.5}
            fill={currentFeatured ? "currentColor" : "none"}
          />
        )}
      </button>
    </div>
  );
}
