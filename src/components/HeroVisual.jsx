import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    mouseY,
    [-300, 300],
    [10, -10]
  );

  const rotateY = useTransform(
    mouseX,
    [-300, 300],
    [-10, 10]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1500,
      }}
      className="
      relative
      hidden
      h-[720px]
      items-center
      justify-center
      lg:flex
    "
    >
      {/* Background Glow */}

      <div className="absolute h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[150px]" />

      <div className="absolute bottom-0 right-12 h-[220px] w-[220px] rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Orbit Ring 1 */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[420px]
        w-[420px]
        rounded-full
        border
        border-cyan-400/10
      "
        style={{
          transform: "rotateX(72deg)",
        }}
      />

      {/* Orbit Ring 2 */}

     <motion.div
  animate={{
    y: [0, -18, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    h-[200px]
    w-[200px]
    rounded-full
    overflow-hidden
    shadow-[0_0_120px_rgba(139,92,246,.45)]
  "
>
  {/* Base */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#CDA8FF] via-[#8B5CF6] to-[#5B21B6]" />

  {/* Top Light */}
  <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-white/30 blur-2xl" />

  {/* Rim Light */}
  <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />

  {/* Bottom Shadow */}
  <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/25 to-transparent" />

  {/* Side Reflection */}
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white/10 to-transparent" />
</motion.div>

      {/* Cyan Planet */}

      <motion.div
  animate={{
    y: [0, 5, 0],
    x: [0, -8, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
  className="
    absolute
    right-10
    top-25
    h-[140px]
    w-[140px]
    overflow-hidden
    rounded-full
    shadow-[0_0_80px_rgba(34,211,238,.45)]
  "
>
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-100 via-cyan-300 to-cyan-600" />

  <div className="absolute left-5 top-5 h-12 w-12 rounded-full bg-white/35 blur-xl" />

  <div className="absolute bottom-0 h-14 w-full bg-gradient-to-t from-black/20 to-transparent" />

  <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
</motion.div>

      {/* Pink Planet */}

     <motion.div
  animate={{
    y: [0, 5, 0],
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-29
    right-19
    h-[100px]
    w-[100px]
    overflow-hidden
    rounded-full
    shadow-[0_0_70px_rgba(236,72,153,.5)]
  "
>
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600" />

  <div className="absolute left-3 top-3 h-8 w-8 rounded-full bg-white/30 blur-lg" />

  <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-black/25 to-transparent" />
</motion.div>
      
            {/* Floating Glass Cube 1 */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-20
          top-10
          h-16
          w-16
          rounded-2xl
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(255,255,255,.12)]
        "
      />

      {/* Floating Glass Cube 2 */}

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-25
          left-24
          h-20
          w-20
          rounded-3xl
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(255,255,255,.12)]
        "
      />

      {/* Floating Glass Cube 3 */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 10, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-35
          h-12
          w-12
          rounded-xl
          border
          border-white/15
          bg-white/10
          backdrop-blur-xl
        "
      />

      {/* Stars */}

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-8 top-36 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_white]"
      />

      <motion.div
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-44 top-24 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]"
      />

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-32 left-12 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]"
      />

      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-12 bottom-24 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
      />

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-44 top-10 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_15px_#a855f7]"
      />

      {/* Light Reflection */}

      <div
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          bg-gradient-to-br
          from-white/15
          to-transparent
          blur-3xl
        "
      />

    </motion.div>
  );
}

export default HeroVisual;