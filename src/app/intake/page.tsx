import type { Metadata } from "next";
import IntakeWizard from "@/components/IntakeWizard";

export const metadata: Metadata = {
  title: "Cuéntanos sobre tu consulta — DentalWeb",
  robots: { index: false, follow: false },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-bg-alt">
      <IntakeWizard />
    </main>
  );
}
