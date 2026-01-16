import { CheckCircle, Infinity, TrendingUp, Clock, ShieldOff } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mejora real con práctica diaria",
      description: "Resultados visibles en semanas, no meses"
    },    
    {
      icon: CheckCircle,
      title: "Corrección inmediata",
      description: "La IA corrige pronunciación y gramática al instante"
    },
    {
      icon: Infinity,
      title: "Conversaciones ilimitadas 24/7",
      description: "Practica todo lo que quieras y cuando quieras, sin límites"
    },
    {
      icon: ShieldOff,
      title: "Sin juicios",
      description: "Sentirse evaluado dificulta el aprendizaje. Solo tienes que hablar"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Beneficios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-6 space-y-4 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
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
