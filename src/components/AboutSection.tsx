import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "2016", title: "The Beginning", desc: "Started with a dream and 500 sq ft of raw determination." },
  { year: "2018", title: "1,000 Members", desc: "Our community grew. We expanded to a 5,000 sq ft facility." },
  { year: "2020", title: "Going Digital", desc: "Launched online coaching, reaching members across India." },
  { year: "2022", title: "Competition Kings", desc: "100+ members competed in national bodybuilding championships." },
  { year: "2024", title: "5,000 Transformations", desc: "A milestone of real results, real people, real change." },
  { year: "2026", title: "10 Years Strong", desc: "Celebrating a decade of building champions. The legacy continues." },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef as React.RefObject<HTMLElement>);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-gym">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            From Day 1 to <span className="gradient-text">Year 10</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A journey of sweat, sacrifice, and strength. Here's how we got here.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="font-heading text-2xl md:text-3xl font-bold gradient-text">{m.year}</span>
                <h3 className="font-heading text-lg md:text-xl font-semibold mt-1">{m.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{m.desc}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10" />

              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
