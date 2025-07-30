import { Button } from "@/components/ui/button";

interface HeroProps {
  onCTAClick: () => void;
}

const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-soft to-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
          Habla inglés con tu propia{" "}
          <span className="text-accent">Alexa impulsada por IA</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Una skill inteligente que te corrige, responde y practica conversación real
        </p>
        <Button 
          onClick={onCTAClick}
          size="lg" 
          className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-6 text-lg rounded-full shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
        >
          Comenzar
        </Button>
      </div>
    </section>
  );
};

export default Hero;