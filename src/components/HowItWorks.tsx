import { Download, Zap, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Instala la skill de Rosa en Alexa",
      description: "Descarga la skill en menos de un minuto"
    },
    {
      icon: Zap,
      title: "Activa a Rosa",
      description: "Configura y personaliza la experiencia con Rosa"
    },
    {
      icon: MessageCircle,
      title: "Habla con Rosa",
      description: "Conversaciones en inglés todos los días"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
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
