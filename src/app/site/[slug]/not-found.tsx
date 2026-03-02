export default function TenantNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Este sitio no existe o no ha sido publicado.</p>
        <a
          href="https://dentalweb.cl"
          className="inline-block px-6 py-3 bg-[#0E7490] text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Ir a DentalWeb.cl
        </a>
      </div>
    </div>
  );
}
