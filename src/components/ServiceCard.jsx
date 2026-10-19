function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-[#12253d]
      bg-gradient-to-b
      from-[#091426]
      to-[#07111f]
      p-6
      sm:p-8
      lg:p-10
      min-h-[360px]
      lg:min-h-[420px]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/60
      hover:shadow-[0_0_50px_rgba(0,255,255,0.15)]
      "
    >
      {/* Animated Top Line */}
      <div
        className="
        absolute
        top-0
        left-[-100%]
        h-[2px]
        w-full
        bg-gradient-to-r
        from-transparent
        via-cyan-400
        to-transparent
        transition-all
        duration-1000
        group-hover:left-[100%]
        "
      />

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-cyan-500/5
        via-transparent
        to-blue-500/5
        "
      />

      {/* Icon */}
      <div
        className="
        relative
        z-10
        mb-6
        flex
        h-14
        w-14
        sm:h-16
        sm:w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-500/20
        bg-cyan-500/5
        shadow-[0_0_20px_rgba(0,255,255,0.08)]
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-cyan-500/10
        group-hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
      "
      >
        <Icon
          size={26}
          className="
          text-cyan-400
          transition-all
          duration-500
          group-hover:rotate-12
          drop-shadow-[0_0_10px_#00ffff]
        "
        />
      </div>

      {/* Title */}
      <h3
        className="
        relative
        z-10
        mb-4
        text-2xl
        sm:text-3xl
        font-bold
        text-white
      "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
        relative
        z-10
        mb-8
        text-sm
        sm:text-base
        leading-7
        text-gray-400
      "
      >
        {service.description}
      </p>

      {/* Technologies */}
      <div className="relative z-10 flex flex-wrap gap-2 sm:gap-3">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="
            rounded-xl
            border
            border-cyan-500/20
            bg-cyan-500/5
            px-3
            py-2
            text-[11px]
            sm:px-4
            sm:text-xs
            font-medium
            text-cyan-300
            transition-all
            duration-300
            hover:bg-cyan-500
            hover:text-black
            hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]
          "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-0
        left-0
        h-24
        w-full
        bg-gradient-to-t
        from-cyan-500/5
        to-transparent
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
      "
      />
    </div>
  );
}

export default ServiceCard;

