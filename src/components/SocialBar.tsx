import { Instagram, Facebook } from "lucide-react";

const SocialBar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      <a
        href="https://www.instagram.com/hifi_talwalkars"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        aria-label="Instagram"
      >
        <Instagram size={18} />
      </a>
      <a
        href="https://www.facebook.com/Talwalkarshify/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        aria-label="Facebook"
      >
        <Facebook size={18} />
      </a>
    </div>
  );
};

export default SocialBar;
