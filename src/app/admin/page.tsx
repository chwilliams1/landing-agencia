"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  id: string;
  consultorio: string;
  doctor: string;
  whatsapp: string;
  email: string;
  plan: string;
  status: string;
  created_at: string;
}

interface SiteSummary {
  id: string;
  slug: string;
  plan: string;
  status: string;
  consultorio: string;
  doctor: string;
  created_at: string;
  published_at: string | null;
}

const statusColors: Record<string, string> = {
  nuevo: "bg-blue-100 text-blue-700",
  draft: "bg-yellow-100 text-yellow-700",
  published: "bg-green-100 text-green-700",
  suspended: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [sites, setSites] = useState<SiteSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState<string | null>(null);
  const router = useRouter();

  async function loadData() {
    const res = await fetch("/api/admin/sites");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setSites(data.sites || []);
    setLeads(data.leads || []);
    setLoading(false);
  }

  useEffect(() => { loadData(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function createSite(leadId: string) {
    setCreating(leadId);
    const res = await fetch("/api/admin/sites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lead_id: leadId }),
    });
    if (res.ok) {
      const data = await res.json();
      router.push(`/admin/sites/${data.site.id}`);
    }
    setCreating(null);
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-500">Cargando...</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900">Admin DentalWeb</h1>
        <span className="text-xs text-gray-400">{sites.length} sitios &bull; {leads.length} leads</span>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Sites */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Sitios</h2>
          {sites.length === 0 ? (
            <p className="text-sm text-gray-400">No hay sitios creados. Crea uno desde un lead.</p>
          ) : (
            <div className="bg-white rounded-xl border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                  <tr>
                    <th className="px-4 py-3">Consultorio</th>
                    <th className="px-4 py-3">Slug</th>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3">Creado</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {sites.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{s.consultorio}</td>
                      <td className="px-4 py-3 text-gray-500">{s.slug}</td>
                      <td className="px-4 py-3 text-gray-500">{s.plan}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[s.status] || "bg-gray-100 text-gray-600"}`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400">{new Date(s.created_at).toLocaleDateString("es-CL")}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => router.push(`/admin/sites/${s.id}`)}
                          className="text-teal-600 hover:underline text-xs font-medium"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Leads */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Leads recientes</h2>
          <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-4 py-3">Consultorio</th>
                  <th className="px-4 py-3">Doctor</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">WhatsApp</th>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{l.consultorio || "-"}</td>
                    <td className="px-4 py-3 text-gray-500">{l.doctor || "-"}</td>
                    <td className="px-4 py-3 text-gray-500">{l.plan || "-"}</td>
                    <td className="px-4 py-3 text-gray-500">{l.whatsapp || "-"}</td>
                    <td className="px-4 py-3 text-gray-400">{new Date(l.created_at).toLocaleDateString("es-CL")}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => createSite(l.id)}
                        disabled={creating === l.id}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition disabled:opacity-50"
                      >
                        {creating === l.id ? "Creando..." : "Crear Sitio"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
