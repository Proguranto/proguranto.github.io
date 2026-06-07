import face from "@/assets/face.png";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section about">
      <SectionHeader idx="02" en="About" />
      <div className="about-grid">
        <div className="about-photo">
          <div className="photo-frame">
            <img src={face} alt="Grant Tannert" />
          </div>
          <div className="photo-caption">
            <span className="mono">cs + math (minor), '25 · UW grad</span>
          </div>
        </div>
        <div className="about-body">
          <p>
            I'm a software engineer at <strong>UiPath</strong> on the cloud platform team,
            learning what it takes to build and maintain systems at scale. Before that I
            spent about a year and a half in UW's{" "}
            <strong>Personal Robotics Lab</strong> — robotics still pulls at me, and I think
            the most interesting work sits at the intersection of robust infrastructure and
            systems that do things in the world. Someday, I hope that thing genuinely helps
            someone.
          </p>
          <p>
            Off-screen I'm pretty active: basketball, ultimate frisbee, swimming, hiking
            around the pnw. To wind down I watch anime, read manga, or play games. I cherish
            the time I get to spend with momo, family and friends. I'm always grateful for
            the opportunities I've had and the people I've met along the way, and excited for
            what's next.
          </p>
          <ul className="hobby-strip" aria-label="Off-screen">
            <li><span className="hb-ico" aria-hidden="true">🩷</span>momo</li>
            <li><span className="hb-ico" aria-hidden="true">💛</span>family</li>
            <li><span className="hb-ico" aria-hidden="true">🏀</span>hoops</li>
            <li><span className="hb-ico" aria-hidden="true">🎬</span>anime + manga</li>
            <li><span className="hb-ico" aria-hidden="true">🎮</span>games</li>
          </ul>
          <ul className="about-facts">
            <li><span className="fact-k">from</span><span className="fact-v">Jakarta 🇮🇩</span></li>
            <li><span className="fact-k">based</span><span className="fact-v">Seattle 🇺🇸</span></li>
            <li><span className="fact-k">languages</span><span className="fact-v">EN · Bahasa</span></li>
            <li><span className="fact-k">mood</span><span className="fact-v">Always Trying :)</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
