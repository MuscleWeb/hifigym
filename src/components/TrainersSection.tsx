import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";

const trainers = [
  { name: "Coach Vikram", spec: "Strength & Powerlifting", img: trainer1 },
  { name: "Coach Meera", spec: "Weight Loss & HIIT", img: trainer2 },
  { name: "Coach Arjun", spec: "Competition Prep & Bodybuilding", img: trainer3 },
];

const TrainersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trainers" className="section-padding bg-muted/30">
      <div className="container-gym" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Meet Our <span className="gradient-text">Trainers</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Certified experts who live and breathe fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trainers.map((t, i) => (
            <div key={t.name} className={`glass-card overflow-hidden group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold">{t.name}</h3>
                <p className="text-primary font-body text-sm mt-1">{t.spec}</p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
