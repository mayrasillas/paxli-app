import Link from "next/link";
import StarRating from "../../../components/StarRating";
import proveedores from "../../../data/proveedores.json";
import resenas from "../../../data/resenas.json";

interface Props {
  params: { id: string };
}

function getColorFromId(id: string): string {
  const colors = [
    "bg-teal-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-cyan-500",
    "bg-purple-500",
  ];
  const index = parseInt(id, 10) % colors.length;
  return colors[index];
}

function getInitials(nombre: string): string {
  return nombre
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ProveedorPerfilPage({ params }: Props) {
  const { id } = params;
  const proveedor = proveedores.find((p) => p.id === id);

  if (!proveedor) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Proveedor no encontrado</p>
        <Link
          href="/categorias"
          className="text-emerald-600 hover:underline mt-4 inline-block"
        >
          Volver a categorías
        </Link>
      </div>
    );
  }

  const resenasProveedor = resenas.filter((r) => r.proveedorId === id);

  return (
    <div>
      <Link
        href={`/proveedores/${proveedor.categoria}`}
        className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800 font-medium mb-6"
      >
        ← Volver
      </Link>

      {/* Profile header */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Large avatar */}
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl shrink-0 ${getColorFromId(id)}`}
          >
            {getInitials(proveedor.nombre)}
          </div>

          {/* Provider info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-800">
              {proveedor.nombre}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
              <StarRating rating={proveedor.calificacion} />
              <span className="text-sm text-gray-500">
                ({proveedor.calificacion})
              </span>
            </div>

            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-medium">Precio:</span>{" "}
                <span className="text-emerald-600 font-semibold">
                  {proveedor.precio}
                </span>
              </p>
              <p>
                <span className="font-medium">Zona:</span> {proveedor.zona}
              </p>
              <p>
                <span className="font-medium">Teléfono:</span>{" "}
                {proveedor.telefono}
              </p>
            </div>

            <p className="mt-3 text-gray-700">{proveedor.descripcion}</p>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-6">
          <Link
            href={`/contratar/${proveedor.id}`}
            className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-md"
          >
            Contratar
          </Link>
        </div>
      </div>

      {/* Reviews section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Reseñas ({resenasProveedor.length})
        </h2>

        {resenasProveedor.length === 0 ? (
          <p className="text-gray-500">
            Este proveedor aún no tiene reseñas.
          </p>
        ) : (
          <div className="space-y-4">
            {resenasProveedor.map((resena, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    {resena.autor}
                  </span>
                  <span className="text-xs text-gray-400">{resena.fecha}</span>
                </div>
                <StarRating rating={resena.calificacion} />
                <p className="text-sm text-gray-600 mt-1">
                  {resena.comentario}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
