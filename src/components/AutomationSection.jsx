import {
  CheckCircle2,
  Play,
  Search,
  Link2,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    title: "Connect any stack.",
    desc:
      "CRMs, databases, internal tools, and third-party APIs in one orchestration layer.",
  },
  {
    title: "Agents that reason.",
    desc:
      "Multi-step decisions, not brittle if-this-then-that rules.",
  },
  {
    title: "Human-in-the-loop.",
    desc:
      "Approvals and guardrails exactly where they matter.",
  },
  {
    title: "Continuously improving.",
    desc:
      "Every execution sharpens the next.",
  },
];

function AutomationSection() {
  return (
    <section
      id="automation"
      className="relative overflow-hidden bg-[#020817] py-12 sm:py-16 lg:py-20"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.08),transparent_45%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,.08),transparent_45%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">

          {/* LEFT */}

          <div className="max-w-[720px]">

            <p className="mb-6 text-[10px] sm:text-xs font-semibold uppercase tracking-[5px] sm:tracking-[8px] text-cyan-400">
              AGENTIC AI
            </p>

            <h2
              className="
                font-black
                leading-tight
                tracking-tight
                text-4xl
                sm:text-5xl
                lg:text-[66px]
                text-white
              "
            >
              Workflows That
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Think For Themselves
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[680px]
                text-base
                sm:text-lg
                lg:text-[20px]
                leading-8
                lg:leading-10
                text-gray-400
              "
            >
              Most automation just fires triggers.

              Kyntri's agentic platform deploys AI agents that
              understand context, choose the next best action,
              and execute across your existing tools â€”
              then learn from every run.
            </p>

            <div className="mt-10 sm:mt-14 space-y-6 sm:space-y-7">

              {FEATURES.map((item) => (

                <div
                  key={item.title}
                  className="flex items-start gap-4 sm:gap-5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">

                    <CheckCircle2
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <p className="text-sm sm:text-base lg:text-lg leading-7 lg:leading-8">

                    <span className="font-semibold text-white">
                      {item.title}
                    </span>{" "}

                    <span className="text-gray-400">
                      {item.desc}
                    </span>

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
                    <div className="relative mt-0 lg:-mt-5">

            <div
              className="
              mx-auto
              max-w-[680px]
              overflow-hidden
              rounded-[24px]
              sm:rounded-[30px]
              border
              border-white/10
              bg-[#0b1020]/90
              backdrop-blur-xl
              shadow-[0_25px_90px_rgba(0,0,0,.45)]
              transition-all
              duration-500
              hover:border-cyan-500/30
            "
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />

                  </span>

                  <span className="text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[5px] text-gray-400">
                    AGENT RUN
                  </span>

                </div>

                <span
                  className="
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  px-3
                  py-1
                  text-[10px]
                  sm:text-[11px]
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-green-400
                  "
                >
                  LIVE
                </span>

              </div>

              {/* Timeline */}

              <div className="relative px-5 py-6 sm:px-8 sm:py-8">

                <div
                  className="
                  absolute
                  left-[28px]
                  sm:left-[49px]
                  top-12
                  bottom-10
                  w-px
                  bg-gradient-to-b
                  from-cyan-400
                  via-cyan-400/40
                  to-transparent
                "
                />

                {/* Trigger */}

                <div className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">

                    <Play className="h-5 w-5 text-cyan-400" />

                  </div>

                  <div>

                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Trigger
                    </h4>

                    <p className="mt-1 text-sm sm:text-base text-gray-400">
                      New Lead â€¢ CRM
                    </p>

                  </div>

                </div>

                {/* Analyze */}

                <div className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">

                    <Search className="h-5 w-5 text-cyan-400" />

                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        Analyzing
                      </h4>

                      <div className="flex gap-1">

                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"></span>

                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce delay-150"></span>

                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce delay-300"></span>

                      </div>

                    </div>

                    <p className="mt-1 text-sm sm:text-base text-gray-400">
                      Reasoning over context
                    </p>

                  </div>

                </div>

                {/* Decision */}

                <div className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10">

                    <CheckCircle2 className="h-5 w-5 text-green-400" />

                  </div>

                  <div>

                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Decision
                    </h4>

                    <p className="mt-1 text-sm sm:text-base text-green-400">
                      Approved â€¢ Confidence 0.94
                    </p>

                  </div>

                </div>

                {/* Connecting Tools */}

                <div className="relative flex gap-4 sm:gap-5 pb-8 sm:pb-10">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">

                    <Link2 className="h-5 w-5 text-cyan-400" />

                  </div>

                  <div className="flex-1">

                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Connecting Tools
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">

                      {["Slack", "CRM", "Database"].map((tool) => (

                        <span
                          key={tool}
                          className="
                          rounded-lg
                          border
                          border-cyan-500/20
                          bg-cyan-500/5
                          px-3
                          py-1
                          text-xs
                          sm:text-sm
                          text-cyan-300
                          "
                        >
                          {tool}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

                {/* Executing */}

                <div className="relative flex gap-4 sm:gap-5">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">

                    <Zap className="h-5 w-5 text-cyan-400" />

                  </div>

                  <div>

                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      Executing
                    </h4>

                    <p className="mt-1 text-sm sm:text-base text-gray-400">
                      Sync â†’ CRM
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        {/* AI Models */}

            <div
              className="
              mt-6
              sm:mt-8
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              sm:p-6
              backdrop-blur
            "
            >
              <p
                className="
                mb-5
                text-center
                text-[10px]
                sm:text-[11px]
                uppercase
                tracking-[3px]
                sm:tracking-[6px]
                text-gray-500
              "
              >
                Model Agnostic â€” The Right Model For Each Task
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

                {[
                  "OpenAI",
                  "Anthropic",
                  "Gemini",
                  "Perplexity",
                ].map((model) => (

                  <span
                    key={model}
                    className="
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    px-4
                    py-2
                    sm:px-5
                    text-xs
                    sm:text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                  "
                  >
                    {model}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AutomationSection;
