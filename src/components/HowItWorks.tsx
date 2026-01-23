import { Download, Zap, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Instala la app de Alexa en tu Celular",
      description: "Sincroniza tu Echo Dot con la APP "
    },
    {
      icon: Zap,
      title: "Activar a Rosa",
      description: "Configura la app con nuestras indicaciones, en 1 minuto"
    },
    {
      icon: MessageCircle,
      title: "Habla con Rosa",
      description: "Conversaciones en inglés todos los días con nuestra metodología de inmersión"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres pasos simples para empezar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
