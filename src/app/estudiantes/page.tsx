import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SocialProofStrip from "@/components/SocialProofStrip";
import DemoMagica from "@/components/DemoMagica";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import AddOns from "@/components/AddOns";
import RoiCalculator from "@/components/RoiCalculator";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitIntent from "@/components/ExitIntent";
import StudentBanner from "@/components/estudiantes/StudentBanner";
import HeroEstudiantes from "@/components/estudiantes/HeroEstudiantes";
import PricingEstudiantes from "@/components/estudiantes/PricingEstudiantes";
import CtaFinalEstudiantes from "@/components/estudiantes/CtaFinalEstudiantes";

export const metadata: Metadata = {
  title: "30% Descuento Estudiantes | Web Dental Profesional desde $13.993/mes",
  description:
    "Descuento exclusivo para estudiantes y recién egresados de odontología. Tu web dental profesional con 30% OFF, lista en 48 horas. Desde $13.993/mes.",
  robots: { index: true, follow: true },
};

export default function EstudiantesPage() {
  return (
    <>
      <StudentBanner />
      <Navbar />
      <main>
        <HeroEstudiantes />
        <SocialProofStrip />
        <Benefits />
        <DemoMagica />
        <Portfolio />
        <HowItWorks />
        <AddOns />
        <AboutUs />
        <PricingEstudiantes />
        <RoiCalculator />
        <FAQ />
        <CtaFinalEstudiantes />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ExitIntent />
    </>
  );
}
