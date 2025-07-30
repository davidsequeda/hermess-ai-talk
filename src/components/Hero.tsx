import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, Clock, ShoppingCart, UserCheck } from "lucide-react";
import heroMinimal from "@/assets/hero-minimal.jpg";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Corrección instantánea",
      description: "Feedback inmediato sobre pronunciación y gramática"
    },
    {
      icon: MessageSquare,
      title: "Conversaciones ilimitadas",
      description: "Practica tanto como quieras, 24/7"
    },
    {
      icon: Clock,
      title: "IA siempre disponible",
      description: "Tu asistente personal adaptándose a tu horario"
    }
  ];

  const steps = [
    {
      icon: ShoppingCart,
      title: "Comprar Alexa",
      description: "Con skill preinstalada"
    },
    {
      icon: UserCheck,
      title: "Activar cuenta",
      description: "Registro simple y rápido"
    },
    {
      icon: MessageSquare,
      title: "Practicar",
      description: "Conversaciones reales en inglés"
    }
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${heroMinimal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Habla inglés con tu propia{" "}
            <span className="text-accent">Alexa impulsada por IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Una skill inteligente que te corrige, responde y practica conversación real
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl shadow-[var(--shadow-card)] border border-border">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How it Works - Compact */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Cómo Funciona
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm p-4 rounded-xl shadow-[var(--shadow-card)] border border-border">
                  <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-4 h-0.5 bg-accent-soft ml-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing and CTA */}
        <div className="text-center bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border max-w-md mx-auto">
          <div className="mb-6">
            <div className="text-4xl font-bold text-accent mb-2">
              $20
            </div>
            <div className="text-muted-foreground">
              por mes
            </div>
          </div>
          
          <ul className="space-y-2 mb-6 text-sm text-left">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent mr-2" />
              <span>Conversaciones ilimitadas con IA</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent mr-2" />
              <span>Corrección en tiempo real</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-accent mr-2" />
              <span>Disponible 24/7</span>
            </li>
          </ul>
          
          <Button 
            onClick={onContactClick}
            size="lg" 
            className="w-full bg-accent hover:bg-accent-hover text-accent-foreground py-6 text-lg rounded-full shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
          >
            Me interesa contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;