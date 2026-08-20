import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/kyntri_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Automation",
      href: "#automation",
    },
    {
      label: "Platforms",
      href: "#platforms",
    },
    {
      label: "Process",
      href: "#process",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const handleNavigation = (href) => {
    setIsOpen(false);

    // Internal section
    if (href.startsWith("#")) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = href;
    }
  };

  const handleStartProject = () => {
    setIsOpen(false);

    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/40 backdrop-blur-2xl border-b border-white/5">

      <div className="max-w-[1400px] mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="Kyntri"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />

          <div className="text-left">

            <h1 className="text-white font-bold text-lg sm:text-xl tracking-wider">
              KYNTRI
            </h1>

            <p className="text-[8px] sm:text-[9px] uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
              Technology Solutions
            </p>

          </div>

        </button>


        {/* =================================================
            DESKTOP MENU
        ================================================= */}

        <ul className="hidden lg:flex items-center gap-10 text-sm text-gray-300">

          {menuItems.map((item) => (
            <li key={item.label}>

              <button
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item.label}
              </button>

            </li>
          ))}

        </ul>


        {/* =================================================
            DESKTOP BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={handleStartProject}
          className="hidden lg:block px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.45)]"
        >
          Start a Project
        </button>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="bg-[#081120]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6">

          {menuItems.map((item) => (
            <button
              type="button"
              key={item.label}
              className="text-left text-gray-300 hover:text-cyan-400 transition"
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </button>
          ))}


          <button
            type="button"
            onClick={handleStartProject}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-white font-medium"
          >
            Start a Project
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;