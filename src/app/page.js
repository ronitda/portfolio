import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#12121] container ">
      <div className="mx-auto px-12 py-8">
        <Hero />
      </div>
    </main>
  );
}
