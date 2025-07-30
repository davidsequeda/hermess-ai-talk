import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto para brindarte más información"
    });

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            Contacta con nosotros
          </DialogTitle>
          <DialogDescription className="text-center">
            Déjanos tus datos y te enviaremos más información
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Nombre *</Label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email *</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">Teléfono</Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Tu teléfono (opcional)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Mensaje *</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Cuéntanos qué te interesa saber..."
              rows={3}
              required
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Enviar
            </Button>
          </div>
        </form>

        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-muted-foreground text-center mb-3">
            O contáctanos directamente:
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="mailto:info@hermess.ai" className="flex items-center text-accent hover:text-accent-hover">
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
            <a href="tel:+1234567890" className="flex items-center text-accent hover:text-accent-hover">
              <Phone className="w-4 h-4 mr-1" />
              Teléfono
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;