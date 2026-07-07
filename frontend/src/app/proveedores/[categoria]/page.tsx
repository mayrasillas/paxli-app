import Link from "next/link";
import ProviderCard from "../../../components/ProviderCard";
import proveedores from "../../../data/proveedores.json";
import categorias from "../../../data/categorias.json";

interface Props {
  params: { categoria: string };
}

export default function ProveedoresPorCategoriaPage({ params }: Props) {
  const { categoria } = params;

  const proveedoresFiltrados = proveedores.filter(
    (p) => p.categoria === categoria
  );

  const categoriaInfo = categorias.find((c) => c.id === categoria);
  const nombreCategoria = categoriaInfo
    ? categoriaInfo.nombre
    : categoria.charAt(0).toUpperCase() + categoria.slice(1);

  return (
    <div>
      <Link
        href="/categorias"
        className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800 font-medium mb-4"
      >
        ← Volver a categorías
      </Link>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {categoriaInfo?.icono} {nombreCategoria}
      </h1>

      {proveedoresFiltrados.length === 0 ? (
        <p className="text-gray-500">
          No hay proveedores disponibles en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {proveedoresFiltrados.map((proveedor) => (
            <ProviderCard
              key={proveedor.id}
              id={proveedor.id}
              nombre={proveedor.nombre}
              calificacion={proveedor.calificacion}
              precio={proveedor.precio}
              zona={proveedor.zona}
            />
          ))}
        </div>
      )}
    </div>
  );
}
