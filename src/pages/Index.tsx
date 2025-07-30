import { useState } from "react";
import Hero from "@/components/Hero";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <div className="min-h-screen">
      <Hero onContactClick={handleContactClick} />
      <Footer />
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </div>
  );
};

export default Index;