import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa nombre y email",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "¡Formulario enviado!",
      description: "Nos pondremos en contacto pronto"
    });

    setFormData({ name: "", email: "", address: "", payment: "" });
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empieza hoy
          </h2>
          <p className="text-lg text-muted-foreground">
            Completa el formulario y activa el servicio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-3xl p-8 space-y-6 shadow-[var(--shadow-soft)]">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Tu dirección"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment">Método de pago preferido</Label>
            <Input
              id="payment"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              placeholder="Tarjeta, PayPal, etc."
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold py-6 h-auto rounded-xl"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
