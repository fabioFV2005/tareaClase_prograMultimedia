import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Innovación Tecnológica
          </div>
          
          <h1 className="hero-title">
            Desarrollamos Software y Robótica de Vanguardia
          </h1>
          
          <p className="hero-description">
            Transformamos ideas en soluciones tecnológicas innovadoras. 
            Desarrollo de software empresarial, sistemas embebidos y robótica inteligente 
            para impulsar tu negocio al futuro.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Iniciar Proyecto →
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver Servicios
            </button>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <p className="stat-label">Proyectos Completados</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <p className="stat-label">Satisfacción del Cliente</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <p className="stat-label">Soporte Técnico</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="floating-card floating-card-1">
              <div className="card-icon">🤖</div>
              <h4 className="card-title">Robótica</h4>
              <p className="card-description">Sistemas autónomos inteligentes</p>
            </div>

            <div className="floating-card floating-card-2">
              <div className="card-icon">💻</div>
              <h4 className="card-title">Software</h4>
              <p className="card-description">Aplicaciones empresariales</p>
            </div>

            <div className="floating-card floating-card-3">
              <div className="card-icon">⚡</div>
              <h4 className="card-title">IoT</h4>
              <p className="card-description">Internet de las cosas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
