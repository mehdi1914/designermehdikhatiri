
import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFigma, 
  SiAdobexd, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiPython, SiGit,
  SiNextdotjs, SiVite, SiPrisma, SiPostgresql
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary via-purple-400 to-primary text-transparent bg-clip-text bg-[size:200%] animate-gradient"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="flex overflow-hidden"
        >
          <motion.div 
            className="flex gap-8 py-4"
            animate={{
              x: ["-25%", "-50%"],
              transition: {
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center p-6 rounded-xl bg-background/30 backdrop-blur-md border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 min-w-[200px]"
              >
                <tech.icon 
                  className="w-16 h-16 mb-4 transition-colors duration-300" 
                  style={{ color: tech.color }}
                />
                <motion.span 
                  className="font-medium text-muted-foreground"
                  whileHover={{ color: tech.color }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">More Skills Coming Soon</h3>
          <p className="text-muted-foreground">Stay tuned for updates on additional technologies and capabilities!</p>
        </motion.div>
      </div>
    </section>
  );
}
