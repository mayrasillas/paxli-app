import CategoryCard from "../../components/CategoryCard";
import categorias from "../../data/categorias.json";

export default function CategoriasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        ¿Qué servicio necesitas?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categorias.map((cat) => (
          <CategoryCard
            key={cat.id}
            id={cat.id}
            nombre={cat.nombre}
            icono={cat.icono}
            descripcion={cat.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
