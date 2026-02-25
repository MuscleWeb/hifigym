import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rahul Sharma",
    result: "Lost 25 kg in 6 months",
    quote: "Talwalkar's HiFi didn't just change my body — it changed my life. The trainers pushed me beyond limits I didn't know I had.",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    result: "Competition winner 2025",
    quote: "From zero fitness background to standing on a national stage. This gym made the impossible possible.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    result: "Gained 15 kg lean muscle",
    quote: "The personalized programs and nutrition guidance here are world-class. Best investment I've ever made.",
    rating: 5,
  },
];

const TransformationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="section-padding bg-background mt-8">
      <div className="container-gym" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Real Results. <span className="gradient-text">Real People.</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            5,000+ transformations and counting. Here's what our members say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-body text-foreground/90 italic leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-heading text-lg font-bold">{t.name}</p>
                <p className="font-body text-sm text-primary">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
