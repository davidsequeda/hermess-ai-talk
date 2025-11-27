import { Button } from "@/components/ui/button";
import alexaDevice from "@/assets/alexa.png";

const Hero = () => {
  const whatsappNumber = "1234567890"; // Reemplazar con número real

  return (
    <section className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation Bar */}
      <div className="w-full bg-background/80 backdrop-blur-sm border-b border-border/30 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-semibold text-foreground">
            Hermess
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Tu hijo puede aprender inglés hablando con Rosa
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Rosa es un agente de IA que vive en Alexa. Conversa, corrige y motiva… sin pantallas, sin distracciones.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-8 py-6 h-auto rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
                >
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Device */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <img 
                  src={alexaDevice} 
                  alt="Dispositivo Amazon Alexa" 
                  className="w-80 h-80 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-[var(--shadow-device)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
