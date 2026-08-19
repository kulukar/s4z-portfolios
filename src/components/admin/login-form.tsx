"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2, LockKeyhole } from "lucide-react";

import { loginAdmin } from "@/src/lib/actions/auth";

export function AdminLoginForm() {
  const [error, formAction, pending] = useActionState(loginAdmin, undefined);

  return (
    <form action={formAction} className="mt-10">
      <div>
        <label
          htmlFor="password"
          className="text-[9px] uppercase tracking-[0.16em] text-white/30"
        >
          Password
        </label>

        <div className="relative mt-2">
          <LockKeyhole
            size={14}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
          />

          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder="Enter admin password"
            className="
              h-13
              w-full
              border border-white/10
              bg-white/2
              pl-11
              pr-4
              text-sm
              text-white
              outline-none
              transition-colors
              placeholder:text-white/15
              focus:border-white/25
            "
          />
        </div>

        {error && <p className="mt-2 text-[10px] text-red-400">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="
          mt-4
          flex h-13
          w-full
          items-center
          justify-between
          bg-white
          px-5
          text-[10px]
          font-medium
          uppercase
          tracking-[0.14em]
          text-black
          transition-colors
          hover:bg-[#3B82F6]
          hover:text-white
          disabled:pointer-events-none
          disabled:opacity-50
        "
      >
        <span>{pending ? "Authenticating..." : "Enter CMS"}</span>

        {pending ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <ArrowRight size={14} />
        )}
      </button>
    </form>
  );
}
