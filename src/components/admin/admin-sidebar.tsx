"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  FolderKanban,
  Images,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { logoutAdmin } from "@/src/lib/actions/auth";

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
  {
    label: "Playground",
    href: "/admin/playground",
    icon: Images,
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
      <div className="flex h-20 items-center border-b border-white/10 px-7">
        <Link href="/admin">
          <p className="font-display text-lg font-medium tracking-[-0.03em]">
            s4z<span className="text-[#3B82F6]">.</span>studio
          </p>
        </Link>
      </div>

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
                      ? "bg-white/6 text-white"
                      : "text-white/35 hover:bg-white/3 hover:text-white/70"
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

      <div className="border-t border-white/10 p-4">
        <div className="space-y-1">
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

              hover:bg-white/3
              hover:text-white/70
            "
          >
            <span>View Portfolio</span>

            <ArrowUpRight size={14} />
          </Link>

          <form action={logoutAdmin}>
            <button
              type="submit"
              className="
                group
                flex w-full
                items-center justify-between
                rounded-lg
                px-3 py-2.5
                text-xs
                text-white/30
                transition-colors

                hover:bg-red-400/6
                hover:text-red-400
              "
            >
              <span>Logout</span>

              <LogOut
                size={14}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
