const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

const CONTEXTO_EMPRESA = `
Eres un asistente virtual experto en tecnología, desarrollo de software y robótica.
Nombre de la Empresa: TechSolutions - Desarrollo de Software y Robótica.
Ubicación: Cochabamba, Bolivia.
Teléfono: +591 12345678.
Email: contacto@techsolutions.com
Horario de Atención: Lunes a Viernes de 9:00 a 18:00.

SERVICIOS PRINCIPALES:
1. Desarrollo de Software:
   - Aplicaciones web progresivas (PWA) y aplicaciones móviles nativas/multiplataforma
   - Sistemas empresariales ERP/CRM personalizados
   - APIs RESTful y arquitecturas de microservicios
   - E-commerce y plataformas digitales

2. Robótica Industrial:
   - Brazos robóticos colaborativos para automatización
   - Sistemas de visión artificial e inspección automatizada
   - Control y automatización de procesos industriales
   - Mantenimiento predictivo con IoT

3. Internet de las Cosas (IoT):
   - Sensores y actuadores inteligentes
   - Plataformas de monitoreo en tiempo real
   - Edge computing y análisis de datos
   - Integración con servicios cloud

4. Inteligencia Artificial:
   - Modelos de Machine Learning personalizados
   - Procesamiento de lenguaje natural (NLP)
   - Computer Vision para aplicaciones industriales
   - Análisis predictivo y minería de datos

5. Sistemas Embebidos:
   - Desarrollo de firmware para microcontroladores
   - Programación de FPGAs
   - Protocolos de comunicación industrial (Modbus, CANbus, etc.)
   - Sistemas operativos en tiempo real (RTOS)

6. Cloud & DevOps:
   - Infraestructura en AWS, Azure, Google Cloud
   - Pipelines CI/CD automatizados
   - Containerización con Docker y orquestación con Kubernetes
   - Monitoreo, logging y escalabilidad automática

TECNOLOGÍAS QUE MANEJAMOS:
- Frontend: React, Angular, Vue.js, Next.js
- Backend: Node.js, Python, Java, .NET
- Móvil: React Native, Flutter, Swift, Kotlin
- Robótica: ROS (Robot Operating System), Python, C++
- IA/ML: TensorFlow, PyTorch, scikit-learn
- IoT: Arduino, Raspberry Pi, ESP32, MQTT
- Cloud: AWS, Azure, GCP
- Bases de datos: MySQL, PostgreSQL, MongoDB, Redis

EXPERIENCIA:
- Más de 150 proyectos completados exitosamente
- 98% de satisfacción del cliente
- Equipo de ingenieros especializados
- Soporte técnico 24/7

Tu objetivo es ayudar a los clientes con:
- Información sobre nuestros servicios y productos
- Asesoramiento técnico sobre soluciones tecnológicas
- Orientación para iniciar proyectos de software o robótica
- Responder preguntas sobre tecnologías y metodologías
- Proporcionar cotizaciones preliminares

Mantén un tono profesional pero amigable. Si la pregunta no está relacionada con tecnología, 
desarrollo de software, robótica, automatización o servicios de TI, indica amablemente que te 
especializas en estos temas y ofrece redirigir la conversación a tus áreas de expertise.
`;

// Middleware para analizar noel cuerpo de las peticiones JSON
app.use(bodyParser.json());
// Middleware para habilitar CORS (permite peticiones desde diferentes dominios)
app.use(cors());

// Configuración de la conexión a la base de datos MySQL
const dbConfig = {
  host: "localhost", // Cambia esto si tu base de datos está en otro servidor
  user: "root", // Reemplaza con tu nombre de usuario de MySQL
  password: "root", // Reemplaza con tu contraseña de MySQL
  database: "dbventas", // Reemplaza con el nombre de tu base de datos
  port: "3306",
};

const dbConnection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
dbConnection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL establecida");
});

app.post("/ollama-prompt", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const promptConContexto = `${CONTEXTO_EMPRESA}\nPregunta del cliente: ${prompt}`;

    // Llamada a la API de Ollama (stream: true)
    const ollamaResponse = await axios.post(
      "http://127.0.0.1:11434/api/generate",
      {
        model: "gemma3",
        prompt: promptConContexto,
        stream: true,
      },
      { responseType: "stream" }
    );

    let result = "";
    ollamaResponse.data.on("data", (chunk) => {
      // Cada línea es un JSON
      const lines = chunk.toString().split("\n").filter(Boolean);
      for (const line of lines) {
        try {
          const json = JSON.parse(line);
          if (json.response) result += json.response;
        } catch (e) {
          // Ignorar líneas que no sean JSON válidos
        }
      }
    });

    ollamaResponse.data.on("end", () => {
      res.json({ response: result.trim() });
    });

    ollamaResponse.data.on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Implememtamos un servicio
app.post("/api/registro", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Registro");
  console.log("Datos recibidos en el servidor como JSON:", req.body);

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Nombre, email son campos requeridos." });
  }

  const query =
    "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)";
  dbConnection.query(query, [name, email, message], (error, results) => {
    if (error) {
      console.error("Error al insertar datos en la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al guardar los datos en la base de datos." });
    }

    res.status(201).json({
      message: "Datos guardados correctamente.",
      id: results.insertId,
    });
  });
});

app.post("/api/save", (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  console.log("Registro");
  console.log("Datos recibidos en el servidor como JSON:", req.body);

  if (!nombre || !correo) {
    return res
      .status(400)
      .json({ error: "Nombre, email son campos requeridos." });
  }
  console.log("Datos recibidos:", req.nombre, req.correo, req.mensaje);

  const query =
    "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)";
  dbConnection.query(query, [nombre, correo, mensaje], (error, results) => {
    if (error) {
      console.error("Error al insertar datos en la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al guardar los datos en la base de datos." });
    }

    res.status(201).json({
      message: "Datos guardados correctamente.",
      id: results.insertId,
    });
  });
});
//Crear un servicio para obtener todos los registros de la tabla productos
app.get("/api/productos", (req, res) => {
  const query = "SELECT * FROM productos";
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener datos de la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al obtener los datos de la base de datos." });
    }

    res.status(200).json(results);
  });
});

app.get("/", (req, res) => {
  res.send("¡Hola desde mi backend con Express!");
});

app.get("/servicio", (req, res) => {
  res.send("¡Hola desde mi backend con Express! Servicio");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
