# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copiar los archivos de dependencias primero
COPY frontend/package*.json ./

# Instalar dependencias con versiones estables para evitar errores con PostCSS
RUN npm install \
  tailwindcss@3.4.1 \
  postcss \
  autoprefixer \
  canvas-confetti \ 
  -D

# Copiar el resto del proyecto
COPY frontend .

EXPOSE 5173

CMD ["npm", "run", "dev"]
