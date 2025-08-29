import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import Footer from "@/components/landing/Footer"
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Offer />
      <Footer/>
      
    </>
  );
}