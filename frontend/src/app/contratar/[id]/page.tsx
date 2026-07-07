"use client";

import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import proveedores from "@/data/proveedores.json";

export default function ContratarPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const proveedor = proveedores.find((p) => p.id === id);
  const [metodoPago, setMetodoPago] = useState("tarjeta");

  if (!proveedor) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Proveedor no encontrado</p>
      </div>
    );
  }

  // Extract numeric price from string like "$350/hr"
  const precioBase = parseInt(proveedor.precio.replace(/[^0-9]/g, ""), 10);
  const tarifaServicio = 50;
  const total = precioBase + tarifaServicio;

  const handleConfirmar = () => {
    router.push("/confirmacion");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Resumen de Contratación
      </h1>

      {/* Provider Summary Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
            👷
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {proveedor.nombre}
            </h2>
            <p className="text-sm text-gray-500">{proveedor.descripcion}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Servicio</span>
            <span className="text-gray-800 font-medium">
              {proveedor.categoria.charAt(0).toUpperCase() +
                proveedor.categoria.slice(1)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Zona</span>
            <span className="text-gray-800 font-medium">{proveedor.zona}</span>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
          Desglose de precio
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Costo base</span>
            <span className="text-gray-800">${precioBase}.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tarifa de servicio</span>
            <span className="text-gray-800">${tarifaServicio}.00</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
            <span className="text-gray-800">Total</span>
            <span className="text-emerald-600 text-lg">${total}.00</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
          Método de pago
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="metodo"
              value="tarjeta"
              checked={metodoPago === "tarjeta"}
              onChange={(e) => setMetodoPago(e.target.value)}
              className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-sm text-gray-700">💳 Tarjeta de crédito/débito</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="metodo"
              value="transferencia"
              checked={metodoPago === "transferencia"}
              onChange={(e) => setMetodoPago(e.target.value)}
              className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-sm text-gray-700">🏦 Transferencia bancaria</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="metodo"
              value="billetera"
              checked={metodoPago === "billetera"}
              onChange={(e) => setMetodoPago(e.target.value)}
              className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-sm text-gray-700">📱 Billetera digital</span>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={handleConfirmar}
          className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-md"
        >
          Confirmar y Pagar
        </button>
        <button
          onClick={() => router.back()}
          className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors py-2"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
