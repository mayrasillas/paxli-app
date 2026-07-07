import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paxli - Servicios de Mantenimiento',
  description: 'Encuentra y contrata servicios de mantenimiento del hogar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-emerald-600 text-white shadow-lg">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/categorias" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <img src="/images/logo.svg" alt="Paxli" className="h-8 w-8" />
              Paxli
            </a>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <a href="/categorias" className="hover:text-emerald-200 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-emerald-200 transition-colors">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-300 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm">
            <p className="font-medium text-white mb-1">Paxli</p>
            <p>Servicios de mantenimiento del hogar</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
