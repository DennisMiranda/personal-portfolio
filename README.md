# 📌 Portafolio Web Personal

## 📖 Descripción General

Este proyecto consiste en el desarrollo de un portafolio personal en formato **One Page**, donde se presenta información profesional, proyectos destacados y métodos de contacto. Está pensado como carta de presentación digital, adaptable a dispositivos móviles y con diseño minimalista.

## 🎯 Objetivos

- Aplicar conocimientos de **frontend** y **backend básico**.
- Implementar un **diseño responsive** con buenas prácticas de **UI/UX**.
- Integrar **formularios funcionales**, animaciones y conexión a base de datos y APIs externas.

## 🛠️ Tecnologías Utilizadas

- **Frontend**:

  - HTML5
  - CSS3 con **Tailwind CSS**
  - **JavaScript**
  - **GSAP** para animaciones

- **Backend**:

  - **Node.js** + **Express.js**
  - **PostgreSQL** para almacenamiento de mensajes

- **APIs**:
  - **EmailJS** para envío de correos desde el formulario de contacto

## 📑 Estructura del Sitio

- **One Page Scroll** con navegación vertical y horizontal.
- **Navbar** fija con enlaces internos
- **Secciones**:
  - Hero (inicio)
  - Sobre mí
  - Proyectos
  - Redes sociales
  - Formulario de contacto

## ✨ Funcionalidades Destacadas

- Animaciones suaves con **GSAP** al hacer scroll y en elementos interactivos.
- Formulario de contacto que permite:
  - Guardar mensajes en base de datos PostgreSQL vía backend.
  - Alternativamente, enviar correos utilizando **EmailJS**.
- Diseño limpio, minimalista y adaptable a dispositivos móviles.

## 📸 Capturas de Pantalla

|              Inicio              | Proyectos                               | Contacto                              |
| :------------------------------: | :-------------------------------------- | :------------------------------------ |
| ![Inicio](/docs/assets/hero.png) | ![Proyectos](/docs/assets/projects.png) | ![Contacto](/docs/assets/contact.png) |

## 📦 Instalación y Uso

1. Clona este repositorio:

```bash
git clone https://github.com/DennisMiranda/personal-portfolio
cd nombre-del-repo
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Configura las variables de entorno en un archivo .env:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/tu_basedatos
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
EMAILJS_PUBLIC_KEY=tu_public_key
```

4. Ejecuta el proyecto:

```bash
pnpm run dev
```

🌐 Demo en Línea
