const works = [
  {
    title: "ポートフォリオサイト",
    desc: "Next.js + TypeScript + Tailwind CSSで構築した自己紹介サイト。Vercelでデプロイ。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    emoji: "🌐",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "タスク管理アプリ",
    desc: "LaravelとMySQLを使ったタスク管理Webアプリ。CRUD操作・ユーザー認証機能を実装。",
    tags: ["Laravel", "PHP", "MySQL"],
    emoji: "✅",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "天気予報アプリ",
    desc: "外部APIを使用した天気予報表示アプリ。ReactとTypeScriptで実装。",
    tags: ["React", "TypeScript", "API"],
    emoji: "🌤️",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a78bfa" }}>Works</p>
        <h2 className="section-title">制作物</h2>
        <div className="w-12 h-1 gradient-bg mx-auto rounded-full mt-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {works.map((work) => (
          <div key={work.title} className="card p-6 group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${work.color} flex items-center justify-center text-2xl mb-5`}>
              {work.emoji}
            </div>
            <h3 className="font-bold text-lg mb-3" style={{ color: "#f1f5f9" }}>{work.title}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>{work.desc}</p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
