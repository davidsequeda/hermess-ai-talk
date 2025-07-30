import { ShoppingCart, UserCheck, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Comprar Alexa con skill preinstalada",
      description: "Obtén tu dispositivo Alexa con la skill de Hermess ya configurada"
    },
    {
      icon: UserCheck,
      title: "Registrar y activar la IA de Hermess",
      description: "Activa tu cuenta y personaliza tu experiencia de aprendizaje"
    },
    {
      icon: MessageCircle,
      title: "Conversar y aprender",
      description: "Comienza a practicar inglés con conversaciones naturales e inteligentes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Cómo Funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent-soft rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-accent-soft transform translate-x-8" 
                       style={{ width: 'calc(100% - 4rem)' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;