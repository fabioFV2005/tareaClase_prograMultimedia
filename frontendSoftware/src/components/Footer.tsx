import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">TS</div>
              <span>TechSolutions</span>
            </div>
            <p>
              Desarrollo de software y robótica de vanguardia. 
              Transformamos ideas en soluciones tecnológicas innovadoras 
              que impulsan el futuro de tu negocio.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-link" aria-label="GitHub">🐙</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Servicios</h3>
            <ul className="footer-links">
              <li><a href="#servicios">Desarrollo de Software</a></li>
              <li><a href="#servicios">Robótica Industrial</a></li>
              <li><a href="#servicios">Internet de las Cosas</a></li>
              <li><a href="#servicios">Inteligencia Artificial</a></li>
              <li><a href="#servicios">Sistemas Embebidos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Compañía</h3>
            <ul className="footer-links">
              <li><a href="#about">Acerca de nosotros</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Soporte</h3>
            <ul className="footer-links">
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Documentación</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Términos de servicio</a></li>
              <li><a href="#">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TechSolutions. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
