import { motion } from "framer-motion";

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
            <h2 className="text-3xl font-bold mb-6">Bio</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mehdi Khatiri</h3>
                <p className="text-lg text-muted-foreground italic">UI/UX Designer | ALX Pathway Program Learner</p>
              </div>

              <p className="text-lg text-muted-foreground">
                Passionate about crafting human-centered digital experiences, I blend creativity with technical precision. As an ALX learner, I've honed skills in problem-solving, agile collaboration, and project management to deliver solutions that empower users and businesses alike.
              </p>

              <div>
                <h4 className="font-semibold mb-3">What I Do</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Design intuitive interfaces using Figma and Adobe Suite</li>
                  <li>Conduct user research and prototype testing</li>
                  <li>Collaborate with developers using HTML/CSS for seamless handoffs</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Beyond Work</h4>
                <p className="text-muted-foreground">
                  Gym discipline fuels my focus • Storytelling through photography • Theater-inspired empathy for user narratives
                </p>
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