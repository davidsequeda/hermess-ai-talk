import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIIntegration from "@/components/AIIntegration";
import Method from "@/components/Method";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import ProductDemo from "@/components/ProductDemo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AIIntegration />
      <Method />
      <Benefits />
      <Pricing />
      <ProductDemo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;