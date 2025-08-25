import { useState } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="ot-header">
      <div className="ot-container">
        <a className="ot-brand" href="#">
          {/* Put your logo file in /src/assets/logo.svg or update the path */}
          <img src="/src/assets/logo.svg" alt="Ocean Technolab" />
          <span>Ocean Technolab</span>
        </a>

        <button
          className={`ot-burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`ot-nav ${open ? "is-open" : ""}`}>
          <ul>
            {nav.map(n => (
              <li key={n.label}>
                <a href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a className="ot-cta" href="#contact" onClick={() => setOpen(false)}>
            Get quote
          </a>
        </nav>
      </div>
    </header>
  );
}
