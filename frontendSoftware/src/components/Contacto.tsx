import { useState } from 'react';
import { enviarContacto } from '../services/api';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await enviarContacto(formData);
      setMessage({ type: 'success', text: '¡Mensaje enviado correctamente! Nos contactaremos contigo pronto.' });
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Error al enviar el mensaje. Por favor, verifica que el servidor esté activo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contacto section">
      <div className="container contacto-container">
        <div className="contacto-info">
          <h2>Contáctanos</h2>
          <p>
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a 
            transformar tus ideas en realidad. Contáctanos hoy mismo.
          </p>

          <div className="contacto-details">
            <div className="contacto-item">
              <div className="contacto-icon">📍</div>
              <div className="contacto-item-text">
                <h4>Ubicación</h4>
                <p>Cochabamba, Bolivia</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📧</div>
              <div className="contacto-item-text">
                <h4>Email</h4>
                <p>contacto@techsolutions.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📱</div>
              <div className="contacto-item-text">
                <h4>Teléfono</h4>
                <p>+591 12345678</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">🕐</div>
              <div className="contacto-item-text">
                <h4>Horario</h4>
                <p>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto-form">
          <h3>Envíanos un mensaje</h3>

          {message && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
