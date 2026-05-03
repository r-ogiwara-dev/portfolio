import ScrollReveal from "./ScrollReveal";

export default function Works() {
  return (
    <section id="works" className="py-32 px-6" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="section-label mb-2">Projects</p>
          <h2 className="section-title">携わったサービス</h2>
          <div className="divider" />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="card p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* YouTube サムネイル */}
              <a
                href="https://www.youtube.com/watch?v=J5VGKdShJsk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-2xl overflow-hidden group"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src="https://img.youtube.com/vi/J5VGKdShJsk/maxresdefault.jpg"
                  alt="店内飲食向けモバイルオーダー"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* 再生ボタン */}
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.25)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "rgba(249,115,22,0.9)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* テキスト */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "#fff7ed" }}>
                    📱
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "rgba(249,115,22,0.12)", color: "#f97316" }}>
                    長期従事
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#1a2e4a" }}>
                  店内飲食向けモバイルオーダー
                </h3>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "#7a94b0" }}>
                  飲食店の店内注文をスマートフォンで完結するモバイルオーダーサービス。
                  フルスタックエンジニアとして長年にわたり開発・運用に携わってきました。
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["フルスタック", "モバイルオーダー", "飲食業界"].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
