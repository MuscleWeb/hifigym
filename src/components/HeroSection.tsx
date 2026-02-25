import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years" },
  { value: 5000, suffix: "+", label: "Transformations" },
  { value: 200, suffix: "+", label: "Competitions" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-6xl font-bold gradient-text">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-gym px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="font-body text-sm font-medium text-primary uppercase tracking-widest">
            🎉 Celebrating 10 Glorious Years
          </span>
        </div>

        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          10 Years of{" "}
          <span className="gradient-text">Transforming Bodies</span>
          <br />& Building Champions
        </h1>

        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Stronger Every Year. Stronger Together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-lg bg-primary font-heading text-lg uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all animate-pulse-glow"
          >
            Join the Legacy
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-secondary font-heading text-lg uppercase tracking-wider text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
          >
            Start Free Trial
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.9s" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="font-body text-sm md:text-base text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
