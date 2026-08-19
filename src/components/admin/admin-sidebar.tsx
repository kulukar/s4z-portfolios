"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FolderKanban, LayoutDashboard } from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
    exact: false,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40
        hidden w-64
        border-r border-white/10
        bg-[#080808]
        lg:flex lg:flex-col
      "
    >
      {/* BRAND */}

      <div className="flex h-20 items-center border-b border-white/10 px-7">
        <Link href="/admin">
          <p className="font-display text-lg font-medium tracking-[-0.03em]">
            s4z<span className="text-[#3B82F6]">.</span>studio
          </p>
        </Link>
      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 px-4 py-6">
        <p className="px-3 text-[9px] uppercase tracking-[0.2em] text-white/20">
          Workspace
        </p>

        <div className="mt-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3
                  rounded-lg
                  px-3 py-2.5
                  text-sm
                  transition-colors

                  ${
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-white/35 hover:bg-white/[0.03] hover:text-white/70"
                  }
                `}
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className={active ? "text-[#3B82F6]" : "text-white/30"}
                />

                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* BOTTOM */}

      <div className="border-t border-white/10 p-4">
        <Link
          href="/"
          target="_blank"
          className="
            flex items-center justify-between
            rounded-lg
            px-3 py-2.5
            text-xs
            text-white/30
            transition-colors

            hover:bg-white/[0.03]
            hover:text-white/70
          "
        >
          View Portfolio
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
