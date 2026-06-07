import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeader idx="05" en="Say hi" />
      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-sub">
            <em>Robotics, GenAI, or something weirder?</em> Internships, research collabs, dumb side projects with talking ducks — all welcome.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:grant.tannert26@gmail.com">
              grant.tannert26@gmail.com
            </a>
            <a className="btn btn-ghost" href="https://docs.google.com/document/d/1I3is8WiWXRPZYwv9eu_SV-dGatcOu2KF/edit" target="_blank" rel="noopener noreferrer">
              Résumé ↗
            </a>
          </div>
        </div>
        <ul className="contact-links">
          <li>
            <a href="https://github.com/Proguranto" target="_blank" rel="noopener noreferrer">
              <span className="mono dk">github</span>
              <span>@Proguranto</span>
              <span className="arr">↗</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/grant-tannert" target="_blank" rel="noopener noreferrer">
              <span className="mono dk">linkedin</span>
              <span>grant-tannert</span>
              <span className="arr">↗</span>
            </a>
          </li>
        </ul>
      </div>
      <footer className="foot">
        <div className="foot-l mono">
          © {new Date().getFullYear()} grant tannert · made with too many quacks
        </div>
        <div className="foot-r mono">last updated may 2026</div>
      </footer>
    </section>
  );
}
