import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Habla inglés con tu propia{" "}
          <span className="text-accent">Alexa impulsada por IA</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Una skill inteligente que te corrige, responde y practica conversación real
        </p>
        <Button 
          onClick={onContactClick}
          size="lg" 
          className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-6 text-lg rounded-full shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
        >
          Me interesa contactar
        </Button>
      </div>
    </section>
  );
};

export default Hero;