
<div align="center">

# selectorEs

**selectorEs** es una aplicación web interactiva diseñada para enseñar y practicar selectores CSS de manera lúdica y efectiva. A través de desafíos progresivos, los estudiantes pueden aprender a identificar y aplicar diversos tipos de selectores en contextos reales, mejorando así su comprensión y habilidades en CSS.

---

![Estado](https://img.shields.io/badge/Estado-%20Estable-FCF3C4)
![Docs](https://img.shields.io/badge/Documentación-En%20Curso-FCDBBE)
![Licencia](https://img.shields.io/badge/Licencia-MIT-FBC3B8)
![Versión](https://img.shields.io/badge/Versión-v1\.0\.0-FBABB2)
![Asistencia](https://img.shields.io/badge/Asistencia-Activa-FA92AC)
![Construido con Vue](https://img.shields.io/badge/Construido%20con-Vue\.js-FA7AA6)
![Desarrollado](https://img.shields.io/badge/Desarrollado-@ikikidev-F962A0)

---

</div>

## 🎯 Objetivo

El objetivo principal de este proyecto es proporcionar una herramienta educativa que facilite el aprendizaje de los selectores CSS, permitiendo a los alumnos:

* Comprender la sintaxis y funcionalidad de los selectores CSS.
* Aplicar selectores en situaciones prácticas.
* Recibir retroalimentación inmediata sobre sus respuestas.
* Progresar a través de niveles de dificultad creciente.

## 🧩 Características

* **Interfaz intuitiva**: Diseñada para ser accesible y fácil de usar por estudiantes de todos los niveles.
* **Desafíos interactivos**: Ejercicios que requieren la aplicación de selectores CSS para resolver problemas específicos.
* **Retroalimentación en tiempo real**: Indicaciones inmediatas sobre la corrección de las respuestas.
* **Progresión de niveles**: Desde selectores básicos hasta combinadores y pseudoclases avanzadas.

## 🚀 Tecnologías utilizadas

* [Vue.js](https://vuejs.org/) – Framework progresivo para la construcción de interfaces de usuario.
* [Vite](https://vitejs.dev/) – Herramienta de desarrollo frontend rápida y moderna.
* [Tailwind CSS](https://tailwindcss.com/) – Framework de utilidades CSS para un diseño rápido y personalizado.
* [Docker](https://www.docker.com/) – Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.

## 📦 Instalación y ejecución

### Requisitos previos

* [Node.js](https://nodejs.org/) (versión 14 o superior)
* [pnpm](https://pnpm.io/) (opcional, pero recomendado)
* [Docker](https://www.docker.com/) (para ejecución en contenedores)

### Pasos para la instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/ikikidev/selectorEs.git
   cd selectorEs
   ```

2. **Instalar dependencias**

   Usando `pnpm`:

   ```bash
   pnpm install
   ```

   O usando `npm`:

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**

   Usando `pnpm`:

   ```bash
   pnpm dev
   ```

   O usando `npm`:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173/`.

### Ejecución con Docker

1. **Construir y ejecutar el contenedor**

   ```bash
   docker-compose up --build
   ```

   La aplicación estará disponible en `http://localhost:5173/`.

## 🛠️ Estructura del proyecto

```
selectorEs/
├── frontend/             # Código fuente de la aplicación frontend
│   ├── components/       # Componentes reutilizables de Vue.js
│   ├── assets/           # Recursos estáticos (imágenes, estilos, etc.)
│   ├── views/            # Vistas principales de la aplicación
│   ├── App.vue           # Componente raíz de Vue.js
│   └── main.js           # Punto de entrada de la aplicación
├── .gitignore            # Archivos y carpetas ignorados por Git
├── docker-compose.yml    # Configuración de Docker Compose
├── LICENSE               # Licencia del proyecto
└── README.md             # Documentación del proyecto
```

## ☕ ¿Te gustaría apoyarme?
Si selectorEs te ha sido útil como herramienta educativa y quieres apoyar su mantenimiento y evolución, puedes invitarme a un cafecito en:

👉 https://ko-fi.com/ikikidev

Tu apoyo me permite seguir creando recursos interactivos, accesibles y con 💖 para que aprender tecnología sea una experiencia más divertida y significativa para todos.

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
