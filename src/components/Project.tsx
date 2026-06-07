import { useState } from "react";
import { PROJECTS, FILTERS, type Project } from "@/data";
import SectionHeader from "./SectionHeader";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <article className="card" style={{ "--card-i": i } as React.CSSProperties}>
      <div className="card-thumb" aria-hidden="true">
        <div className="thumb-stripes" />
        <div className="thumb-label mono">[{p.placeholder}]</div>
        <span className={`card-status status-${p.status}`}>{p.status}</span>
      </div>
      <div className="card-head">
        <div className="card-tag mono">{p.tag} · {p.year}</div>
        <h3 className="card-title">{p.title}</h3>
        <p className="card-blurb">{p.blurb}</p>
      </div>
      <div className="card-foot">
        <ul className="card-stack">
          {p.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="card-actions">
          <a className="link-btn" href="#">repo <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section id="work" className="section work">
      <SectionHeader idx="03" en="Projects" />
      <div className="work-filters" role="tablist">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`chip ${filter === f ? "chip-on" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
            <span className="chip-count">
              {f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.tag === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="work-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
