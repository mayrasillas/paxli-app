"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const pasos = [
  {
    estado: "completado",
    titulo: "Confirmado",
    descripcion: "Tu servicio ha sido confirmado",
    icono: "✅",
  },
  {
    estado: "completado",
    titulo: "En camino",
    descripcion: "El proveedor está en camino",
    icono: "✅",
  },
  {
    estado: "actual",
    titulo: "En progreso",
    descripcion: "Servicio en progreso",
    icono: "🔵",
  },
  {
    estado: "pendiente",
    titulo: "Completado",
    descripcion: "Servicio finalizado",
    icono: "⬜",
  },
];

export default function SeguimientoPage() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Seguimiento del Servicio
      </h1>

      {/* Provider Info Card */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">
            👷
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-gray-800">Carlos Martinez</h2>
            <p className="text-sm text-gray-500">Plomero - Monterrey Centro</p>
          </div>
          <div className="text-right">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Activo
            </span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-5">
          Estado del servicio
        </h3>
        <div className="space-y-0">
          {pasos.map((paso, index) => (
            <div key={index} className="flex gap-4">
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    paso.estado === "completado"
                      ? "bg-green-100"
                      : paso.estado === "actual"
                      ? "bg-emerald-100 ring-2 ring-emerald-400"
                      : "bg-gray-100"
                  }`}
                >
                  {paso.icono}
                </div>
                {index < pasos.length - 1 && (
                  <div
                    className={`w-0.5 h-10 ${
                      paso.estado === "completado"
                        ? "bg-green-300"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <p
                  className={`font-medium text-sm ${
                    paso.estado === "actual"
                      ? "text-emerald-700"
                      : paso.estado === "completado"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }`}
                >
                  {paso.titulo}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    paso.estado === "pendiente"
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
          Chat con el proveedor
        </h3>

        {/* Sample messages */}
        <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
          <div className="flex gap-2">
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 max-w-[80%]">
              Hola, ya voy en camino. Llego en 15 minutos.
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-emerald-100 rounded-lg px-3 py-2 text-sm text-emerald-800 max-w-[80%]">
              Perfecto, aquí te espero. Gracias.
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <button
            onClick={() => setMensaje("")}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Complete Button */}
      <button
        onClick={() => router.push("/calificar")}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-md"
      >
        Marcar como completado
      </button>
    </div>
  );
}
