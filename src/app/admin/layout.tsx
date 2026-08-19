import type { ReactNode } from "react";

import { AdminHeader } from "@/src/components/admin/admin-header";
import { AdminSidebar } from "@/src/components/admin/admin-sidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <AdminSidebar />

      <div className="lg:pl-64">
        <AdminHeader />

        <div className="px-5 py-8 sm:px-6 md:px-10 lg:px-12 lg:py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
