const Footer = () => {
  return (
    <footer className="bg-footer-bg border-t border-footer-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Hermess English AI
            </h3>
            <p className="text-sm text-footer-text leading-relaxed">
              Tu hogar bilingüe con inteligencia artificial integrada en Alexa
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Enlaces</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-footer-text hover:text-footer-accent transition-colors">
                Privacidad
              </a>
              <a href="#" className="block text-sm text-footer-text hover:text-footer-accent transition-colors">
                Términos
              </a>
              <a href="#" className="block text-sm text-footer-text hover:text-footer-accent transition-colors">
                Soporte
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Contacto</h4>
            <div className="space-y-2">
              <p className="text-sm text-footer-text">
                hola@hermess.ai
              </p>
              <p className="text-sm text-footer-text">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-footer-border text-center">
          <p className="text-sm text-footer-text">
            © 2024 Hermess English AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;