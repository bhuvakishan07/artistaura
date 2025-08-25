import "./footer.css";

export default function Footer() {
  return (
    <footer className="ot-footer">
      <div className="ot-footer-inner">
        <div className="ot-col">
          <div className="ot-brandline">
            <img src="/src/assets/logo.svg" alt="Ocean Technolab" />
            <span>Ocean Technolab</span>
          </div>
          <p>We build modern web, mobile, and SaaS products with a focus on clarity and performance.</p>
        </div>

        <div className="ot-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="ot-col">
          <h4>Contact</h4>
          <ul className="ot-contact">
            <li><a href="mailto:hello@oceantechnolab.com">hello@oceantechnolab.com</a></li>
            <li><a href="tel:+910000000000">+91 00000 00000</a></li>
            <li><a href="https://www.oceantechnolab.com" target="_blank">oceantechnolab.com</a></li>
          </ul>
          <div className="ot-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">x</a>
            <a href="#" aria-label="GitHub">gh</a>
          </div>
        </div>
      </div>

      <div className="ot-footnote">
        <span>© {new Date().getFullYear()} Ocean Technolab. All rights reserved.</span>
        <a href="https://www.oceantechnolab.com" target="_blank">
          Design & Developed by Ocean Technolab
        </a>
      </div>
    </footer>
  );
}
