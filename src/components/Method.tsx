const pillars = [
  {
    number: "01",
    title: "Integra emociones y sentidos",
    description:
      "Lo que se asocia con emoción o movimiento se aprende más rápido. Mientras haces una actividad, di en voz alta lo que estás haciendo: lo que sepas en inglés y el resto en español.",
  },
  {
    number: "02",
    title: "Ambiente de baja ansiedad",
    description:
      "Practica en momentos tranquilos mientras cocinas, limpias o disfrutas un café. Aquí nadie te califica: equivocarte es parte de aprender.",
  },
  {
    number: "03",
    title: "Repetición + variabilidad contextual",
    description:
      "El cerebro crea hábitos repitiendo en distintos contextos. Practica la misma actividad todos los días, cambiando algo cada vez.",
  },
];

const Method = () => {
  return (
    <section id="metodo" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tres pilares para hablar inglés de forma natural
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No necesitas saber inglés para empezar. Empieza en <strong>espaglish</strong>: di la frase en español
            y cambia solo una palabra por su versión en inglés. Rose te entiende aunque mezcles, y poco a poco te lleva más lejos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-card rounded-2xl p-6 space-y-4 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-semibold">
                {pillar.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
