import { CheckCircle, MessageSquare, TrendingUp, Clock } from "lucide-react";

const Benefits = () => {
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

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Beneficios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center p-6 bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;