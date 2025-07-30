import alexaDevice from "@/assets/alexa-device.jpg";

const AIIntegration = () => {
  return (
    <section className="py-20 px-4 bg-accent-soft/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              IA Integrada
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experimenta conversaciones naturales con inteligencia artificial avanzada. 
              Hermess no solo escucha, sino que comprende, corrige y adapta las lecciones 
              a tu nivel de inglés.
            </p>
            
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border">
              <h3 className="font-semibold mb-4 text-accent">Ejemplo de conversación:</h3>
              <div className="space-y-3">
                <div className="bg-accent-soft/50 rounded-lg p-3">
                  <p className="text-sm font-medium">Tú:</p>
                  <p className="text-muted-foreground">"I want to practice my english"</p>
                </div>
                <div className="bg-accent rounded-lg p-3">
                  <p className="text-sm font-medium text-accent-foreground">Hermess:</p>
                  <p className="text-accent-foreground">"Perfect! Let's start with a casual conversation. How was your day?"</p>
                </div>
                <div className="bg-accent-soft/50 rounded-lg p-3">
                  <p className="text-sm font-medium">Tú:</p>
                  <p className="text-muted-foreground">"It was good, but I feel tired"</p>
                </div>
                <div className="bg-accent rounded-lg p-3">
                  <p className="text-sm font-medium text-accent-foreground">Hermess:</p>
                  <p className="text-accent-foreground">"Great grammar! Try saying 'I feel tired' instead of 'I am tired' when describing a temporary state."</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={alexaDevice} 
              alt="Dispositivo Alexa con Hermess English AI" 
              className="max-w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;