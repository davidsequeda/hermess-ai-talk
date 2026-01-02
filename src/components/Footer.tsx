const Footer = () => {
  return (
    <footer className="bg-footer-bg border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-footer-text mb-2">Hermess</h3>
            <p className="text-sm text-footer-text/70">
              Crearemos el futuro de la educación y comenzaremos con inglés
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-footer-text/70">
            <a href="#" className="hover:text-footer-text transition-colors">Privacidad</a>
            <a href="#" className="hover:text-footer-text transition-colors">Términos</a>
            <a href="#" className="hover:text-footer-text transition-colors">Contacto</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-footer-text/60 text-center md:text-right">
            <p>&copy; 2024 Hermess</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
