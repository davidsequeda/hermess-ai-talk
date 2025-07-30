import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIIntegration from "@/components/AIIntegration";
import Benefits from "@/components/Benefits";
import PricingPlan from "@/components/PricingPlan";
import RegistrationForm from "@/components/RegistrationForm";
import ActivationModal from "@/components/ActivationModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToRegistration = () => {
    const element = document.getElementById('registro');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={scrollToRegistration} />
      <HowItWorks />
      <AIIntegration />
      <Benefits />
      <PricingPlan onSubscribeClick={scrollToRegistration} />
      <RegistrationForm onSubmit={handleFormSubmit} />
      <Footer />
      <ActivationModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default Index;