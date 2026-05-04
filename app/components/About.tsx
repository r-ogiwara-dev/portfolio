import ScrollReveal from "./ScrollReveal";

const strengths = [
  { icon: "⚙️", title: "コード品質", desc: "読みやすくバグの少ないコードにこだわり、長期的に保守できるプロダクトを目指します" },
  { icon: "🎨", title: "UI/UXへのこだわり", desc: "使いやすさと美しさを両立したインターフェースを追求します" },
  { icon: "💻", title: "問題解決力", desc: "技術的な課題に粘り強く向き合い、解決策を導き出します" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-2">About</p>
          <h2 className="section-title">私について</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
          <ScrollReveal delay={100} className="flex justify-center">
            <div className="w-52 h-52 rounded-3xl flex items-center justify-center text-7xl float"
              style={{ background: "linear-gradient(135deg, #bdd4e7, #fcd9b6)", boxShadow: "0 8px 32px rgba(26,46,74,0.12)" }}>
              👨‍💻
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-4 leading-relaxed" style={{ color: "#4a6080" }}>
              r.ogiwara と申します。1991年生まれ、エンジニアとして実務経験6年になります。
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: "#4a6080" }}>
              モバイルオーダーの開発にフルスタックで携わってきました。
              チームでの開発を大切にし、コードの品質と保守性を常に意識しながら開発を進めています。
            </p>
            <p className="leading-relaxed" style={{ color: "#4a6080" }}>
              これまでの経験を活かしながら、新たな領域の開発にも積極的に挑戦していきたいと考えています。
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {strengths.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="card p-7 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2 text-base" style={{ color: "#1a2e4a" }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#7a94b0" }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
