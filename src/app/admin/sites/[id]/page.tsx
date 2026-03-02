"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface Site {
  id: string;
  slug: string;
  plan: string;
  status: string;
  site_data: Record<string, unknown>;
  published_at: string | null;
}

const editableFields = [
  { key: "consultorio", label: "Consultorio" },
  { key: "doctor", label: "Doctor/a" },
  { key: "especialidad", label: "Especialidad" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "email", label: "Email" },
  { key: "direccion", label: "Dirección" },
  { key: "slogan", label: "Slogan" },
  { key: "bio", label: "Bio del doctor" },
  { key: "experiencia", label: "Experiencia" },
  { key: "horario", label: "Horario" },
  { key: "ctaPreferido", label: "CTA principal" },
];

export default function SiteEditor() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const [site, setSite] = useState<Site | null>(null);
  const [slug, setSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/admin/sites/${id}`)
      .then((r) => {
        if (r.status === 401) { router.push("/admin/login"); return null; }
        return r.json();
      })
      .then((data) => {
        if (data?.site) {
          setSite(data.site);
          setSlug(data.site.slug);
        }
      });
  }, [id, router]);

  function updateField(key: string, value: string) {
    if (!site) return;
    setSite({ ...site, site_data: { ...site.site_data, [key]: value } });
  }

  async function save() {
    if (!site) return;
    setSaving(true);
    setMessage("");
    await fetch(`/api/admin/sites/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ site_data: site.site_data, slug }),
    });
    setMessage("Guardado");
    setSaving(false);
    setTimeout(() => setMessage(""), 2000);
  }

  async function togglePublish() {
    if (!site) return;
    setPublishing(true);
    const isPublished = site.status === "published";
    const res = await fetch(`/api/admin/sites/${id}/publish`, {
      method: isPublished ? "DELETE" : "POST",
    });
    if (res.ok) {
      setSite({
        ...site,
        status: isPublished ? "draft" : "published",
        published_at: isPublished ? null : new Date().toISOString(),
      });
    }
    setPublishing(false);
  }

  if (!site) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-500">Cargando...</p></div>;
  }

  const isPublished = site.status === "published";
  const previewUrl = `/?_slug=${slug}`;
  const liveUrl = `https://${slug}.dentalweb.cl`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Live URL banner */}
      {isPublished && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center justify-center gap-3">
          <span className="text-sm text-green-800 font-medium">Sitio publicado:</span>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-green-700 font-bold underline hover:text-green-900">
            {liveUrl}
          </a>
          <button
            onClick={() => { navigator.clipboard.writeText(liveUrl); setMessage("Link copiado"); setTimeout(() => setMessage(""), 2000); }}
            className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition"
          >
            Copiar link
          </button>
        </div>
      )}

      <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/admin")} className="text-sm text-gray-500 hover:text-gray-700">&larr; Volver</button>
          <h1 className="text-lg font-bold text-gray-900">{(site.site_data.consultorio as string) || "Sitio"}</h1>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isPublished ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
            {site.status}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {message && <span className="text-xs text-green-600">{message}</span>}
          <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline">
            Preview
          </a>
          <button
            onClick={save}
            disabled={saving}
            className="text-xs font-medium px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition disabled:opacity-50"
          >
            {saving ? "Guardando..." : "Guardar"}
          </button>
          <button
            onClick={togglePublish}
            disabled={publishing}
            className={`text-xs font-medium px-4 py-2 rounded-lg transition disabled:opacity-50 ${
              isPublished
                ? "bg-red-50 text-red-600 hover:bg-red-100"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {publishing ? "..." : isPublished ? "Despublicar" : "Publicar"}
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Slug */}
        <div className="bg-white rounded-xl border p-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Slug (subdominio)</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <span className="text-xs text-gray-400">.dentalweb.cl</span>
          </div>
        </div>

        {/* Editable fields */}
        <div className="bg-white rounded-xl border p-5 space-y-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Datos del sitio</h2>
          {editableFields.map((f) => (
            <div key={f.key}>
              <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
              {f.key === "bio" ? (
                <textarea
                  value={(site.site_data[f.key] as string) || ""}
                  onChange={(e) => updateField(f.key, e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              ) : (
                <input
                  type="text"
                  value={(site.site_data[f.key] as string) || ""}
                  onChange={(e) => updateField(f.key, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              )}
            </div>
          ))}
        </div>

        {/* Servicios */}
        <div className="bg-white rounded-xl border p-5">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Servicios</h2>
          <div className="flex flex-wrap gap-2">
            {(site.site_data.servicios as string[] || []).map((s, i) => (
              <span key={i} className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>

        {/* Raw JSON */}
        <details className="bg-white rounded-xl border p-5">
          <summary className="text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer">JSON completo</summary>
          <pre className="mt-3 text-xs text-gray-600 overflow-auto max-h-80">
            {JSON.stringify(site.site_data, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
