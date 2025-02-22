import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate UI/UX designer with a focus on creating intuitive and engaging digital experiences. With extensive experience in design and development, I bring creativity and technical expertise to every project.
            </p>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Certifications & Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    ALX Software Engineering Program
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Google UX Design Certificate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    Frontend Development Certification
                  </li>
                </ul>
              </CardContent>
            </Card>
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