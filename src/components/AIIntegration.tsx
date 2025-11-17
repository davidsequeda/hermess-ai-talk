import alexaDevice from "@/assets/alexa-echo-device.png";

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
                className="w-72 h-72 lg:w-96 lg:h-96 object-contain drop-shadow-[var(--shadow-device)]"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                IA integrada directamente en Alexa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra IA conversa como un tutor real: responde, corrige pronunciación y adapta la dificultad según el nivel de tu hijo.
              </p>
            </div>

            {/* Conversation Example */}
            <div className="space-y-4">
              <div className="bg-bubble-user rounded-2xl rounded-br-md px-6 py-4 inline-block max-w-md">
                <p className="text-foreground text-sm font-medium">
                  "How do I order food at a restaurant?"
                </p>
              </div>

              <div className="bg-bubble-ai border border-border/30 rounded-2xl rounded-bl-md px-6 py-4 inline-block max-w-md ml-8">
                <p className="text-foreground text-sm font-medium">
                  "Great question! You can say: 'Can I see the menu, please?' or 'I'd like to order...'. Let's practice together."
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
