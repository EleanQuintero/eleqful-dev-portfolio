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

<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765468750/memoryninjaflashcards_whrkpb.webp" alt="" class="mb-4 rounded-2xl" />

### Gestión Inteligente del Estado

Para manejar las peticiones al servidor implementé **TanStack Query** (antes React Query), una herramienta que transforma completamente cómo las aplicaciones web manejan datos asíncronos. ¿La ventaja? Cacheo automático, revalidación inteligente y sincronización de UI sin esfuerzo manual. En términos prácticos, esto significa que la aplicación responde instantáneamente a las acciones del usuario, reduce llamadas innecesarias al servidor y mantiene los datos siempre actualizados—todo mientras el código permanece limpio y mantenible.

<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765466191/tanstack-query-memoryninja_mbkhmj.webp" alt="" class="mb-4 rounded-2xl" />

### Interfaz y Experiencia Visual

La capa visual combina **Shadcn/ui** y **Framer Motion**:

- **Shadcn/ui** me proporciona componentes accesibles y customizables de alta calidad que se integran perfectamente sin imponer dependencias pesadas—básicamente obtienes el código fuente directamente en tu proyecto para modificarlo como necesites.

- **Framer Motion** añade animaciones fluidas y naturales que hacen que cada interacción se sienta pulida y profesional, transformando una interfaz funcional en una experiencia memorable.

<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765468328/memoryNinjaViews_yt9nsc.webp" alt="" class="mb-4 rounded-2xl" />
<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765468577/memoryninjagenerator_pik28s.webp" alt="" class="mb-4 rounded-2xl" />

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

<img src="https://res.cloudinary.com/dygwnv56x/image/upload/v1765472094/Backend-Arch_qq37ea.webp" alt="" class="mb-4 rounded-2xl" />

### 🤖 Módulo de Inteligencia Artificial

Uno de los aspectos más interesantes del proyecto es cómo he estructurado la integración con IA. En lugar de acoplar el código directamente a Google Gemini, implementé una **capa de abstracción** que demuestra comprensión de principios SOLID:

#### Abstracción mediante Interfaces

Creé una interfaz `IAInterface` que define el contrato que cualquier modelo de IA debe cumplir:
```typescript
interface IAInterface {
    generateAnswer(tema: string, pregunta: string[]): Promise
    generateMultipleAnswer(tema: string, preguntas: string[]): Promise
}
```

**¿Por qué es importante esto?** Significa que puedo cambiar de Google Gemini a OpenAI, Claude, o cualquier otro proveedor simplemente creando una nueva clase que implemente esta interfaz. El resto del sistema no se entera del cambio.

#### Implementación con Google Gemini

Actualmente uso **Google Gemini** con dos modelos configurables:
- **Kōga (甲賀)**: Modelo estándar para generación de respuestas
- **Kurayami (暗闇)**: Modelo alternativo como fallback

La implementación incluye:

✅ **Streaming progresivo**: Agregación de chunks para mejorar la experiencia del usuario  
✅ **Prompts dinámicos**: Sistema de templates que inyecta variables como `{{tema}}` y `{{pregunta}}`  
✅ **Manejo robusto de errores**: Retry logic y logging detallado para debugging  
✅ **Parsing inteligente**: Expresiones regulares para extraer respuestas numeradas del output de la IA

#### Sistema de Prompts Configurables

Los prompts no están hardcodeados—viven en variables de entorno:
```
AI_ANSWERS_PROMPT="Genera una respuesta concisa sobre {{tema}}: {{pregunta}}"
AI_MANY_ANSWERS_PROMPT="Responde las siguientes preguntas sobre {{tema}}..."
```

Esto me permite iterar sobre la calidad de las respuestas sin tocar código, solo ajustando la configuración.

<a href="https://github.com/EleanQuintero/Memory-Ninja-backend" target="_blank" rel="noopener noreferrer"><strong>Puedes ver el codigo del Backend aqui</strong></a>

---
