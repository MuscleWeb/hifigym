import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import TransformationSection from "@/components/TransformationSection";
import TrainersSection from "@/components/TrainersSection";
import MembershipSection from "@/components/MembershipSection";
import CelebrationBanner from "@/components/CelebrationBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialBar from "@/components/SocialBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <GallerySection />
      <TransformationSection />
      <TrainersSection />
      <MembershipSection />
      <CelebrationBanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <SocialBar />
    </div>
  );
};

export default Index;
