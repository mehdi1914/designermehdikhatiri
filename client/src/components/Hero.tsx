import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiBehance, SiDribbble } from "react-icons/si";
import { FileDown } from "lucide-react";

const roles = ["Frontend Development", "UI/UX Designer", "Problem Solver"];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/mehdi1914", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/mehdi-khatiri/", label: "LinkedIn" },
  { icon: SiBehance, href: "https://www.behance.net/mehdikhatiri1", label: "Behance" },
  { icon: SiDribbble, href: "https://dribbble.com/MEHDI_UXUI", label: "Dribbble" }
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex <= currentRole.length) {
        setCurrentText(currentRole.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 75); // Faster typing
      } else if (isDeleting && charIndex >= 0) {
        setCurrentText(currentRole.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 35); // Even faster deleting
      } else if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 300);
      } else {
        isDeleting = true;
        timeout = setTimeout(type, 1500);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-background to-primary/5">
      {/* Animated background circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          initial={{ 
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            x: -100,
            y: -100,
            opacity: 0.05
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${i * 15}%`,
            top: `${i * 20}%`,
            zIndex: 0
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl mb-4 text-primary/80"
          >
            Mehdi Khatiri
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {currentText}
              </motion.span>
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Building Founder-Focused Digital Experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              onClick={() => {
                window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8288764d-fc17-4854-a9ba-d03b462af49f", "_blank");
              }}
            >
              Download CV
              <FileDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}