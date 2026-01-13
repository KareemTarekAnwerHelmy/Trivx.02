import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <CTA />
    </div>
  );
}
