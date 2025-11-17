import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Activación de la skill</DialogTitle>
          <DialogDescription className="text-base">
            Pasos para activar Hermess English AI en Alexa
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Abre la app de Alexa</h3>
                <p className="text-sm text-muted-foreground">En tu dispositivo móvil</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Busca "Hermess English"</h3>
                <p className="text-sm text-muted-foreground">En la sección de skills</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Activa la skill</h3>
                <p className="text-sm text-muted-foreground">Y di: "Alexa, abre Hermess English"</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
