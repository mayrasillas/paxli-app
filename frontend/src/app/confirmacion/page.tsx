"use client";

import { useRouter } from "next/navigation";

export default function ConfirmacionPage() {
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto text-center">
      {/* Success Icon */}
      <div className="mb-6 mt-8">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
          <span className="text-5xl text-green-600">✓</span>
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        ¡Pago exitoso!
      </h1>
      <p className="text-gray-500 mb-8">
        Tu servicio ha sido agendado correctamente
      </p>

      {/* Reference Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Número de referencia
            </p>
            <p className="text-xl font-mono font-bold text-gray-800 mt-1">
              REF-2024-001234
            </p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Estado
            </p>
            <p className="text-sm font-medium text-green-600 mt-1">
              ✅ Confirmado
            </p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Fecha programada
            </p>
            <p className="text-sm font-medium text-gray-700 mt-1">
              Hoy - Lo antes posible
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800">
          📩 Se ha enviado la confirmación a tu correo electrónico.
          El proveedor se pondrá en contacto contigo pronto.
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={() => router.push("/seguimiento")}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-md"
        >
          Ver Seguimiento
        </button>
        <button
          onClick={() => router.push("/categorias")}
          className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors py-2"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
