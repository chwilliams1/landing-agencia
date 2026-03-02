import type { SiteData } from "@/types/site";

export default function TenantFooter({ data }: { data: SiteData }) {
  const phone = data.whatsapp.replace(/[\s\-+]/g, "");
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10 text-center"
      style={{ backgroundColor: "var(--t-primary)", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="max-w-4xl mx-auto space-y-3" style={{ fontFamily: "var(--t-body-font)" }}>
        <p className="font-bold text-lg text-white" style={{ fontFamily: "var(--t-heading-font)" }}>
          {data.consultorio}
        </p>
        <p className="text-sm opacity-80">{data.direccion}</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            WhatsApp
          </a>
          {data.email && (
            <a href={`mailto:${data.email}`} className="underline hover:text-white">
              Email
            </a>
          )}
        </div>
        <p className="text-xs opacity-50 pt-4">
          &copy; {year} {data.consultorio}. Todos los derechos reservados.
        </p>
        <p className="text-xs opacity-40">
          Sitio creado por{" "}
          <a href="https://dentalweb.cl" className="underline" target="_blank" rel="noopener noreferrer">
            DentalWeb.cl
          </a>
        </p>
      </div>
    </footer>
  );
}
