import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Lovely Professional University",
    location: "Phagwara, India",
    period: "2019 – 2022",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Ghana Technology University College",
    location: "Accra, Ghana",
    period: "2016 – 2018",
  },
  {
    degree: "WASSCE",
    institution: "Adiembra Senior High School",
    location: "Ghana",
    period: "2010 – 2013",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-gradient-card rounded-xl p-6 border border-border shadow-card h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary font-mono text-sm">{edu.period}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-muted-foreground/70 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
