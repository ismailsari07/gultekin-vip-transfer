import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VehicleShowcase from "@/components/VehicleShowcase";
import Services from "@/components/Services";
import Regions from "@/components/Regions";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VehicleShowcase />
        <Services />
        <Regions />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
