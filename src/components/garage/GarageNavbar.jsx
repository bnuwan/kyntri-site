import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import kyntriLogo from "../../assets/kyntri_logo.png";

function GarageNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Features",
      href: "#garage-features",
    },
    {
      name: "Analytics",
      href: "#garage-analytics",
    },
    {
      name: "Operations",
      href: "#garage-operations",
    },
    {
      name: "Contact",
      href: "#garage-contact",
    },
  ];

  return (
    <header className="garage-navbar">

      <div className="garage-navbar-container">

        {/* LOGO */}

        <a
          href="/"
          className="garage-navbar-logo"
        >
          <img
            src={kyntriLogo}
            alt="Kyntri"
          />

          <div className="garage-logo-text">
            <strong>GarageFlow</strong>
            <span>GARAGE MANAGEMENT</span>
          </div>
        </a>


        {/* DESKTOP NAVIGATION */}

        <nav className="garage-navbar-links">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}

        </nav>


        {/* DESKTOP CTA */}

        <div className="garage-navbar-actions">

          <a
            href="#garage-contact"
            className="garage-navbar-button"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>

        </div>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="garage-mobile-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`garage-mobile-menu ${
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

        

      </div>

    </header>
  );
}

export default GarageNavbar;