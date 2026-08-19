"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, Loader2, Trash2 } from "lucide-react";

import { deleteProject, duplicateProject } from "@/src/lib/actions/project";

type ProjectActionsProps = {
  projectId: string;
  projectTitle: string;
};

export function ProjectActions({
  projectId,
  projectTitle,
}: ProjectActionsProps) {
  const router = useRouter();

  const [loading, setLoading] = useState<"delete" | "duplicate" | null>(null);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${projectTitle}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading("delete");

      const result = await deleteProject(projectId);

      if (!result.success) {
        window.alert(result.message);
        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);

      window.alert("Failed to delete project.");
    } finally {
      setLoading(null);
    }
  }

  async function handleDuplicate() {
    try {
      setLoading("duplicate");

      const result = await duplicateProject(projectId);

      if (!result.success || !result.project) {
        window.alert(result.message);
        return;
      }

      router.push(`/admin/projects/${result.project.id}/edit`);

      router.refresh();
    } catch (error) {
      console.error(error);

      window.alert("Failed to duplicate project.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleDuplicate}
        disabled={loading !== null}
        aria-label={`Duplicate ${projectTitle}`}
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/10
          text-white/30
          transition-all

          hover:border-white/25
          hover:text-white

          disabled:pointer-events-none
          disabled:opacity-30
        "
      >
        {loading === "duplicate" ? (
          <Loader2 size={13} className="animate-spin" />
        ) : (
          <Copy size={13} strokeWidth={1.5} />
        )}
      </button>

      <button
        type="button"
        onClick={handleDelete}
        disabled={loading !== null}
        aria-label={`Delete ${projectTitle}`}
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/10
          text-white/30
          transition-all

          hover:border-red-400/40
          hover:bg-red-400/5
          hover:text-red-400

          disabled:pointer-events-none
          disabled:opacity-30
        "
      >
        {loading === "delete" ? (
          <Loader2 size={13} className="animate-spin" />
        ) : (
          <Trash2 size={13} strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
