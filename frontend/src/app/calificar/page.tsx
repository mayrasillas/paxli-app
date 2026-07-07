"use client";

import { useState } from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";

export default function CalificarPage() {
  const [enviado, setEnviado] = useState(false);
  const [calificacion, setCalificacion] = useState(0);
  const [comentario, setComentario] = useState("");

  if (enviado) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            ¡Gracias por tu calificación!
          </h1>
          <p className="text-gray-500 mb-8">
            Tu opinión ayuda a otros usuarios a tomar mejores decisiones
          </p>
          <Link
            href="/categorias"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        ¿Cómo fue tu experiencia?
      </h1>

      {/* Provider Info Card */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">
            👷
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">Carlos Martínez</h2>
            <p className="text-sm text-gray-500">Plomero</p>
          </div>
        </div>
      </div>

      {/* Rating Form */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        {/* Star Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Calificación
          </label>
          <StarRating
            rating={calificacion}
            interactive={true}
            onChange={(value) => setCalificacion(value)}
          />
        </div>

        {/* Comment */}
        <div>
          <label
            htmlFor="comentario"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comentario (opcional)
          </label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Deja un comentario sobre tu experiencia..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={() => setEnviado(true)}
        className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-md"
      >
        Enviar Calificación
      </button>
    </div>
  );
}
