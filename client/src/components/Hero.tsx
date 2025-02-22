import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiBehance, SiDribbble } from "react-icons/si";

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
        timeout = setTimeout(type, 100);
      } else if (isDeleting && charIndex >= 0) {
        setCurrentText(currentRole.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 50);
      } else if (charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 500);
      } else {
        isDeleting = true;
        timeout = setTimeout(type, 2000);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-background">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          initial={{ 
            width: `${(i + 1) * 300}px`,
            height: `${(i + 1) * 300}px`,
            x: -150,
            y: -150,
            opacity: 0.1
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${i * 20}%`,
            top: `${i * 25}%`,
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
              {currentText}
              <span className="inline-block ml-1 animate-blink">|</span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12">
            Building Founder-Focused Digital Experiences
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
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
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
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