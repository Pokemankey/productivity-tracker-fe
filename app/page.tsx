import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Navbar from "@/components/landingPage/Navbar";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
