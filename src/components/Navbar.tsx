import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Results", href: "#results" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-gym flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Talwalkar's HiFi"
            className="h-10 md:h-12 rounded transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 font-heading text-sm uppercase tracking-wider transition-all duration-300 rounded-md ${
                activeLink === l.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  activeLink === l.href ? "w-6" : "w-0"
                }`}
              />
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-4 px-6 py-2.5 rounded-md bg-primary font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          >
            <Menu size={24} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          >
            <X size={24} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-md border-t border-border">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-lg uppercase tracking-wider py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeLink === l.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-md bg-primary font-heading text-center uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
                transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
