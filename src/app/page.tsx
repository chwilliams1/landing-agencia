import Hero from "@/components/Hero";
import DemoMagica from "@/components/DemoMagica";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
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
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
