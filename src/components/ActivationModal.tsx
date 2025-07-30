import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone, VolumeX, Settings } from "lucide-react";

interface ActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActivationModal = ({ isOpen, onClose }: ActivationModalProps) => {
  const instructions = [
    {
      icon: Smartphone,
      title: "Descarga la app Alexa",
      description: "Instala la aplicación oficial de Amazon Alexa en tu dispositivo móvil"
    },
    {
      icon: Settings,
      title: "Busca la skill 'Hermess English'",
      description: "En la sección de Skills, busca y habilita 'Hermess English AI'"
    },
    {
      icon: VolumeX,
      title: "Di: 'Alexa, abre Hermess English'",
      description: "Usa este comando para iniciar tu primera sesión de práctica"
    },
    {
      icon: CheckCircle,
      title: "¡Comienza a practicar!",
      description: "Tu IA personal está lista para ayudarte a mejorar tu inglés"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-2">
            🎉 ¡Bienvenido a Hermess English AI!
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Tu suscripción está activa. Sigue estos pasos para comenzar:
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {instructions.map((instruction, index) => {
            const IconComponent = instruction.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-4 bg-accent-soft/30 rounded-lg">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {index + 1}. {instruction.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {instruction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-accent-soft/20 rounded-lg p-4 mt-6">
          <h4 className="font-semibold text-foreground mb-2">Información adicional:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Tu facturación comenzará desde hoy</li>
            <li>• Recibirás un email de confirmación en breves</li>
            <li>• El soporte técnico está disponible 24/7</li>
            <li>• Puedes cancelar tu suscripción en cualquier momento</li>
          </ul>
        </div>

        <Button 
          onClick={onClose}
          className="w-full mt-6 bg-accent hover:bg-accent-hover text-accent-foreground rounded-full"
          size="lg"
        >
          ¡Entendido, comenzar!
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ActivationModal;