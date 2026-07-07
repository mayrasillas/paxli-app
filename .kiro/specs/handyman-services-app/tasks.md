# Implementation Plan: Handyman Services App (Demo)

## Overview

App de demostración visual con Next.js 14 + Tailwind CSS. Datos mock en JSON, sin backend, sin tests. Enfoque en que las pantallas se vean bien para la presentación.

## Tasks

- [ ] 1. Configurar proyecto Next.js con Tailwind CSS
  - Limpiar archivos innecesarios del proyecto actual
  - Configurar Tailwind con tema en español y colores de la app
  - Crear layout principal con navegación básica
  - Crear archivos de datos mock (categorias.json, proveedores.json, resenas.json)
  - _Requirements: 1.1, 2.1_

- [ ] 2. Crear pantalla de Login y pantalla principal de Categorías
  - Pantalla `/` con formulario de login que acepta cualquier input y redirige a `/categorias`
  - Pantalla `/categorias` con grid de CategoryCard (icono + nombre + descripción)
  - Componente CategoryCard con Tailwind
  - _Requirements: 4.1, 4.2, 1.1, 1.2_

- [ ] 3. Crear pantallas de Proveedores (lista y perfil)
  - Pantalla `/proveedores/[categoria]` con lista de ProviderCard filtrada por categoría
  - Pantalla `/proveedores/[id]` con perfil completo, foto, datos y reseñas hardcoded
  - Componentes ProviderCard y StarRating
  - _Requirements: 2.1, 2.2_

- [ ] 4. Crear flujo de Contratación y Pago simulado
  - Pantalla `/contratar/[id]` con resumen del servicio y botón "Pagar"
  - Pantalla `/confirmacion` con mensaje de pago exitoso y animación simple
  - Pantalla `/seguimiento` con timeline de estados estáticos (Confirmado → En camino → En servicio → Completado)
  - _Requirements: 3.1, 3.2, 3.3_

- [ ] 5. Crear pantalla de Calificación
  - Pantalla `/calificar` con componente de estrellas interactivo y campo de comentario
  - Botón "Enviar" que muestra mensaje de agradecimiento
  - _Requirements: 5.1, 5.2_

- [ ] 6. Pulir UI y verificar navegación completa
  - Revisar que todas las pantallas se conecten en el flujo correcto
  - Agregar imágenes placeholder para proveedores
  - Asegurar que el diseño se vea bien en móvil (responsive básico)
  - Verificar que los textos estén en español
  - _Requirements: 1.1, 2.1, 3.1, 4.1, 5.1_

## Notes

- Sin tests — validación manual navegando las pantallas
- Sin backend — todo es datos mock en JSON
- Sin autenticación real — el login siempre acepta
- Sin pagos reales — siempre muestra éxito
- Desplegable en Vercel con `npx vercel` si se desea
