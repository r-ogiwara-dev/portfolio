export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="hero-glow" style={{ top: "10%", left: "20%" }} />
      <div className="hero-glow" style={{ bottom: "10%", right: "15%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl">
        <p className="animate-fade-in-up text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: "#a78bfa" }}>
          Welcome to my portfolio
        </p>

        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl font-bold leading-tight mb-6">
          <span style={{ color: "#f1f5f9" }}>こんにちは、</span>
          <br />
          <span className="gradient-text">test太郎</span>
          <span style={{ color: "#f1f5f9" }}>です。</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-xl mb-4" style={{ color: "#94a3b8" }}>
          フロントエンドエンジニア志望
        </p>

        <p className="animate-fade-in-up-delay-2 text-lg mb-10 max-w-xl mx-auto" style={{ color: "#64748b" }}>
          「コードで、ユーザーの体験を変える。」
          <br />
          モダンな技術で、使いやすく美しいUIを作ります。
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#works"
            className="gradient-bg px-8 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-80"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}>
            作品を見る
          </a>
          <a href="#contact"
            className="px-8 py-3 rounded-full font-semibold transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#f1f5f9" }}>
            お問い合わせ
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-float" style={{ color: "#475569" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
