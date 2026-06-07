import { useState, useEffect } from "react";
import duckyro from "@/assets/duckyro.gif";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [chars, setChars] = useState("");

  useEffect(() => {
    const full = "你好";
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setChars(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 280);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-zh">
              {chars}
              <span className="caret" />
            </span>
            <span className="hero-en">
              <em>Santoryu-quack</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Grant's doodling...
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollTo("work"); }}
            >
              See the work
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="duck-wrap">
            <img className="duck" src={duckyro} alt="A samurai duck" />
            <div className="duck-label">
              <span className="duck-label-zh">同伴</span>
              <span className="duck-label-en">duckyro · est. 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <span className="arrow-down" aria-hidden="true">↓</span>
      </div>
    </section>
  );
}
