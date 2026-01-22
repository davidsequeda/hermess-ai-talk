import alexaDevice from "@/assets/alexa.png";

const AIIntegration = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={alexaDevice} 
                alt="Alexa con IA integrada" 
                className="w-80 h-80 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-[var(--shadow-device)]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Rosa vive en tu Alexa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rosa es un agente de IA que conversa como un tutor real: responde, corrige pronunciación.
              </p>
            </div>

            {/* Conversation Example */}
            <div className="space-y-4">
              <div className="bg-bubble-user rounded-2xl rounded-br-md px-6 py-4 inline-block max-w-md">
                <p className="text-foreground text-sm font-medium">
                  "Rosa, estoy preparando la cena. Dame frases que pueda usar en la cocina."
                </p>
              </div>

              <div className="bg-bubble-ai border border-border/30 rounded-2xl rounded-bl-md px-6 py-4 inline-block max-w-md ml-8">
                <p className="text-foreground text-sm font-medium">
                  "¡Claro! Puedes decir: 'I'm shopping the vegetables' o 'The water is boiling'. ¿Qué ingredientes vas a utilizar? What ingredients are you going to use"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;
