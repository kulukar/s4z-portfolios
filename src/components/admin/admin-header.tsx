import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AdminHeader() {
  return (
    <header
      className="
        sticky top-0 z-30
        flex h-16 items-center justify-between
        border-b border-white/10
        bg-[#080808]/90
        px-5
        backdrop-blur-xl

        sm:px-6
        md:px-10

        lg:h-20
        lg:px-12
      "
    >
      {/* MOBILE BRAND */}

      <Link href="/admin" className="lg:hidden">
        <p className="font-display text-base font-medium tracking-[-0.03em]">
          s4z<span className="text-[#3B82F6]">.</span>studio
        </p>
      </Link>

      {/* DESKTOP */}

      <div className="hidden lg:block">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
          Portfolio Management
        </p>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-xs text-white/60">Admin</p>

          <p className="mt-0.5 text-[10px] text-white/20">Portfolio CMS</p>
        </div>

        <Link
          href="/"
          target="_blank"
          aria-label="Open portfolio"
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-white/10
            text-white/35
            transition-all

            hover:border-[#3B82F6]
            hover:bg-[#3B82F6]
            hover:text-white
          "
        >
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </header>
  );
}
