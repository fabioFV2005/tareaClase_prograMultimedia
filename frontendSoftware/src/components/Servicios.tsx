import './Servicios.css';

const Servicios = () => {
  const servicios = [
    {
      icon: '💻',
      titulo: 'Desarrollo de Software',
      descripcion: 'Aplicaciones web y móviles a medida con tecnologías de última generación.',
      features: [
        'Aplicaciones web progresivas (PWA)',
        'Apps móviles nativas y multiplataforma',
        'Sistemas empresariales ERP/CRM',
        'APIs RESTful y microservicios'
      ]
    },
    {
      icon: '🤖',
      titulo: 'Robótica Industrial',
      descripcion: 'Soluciones robóticas para automatización de procesos industriales.',
      features: [
        'Brazos robóticos colaborativos',
        'Sistemas de visión artificial',
        'Control y automatización',
        'Mantenimiento predictivo'
      ]
    },
    {
      icon: '⚡',
      titulo: 'Internet de las Cosas (IoT)',
      descripcion: 'Conectividad inteligente para dispositivos y sistemas embebidos.',
      features: [
        'Sensores y actuadores inteligentes',
        'Plataformas de monitoreo en tiempo real',
        'Edge computing y análisis de datos',
        'Integración con cloud computing'
      ]
    },
    {
      icon: '🧠',
      titulo: 'Inteligencia Artificial',
      descripcion: 'Machine Learning y análisis predictivo para decisiones inteligentes.',
      features: [
        'Modelos de Machine Learning',
        'Procesamiento de lenguaje natural',
        'Computer Vision',
        'Análisis predictivo de datos'
      ]
    },
    {
      icon: '🔧',
      titulo: 'Sistemas Embebidos',
      descripcion: 'Desarrollo de firmware y hardware para dispositivos especializados.',
      features: [
        'Microcontroladores y FPGAs',
        'Protocolos de comunicación industrial',
        'Real-Time Operating Systems',
        'Optimización de recursos'
      ]
    },
    {
      icon: '☁️',
      titulo: 'Cloud & DevOps',
      descripcion: 'Infraestructura en la nube y automatización de despliegues.',
      features: [
        'AWS, Azure, Google Cloud',
        'CI/CD pipelines',
        'Containerización con Docker/Kubernetes',
        'Monitoreo y escalabilidad'
      ]
    }
  ];

  return (
    <section id="servicios" className="servicios section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nuestros Servicios</span>
          <h2 className="section-title">Soluciones Tecnológicas Integrales</h2>
          <p className="section-description">
            Ofrecemos servicios especializados en desarrollo de software, 
            robótica e integración de sistemas para llevar tu empresa al siguiente nivel.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icon">{servicio.icon}</div>
              <h3 className="servicio-title">{servicio.titulo}</h3>
              <p className="servicio-description">{servicio.descripcion}</p>
              <ul className="servicio-features">
                {servicio.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#contacto" className="servicio-link">
                Más información →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
