-- Script para agregar productos de ejemplo para TechSolutions

USE dbventas;

-- Limpiar productos existentes (opcional)
-- DELETE FROM productos;

-- Insertar productos de software y robótica
INSERT INTO productos (nombre, descripcion, imagen, estado, precio) VALUES
('Sistema ERP Empresarial', 'Software de gestión empresarial completo con módulos de inventario, ventas, compras y contabilidad. Incluye reportes en tiempo real.', '', '1', 15000.00),

('Robot Colaborativo Industrial', 'Brazo robótico de 6 ejes para automatización industrial. Carga útil de 10kg, ideal para ensamblaje y manipulación.', '', '1', 45000.00),

('Plataforma IoT Completa', 'Sistema de monitoreo con sensores inteligentes, dashboard en tiempo real y alertas automáticas. Incluye 20 sensores.', '', '1', 8500.00),

('App Móvil Multiplataforma', 'Desarrollo de aplicación móvil para iOS y Android con React Native. Incluye backend API y panel admin.', '', '1', 12000.00),

('Sistema de Visión Artificial', 'Solución de inspección automatizada con IA para control de calidad. Detección de defectos en tiempo real.', '', '1', 25000.00),

('Chatbot con IA Avanzada', 'Asistente virtual inteligente con procesamiento de lenguaje natural. Integración con múltiples canales.', '', '1', 6500.00),

('Sistema de Automatización de Edificios', 'Control inteligente de iluminación, clima y seguridad. Compatible con protocolos estándar.', '', '1', 18000.00),

('Plataforma E-Learning', 'Sistema completo de gestión de aprendizaje con videoconferencias, evaluaciones y certificados.', '', '1', 9500.00),

('Dron Autónomo Industrial', 'UAV para inspección, mapeo y vigilancia. Autonomía de 45 minutos, cámara 4K y sensores térmicos.', '', '1', 32000.00),

('Sistema de Control de Acceso', 'Solución biométrica con reconocimiento facial y tarjetas RFID. Software de gestión incluido.', '', '1', 7200.00);

-- Verificar inserción
SELECT * FROM productos WHERE estado = '1';
