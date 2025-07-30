import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPlanProps {
  onSubscribeClick: () => void;
}

const PricingPlan = ({ onSubscribeClick }: PricingPlanProps) => {
  const features = [
    "Acceso completo a la IA de Hermess",
    "Conversaciones ilimitadas",
    "Corrección en tiempo real",
    "Reportes de progreso semanales",
    "Soporte técnico 24/7",
    "Actualizaciones automáticas"
  ];

  return (
    <section className="py-20 px-4 bg-accent-soft/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
          Plan Único
        </h2>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] border border-border max-w-md mx-auto">
          <div className="mb-8">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
              $20
            </div>
            <div className="text-muted-foreground text-lg">
              por mes
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={onSubscribeClick}
            size="lg" 
            className="w-full bg-accent hover:bg-accent-hover text-accent-foreground py-6 text-lg rounded-full shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
          >
            Suscribirme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;