import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-gym section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Talwalkar's HiFi" className="h-12 rounded mb-4" />
            <p className="text-muted-foreground font-body text-sm max-w-sm leading-relaxed">
              Healthy India, Fit India. 10 years of transforming lives, building champions, and creating a fitness community like no other.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Programs", "Results", "Trainers", "Pricing", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold uppercase mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground font-body text-xs">
            © 2026 Talwalkar's HiFi. All rights reserved. Healthy India, Fit India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
