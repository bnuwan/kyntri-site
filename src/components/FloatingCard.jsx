import { Brain, Cloud, BarChart3, Zap, Code2 } from "lucide-react";

const icons = {
  ai: Brain,
  cloud: Cloud,
  analytics: BarChart3,
  automation: Zap,
  software: Code2,
};

function FloatingCard({ type, title, description, className = "" }) {
  const Icon = icons[type];

  return (
    <div
      className={`
        absolute
        z-30
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-cyan-500/15
        bg-[#0f172a]/90
        backdrop-blur-xl
        px-4
        py-3
        shadow-[0_0_20px_rgba(0,255,255,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:border-cyan-400/40
        min-w-[210px]
        max-w-[240px]
        ${className}
      `}
    >
      {/* Icon */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-cyan-500/30
          bg-cyan-500/10
        "
      >
        {Icon && <Icon size={18} className="text-cyan-400" />}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h4 className="truncate text-sm font-semibold text-white sm:text-base">
          {title}
        </h4>

        <p className="mt-1 text-xs leading-relaxed text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FloatingCard;