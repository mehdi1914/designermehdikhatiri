import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiFigma, SiGithub } from "react-icons/si";

const projects = [
  {
    title: "VoyagePath App",
    description: "Collaborated with ALX peers to design and prototype innovative solutions for safer travel. My role: UI/UX Designer and Researcher.",
    videoId: "ac57oC_fZCA",
    slideLink: "https://drive.google.com/file/d/1kzffK9JG3ZEJktQ-HczkL9oORS50Bx5k/view"
  }
];

const personalProjects = [
  {
    title: "Go Dev CRM",
    description: "A streamlined sign-up/sign-in flow for a CRM platform, featuring modern UI design and intuitive user experience.",
    type: "figma",
    link: "https://www.behance.net/gallery/219961871/Go-Dev-CRM-Streamlined-Sign-UpSign-In-Flow-in-Figma",
    image: "https://media-hosting.imagekit.io/588c18f3c0884dc7/ssss.jpg?Expires=1834927805&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U5pM6YALDPpPHEIYGLI~M2eQ5OFE54SwDQXpD3MnUIq1B~tmz7AkXw632b6~yIgDsl2Z5PnighTnRQfzXWoKF0LYwGIyK7yNwr0XvDSylk~5E30O9AcpzY7A1AjCgMC485lifkRJ63rX3PZgL1dV~4AQqwlODEhJRJJr8Q7~7AHYgHVkOVa24D2uwna4HPRe36OHoUySfR0CYu6v~qFmHBWgBr~cZsyft7-TcxzH6yCPfZadoyLGUb~vHTxW7F7m-nukfjpTSbbnUpPn5Nv3hCTnPSdljPXqp38NzZsfM8cd3NMMYbrsjsO-4yDwcPeJDFtnoG1qsvdj6~--AnzUEA__"
  },
  {
    title: "Fresh Market E-Commerce UI",
    description: "Modern and intuitive e-commerce interface design for a fruit and vegetable marketplace.",
    type: "figma",
    link: "https://www.behance.net/gallery/219964195/A-Modern-E-Commerce-UI-for-Fruit-Vegetable",
    image: "https://media-hosting.imagekit.io/7bfc2615b4814b4a/Frame%201.png?Expires=1834928982&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RAbv9q8Brc9brpsBMRTFg09TA8WU2-EEufQgJLLIX4Yh~82SJPA5S0xjcH~iG~yv7fiKtBtK7uFz~b7F7NcQ6sG8xq4-z1POrETJmzpnF8bWv5-oh57SO5Sn1BNWckJWIfSjc-rxZtiJrGuC~pQDRhkwGhdFAgKMcafPhss59eZfF4Q8JVoXOyJsDRrXUHMeINdGL-WNLZE-~GyWsUKb-jf29hvxoIpGj5hxtbpHX3n45rIWKXh0nWDUs3LqohoNhZkmYDDfsNY4NNpjRSN4do4wqehfDa7suuoELbMmE6TJ9WzY92jyTl~pB~iijGKfnVbZJSzzV~WRYVpvJ-YCGw__"
  },
  {
    title: "Task Management App",
    description: "A comprehensive task management application built with modern technologies for efficient project organization and tracking.",
    type: "github",
    link: "https://github.com/MehdiKhatiri1/management.git",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Framer Motion, featuring smooth animations and responsive design.",
    type: "github",
    link: "https://github.com/mehdi1914/portfolio",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">My Work</h2>

          {/* ALX Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">ALX Pathway Projects</h3>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${project.videoId}`}
                          title={project.title}
                          className="w-full h-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(project.slideLink, '_blank')}
                        >
                          View Slide Deck
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-video object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                          {project.type === 'figma' ? (
                            <SiFigma className="w-5 h-5 text-primary" />
                          ) : (
                            <SiGithub className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}