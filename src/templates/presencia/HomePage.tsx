import type { SiteData } from "@/types/site";
import TenantNavbar from "@/templates/shared/TenantNavbar";
import TenantHero from "@/templates/shared/TenantHero";
import ServiceCards from "@/templates/shared/ServiceCard";
import DoctorProfile from "@/templates/shared/DoctorProfile";
import ScheduleTable from "@/templates/shared/ScheduleTable";
import ContactSection from "@/templates/shared/ContactSection";
import TenantFooter from "@/templates/shared/TenantFooter";
import WhatsAppFloat from "@/templates/shared/WhatsAppFloat";

export default function PresenciaHome({ data }: { data: SiteData }) {
  return (
    <div style={{ backgroundColor: "var(--t-bg)", color: "var(--t-text)" }}>
      <TenantNavbar data={data} />
      <main>
        <TenantHero data={data} />
        {data.servicios.length > 0 && <ServiceCards data={data} />}
        <DoctorProfile data={data} />
        <ScheduleTable data={data} />
        <ContactSection data={data} />
      </main>
      <TenantFooter data={data} />
      <WhatsAppFloat data={data} />
    </div>
  );
}
