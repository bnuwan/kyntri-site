import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#020817] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="mb-14 lg:mb-20">

          <p className="text-cyan-400 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-5">
            What We Do
          </p>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

            <div className="max-w-3xl">

              <h2
                className="
                  font-bold
                  leading-tight
                  text-4xl
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                End-to-End
                <br />

                <span className="text-cyan-400">
                  Technology Services
                </span>
              </h2>

            </div>

            <p
              className="
                text-gray-400
                text-base
                sm:text-lg
                leading-relaxed
                max-w-md
              "
            >
              We combine deep technical expertise
              with pragmatic engineering to deliver
              solutions that are built to last.
            </p>

          </div>

        </div>


        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;