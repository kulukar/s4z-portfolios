import { AdminLoginForm } from "@/src/components/admin/login-form";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6">
      <div className="w-full max-w-sm">
        <div className="border-b border-white/10 pb-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#3B82F6]">
            Sarehazis
          </p>

          <h1 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">
            Portfolio CMS
          </h1>

          <p className="mt-2 text-xs leading-5 text-white/30">
            Enter your password to access the administration panel.
          </p>
        </div>

        <AdminLoginForm />

        <p className="mt-8 text-center text-[9px] uppercase tracking-[0.14em] text-white/15">
          Restricted Access
        </p>
      </div>
    </main>
  );
}
