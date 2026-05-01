import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import NatureIllustration from "./components/NatureIllustration";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />

        {/* イラストセクション */}
        <section className="py-20 px-6 overflow-hidden" style={{ background: "var(--bg-section)" }}>
          <ScrollReveal className="max-w-lg mx-auto text-center">
            <p className="text-sm mb-6" style={{ color: "#7a94b0" }}>
              ☕ コーヒーと自然に囲まれながら、今日もコードを書いています。
            </p>
            <NatureIllustration />
          </ScrollReveal>
        </section>

        <Works />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm"
        style={{ color: "#7a94b0", borderTop: "1px solid rgba(255,255,255,0.7)", background: "var(--bg-section)" }}>
        © 2025 r.ogiwara. All rights reserved.
      </footer>
    </>
  );
}
