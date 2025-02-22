import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/mehdi-khatiri/",
    label: "LinkedIn"
  },
  {
    icon: SiGithub,
    href: "https://github.com/mehdi1914",
    label: "GitHub"
  },
  {
    icon: Mail,
    href: "mailto:contact@mehdi.dev",
    label: "Email"
  }
];

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-8 w-8" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>Built with ❤️ by Mehdi</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
