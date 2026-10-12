import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import kyntriLogo from "../../assets/kyntri_logo.png";

function EventFlowNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Analytics",
      href: "#analytics",
    },
    {
      name: "Management",
      href: "#management",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="eventflow-navbar">

      <div className="eventflow-navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="eventflow-navbar-logo"
        >
          <img
            src={kyntriLogo}
            alt="Kyntri"
            className="eventflow-kyntri-logo"
          />

          <div className="eventflow-logo-text">
            <strong>EventFlow</strong>
            <span>EVENT MANAGEMENT</span>
          </div>
        </a>


        {/* DESKTOP NAVIGATION */}
        <nav className="eventflow-navbar-links">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}

        </nav>


        {/* CTA */}
        <div className="eventflow-navbar-actions">

          <a
            href="#contact"
            className="eventflow-navbar-demo"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>

        </div>


        {/* MOBILE */}
        <button
          type="button"
          className="eventflow-mobile-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`eventflow-mobile-menu ${
          open ? "open" : ""
        }`}
      >

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="eventflow-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Get Started
          <ArrowUpRight size={17} />
        </a>

      </div>

    </header>
  );
}

export default EventFlowNavbar;