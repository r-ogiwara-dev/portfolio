const skills = [
  { name: "HTML / CSS", level: 85, icon: "🌐" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "TypeScript", level: 70, icon: "🔷" },
  { name: "React / Next.js", level: 70, icon: "⚛️" },
  { name: "PHP / Laravel", level: 75, icon: "🐘" },
  { name: "MySQL", level: 65, icon: "🗄️" },
  { name: "Docker", level: 60, icon: "🐳" },
  { name: "Git / GitHub", level: 75, icon: "🐙" },
];

const tags = [
  "Tailwind CSS", "Node.js", "REST API", "Figma", "Linux", "Nginx", "VSCode",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a78bfa" }}>Skills</p>
          <h2 className="section-title">技術スタック</h2>
          <div className="w-12 h-1 gradient-bg mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="card p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-sm" style={{ color: "#f1f5f9" }}>{skill.name}</span>
                </div>
                <span className="text-sm font-bold gradient-text">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: "#64748b" }}>その他・関連技術</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-sm"
                style={{ background: "rgba(99,102,241,0.15)", color: "#a78bfa", border: "1px solid rgba(99,102,241,0.3)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
