import ScrollReveal from "./ScrollReveal";

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

const tags = ["Tailwind CSS", "Node.js", "REST API", "Figma", "Linux", "Nginx", "VSCode"];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-2">Skills</p>
          <h2 className="section-title">技術スタック</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 80}>
              <div className="card p-5">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-semibold text-sm" style={{ color: "#1a2e4a" }}>{skill.name}</span>
                  </div>
                  <span className="font-bold text-sm accent-text">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "#e8f0f8" }}>
                  <div className="skill-bar" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="text-center">
          <p className="text-sm mb-4" style={{ color: "#7a94b0" }}>その他・関連技術</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
