import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import galleryFacility from "@/assets/gallery-facility.jpg";
import galleryEquipment from "@/assets/gallery-equipment.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryCardio from "@/assets/gallery-cardio.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";
import galleryYoga from "@/assets/gallery-yoga.jpg";

const images = [
  { src: galleryFacility, label: "Premium Facility", span: "col-span-2 row-span-2" },
  { src: galleryEquipment, label: "World-Class Equipment", span: "" },
  { src: galleryCardio, label: "Cardio Zone", span: "" },
  { src: galleryCommunity, label: "Community Events", span: "col-span-2" },
  { src: galleryEvent, label: "10 Year Celebration", span: "col-span-2" },
  { src: galleryYoga, label: "Yoga Studio", span: "" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background mt-8">
      <div className="container-gym" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A glimpse into 10 years of building champions and transforming lives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={img.label}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${img.span} transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-heading text-sm md:text-base font-bold uppercase text-foreground">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].label}
            className="max-w-full max-h-[85vh] object-contain rounded-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 font-heading text-lg uppercase text-foreground/80">
            {images[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
