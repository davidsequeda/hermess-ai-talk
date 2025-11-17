import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "1234567890"; // Reemplazar con número real

  const features = [
    "Conversaciones ilimitadas",
    "Corrección en tiempo real",
    "Acceso 24/7",
    "Sin compromiso de permanencia"
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Plan único
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas para que tu hijo mejore su inglés
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              $20<span className="text-2xl text-muted-foreground">/mes</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button 
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold py-6 h-auto rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
          >
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
