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
    image: "/attached_assets/1735640916007.jpeg"
  },
  {
    title: "Travel App Design System",
    description: "Comprehensive design system and component library for a travel booking platform.",
    type: "figma",
    link: "https://www.figma.com/file/travel-app",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution built with React and Node.js, featuring user authentication and payment integration.",
    type: "github",
    link: "https://github.com/mehdi1914/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028"
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