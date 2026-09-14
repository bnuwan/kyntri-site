const items = [
  "AI Solutions",
  "Cloud Services",
  "Business Automation",
  "Data Analytics",
  "Software Engineering",
  "Machine Learning",
];

function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-cyan-500/10 bg-black py-4">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Marquee;
