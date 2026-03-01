import Hero from "@/components/Hero";
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

export default function Home() {
  return (
    <>
      <main>
        <Hero />
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
    </>
  );
}
