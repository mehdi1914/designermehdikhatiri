import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

export default function Bio() {
  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mehdi Khatiri</h3>
                <p className="text-lg text-muted-foreground italic">UI/UX Designer & ALX Collaborator</p>
              </div>

              <p className="text-lg text-muted-foreground">
                👋 Hi there! I'm a creative problem-solver from Morocco, passionate about designing digital experiences that feel intuitive and human. Whether I'm crafting a sleek app interface or collaborating with teams, I thrive on turning ideas into solutions that users love.
              </p>

              <div>
                <h4 className="font-semibold mb-3">What I Do</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🎨 <strong>Design:</strong> Wireframes, prototypes, and user research (Figma, Adobe Suite)</li>
                  <li>🤝 <strong>Collaborate:</strong> Team player with ALX-trained skills in critical thinking and agile workflows</li>
                  <li>🚀 <strong>Build:</strong> From concept to code (HTML/CSS for seamless developer handoffs)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">When I'm Not Designing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🏋️ <strong>Gym Enthusiast:</strong> Discipline fuels my creativity</li>
                  <li>📸 <strong>Photography:</strong> Capturing stories through my lens</li>
                  <li>🎭 <strong>Theater Lover:</strong> Because every great design has a narrative</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-2xl transform rotate-3" />
            <img
              src="https://media-hosting.imagekit.io//501bb468f7024f1e/1735640916007.jpeg?Expires=1834861822&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gX~Qhq5fCJl0IPmgGjw25o5IVsDNk9yZbDdzogUv40nMTibHanfPpIF59cbYvq2WtM6Ne5K8JeTGFhKSMWcwu3wUkxHlh20~zLFtksorx4c~LY2XYmuzi~0tSIIcGFpyZxdFkKXQdunmzB1n548bdJyL8DZGGB1WsNaD4UVR09hoKKE63SBBeBw9UJdx3NU4gWNHJN82U6iTC3fiF2XcLZrxWyNzixkG96gqTSKypxGxgIkSnj6-sgl~aozAScf6jtEPwAZjp2hk3V~wMHC6DpHzuhf7mU00gd9GFXLHjMHLCm01KdEsSoP~r94i0QOsDnUgimM~JOSE5osvWr1aSA__"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}