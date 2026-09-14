import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductsSection() {
  return (
    <section className="bg-[#020817] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}

        <div className="mx-auto mb-14 max-w-4xl text-center lg:mb-20">

          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-cyan-400">
            OUR PLATFORMS
          </p>

          <h2
            className="
            mb-6
            font-bold
            leading-tight
            text-4xl
            sm:text-5xl
            lg:text-7xl
          "
          >
            Products We've

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Built & Shipped
            </span>

          </h2>

          <p
            className="
            mx-auto
            max-w-3xl
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-gray-400
          "
          >
            Beyond client work, we build and operate our own platforms â€”
            real products solving real operational problems across retail,
            events, automotive, and AI.
          </p>

        </div>

        {/* Product Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          lg:gap-10
        "
        >
          {products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductsSection;
