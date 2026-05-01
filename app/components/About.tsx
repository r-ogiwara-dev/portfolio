const strengths = [
  { icon: "⚡", title: "スピード重視", desc: "素早い開発サイクルで価値を届けることを意識しています" },
  { icon: "🎨", title: "UI/UXへのこだわり", desc: "使いやすさと美しさを両立したインターフェースを追求します" },
  { icon: "🔧", title: "問題解決力", desc: "技術的な課題に粘り強く向き合い、解決策を導き出します" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-2">About</p>
          <h2 className="section-title">私について</h2>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
          <div className="flex justify-center">
            <div className="w-52 h-52 rounded-3xl flex items-center justify-center text-7xl float"
              style={{ background: "linear-gradient(135deg, #bdd4e7, #fcd9b6)", boxShadow: "0 8px 32px rgba(26,46,74,0.12)" }}>
              👨‍💻
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#1a2e4a" }}>r.ogiwara</h3>
            <p className="mb-4 leading-relaxed" style={{ color: "#4a6080" }}>
              Webバックエンド開発をメインに、フロントエンドにも挑戦中のエンジニアです。
              ユーザーの体験を第一に考え、実用的なプロダクトを作ることを心がけています。
            </p>
            <p className="leading-relaxed" style={{ color: "#4a6080" }}>
              チームでの開発を大切にし、コードの品質と保守性を
              常に意識しながら開発を進めることを心がけています。
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div key={item.title} className="card p-7 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold mb-2 text-base" style={{ color: "#1a2e4a" }}>{item.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#7a94b0" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
