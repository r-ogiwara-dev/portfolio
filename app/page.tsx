import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
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
