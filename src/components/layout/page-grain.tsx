export function PageGrain() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-0
        z-100
        opacity-[0.025]
        mix-blend-soft-light
      "
    >
      <svg className="h-full w-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
