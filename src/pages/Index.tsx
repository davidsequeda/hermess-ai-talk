import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIIntegration from "@/components/AIIntegration";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import YouTubeShorts from "@/components/YouTubeShorts";
import ContactForm from "@/components/ContactForm";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AIIntegration />
      <Benefits />
      <Pricing />
      <YouTubeShorts />
      <ContactForm />
      <Footer />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default Index;