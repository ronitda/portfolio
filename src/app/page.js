import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#12121]">
      <Navbar />
      <div className="container mt-24 px-12 py-8">
        <Hero />
        <AboutSection />
      </div>
    </main>
  );
}
