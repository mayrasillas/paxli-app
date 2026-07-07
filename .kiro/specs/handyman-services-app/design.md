# Design Document

## Overview

App de demostración visual construida con Next.js 14 + Tailwind CSS. Todos los datos son mock (archivos JSON). No hay backend, base de datos, autenticación real ni pagos reales. El objetivo es mostrar el flujo visual de la app en una presentación escolar.

## Architecture

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Login simulado
│   │   ├── categorias/
│   │   │   └── page.tsx        # Pantalla principal con categorías
│   │   ├── proveedores/
│   │   │   ├── [categoria]/
│   │   │   │   └── page.tsx    # Lista de proveedores por categoría
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Perfil del proveedor
│   │   ├── contratar/
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Resumen y confirmación
│   │   ├── confirmacion/
│   │   │   └── page.tsx        # Pago exitoso
│   │   ├── seguimiento/
│   │   │   └── page.tsx        # Estados del servicio
│   │   └── calificar/
│   │       └── page.tsx        # Calificación con estrellas
│   ├── components/             # Componentes reutilizables
│   │   ├── StarRating.tsx
│   │   ├── ProviderCard.tsx
│   │   └── CategoryCard.tsx
│   └── data/                   # Datos mock
│       ├── categorias.json
│       ├── proveedores.json
│       └── resenas.json
├── public/
│   └── images/                 # Fotos placeholder de proveedores
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Components and Interfaces

### Pages (App Router)

| Ruta | Descripción |
|------|-------------|
| `/` | Login simulado (email + contraseña, siempre acepta) |
| `/categorias` | Grid de categorías con iconos |
| `/proveedores/[categoria]` | Lista filtrada de proveedores |
| `/proveedores/[id]` | Perfil completo + reseñas |
| `/contratar/[id]` | Resumen del servicio + botón pagar |
| `/confirmacion` | Mensaje de pago exitoso |
| `/seguimiento` | Timeline de estados (estático) |
| `/calificar` | Estrellas + comentario |

### Componentes Compartidos

- **CategoryCard**: Tarjeta con icono emoji + nombre de categoría
- **ProviderCard**: Tarjeta con foto, nombre, estrellas, precio
- **StarRating**: Componente interactivo de 1-5 estrellas

## Data Models

Archivos JSON estáticos en `src/data/`:

### categorias.json
```json
[
  { "id": "plomeros", "nombre": "Plomeros", "icono": "🔧", "descripcion": "Reparación de tuberías y drenaje" },
  { "id": "electricistas", "nombre": "Electricistas", "icono": "⚡", "descripcion": "Instalación y reparación eléctrica" },
  { "id": "mecanicos", "nombre": "Mecánicos", "icono": "🔩", "descripcion": "Reparación de electrodomésticos" }
]
```

### proveedores.json
```json
[
  {
    "id": "1",
    "nombre": "Carlos Martínez",
    "categoria": "plomeros",
    "foto": "/images/provider1.jpg",
    "calificacion": 4.8,
    "precio": "$350/hr",
    "zona": "Monterrey Centro",
    "descripcion": "15 años de experiencia en plomería residencial",
    "telefono": "81-1234-5678"
  }
]
```

### resenas.json
```json
[
  {
    "proveedorId": "1",
    "autor": "María García",
    "calificacion": 5,
    "comentario": "Excelente servicio, muy puntual",
    "fecha": "2024-01-15"
  }
]
```

## Error Handling

No hay manejo de errores complejo. Si algo falla, se muestra una pantalla genérica de "Algo salió mal". El login siempre acepta cualquier input. El pago siempre es exitoso.

## Testing Strategy

**No se requieren tests.** Es una demostración visual para una presentación escolar. La validación se hace manualmente navegando las pantallas.
