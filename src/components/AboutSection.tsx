import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a graduate with a bachelor's degree in Computer Science and a Diploma in Information Technology. I am a self-motivated, positive, and hardworking individual who always strives to achieve the highest standards possible at any given task.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am eager to challenge and be challenged in order to grow and further improve myself and my IT skills. My greatest passion in life is to seek opportunities to expand my skills and gain valuable real-world experience.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My goal is to benefit people, organizations, and most importantly, my country through technology and innovation.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">Based in Accra, Ghana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">BSc in Computer Science</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">3+ Years in IT Industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">CCNA Certified Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">Python & Cybersecurity Certified</span>
                  </li>
                </ul>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
