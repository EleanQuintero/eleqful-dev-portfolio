---
title: "MemoryNinja"
description: "Plataforma que genera tarjetas de estudio usando inteligencia artificial con autenticacion, base de datos y dashboard."
imageURL: "https://res.cloudinary.com/dygwnv56x/image/upload/v1764516780/memoryninja_m2opxv.webp"
technologies: [ "TypeScript","Next.js","Node.js","React","Express.js",
    "MySQL","Tailwind CSS","Gemini AI API"]
demoURL: "https://memoryninja.es"
githubURL: "https://github.com/EleanQuintero/Memory-Ninja"
projectImages: ["https://res.cloudinary.com/dygwnv56x/image/upload/v1764516780/memoryninja_m2opxv.webp", "https://res.cloudinary.com/dygwnv56x/image/upload/v1764516780/memoryninja_m2opxv.webp", "https://res.cloudinary.com/dygwnv56x/image/upload/v1764516780/memoryninja_m2opxv.webp", "https://res.cloudinary.com/dygwnv56x/image/upload/v1764516780/memoryninja_m2opxv.webp"]
---

## Sobre el proyecto

Cree MemoryNinja con el objetivo de poder estudiar comodamente generando tarjetas de estudio con inteligencia artificial, para memorizar conceptos del grado superior que estudie o incluso para ayudarme en mi camino de aprendizaje en Japones.

MemoryNinja es una aplicacion web full stack en la cual se trabajan conceptos de Frontend, Backend y Base de datos. Ademas, tambien de sistemas de pago, autenticacion de terceros en conjunto de patrones arquitectonicos de software y patrones de diseño.

## Frontend: Arquitectura Moderna para Experiencias Fluidas

El frontend de Memory Ninja está construido con **React y Next.js**, una combinación que elegí estratégicamente por su capacidad de escalar sin comprometer el rendimiento. Next.js no es solo un framework más—es una plataforma completa que integra funcionalidades esenciales como React Server Components, App Router y API Routes nativas, eliminando la necesidad de configuraciones complejas y permitiéndome enfocarme en construir características de valor.

### Gestión Inteligente del Estado

Para manejar las peticiones al servidor implementé **TanStack Query** (antes React Query), una herramienta que transforma completamente cómo las aplicaciones web manejan datos asíncronos. ¿La ventaja? Cacheo automático, revalidación inteligente y sincronización de UI sin esfuerzo manual. En términos prácticos, esto significa que la aplicación responde instantáneamente a las acciones del usuario, reduce llamadas innecesarias al servidor y mantiene los datos siempre actualizados—todo mientras el código permanece limpio y mantenible.

<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765285648/tanstack-query-memoryninja_mbkhmj.webp" alt="" class="mb-4" />

### Interfaz y Experiencia Visual

La capa visual combina **Shadcn/ui** y **Framer Motion**:

- **Shadcn/ui** me proporciona componentes accesibles y customizables de alta calidad que se integran perfectamente sin imponer dependencias pesadas—básicamente obtienes el código fuente directamente en tu proyecto para modificarlo como necesites.

- **Framer Motion** añade animaciones fluidas y naturales que hacen que cada interacción se sienta pulida y profesional, transformando una interfaz funcional en una experiencia memorable.

Este stack no solo acelera el desarrollo, sino que garantiza una base sólida, escalable y con las mejores prácticas de la industria.

<a href="https://github.com/EleanQuintero/Memory-Ninja" target="_blank" rel="noopener noreferrer"><strong>Puedes ver el codigo del frontend aqui</strong></a>

---

## 🏗️ Backend: Arquitectura Pensada para Escalar

El backend de **MemoryNinja** está construido con **Node.js y Express**, una combinación que elegí por su equilibrio perfecto entre simplicidad y potencia. Express me permite crear APIs RESTful de forma ágil, establecer rutas claras y conectar con servicios externos como modelos de IA y bases de datos sin complicaciones innecesarias.

### 🎯 ¿Por qué Arquitectura Hexagonal?

Este es mi primer proyecto implementando **arquitectura hexagonal** (también conocida como puertos y adaptadores), y la experiencia ha sido reveladora. Este patrón arquitectónico separa claramente el núcleo de negocio de las dependencias externas, lo que significa:

- **Para desarrolladores**: Cada capa tiene una responsabilidad única y bien definida. Puedo cambiar de base de datos o proveedor de IA sin tocar la lógica de negocio.
- **Para todos**: Es como construir con bloques de LEGO—cada pieza encaja perfectamente pero puede ser reemplazada sin romper el conjunto.

### 🔧 Patrones de Diseño Aplicados

He implementado dos patrones clave que hacen el código más mantenible y profesional:

1. **Patrón Repositorio**: Abstrae toda la lógica de acceso a datos. Esto significa que cambiar de MongoDB a PostgreSQL, por ejemplo, solo requiere crear un nuevo repositorio—el resto del código permanece intacto.

2. **Inyección de Dependencias mediante Contenedores**: Utilizo contenedores para gestionar las dependencias del proyecto. En términos prácticos, esto permite intercambiar servicios (como el modelo de IA o la base de datos) de forma limpia, simplemente modificando la configuración del contenedor sin reescribir código.

**¿El resultado?** Un backend flexible, testeable y preparado para evolucionar. Puedo experimentar con diferentes tecnologías sin miedo a romper todo el sistema.

<a href="https://github.com/EleanQuintero/Memory-Ninja-backend" target="_blank" rel="noopener noreferrer"><strong>Puedes ver el codigo del Backend aqui</strong></a>

---
