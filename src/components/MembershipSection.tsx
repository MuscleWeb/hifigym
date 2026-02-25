import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "1 Month",
    price: "₹1,999",
    period: "/month",
    features: ["Full Gym Access", "Locker Room", "Group Classes", "Fitness Assessment"],
    popular: false,
  },
  {
    name: "3 Months",
    price: "₹3,999",
    period: "/3 months",
    features: ["Full Gym Access", "Locker Room", "Group Classes", "Fitness Assessment", "Diet Consultation"],
    popular: true,
  },
  {
    name: "6 Months",
    price: "₹5,555",
    period: "/6 months",
    features: ["Full Gym Access", "Locker Room", "Group Classes", "Fitness Assessment", "Diet Consultation", "Personal Trainer (1x/week)"],
    popular: false,
  },
];

const MembershipSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-gym" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Membership <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Invest in yourself. Choose the plan that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card p-8 flex flex-col relative ${
                p.popular ? "border-primary glow-blue" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground font-heading text-xs uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl font-bold uppercase">{p.name}</h3>
              <div className="mt-4 mb-6">
                <span className="font-heading text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground font-body text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-lg font-heading uppercase tracking-wider transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* 1 Year Special Offer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10 border-secondary glow-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-6 py-2 rounded-bl-xl font-heading text-sm uppercase tracking-widest">
              Best Value
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase">1 Year Membership</h3>
                <p className="text-muted-foreground font-body mt-2 text-lg">
                  Get <span className="text-secondary font-bold">3 months FREE</span> with our annual plan — that's 15 months for the price of 12!
                </p>
                <ul className="mt-4 space-y-2">
                  {["Full Gym Access", "Locker Room", "Unlimited Group Classes", "Fitness Assessment", "Diet Consultation", "Personal Trainer (2x/week)", "Body Composition Analysis"].map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right flex-shrink-0">
                <div className="font-heading text-5xl md:text-6xl font-bold">₹7,999</div>
                <span className="text-muted-foreground font-body text-sm">/year</span>
                <div className="mt-2 text-secondary font-heading text-sm uppercase tracking-wider">+ 3 Months Free</div>
                <a
                  href="#contact"
                  className="mt-6 inline-block px-8 py-4 rounded-lg font-heading uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all"
                >
                  Claim This Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
