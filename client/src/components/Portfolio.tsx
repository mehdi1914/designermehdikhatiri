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
    image: "https://media-hosting.imagekit.io//72c9c1401f0e4f07/ssss.jpg?Expires=1834936692&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VUBAXtdKYACxRTyMUbGGJ9M2xj4oNFtus4wU0gLKnXQKkCgLu4njsrXx1APEzKFgGKKPo40UoN9iMysyGGP37JOr1pnfyHusenhm7wou2INhDF0TJjrSD3uqrhfL9iOlxMeBFoD159btiKL0yOjqWnK8ynZtRhZmn23UQ5S8CRyIOze2lZXV42bgLAAvkPvpSp1n2thJ9kuwIcuSatcPHjWQQC1k0tvHCpcPG8~v-E5zzkfyNHCyMCYaWZXOmQTkzX7K~ubjm~MwJuUUoqu45HDCtvl4adF0wXk1rJVA1sArnAWvdlaAJ92Dk5gcwuDuDVM36LNRKrHPCZzrwLCMEQ__"
  },
  {
    title: "Fresh Market E-Commerce UI",
    description: "Modern and intuitive e-commerce interface design for a fruit and vegetable marketplace.",
    type: "figma",
    link: "https://www.behance.net/gallery/219964195/A-Modern-E-Commerce-UI-for-Fruit-Vegetable",
    image: "https://media-hosting.imagekit.io//ca2930007e414b62/Frame%201.png?Expires=1834937212&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nW0JNr9ez99XSei5RHh8VSvbZd07mehI7rF3ThUWdMkpZRoLtOPKYRniiMAVauU6iqbe8EIgUrjaMnTSzHYacWBoKI14Iedq9M-FhdEfzeXOhDR8LQtSz0ob~qnWlGGpp0w-t~tQRajVDT2U5ipmTyeTqcHOTviTDsXhDD8s7sFVPxWDj9TH4AcL14tpv0UWDy7NlEHa4cxyVd231mTzXztMtZ9N91zThYXfAcHLmAQmNJaGv0vhgKfXENNYtiHgFQ6dEoFFRAx53w2hg7nSbqh5pmUSptMS9bBtXyh1M1F66ePOyo3sTwT9VctE05SkiagqkHyxkJnMn-WxV9mcZg__"
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