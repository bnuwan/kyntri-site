import {
  ArrowUpRight,
  BarChart3,
  CalendarCheck,
  Dumbbell,
  Users,
  Wallet,
  UserRoundCog,
  ClipboardCheck,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

import kyntriLogo from "../assets/kyntri_logo.png";

const features = [
  {
    icon: Users,
    title: "MEMBER MANAGEMENT",
    description:
      "Manage gym members, profiles, memberships, and member information from one centralized platform.",
    items: [
      "Member Profiles",
      "Membership Status",
      "Member History",
      "Member Search",
    ],
  },
  {
    icon: CalendarCheck,
    title: "BOOKINGS",
    description:
      "Manage personal training sessions, classes, appointments, and gym bookings with ease.",
    items: [
      "Session Booking",
      "Class Scheduling",
      "Trainer Availability",
      "Booking Management",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "ATTENDANCE",
    description:
      "Track member attendance and understand gym activity with simple and reliable attendance management.",
    items: [
      "Check In",
      "Check Out",
      "Attendance History",
      "Activity Tracking",
    ],
  },
  {
    icon: Dumbbell,
    title: "WORKOUT MANAGEMENT",
    description:
      "Create and manage workout programs designed around member goals and training requirements.",
    items: [
      "Workout Plans",
      "Exercise Library",
      "Training Programs",
      "Progress Tracking",
    ],
  },
  {
    icon: Wallet,
    title: "MEMBERSHIPS & REVENUE",
    description:
      "Manage membership plans, subscriptions, payments, and revenue information in one place.",
    items: [
      "Membership Plans",
      "Subscriptions",
      "Payment Tracking",
      "Revenue Reports",
    ],
  },
  {
    icon: BarChart3,
    title: "ANALYTICS",
    description:
      "Understand your gym performance through useful dashboards and business analytics.",
    items: [
      "Member Analytics",
      "Attendance Reports",
      "Revenue Analytics",
      "Business Insights",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "ADD MEMBERS",
    description:
      "Register members and maintain their profiles, memberships, and fitness information.",
  },
  {
    number: "02",
    title: "MANAGE MEMBERSHIPS",
    description:
      "Create plans, manage subscriptions, and keep track of membership status.",
  },
  {
    number: "03",
    title: "TRACK ACTIVITY",
    description:
      "Monitor attendance, bookings, workouts, and member activity.",
  },
  {
    number: "04",
    title: "ANALYZE",
    description:
      "Use analytics to understand performance and make better business decisions.",
  },
];

const benefits = [
  "Centralized member management",
  "Automated membership workflows",
  "Real-time attendance tracking",
  "Trainer and booking management",
  "Revenue and business analytics",
  "AI-powered fitness assistance",
];

function LiftlyPage() {
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

        {/* Background Glow */}

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />


        <div className="relative mx-auto max-w-7xl">

          {/* BREADCRUMB */}

          <div className="mb-10 text-sm text-gray-500">

            Kyntri

            <span className="mx-2 text-cyan-400">
              /
            </span>

            Liftly

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


            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

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
                  "
                >

                  <Dumbbell
                    size={30}
                    className="text-cyan-400"
                  />

                </div>


                <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
                  GYM MANAGEMENT PLATFORM
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

                  THE ALL-IN-ONE

                  <br />

                  <span className="text-cyan-400">
                    PLATFORM
                  </span>

                  <br />

                  FOR YOUR GYM

                </h1>


                <p className="mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                  Manage members, memberships, workouts,
                  attendance, bookings, trainers, and revenue
                  from one intelligent fitness platform.
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

                  {/* HEADER */}

                  <div className="mb-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-cyan-400/10
                        "
                      >

                        <Dumbbell
                          size={21}
                          className="text-cyan-400"
                        />

                      </div>

                      <div>

                        <p className="text-sm font-semibold">
                          Liftly Dashboard
                        </p>

                        <p className="text-xs text-gray-500">
                          Gym Management
                        </p>

                      </div>

                    </div>

                    <span className="flex items-center gap-2 text-xs text-green-400">

                      <span className="h-2 w-2 rounded-full bg-green-400" />

                      Live

                    </span>

                  </div>


                  {/* STATS */}

                  <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <p className="text-xs text-gray-500">
                        Members
                      </p>

                      <p className="mt-2 text-2xl font-bold">
                        1,248
                      </p>

                      <p className="mt-1 text-xs text-cyan-400">
                        +12.5%
                      </p>

                    </div>


                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <p className="text-xs text-gray-500">
                        Attendance
                      </p>

                      <p className="mt-2 text-2xl font-bold">
                        86%
                      </p>

                      <p className="mt-1 text-xs text-green-400">
                        Today
                      </p>

                    </div>


                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <p className="text-xs text-gray-500">
                        Bookings
                      </p>

                      <p className="mt-2 text-2xl font-bold">
                        74
                      </p>

                      <p className="mt-1 text-xs text-blue-400">
                        This week
                      </p>

                    </div>


                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                      <p className="text-xs text-gray-500">
                        Revenue
                      </p>

                      <p className="mt-2 text-2xl font-bold">
                        92%
                      </p>

                      <p className="mt-1 text-xs text-violet-400">
                        Target
                      </p>

                    </div>

                  </div>


                  {/* ACTIVITY */}

                  <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">

                    <div className="flex items-center justify-between">

                      <p className="text-xs text-gray-500">
                        Today's Activity
                      </p>

                      <BarChart3
                        size={16}
                        className="text-cyan-400"
                      />

                    </div>


                    <div className="mt-5 flex h-20 items-end gap-2">

                      {[35, 55, 42, 70, 50, 80, 62, 90, 72, 96].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/20 to-cyan-400"
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        )
                      )}

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

          {/* HEADER */}

          <div className="mb-14">

            <p className="mb-5 text-xs uppercase tracking-[4px] text-cyan-400">
              Platform Features
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
                  gym needs.
                </span>

              </h2>

              <p className="max-w-md text-base leading-7 text-gray-400">
                One intelligent platform for managing your
                members, operations, fitness programs, and
                business performance.
              </p>

            </div>

          </div>


          {/* FEATURE CARDS */}

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

                    <h3 className="text-xl font-bold sm:text-2xl">
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
          AI FITNESS
      ===================================================== */}

      <section className="bg-[#07101f] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}

          <div>

            <p className="text-xs uppercase tracking-[4px] text-cyan-400">
              Intelligent Fitness
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

              Smarter training
              <br />

              with

              <span className="text-cyan-400">
                {" "}AI.
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
              Help members achieve their fitness goals with
              intelligent workout guidance, personalized
              recommendations, and progress insights.
            </p>


            <div className="mt-8 space-y-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >

                  <span className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span className="text-sm text-gray-300 sm:text-base">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* RIGHT */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#182235]
              p-7
              sm:p-10
            "
          >

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


            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">

                <BrainCircuit
                  size={27}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  AI Fitness Assistant
                </h3>

                <p className="text-sm text-gray-500">
                  Personalized guidance
                </p>

              </div>

            </div>


            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

              <p className="text-xs uppercase tracking-[2px] text-cyan-400">
                Member Goal
              </p>

              <p className="mt-3 text-lg font-semibold">
                Build strength & improve fitness
              </p>

            </div>


            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5">

              <p className="text-xs uppercase tracking-[2px] text-violet-400">
                AI Recommendation
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Personalized weekly workout plan based
                on training history, goals, and progress.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="bg-[#020817] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-5 text-xs uppercase tracking-[4px] text-cyan-400">
              How It Works
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">

              From member

              <span className="text-cyan-400">
                {" "}to progress.
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

      <section className="border-y border-white/10 bg-[#07101f] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">

            <ShieldCheck
              size={30}
              className="text-cyan-400"
            />

          </div>

          <h2 className="mt-7 text-4xl font-black sm:text-5xl">

            Your gym.

            <br />

            <span className="text-cyan-400">
              One intelligent platform.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Bring your gym operations, member experience,
            fitness management, and business analytics
            together in one modern platform.
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

            Ready to transform

            <br />

            <span className="text-cyan-400">
              your gym?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Tell us about your gym and we'll help you build
            a smarter, more connected fitness experience.
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

                <a
                  href="/mpos"
                  className="block transition hover:text-cyan-400"
                >
                  mPOS
                </a>

                <a
                  href="/liftly"
                  className="block transition hover:text-cyan-400"
                >
                  Liftly
                </a>

                <a
                  href="/eventflow"
                  className="block transition hover:text-cyan-400"
                >
                  EventFlow
                </a>

                <a
                  href="/garage"
                  className="block transition hover:text-cyan-400"
                >
                  AutoGarage
                </a>

                <a
                  href="/agentic-ai"
                  className="block transition hover:text-cyan-400"
                >
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

                <a
                  href="/blog"
                  className="block transition hover:text-cyan-400"
                >
                  Blog
                </a>

                <a
                  href="/case-studies"
                  className="block transition hover:text-cyan-400"
                >
                  Case Studies
                </a>

                <a
                  href="/documentation"
                  className="block transition hover:text-cyan-400"
                >
                  Documentation
                </a>

                <a
                  href="/faq"
                  className="block transition hover:text-cyan-400"
                >
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

                <a
                  href="/about"
                  className="block transition hover:text-cyan-400"
                >
                  About Us
                </a>

                <a
                  href="/careers"
                  className="block transition hover:text-cyan-400"
                >
                  Careers
                </a>

                <a
                  href="/#contact"
                  className="block transition hover:text-cyan-400"
                >
                  Contact
                </a>

                <a
                  href="/privacy"
                  className="block transition hover:text-cyan-400"
                >
                  Privacy Policy
                </a>

              </div>

            </div>

          </div>


          {/* DIVIDER */}

          <div className="my-10 border-t border-white/10" />


          {/* BOTTOM */}

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

export default LiftlyPage;