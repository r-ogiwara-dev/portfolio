import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 背景の装飾円 */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-40 float"
        style={{ background: "radial-gradient(circle, #bdd4e7, transparent)" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-30 float"
        style={{ background: "radial-gradient(circle, #fcd9b6, transparent)", animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* テキスト左 */}
        <div className="text-left">
          <p className="anim-1 section-label mb-5">Backend Engineer</p>

          <h1 className="anim-2 font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: "#1a2e4a" }}>
            こんにちは、<br />
            <span className="accent-text">r.ogiwara</span> です。
          </h1>

          <div className="anim-3 mb-6 px-5 py-3 rounded-2xl text-sm leading-relaxed"
            style={{ background: "rgba(255,255,255,0.7)", color: "#4a6080", border: "1px solid rgba(255,255,255,0.9)" }}>
            こちらのWebサイトは Claude Code の練習として作成したものです。（Claude Code + Vercel デプロイ）<br />
            メインはバックエンドエンジニアのため、デザインを含め Claude にお任せしています。
          </div>

          <p className="anim-3 text-lg mb-10" style={{ color: "#4a6080" }}>
            「コードで、ユーザーの体験を変える。」
          </p>

          <div className="anim-4 flex flex-wrap gap-4">
            <a href="#works" className="btn-primary">作品を見る</a>
            <a href="#contact" className="btn-secondary">お問い合わせ</a>
          </div>
        </div>

        {/* イラスト右 */}
        <div className="anim-3 flex justify-center float">
          <HeroIllustration />
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
