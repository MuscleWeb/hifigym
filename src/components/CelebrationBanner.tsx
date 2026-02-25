import { useEffect, useMemo, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function useCountdown(targetDate: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return time;
}

const CelebrationBanner = () => {
  const target = useMemo(() => new Date(Date.now() + 10 * 86400000), []);
  const { days, hours, minutes, seconds } = useCountdown(target);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-gym relative z-10 text-center">
        <span className="font-heading text-8xl md:text-9xl font-bold gradient-text opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          10
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
          Celebrating <span className="gradient-text">10 Years</span> of Strength
        </h2>
        <p className="text-foreground/80 font-body text-lg mb-2">
          Limited Anniversary Discount — Up to 10% OFF on all plans!
        </p>
        <p className="text-muted-foreground font-body mb-8">Offer ends soon. Don't miss out.</p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-10">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Min", value: minutes },
            { label: "Sec", value: seconds },
          ].map((t) => (
            <div key={t.label} className="glass-card px-4 py-3 md:px-6 md:py-4 min-w-[70px]">
              <div className="font-heading text-2xl md:text-4xl font-bold text-primary">
                {String(t.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs uppercase tracking-wider text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>

        <a
          href="#pricing"
          className="inline-block px-10 py-4 rounded-lg bg-secondary font-heading text-lg uppercase tracking-wider text-secondary-foreground hover:bg-secondary/90 transition-all glow-red"
        >
          Claim Your Discount
        </a>
      </div>
    </section>
  );
};

export default CelebrationBanner;
