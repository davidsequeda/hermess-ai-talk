import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const whatsappLink = "https://wa.link/6kj4ud";
  return (
    <section id="contacto" className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contáctanos por WhatsApp y activa el servicio hoy mismo
        </p>

        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Hablar por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactForm;
