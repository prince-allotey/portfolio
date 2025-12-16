import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "PHP", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Laravel", level: 75 },
  { name: "MySQL", level: 80 },
];

const genericSkills = [
  "Agile",
  "Leadership",
  "Time Management",
  "Communication",
  "Adaptability",
  "Continuous Learning",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Tools</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-primary">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Generic Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-8 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {genericSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-5 py-3 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-6 mt-12 text-primary">Frameworks & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React.js", "Laravel", "MySQL", "Git"].map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    className="p-4 bg-gradient-card rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                  >
                    <span className="font-mono text-sm text-muted-foreground">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
