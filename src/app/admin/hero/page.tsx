import { HeroForm } from "@/src/components/admin/hero/hero-form";
import { getSiteHero } from "@/src/lib/queries/hero";

export default async function AdminHeroPage() {
  const hero = await getSiteHero();

  return (
    <main>
      <div className="border-b border-white/10 pb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
          Content
        </p>

        <h1
          className="
            mt-3
            font-display
            text-4xl
            font-medium
            tracking-[-0.04em]

            sm:text-5xl
          "
        >
          Hero
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
          Manage the main introduction, headline, background image, and
          availability shown on the portfolio homepage.
        </p>
      </div>

      <div className="mt-10">
        <HeroForm defaultValues={hero} />
      </div>
    </main>
  );
}
