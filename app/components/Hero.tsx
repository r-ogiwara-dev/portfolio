import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-40 float"
        style={{ background: "radial-gradient(circle, #bdd4e7, transparent)" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-30 float"
        style={{ background: "radial-gradient(circle, #fcd9b6, transparent)", animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* テキスト左 */}
        <div className="text-left">
          <p className="anim-1 section-label mb-4">Software Engineer</p>

          <h1 className="anim-2 font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", color: "#1a2e4a" }}>
            AIを味方に、<br />
            技術と自分を<span className="accent-text">アップデート</span>
          </h1>

          <div className="anim-3 mb-6 px-5 py-3 rounded-2xl text-sm leading-relaxed"
            style={{ background: "rgba(255,255,255,0.7)", color: "#4a6080", border: "1px solid rgba(255,255,255,0.9)" }}>
            Claude Code の活用練習として制作したポートフォリオです。<br />
            コードは一切書かず、すべて指示・対話のみで完成させました。
          </div>

          <div className="anim-4 flex flex-wrap gap-4">
            <a href="#about" className="btn-primary">私について</a>
            <a href="#contact" className="btn-secondary">お問い合わせ</a>
          </div>
        </div>

        {/* 写真右 */}
        <div className="anim-3 flex justify-center">
          <div className="relative float" style={{ width: 340, height: 400 }}>
            <Image
              src="/hero.jpg"
              alt="r.ogiwara と柴犬"
              fill
              priority
              className="object-cover"
              style={{ borderRadius: "32px", boxShadow: "0 16px 48px rgba(26,46,74,0.15)" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 float" style={{ color: "#7a94b0" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
