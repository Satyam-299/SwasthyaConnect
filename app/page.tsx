
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
