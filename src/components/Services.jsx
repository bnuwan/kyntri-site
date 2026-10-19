import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#020817] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 lg:mb-12">
          <p className="mb-4 text-xs uppercase tracking-[3px] text-cyan-400 sm:text-sm sm:tracking-[4px]">
            What We Do
          </p>

          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              End-to-End
              <br />
              <span className="text-cyan-400">
                Technology Services
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              We combine deep technical expertise with pragmatic engineering
              to deliver solutions that are built to last.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
