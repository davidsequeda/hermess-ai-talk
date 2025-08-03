import { Button } from "@/components/ui/button";
import alexaDevice from "@/assets/alexa-echo-device.png";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Tu hogar bilingüe
              </h1>
              <p className="text-xl md:text-2xl lg:text-[28px] text-foreground/80 leading-relaxed font-normal">
                Aprende a hablar inglés desde casa con nuestro agente de voz IA integrado en Alexa.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={onContactClick}
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 uppercase tracking-wide"
              >
                Comenzar
              </Button>
              <p className="text-sm text-foreground/70 font-medium">
                Empieza a hablar inglés hoy — sin profesor fijo.
              </p>
            </div>
          </div>

          {/* Right side - Device and conversation */}
          <div className="flex flex-col items-center space-y-8">
            {/* Alexa Device */}
            <div className="relative">
              <img 
                src={alexaDevice} 
                alt="Alexa Echo Device" 
                className="w-48 h-48 lg:w-64 lg:h-64 object-contain drop-shadow-[var(--shadow-device)]"
              />
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-4 w-full max-w-md">
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-bubble-user rounded-2xl rounded-br-md px-6 py-4 max-w-[280px]">
                  <p className="text-foreground text-sm font-medium">
                    "Alexa, enséñame una conversación en inglés."
                  </p>
                </div>
              </div>

              {/* AI bubble */}
              <div className="flex justify-start">
                <div className="bg-bubble-ai border border-border/30 rounded-2xl rounded-bl-md px-6 py-4 max-w-[280px]">
                  <p className="text-foreground text-sm font-medium">
                    "Claro que sí, hoy podemos aprender un poco de las frases más usadas en una experiencia de viajes a un país angloparlante, ¿comenzamos?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;