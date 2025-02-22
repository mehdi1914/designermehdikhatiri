import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ALX Team Project",
    description: "Collaborated with ALX peers to design and prototype innovative solutions. My role: UI/UX Designer and Researcher.",
    videoId: "ac57oC_fZCA",
    slideLink: "https://drive.google.com/file/d/1kzffK9JG3ZEJktQ-HczkL9oORS50Bx5k/view"
  },
  {
    title: "E-commerce Redesign",
    description: "Freelance project focused on improving user experience and conversion rates.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028"
  },
  {
    title: "Mobile App Design",
    description: "A clean and modern mobile app interface for a health tracking application.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    {project.videoId ? (
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
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      {project.slideLink && (
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(project.slideLink, '_blank')}
                        >
                          View Slide Deck
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
