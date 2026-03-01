import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofStrip from "@/components/SocialProofStrip";
import DemoMagica from "@/components/DemoMagica";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AddOns from "@/components/AddOns";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitIntent from "@/components/ExitIntent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofStrip />
        <DemoMagica />
        <Portfolio />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <AddOns />
        <Testimonials />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ExitIntent />
    </>
  );
}
