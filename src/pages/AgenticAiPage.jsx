import {
  Bot,
  Workflow,
  BrainCircuit,
  Database,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";

import kyntriLogo from "../assets/kyntri_logo.png";

const features = [
  {
    icon: Bot,
    title: "AI AGENTS",
    description:
      "Intelligent AI agents that understand tasks, process information, and take actions across business workflows.",
    items: [
      "Autonomous AI Agents",
      "Task Execution",
      "Intelligent Assistants",
      "Context Awareness",
    ],
  },
  {
    icon: Workflow,
    title: "WORKFLOW AUTOMATION",
    description:
      "Automate repetitive business processes and connect multiple systems into intelligent workflows.",
    items: [
      "Process Automation",
      "Workflow Orchestration",
      "System Integration",
      "Task Automation",
    ],
  },
  {
    icon: BrainCircuit,
    title: "INTELLIGENT DECISIONS",
    description:
      "Use AI-powered reasoning and analysis to support faster and smarter business decisions.",
    items: [
      "AI Reasoning",
      "Decision Support",
      "Pattern Detection",
      "Smart Recommendations",
    ],
  },
  {
    icon: Database,
    title: "DATA INTELLIGENCE",
    description:
      "Transform business data into useful insights and actionable intelligence.",
    items: [
      "Data Analysis",
      "Business Insights",
      "Real-time Processing",
      "Analytics",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "The AI understands your request, business context, and required outcome.",
  },
  {
    number: "02",
    title: "ANALYZE",
    description:
      "Relevant information is analyzed to determine the best action.",
  },
  {
    number: "03",
    title: "ACT",
    description:
      "The AI agent executes tasks across connected systems and workflows.",
  },
  {
    number: "04",
    title: "IMPROVE",
    description:
      "Results are monitored to continuously improve business processes.",
  },
];

function AgenticAiPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#050816]/80 backdrop-blur-2xl">

        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* LOGO */}

          <a
            href="/"
            className="flex items-center gap-3"
          >

            <img
              src={kyntriLogo}
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


          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-8 lg:flex">

            <a
              href="/"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/#services"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              Services
            </a>

            <a
              href="/#platforms"
              className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              Platforms
            </a>

            <a
              href="/#contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Start a Project
            </a>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#080A16] px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:pb-24 lg:pt-36">

        {/* GLOW */}

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />


        <div className="relative mx-auto max-w-7xl">

          {/* BREADCRUMB */}

          <div className="mb-10 text-sm text-gray-500">
            Kyntri
            <span className="mx-2 text-cyan-400">/</span>
            Agentic AI
          </div>


          {/* MAIN CARD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#182235]
              p-7
              shadow-2xl
              sm:p-10
              lg:p-16
            "
          >

            {/* TOP GRADIENT BORDER */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-[3px]
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-pink-500
              "
            />


            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* LEFT */}

              <div>

                {/* ICON */}

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/5
                    shadow-[0_0_35px_rgba(34,211,238,0.08)]
                  "
                >
                  <Bot
                    size={30}
                    className="text-cyan-400"
                  />
                </div>


                <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
                  AI & AUTOMATION
                </p>


                <h1
                  className="
                    text-5xl
                    font-black
                    leading-[0.95]
                    sm:text-6xl
                    lg:text-7xl
                  "
                >
                  AGENTIC AI

                  <br />

                  <span className="text-cyan-400">
                    WORKFLOW
                  </span>

                  <br />

                  AUTOMATION
                </h1>


                <p className="mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                  Transform the way your business works with
                  intelligent AI agents that automate workflows,
                  analyze information, and take action.
                </p>


                {/* BUTTON */}

                <div className="mt-10">

                  <a
                    href="/#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-600
                      px-8
                      py-4
                      font-semibold
                      shadow-[0_0_30px_rgba(34,211,238,0.2)]
                      transition
                      hover:scale-105
                    "
                  >
                    Start a Project

                    <ArrowUpRight size={18} />

                  </a>

                </div>

              </div>


              {/* RIGHT VISUAL */}

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[100px]" />

                <div
                  className="
                    relative
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#0c1424]
                    p-5
                    sm:p-7
                  "
                >

                  <div className="mb-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                        <Bot
                          size={20}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>

                        <p className="text-sm font-semibold">
                          AI Agent
                        </p>

                        <p className="text-xs text-gray-500">
                          Intelligent Automation
                        </p>

                      </div>

                    </div>

                    <span className="flex items-center gap-2 text-xs text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      Active
                    </span>

                  </div>


                  {/* WORKFLOW */}

                  <div className="space-y-3">

                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">

                      <p className="text-[10px] uppercase tracking-[2px] text-cyan-400">
                        Input
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        Customer request received
                      </p>

                    </div>


                    <div className="text-center text-cyan-400">
                      ↓
                    </div>


                    <div className="rounded-xl border border-violet-400/20 bg-violet-400/5 p-4">

                      <p className="text-[10px] uppercase tracking-[2px] text-violet-400">
                        AI Processing
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        Understanding and analyzing request
                      </p>

                    </div>


                    <div className="text-center text-cyan-400">
                      ↓
                    </div>


                    <div className="rounded-xl border border-pink-400/20 bg-pink-400/5 p-4">

                      <p className="text-[10px] uppercase tracking-[2px] text-pink-400">
                        Action
                      </p>

                      <p className="mt-2 text-sm text-gray-300">
                        Task completed automatically
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section
        id="features"
        className="bg-[#020817] px-5 py-20 sm:px-8 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="mb-5 text-xs uppercase tracking-[4px] text-cyan-400">
              Powerful Features
            </p>

            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

              <h2
                className="
                  text-4xl
                  font-black
                  leading-tight
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Everything your

                <br />

                <span className="text-cyan-400">
                  AI workflow needs.
                </span>
              </h2>

              <p className="max-w-md text-base leading-7 text-gray-400">
                Intelligent automation designed to help modern
                businesses work faster, smarter, and more efficiently.
              </p>

            </div>

          </div>


          {/* CARDS */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#182235]
                    p-7
                    sm:p-9
                  "
                >

                  {/* TOP BORDER */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[3px]
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-pink-500
                    "
                  />


                  <div className="flex items-center gap-5">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/5
                      "
                    >
                      <Icon
                        size={27}
                        className="text-cyan-400"
                      />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {feature.title}
                    </h3>

                  </div>


                  <p className="mt-7 text-base leading-7 text-gray-400">
                    {feature.description}
                  </p>


                  <div className="mt-7 flex flex-wrap gap-3">

                    {feature.items.map((item) => (

                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-2
                          text-xs
                          text-gray-300
                        "
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="bg-[#07101f] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-5 text-xs uppercase tracking-[4px] text-cyan-400">
              How It Works
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              From request to
              <span className="text-cyan-400">
                {" "}action.
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {workflow.map((step) => (

              <div
                key={step.number}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                "
              >

                <div className="text-5xl font-black text-cyan-400/30">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECURITY
      ===================================================== */}

      <section className="bg-[#020817] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">

            <ShieldCheck
              size={30}
              className="text-cyan-400"
            />

          </div>

          <h2 className="mt-7 text-4xl font-black sm:text-5xl">
            Intelligent automation.
            <br />

            <span className="text-cyan-400">
              Built responsibly.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Build intelligent workflows with security,
            access control, monitoring, and reliable
            engineering at the core.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Start a Project
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
            Ready to automate
            <br />

            <span className="text-cyan-400">
              your business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Tell us about your workflow, business challenge,
            or automation idea.
          </p>

          <a
            href="/#contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              px-8
              py-4
              font-semibold
              transition
              hover:scale-105
            "
          >
            Start a Project

            <ArrowUpRight size={18} />

          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-[#030814]">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

            {/* BRAND */}

            <div className="lg:col-span-2">

              <a
                href="/"
                className="flex items-center gap-3"
              >

                <img
                  src={kyntriLogo}
                  alt="Kyntri"
                  className="h-10 w-10"
                />

                <span className="text-3xl font-black tracking-[3px]">
                  KYNTRI
                </span>

              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
                Engineering scalable software, AI solutions,
                and cloud platforms for modern enterprises.
              </p>

            </div>


            {/* PLATFORMS */}

            <div>

              <h3 className="mb-5 font-bold">
                Platforms
              </h3>

              <div className="space-y-3 text-sm text-gray-400">

                <a href="/mpos" className="block hover:text-cyan-400">
                  mPOS
                </a>

                <a href="/eventflow" className="block hover:text-cyan-400">
                  EventFlow
                </a>

                <a href="/garage" className="block hover:text-cyan-400">
                  AutoGarage
                </a>

                <a href="/agentic-ai" className="block hover:text-cyan-400">
                  Agentic AI
                </a>

              </div>

            </div>


            {/* RESOURCES */}

            <div>

              <h3 className="mb-5 font-bold">
                Resources
              </h3>

              <div className="space-y-3 text-sm text-gray-400">

                <a href="/blog" className="block hover:text-cyan-400">
                  Blog
                </a>

                <a href="/case-studies" className="block hover:text-cyan-400">
                  Case Studies
                </a>

                <a href="/documentation" className="block hover:text-cyan-400">
                  Documentation
                </a>

                <a href="/faq" className="block hover:text-cyan-400">
                  FAQ
                </a>

              </div>

            </div>


            {/* COMPANY */}

            <div>

              <h3 className="mb-5 font-bold">
                Company
              </h3>

              <div className="space-y-3 text-sm text-gray-400">

                <a href="/about" className="block hover:text-cyan-400">
                  About Us
                </a>

                <a href="/careers" className="block hover:text-cyan-400">
                  Careers
                </a>

                <a href="/#contact" className="block hover:text-cyan-400">
                  Contact
                </a>

                <a href="/privacy" className="block hover:text-cyan-400">
                  Privacy Policy
                </a>

              </div>

            </div>

          </div>


          <div className="my-10 border-t border-white/10" />


          <div className="flex flex-col gap-3 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">

            <p>
              © 2026 Kyntri Technology Solutions. All rights reserved.
            </p>

            <p>
              Built for modern, intelligent enterprises.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default AgenticAiPage;