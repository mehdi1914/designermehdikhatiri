
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiFigma, SiAdobexd, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiAdobexd, name: "Adobe XD" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <tech.icon className="w-16 h-16 text-primary mb-2" />
              <span className="text-muted-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
