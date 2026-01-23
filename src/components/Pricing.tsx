import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const whatsappLink = "https://wa.link/6kj4ud";

  const basicFeatures = [
    "Conversaciones ilimitadas",
    "Corrección en tiempo real",
    "Acceso 24/7",
    "Sin compromiso de permanencia"
  ];

  const premiumFeatures = [
    "Todo lo del plan Básico",
    "3 sesiones mensuales con coach",
    "Coaching de speaking personalizado",
    "Coaching de mindset",
    "Seguimiento de progreso"
  ];

  return (
    <section id="precios" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Elige tu plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas para mejorar tu inglés
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Básico */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-[var(--shadow-soft)]">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-muted-foreground mb-4">Básico</h3>
              <div className="text-5xl font-bold text-foreground mb-2">
                $27<span className="text-xl text-muted-foreground">/mes</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              variant="outline"
              className="w-full text-lg font-semibold py-6 h-auto rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Elegir Básico
              </a>
            </Button>
          </div>

          {/* Plan Premium */}
          <div className="bg-card border-2 border-primary rounded-3xl p-8 shadow-[var(--shadow-soft)] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Star className="w-4 h-4" />
              Recomendado
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Premium</h3>
              <div className="text-5xl font-bold text-foreground mb-2">
                $70<span className="text-xl text-muted-foreground">/mes</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
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
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Elegir Premium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
