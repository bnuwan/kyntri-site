import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/kyntri_logo.png";
function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      title: "Solutions",
      link: "#solutions",
    },
    {
      title: "Features",
      link: "#features",
    },
    {
      title: "Benefits",
      link: "#benefits",
    },
    {
      title: "Pricing",
      link: "#pricing",
    },
    {
      title: "Blog",
      link: "#blog",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#020817]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1450px] mx-auto h-[72px] px-8 flex items-center justify-between">

        {/* LEFT */}

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="mPOS Elite"
            className="h-10 w-10 object-contain"
          />

          <div>

            <h2 className="text-[20px] font-bold text-white">
              mPOS Elite
            </h2>

          </div>

        </div>

        {/* CENTER */}

        <div className="hidden xl:flex items-center gap-4">

          <button
            className="
              px-14
              py-2.5
              rounded-full
              bg-[#3B82F6]
              text-white
              font-semibold
              text-sm
              hover:bg-[#2563EB]
              transition
            "
          >
            Get started
          </button>

          <button
            className="
              px-6
              py-2.5
              rounded-full
              bg-[#3B82F6]
              text-white
              text-sm
              font-semibold
              hover:bg-[#2563EB]
              transition
            "
          >
            Get a Demo
          </button>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex items-center gap-8">

          <nav className="flex items-center gap-7">

            {menus.map((item) => (

              <a
                key={item.title}
                href={item.link}
                className="
  relative
  text-[14px]
  font-medium
  text-white
  transition-all
  duration-300
  hover:text-cyan-400
  after:absolute
  after:left-0
  after:-bottom-2
  after:h-[2px]
  after:w-0
  after:bg-cyan-400
  after:transition-all
  hover:after:w-full
"
              >
                {item.title}
              </a>

            ))}

          </nav>

          <a
            href="#signin"
           className="
  text-[14px]
  font-medium
  text-white
  transition
  hover:text-cyan-400
"
          >
            Sign in
          </a>

          <button
            className="
              px-5
              py-2.5
              rounded-full
              bg-[#1F1F1F]
              text-white
              text-sm
              font-semibold
              hover:bg-black
              transition
            "
          >
            Try Free
          </button>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden border-t border-white/10 bg-[#020817]">
          <div className="flex flex-col p-6 gap-5">

            <button
              className="
                rounded-full
                bg-[#3B82F6]
                py-3
                text-white
                font-semibold
              "
            >
              Get started
            </button>

            <button
              className="
                rounded-full
                border
                border-[#3B82F6]
                py-3
                text-[#2563EB]
                font-semibold
              "
            >
              Get a Demo
            </button>

            {menus.map((item) => (

              <a
                key={item.title}
                href={item.link}
                className="text-white hover:text-cyan-400"
              >
                {item.title}
              </a>

            ))}

            <a
              href="#signin"
              className="text-white hover:text-cyan-400"
            >
              Sign in
            </a>

            <button
              className="
                rounded-full
                bg-black
                py-3
                text-white
                font-semibold
              "
            >
              Try Free
            </button>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;