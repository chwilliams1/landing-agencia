import type { Metadata } from "next";
import { Suspense } from "react";
import IntakeWizard from "@/components/IntakeWizard";

export const metadata: Metadata = {
  title: "Formulario Estudiante — 30% OFF | DentalWeb",
  robots: { index: false, follow: false },
};

export default function IntakeEstudiantePage() {
  return (
    <main className="min-h-screen bg-bg-alt">
      <Suspense>
        <IntakeWizard estudiante />
      </Suspense>
    </main>
  );
}
