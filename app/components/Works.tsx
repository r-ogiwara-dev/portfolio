import ScrollReveal from "./ScrollReveal";

const works = [
  {
    title: "ポートフォリオサイト",
    desc: "Next.js + TypeScript + Tailwind CSSで構築した自己紹介サイト。Vercelでデプロイ。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    emoji: "🌐",
    color: "#dbeafe",
  },
  {
    title: "タスク管理アプリ",
    desc: "LaravelとMySQLを使ったタスク管理Webアプリ。CRUD操作・ユーザー認証機能を実装。",
    tags: ["Laravel", "PHP", "MySQL"],
    emoji: "✅",
    color: "#dcfce7",
  },
  {
    title: "天気予報アプリ",
    desc: "外部APIを使用した天気予報表示アプリ。ReactとTypeScriptで実装。",
    tags: ["React", "TypeScript", "API"],
    emoji: "🌤️",
    color: "#fff7ed",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-32 px-6" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-2">Works</p>
          <h2 className="section-title">制作物</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <ScrollReveal key={work.title} delay={i * 120}>
              <div className="card p-7 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                  style={{ background: work.color }}>
                  {work.emoji}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#1a2e4a" }}>{work.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a94b0" }}>{work.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
