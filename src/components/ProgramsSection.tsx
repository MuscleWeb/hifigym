import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceGym from "@/assets/service-gym.jpg";
import serviceCardio from "@/assets/service-cardio.jpg";
import serviceSteam from "@/assets/service-steam.jpg";
import serviceYoga from "@/assets/service-yoga.jpg";
import serviceZumba from "@/assets/service-zumba.jpg";
import serviceDiet from "@/assets/service-diet.jpg";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceFunctional from "@/assets/service-functional.jpg";
import servicePersonal from "@/assets/service-personal.jpg";

const services = [
  { title: "Gym", img: serviceGym },
  { title: "Cardio", img: serviceCardio },
  { title: "Steam", img: serviceSteam },
  { title: "Yoga", img: serviceYoga },
  { title: "Zumba", img: serviceZumba },
  { title: "Diet", img: serviceDiet },
  { title: "General Training", img: serviceGeneral },
  { title: "Functional Training", img: serviceFunctional },
  { title: "Personal Training", img: servicePersonal },
];

const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="programs" className="section-padding bg-muted/30">
      <div className="container-gym" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            World-class facilities and training programs for every fitness goal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-xl overflow-hidden aspect-square transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
