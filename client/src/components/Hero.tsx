import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-primary">
      {/* Animated Background Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          initial={{ 
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            x: -100,
            y: -100,
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
            left: `${i * 15}%`,
            top: `${i * 20}%`,
            zIndex: 0
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm Mehdi 👋
            <br />
            <span className="text-white/90">UI/UX Designer</span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Crafting beautiful and intuitive digital experiences that users love.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}