export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5"
      style={{ background: "rgba(10,10,15,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <span className="font-bold text-lg gradient-text">TT.</span>
      <div className="flex gap-8 text-sm" style={{ color: "#94a3b8" }}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
