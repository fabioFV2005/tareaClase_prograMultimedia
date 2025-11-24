export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  estado: string;
  precio: number;
}

export interface Contacto {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
