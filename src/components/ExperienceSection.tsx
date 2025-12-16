import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer (Full Stack)",
    company: "Indigin Group",
    location: "Accra, Ghana",
    period: "2025 – Present",
    responsibilities: [
      "Design and develop websites, web and mobile applications for clients",
      "Write clean, efficient and well-documented code",
      "Implement responsive design and ensure functionality and performance",
    ],
  },
  {
    title: "IT Support Officer (Records)",
    company: "Ga West Municipal Health Directorate, MFHC",
    location: "Greater Accra",
    period: "2022 – 2023",
    responsibilities: [
      "Installing Windows and keeping applications up to date",
      "Use digital technology to help staff access information",
      "Troubleshoot issues that may develop as a result of network congestion",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse-glow" />

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
                    <div className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-border">•</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
