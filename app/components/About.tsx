export default function About() {
  const strengths = [
    { icon: "⚡", title: "スピード重視", desc: "素早い開発サイクルで価値を届けることを意識しています" },
    { icon: "🎨", title: "UI/UXへのこだわり", desc: "使いやすさと美しさを両立したインターフェースを追求します" },
    { icon: "🔧", title: "問題解決力", desc: "技術的な課題に粘り強く向き合い、解決策を導き出します" },
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a78bfa" }}>About</p>
        <h2 className="section-title">私について</h2>
        <div className="w-12 h-1 gradient-bg mx-auto rounded-full mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl gradient-bg flex items-center justify-center text-7xl mb-8 animate-float">
            👨‍💻
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#f1f5f9" }}>
            test太郎
          </h3>
          <p className="mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
            Webフロントエンド開発に情熱を持つエンジニア志望です。
            ユーザーの体験を第一に考え、モダンな技術スタックを活用した
            プロダクト開発に取り組んでいます。
          </p>
          <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
            チームでの開発を大切にし、コードの品質と保守性を
            常に意識しながら開発を進めることを心がけています。
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-16">
        {strengths.map((item) => (
          <div key={item.title} className="card p-6 text-center hover:border-indigo-500/30 transition-colors">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="font-semibold mb-2" style={{ color: "#f1f5f9" }}>{item.title}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
