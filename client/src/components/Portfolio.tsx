import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const alxProjects = [
  {
    title: "VoyagePath App",
    description: "Collaborated with ALX peers to design and prototype innovative solutions for safer travel. My role: UI/UX Designer and Researcher.",
    videoId: "ac57oC_fZCA",
    slideLink: "https://drive.google.com/file/d/1kzffK9JG3ZEJktQ-HczkL9oORS50Bx5k/view"
  }
];

const personalProjects = [
  {
    title: "E-commerce Dashboard",
    description: "A modern dashboard design for e-commerce analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028"
  },
  {
    title: "Health & Fitness App",
    description: "Mobile app design for tracking workouts and nutrition with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809"
  },
  {
    title: "Travel Blog Platform",
    description: "A responsive blog platform design focused on travel photography and stories.",
    image: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28"
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
              {alxProjects.map((project, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground">{project.description}</p>
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