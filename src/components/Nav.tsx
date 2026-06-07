import { NAV } from "@/data";

interface Props {
  active: string;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav({ active }: Props) {
  return (
    <nav className="nav" aria-label="Primary">
      <a
        className="nav-mark"
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
      >
        <span className="nav-mark-en">grant.t</span>
      </a>
      <ul className="nav-links">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className={active === n.id ? "is-active" : ""}
              onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}
            >
              <span className="nav-en">{n.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        className="nav-cta"
        href="#contact"
        onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
      >
        Say hi <span aria-hidden="true">→</span>
      </a>
    </nav>
  );
}
