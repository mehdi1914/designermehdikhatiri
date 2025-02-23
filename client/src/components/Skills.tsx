
import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiFigma, 
  SiAdobexd, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiPython, SiGit, SiVisualstudiocode
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiAdobexd, name: "Adobe XD", color: "#FF61F6" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <tech.icon 
                className="w-16 h-16 mb-4" 
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
      </div>
    </section>
  );
}
