import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/api';
import { Producto } from '../types';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        const data = await obtenerProductos();
        setProductos(data.filter(p => p.estado === '1')); // Solo productos activos
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar los productos. Verifica que el servidor esté activo.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  const formatPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-BO', {
      style: 'currency',
      currency: 'BOB'
    }).format(precio);
  };

  return (
    <section id="productos" className="productos section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nuestros Productos</span>
          <h2 className="section-title">Soluciones Tecnológicas Disponibles</h2>
          <p className="section-description">
            Descubre nuestra gama de productos de software y hardware especializados 
            para transformar tu negocio.
          </p>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p className="error-message">⚠️ {error}</p>
          </div>
        )}

        {!loading && !error && productos.length === 0 && (
          <div className="empty-container">
            <p className="empty-message">No hay productos disponibles en este momento.</p>
          </div>
        )}

        {!loading && !error && productos.length > 0 && (
          <div className="productos-grid">
            {productos.map((producto) => (
              <div key={producto.id_producto} className="producto-card">
                <div className="producto-image">
                  {producto.imagen ? (
                    <img src={producto.imagen} alt={producto.nombre} />
                  ) : (
                    <span>📦</span>
                  )}
                </div>
                <div className="producto-content">
                  <h3 className="producto-nombre">{producto.nombre}</h3>
                  <p className="producto-descripcion">{producto.descripcion}</p>
                  <div className="producto-footer">
                    <div className="producto-precio">
                      {formatPrecio(producto.precio)}
                      <span className="producto-precio-label">BOB</span>
                    </div>
                    <button className="producto-btn">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Productos;
