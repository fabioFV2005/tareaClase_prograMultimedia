import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Productos />
        <Contacto />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
