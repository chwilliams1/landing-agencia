import type { Metadata } from "next";
import IntakeWizard from "@/components/IntakeWizard";

export const metadata: Metadata = {
  title: "Intake — Web Dental",
  robots: { index: false, follow: false },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-bg-alt">
      <IntakeWizard />
    </main>
  );
}
