import Link from "next/link";
import StarRating from "./StarRating";

interface ProviderCardProps {
  id: string;
  nombre: string;
  calificacion: number;
  precio: string;
  zona: string;
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

export default function ProviderCard({
  id,
  nombre,
  calificacion,
  precio,
  zona,
}: ProviderCardProps) {
  return (
    <Link href={`/proveedor/${id}`}>
      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-4">
        {/* Avatar placeholder */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${getColorFromId(id)}`}
        >
          {getInitials(nombre)}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {nombre}
          </h3>
          <StarRating rating={calificacion} />
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            <span className="font-medium text-emerald-600">{precio}</span>
            <span>•</span>
            <span className="truncate">{zona}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
