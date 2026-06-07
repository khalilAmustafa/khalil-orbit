export function BackgroundScene() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[url('/backgrounds/terminal-landscape.png')] bg-cover bg-center bg-no-repeat opacity-45 max-sm:bg-top" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.36)_45%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-emerald-950/25 mix-blend-multiply" />
      <div className="scanline-overlay absolute inset-0" />
    </div>
  );
}
