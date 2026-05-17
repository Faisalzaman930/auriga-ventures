export default function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[90] w-full h-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id="rt-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#rt-grain)" />
    </svg>
  );
}
