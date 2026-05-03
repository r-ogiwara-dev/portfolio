import Logo from "./Logo";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4"
      style={{ background: "rgba(220, 232, 242, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.6)" }}
    >
      <Logo />
      <div className="flex items-center gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#works">Projects</a>
        <a href="#contact" className="btn-primary !py-2 !px-5 !text-sm">CONTACT</a>
      </div>
    </nav>
  );
}
