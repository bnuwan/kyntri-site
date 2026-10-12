import { ArrowUpRight, LockKeyhole, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you contact Kyntri, request a project discussion, or interact with our services, we may collect information that you voluntarily provide, such as your name, email address, company information, and project details.",
  },
  {
    title: "How We Use Information",
    content:
      "Information may be used to respond to enquiries, understand project requirements, provide requested services, improve our products and services, and communicate with you about relevant business matters.",
  },
  {
    title: "Data Protection",
    content:
      "We take reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our website or services may use third-party infrastructure, analytics, cloud, communication, or other service providers. Information shared with such providers is handled according to their applicable policies and agreements.",
  },
  {
    title: "Cookies and Analytics",
    content:
      "Our website may use cookies or similar technologies to improve user experience, understand website usage, and support website functionality.",
  },
  {
    title: "Data Retention",
    content:
      "We retain information only for as long as reasonably necessary for the purposes for which it was collected, unless a longer retention period is required by applicable law or legitimate business requirements.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on applicable law, you may have rights relating to your personal information, including requesting access, correction, or deletion of certain information.",
  },
  {
    title: "Policy Updates",
    content:
      "This Privacy Policy may be updated from time to time as our services, technology, or legal requirements change. Updated versions will be published on this page.",
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-2xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/src/assets/kyntri_logo.png"
              alt="Kyntri"
              className="h-10 w-10 object-contain"
            />

            <div>
              <h1 className="text-lg font-bold tracking-[3px]">
                KYNTRI
              </h1>

              <p className="text-[7px] uppercase tracking-[3px] text-gray-500">
                Technology Solutions
              </p>
            </div>
          </a>

          <a
            href="/"
            className="
              rounded-full
              border
              border-white/10
              px-5
              py-2.5
              text-sm
              text-gray-300
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            Back to Home
          </a>

        </div>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 lg:pb-24">

        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/10
            "
          >
            <LockKeyhole
              size={25}
              className="text-cyan-400"
            />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Privacy Policy
          </p>

          <h1
            className="
              mt-5
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Your information.
            <br />

            <span className="text-cyan-400">
              Our responsibility.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            This page explains how Kyntri may collect, use,
            protect, and manage information provided through
            our website and services.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Last updated: August 20, 2026
          </p>

        </div>

      </section>


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-16 sm:px-8 lg:py-20">

        <div className="mx-auto max-w-4xl">

          <div className="flex gap-5">

            <ShieldCheck
              size={25}
              className="mt-1 shrink-0 text-cyan-400"
            />

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              Kyntri is committed to handling information
              responsibly and taking reasonable steps to protect
              the information entrusted to us.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          POLICY CONTENT
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="space-y-12">

            {sections.map((section, index) => (

              <article
                key={section.title}
                className="border-b border-white/10 pb-10 last:border-b-0"
              >

                <div className="flex gap-5">

                  <span className="mt-1 text-sm font-bold text-cyan-400/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {section.title}
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                      {section.content}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT CTA
      ================================================= */}

      <section className="border-t border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Privacy Questions
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Need more information?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            If you have questions about this Privacy Policy
            or how information is handled, contact the Kyntri team.
          </p>

          <a
            href="/#contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              px-7
              py-3.5
              font-semibold
              transition
              hover:scale-105
            "
          >
            Contact Kyntri
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <span>
            © 2026 Kyntri Technology Solutions. All rights reserved.
          </span>

          <a
            href="/"
            className="transition hover:text-cyan-400"
          >
            Back to Kyntri
          </a>

        </div>

      </footer>

    </div>
  );
}

export default PrivacyPage;