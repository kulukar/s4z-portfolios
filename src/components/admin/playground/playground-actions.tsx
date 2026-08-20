"use client";

import { useState, useTransition } from "react";

import { useRouter } from "next/navigation";

import { Copy, Eye, EyeOff, Loader2, Trash2 } from "lucide-react";

import {
  deletePlaygroundItem,
  duplicatePlaygroundItem,
  togglePlaygroundPublished,
} from "@/src/lib/actions/playground";

type PlaygroundActionsProps = {
  itemId: string;
  itemTitle: string;
  published: boolean;
};

export function PlaygroundActions({
  itemId,
  itemTitle,
  published,
}: PlaygroundActionsProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [currentPublished, setCurrentPublished] = useState(published);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  function handlePublish() {
    startTransition(async () => {
      const result = await togglePlaygroundPublished(itemId);

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

  function handleDuplicate() {
    startTransition(async () => {
      const result = await duplicatePlaygroundItem(itemId);

      if (!result.success) {
        window.alert(result.message);
        return;
      }

      if (!result.item) {
        return;
      }

      router.push(`/admin/playground/${result.item.id}/edit`);

      router.refresh();
    });
  }

  function handleDelete() {
    startTransition(async () => {
      const result = await deletePlaygroundItem(itemId);

      if (!result.success) {
        window.alert(result.message);
        return;
      }

      setShowDeleteConfirm(false);

      router.refresh();
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={handlePublish}
        disabled={isPending}
        title={currentPublished ? "Move to draft" : "Publish"}
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
              `
              : `
                border-white/10
                text-white/30

                hover:border-white/25
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

      <button
        type="button"
        onClick={handleDuplicate}
        disabled={isPending}
        title="Duplicate"
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/10
          text-white/30
          transition-all

          hover:border-white/25
          hover:text-white

          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <Copy size={14} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={() => setShowDeleteConfirm(true)}
        disabled={isPending}
        title="Delete"
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/10
          text-white/30
          transition-all

          hover:border-red-500/40
          hover:bg-red-500/10
          hover:text-red-400
        "
      >
        <Trash2 size={14} strokeWidth={1.5} />
      </button>

      {showDeleteConfirm && (
        <div
          className="
            fixed inset-0 z-100
            flex items-center
            justify-center
            bg-black/75
            px-4
            backdrop-blur-sm
          "
        >
          <div
            className="
              w-full
              max-w-md
              border border-white/10
              bg-[#0d0d0d]
              p-6
              shadow-2xl
            "
          >
            <p className="text-[9px] uppercase tracking-[0.18em] text-red-400">
              Delete Playground
            </p>

            <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">
              Delete {itemTitle}?
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/35">
              Item ini akan dihapus secara permanen dari Playground.
            </p>

            <div className="mt-7 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isPending}
                className="
                  px-4 py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-white/40

                  hover:text-white
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-red-500
                  px-4 py-2.5

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-white

                  hover:bg-red-600

                  disabled:opacity-50
                "
              >
                {isPending ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Deleting
                  </>
                ) : (
                  <>
                    <Trash2 size={13} />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
