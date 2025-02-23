import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#bio", label: "Bio" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
  { href: "#elevator-pitch", label: "Elevator Pitch", soon: true }
];

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.1"/>
    <path d="M15 12L25 20L15 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <Logo />
            <span>MK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-white/90 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </motion.button>
                {item.soon && (
                  <span className="absolute -top-2 -right-6 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f", "_blank")}
              className="bg-gradient-to-r from-primary to-purple-400 text-white hover:opacity-90 px-4 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative">
                    <motion.button
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground hover:text-primary transition-colors w-full text-left py-2"
                      whileHover={{ x: 10 }}
                    >
                      {item.label}
                    </motion.button>
                    {item.soon && (
                      <span className="absolute top-2 ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                ))}
                <motion.button
                  onClick={() => window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f", "_blank")}
                  className="text-primary hover:text-primary/80 transition-colors w-full text-left py-2 flex items-center gap-2"
                  whileHover={{ x: 10 }}
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </motion.button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}