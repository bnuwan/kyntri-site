import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Ticket,
  Wrench,
  Bot,
} from "lucide-react";

function ProductCard({ product }) {
  const getIcon = () => {
    switch (product.icon) {
      case "cart":
        return <ShoppingCart size={26} />;

      case "ticket":
        return <Ticket size={26} />;

      case "wrench":
        return <Wrench size={26} />;

      case "bot":
        return <Bot size={26} />;

      default:
        return <Bot size={26} />;
    }
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-gradient-to-br
      from-[#1b2235]
      via-[#182235]
      to-[#131a29]
      p-6
      sm:p-8
      lg:p-10
      min-h-[280px]
      lg:min-h-[320px]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:scale-[1.02]
      hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    >
      {/* Top Gradient */}

      <div
        className="
        absolute
        top-0
        left-0
        h-[3px]
        w-full
        bg-gradient-to-r
        from-cyan-400
        via-purple-500
        to-pink-500
      "
      />

      {/* Header */}

      <div className="mb-6 flex items-center gap-4 sm:gap-5">

        <div
          className="
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
          bg-cyan-500/10
          text-cyan-400
          shadow-[0_0_25px_rgba(34,211,238,0.2)]
          transition-all
          duration-300
          hover:scale-110
        "
        >
          {getIcon()}
        </div>

        <h3
          className="
          text-2xl
          sm:text-3xl
          lg:text-[38px]
          font-bold
          leading-tight
        "
        >
          {product.title}
        </h3>

      </div>

      {/* Description */}

      <p
        className="
        mb-8
        text-sm
        sm:text-base
        lg:text-lg
        leading-7
        text-gray-300
      "
      >
        {product.description}
      </p>

      {/* Features */}

      <h4 className="mb-4 font-semibold text-white">
        Key Features
      </h4>

      <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">

        {product.features.map((feature) => (

          <span
            key={feature}
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-2
            text-[11px]
            sm:px-4
            sm:text-xs
            text-gray-200
            transition-all
            hover:bg-cyan-500/20
            hover:text-cyan-300
          "
          >
            {feature}
          </span>

        ))}

      </div>

      {/* Button */}

      <Link to={product.link} className="block">

        <button
          className="
          w-full
          sm:w-auto
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-3
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          hover:scale-105
        "
        >
          Learn More
        </button>

      </Link>

    </div>
  );
}

export default ProductCard;