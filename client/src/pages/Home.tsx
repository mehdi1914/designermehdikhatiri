import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollArea className="h-screen">
        <main>
          <Hero />
          <Bio />
          <Portfolio />
          <Contact />
        </main>
      </ScrollArea>
    </div>
  );
}
