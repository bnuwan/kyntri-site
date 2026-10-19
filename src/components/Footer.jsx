import logo from "../assets/kyntri_logo.png";

function Footer() {
  const platforms = [
    {
      name: "mPOS",
      href: "/",
    },
    {
      name: "Liftly",
      href: "/liftly",
    },
    {
      name: "EventFlow",
      href: "/eventflow",
    },
    {
      name: "AutoGarage",
      href: "/garage",
    },
    {
      name: "Agentic AI",
      href: "/#services",
    },
  ];

  const useCases = [
    {
      name: "Workflow Automation",
      href: "/#automation",
    },
    {
      name: "AI Assistants",
      href: "/#services",
    },
    {
      name: "Data Analytics",
      href: "/#services",
    },
    {
      name: "Cloud Migration",
      href: "/#services",
    },
    {
      name: "Digital Transformation",
      href: "/#services",
    },
  ];

  const resources = [
   {
  name: "Blog",
  href: "/blog",
},
    {
  name: "Case Studies",
  href: "/case-studies",
},
    {
  name: "Documentation",
  href: "/documentation",
},
    {
  name: "Support",
  href: "/support",
},
   {
  name: "FAQ",
  href: "/faq",
},
  ];

  const company = [
   {
  name: "About Us",
  href: "/about",
},
    {
      name: "Services",
      href: "/#services",
    },
    {
  name: "Careers",
  href: "/careers",
},
    {
      name: "Contact",
      href: "/#contact",
    },
    {
  name: "Privacy Policy",
  href: "/privacy",
},
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030814]">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* =================================================
            TOP FOOTER
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6
            gap-10
            lg:gap-12
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <div className="lg:col-span-2 text-center sm:text-left">

            <a
              href="/"
              className="
                mb-6
                flex
                items-center
                justify-center
                gap-4
                sm:justify-start
              "
            >

              <img
                src={logo}
                alt="Kyntri"
                className="h-10 sm:h-11 w-auto"
              />

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  font-black
                  tracking-[3px]
                  text-white
                "
              >
                KYNTRI
              </h2>

            </a>

            <p
              className="
                max-w-sm
                mx-auto
                sm:mx-0
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                text-gray-400
              "
            >
              Engineering scalable software,
              AI solutions, and cloud
              platforms for modern
              enterprises.
            </p>

          </div>


          {/* =================================================
              PLATFORMS
          ================================================= */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Platforms
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {platforms.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              USE CASES
          ================================================= */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Use Cases
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {useCases.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              RESOURCES
          ================================================= */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {resources.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-400">

              {company.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="my-10 sm:my-14 border-t border-white/10" />


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            text-center
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            © 2026 Kyntri Technology Solutions. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Built for modern, intelligent enterprises.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;