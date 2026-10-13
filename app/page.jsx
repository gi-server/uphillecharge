import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Purpose from "@/components/Puspose";
import Locations from "@/components/Locations";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Purpose />
      <Locations />
      <Partners />
      <Footer />
    </section>
  );
}

