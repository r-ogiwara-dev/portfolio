import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "HTML / CSS",     years: "6年",     icon: "🌐" },
  { name: "JavaScript",     years: "6年",     icon: "⚡" },
  { name: "TypeScript",     years: "1年未満",  icon: "🔷" },
  { name: "React / Next.js", years: "1年未満", icon: "⚛️" },
  { name: "PHP / Laravel",  years: "6年",     icon: "🐘" },
  { name: "MySQL",          years: "6年",     icon: "🗄️" },
];

const tags = ["Linux", "XAMPP", "VSCode", "Docker", "Git / GitHub", "Redmine"];

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
              <div className="card p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-semibold text-sm" style={{ color: "#1a2e4a" }}>{skill.name}</span>
                </div>
                <span className="font-bold text-sm accent-text">{skill.years}</span>
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
