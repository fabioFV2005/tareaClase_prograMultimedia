import axios from 'axios';
import { Producto, Contacto } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Obtener todos los productos/servicios
export const obtenerProductos = async (): Promise<Producto[]> => {
  try {
    const response = await apiClient.get<Producto[]>('/productos');
    return response.data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};

// Enviar formulario de contacto
export const enviarContacto = async (contacto: Contacto): Promise<void> => {
  try {
    await apiClient.post('/registro', {
      name: contacto.nombre,
      email: contacto.email,
      message: contacto.mensaje,
    });
  } catch (error) {
    console.error('Error enviando contacto:', error);
    throw error;
  }
};

// Enviar mensaje al chatbot
export const enviarMensajeChatbot = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post('http://localhost:3000/ollama-prompt', {
      prompt,
    });
    return response.data.response;
  } catch (error) {
    console.error('Error en chatbot:', error);
    throw error;
  }
};
