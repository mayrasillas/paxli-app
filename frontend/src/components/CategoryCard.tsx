import Link from "next/link";

interface CategoryCardProps {
  id: string;
  nombre: string;
  icono: string;
  descripcion: string;
}

export default function CategoryCard({
  id,
  nombre,
  icono,
  descripcion,
}: CategoryCardProps) {
  return (
    <Link href={`/proveedores/${id}`}>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
        <span className="text-5xl block mb-3">{icono}</span>
        <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
        <p className="text-sm text-gray-500 mt-1">{descripcion}</p>
      </div>
    </Link>
  );
}
