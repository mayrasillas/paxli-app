# Paxli - App de Servicios de Mantenimiento

Aplicación de demostración visual para presentación escolar. Muestra el flujo completo de una app para contratar servicios de mantenimiento del hogar.

## Cómo ejecutar

```bash
cd frontend
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Flujo de navegación

1. **Login** (`/`) — Ingresa cualquier email y contraseña
2. **Categorías** (`/categorias`) — Selecciona un tipo de servicio
3. **Proveedores** (`/proveedores/[categoria]`) — Ve la lista de proveedores
4. **Perfil** (`/proveedor/[id]`) — Ve el perfil completo y reseñas
5. **Contratar** (`/contratar/[id]`) — Resumen y confirmación de pago
6. **Confirmación** (`/confirmacion`) — Pago exitoso
7. **Seguimiento** (`/seguimiento`) — Timeline del servicio en curso
8. **Calificar** (`/calificar`) — Deja una calificación con estrellas

## Tecnologías

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Datos mock en archivos JSON (sin backend)

## Notas

- El login siempre acepta cualquier input
- El pago siempre es exitoso
- Los datos son estáticos (archivos JSON)
- No requiere base de datos ni backend
