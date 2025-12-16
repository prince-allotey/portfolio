import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Traffic Management System",
    description: "A better way to handle congested vehicles on the road in India. Developed as part of my final year project to address urban traffic challenges.",
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    year: "2022",
    featured: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Folder className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/prince-allotey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {project.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary rounded-lg text-sm font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-primary font-mono text-sm">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/prince-allotey?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
