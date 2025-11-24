import { useState, useRef, useEffect } from 'react';
import { enviarMensajeChatbot } from '../services/api';
import { ChatMessage } from '../types';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual de TechSolutions. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    '¿Qué servicios ofrecen?',
    '¿Desarrollan apps móviles?',
    '¿Hacen robótica industrial?',
    'Quiero un presupuesto'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await enviarMensajeChatbot(message);
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, verifica que el servidor esté activo e intenta nuevamente.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button
          className="chatbot-button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">🤖</div>
              <div className="chatbot-header-text">
                <h3>TechBot</h3>
                <p>Asistente Virtual</p>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <div className="message-avatar">
                  {message.role === 'user' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-avatar">🤖</div>
                <div className="message-content message-typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            {messages.length === 1 && (
              <div className="quick-questions">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-btn"
                    onClick={() => handleSendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div className="input-container">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <button
                className="send-button"
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
