import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/links";

const features = [
  "Conversaciones ilimitadas",
  "Corrección en tiempo real",
  "Acceso 24/7",
  "Sin compromiso de permanencia",
];

const Pricing = () => {
  return (
    <section id="precios" className="py-20 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Precio
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas para mejorar tu inglés
          </p>
        </div>

        <div className="bg-card border-2 border-primary rounded-3xl p-8 shadow-[var(--shadow-soft)]">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-foreground mb-2">
              $30<span className="text-xl text-muted-foreground"> USD/mes</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold py-6 h-auto rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Empezar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
