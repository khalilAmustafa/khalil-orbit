export default function BackgroundScene() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[url('/backgrounds/terminal-landscape.png')] bg-cover bg-center bg-no-repeat opacity-50" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.28)_45%,rgba(0,0,0,0.70)_100%)]" />
      <div className="absolute inset-0 scanline-overlay" />
    </div>
  );
}
