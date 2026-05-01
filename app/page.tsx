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
      <footer className="py-8 text-center text-sm" style={{ color: "#475569", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        © 2025 test太郎. All rights reserved.
      </footer>
    </>
  );
}
