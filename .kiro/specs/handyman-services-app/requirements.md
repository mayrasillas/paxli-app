# Requirements Document

## Introduction

Aplicación de demostración visual para presentación escolar que muestra el concepto de una app de servicios de mantenimiento del hogar (handyman). No es funcional — usa datos falsos y flujos simulados para demostrar la experiencia del usuario.

## Glossary

- **App**: Aplicación web Next.js 14 con datos mock y flujos simulados
- **Proveedor**: Profesional de servicios (plomero, electricista, mecánico) representado con datos hardcoded
- **Usuario**: Persona que navega la app en la demo; no requiere autenticación real
- **Categoría**: Tipo de servicio (plomería, electricidad, mecánica)

## Requirements

### Requirement 1: Navegación de Categorías

**User Story:** Como usuario, quiero ver las categorías de servicios disponibles, para elegir el tipo de servicio que necesito.

#### Acceptance Criteria

1. WHEN el usuario abre la pantalla principal, THE App SHALL mostrar las categorías de servicios con iconos y nombres en español
2. WHEN el usuario selecciona una categoría, THE App SHALL mostrar la lista de proveedores mock de esa categoría

### Requirement 2: Visualización de Proveedores

**User Story:** Como usuario, quiero ver proveedores con sus datos, para elegir al que mejor me convenga.

#### Acceptance Criteria

1. WHEN el usuario ve la lista de proveedores, THE App SHALL mostrar nombre, foto, calificación, precio y zona de cada proveedor
2. WHEN el usuario selecciona un proveedor, THE App SHALL mostrar el perfil completo con reseñas hardcoded

### Requirement 3: Flujo de Contratación Simulado

**User Story:** Como usuario, quiero ver el proceso de contratación y pago, para entender cómo funcionaría la app.

#### Acceptance Criteria

1. WHEN el usuario presiona "Contratar", THE App SHALL mostrar una pantalla de resumen del servicio
2. WHEN el usuario confirma el pago simulado, THE App SHALL mostrar una confirmación exitosa siempre
3. WHEN el usuario completa la contratación, THE App SHALL mostrar una pantalla de seguimiento con estados estáticos

### Requirement 4: Login Simulado

**User Story:** Como usuario, quiero ver una pantalla de login, para entender que la app tendría cuentas de usuario.

#### Acceptance Criteria

1. WHEN el usuario ingresa cualquier email y contraseña, THE App SHALL permitir el acceso sin validación real
2. WHEN el usuario accede, THE App SHALL redirigir a la pantalla principal de categorías

### Requirement 5: Calificación del Servicio

**User Story:** Como usuario, quiero poder calificar al proveedor después del servicio, para demostrar el ciclo completo.

#### Acceptance Criteria

1. WHEN el usuario completa el flujo de servicio, THE App SHALL mostrar una pantalla para calificar con estrellas y comentario
2. WHEN el usuario envía la calificación, THE App SHALL mostrar un mensaje de agradecimiento
