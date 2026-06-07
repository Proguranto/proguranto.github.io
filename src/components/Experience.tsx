import { TIMELINE } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeader idx="04" en="Experience" />
      <p className="exp-lede">
        Roles, milestones, moments, and <em>lessons</em>.
      </p>
      <div className="timeline">
        <ol>
          {TIMELINE.map((t, i) => (
            <li key={i} className={`timeline-row tl-${t.kind}${t.photo ? " tl-has-photo" : ""}`}>
              <div className="t-when mono">{t.when}</div>
              <div className="t-body">
                {t.kind === "lesson" && (
                  <span className="t-badge mono">lesson</span>
                )}
                <div className="t-where">{t.where}</div>
                <div className="t-role">{t.role}</div>
                <p>{t.body}</p>
              </div>
              {t.photo && (
                <div className="t-photo">
                  <img src={`/timeline/${t.photo}`} alt={t.where} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
