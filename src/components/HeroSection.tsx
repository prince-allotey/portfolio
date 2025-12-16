import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Full Stack Web Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Prince Charles{" "}
            <span className="text-gradient">Allotey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Building modern web applications with React.js, Laravel & cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Accra, Ghana</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/prince-allotey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-card"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-charles-allotey-9590b51ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-card"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:princecallotey@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-card"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+233559002698"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-card"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1">
                <div className="w-1.5 h-2.5 bg-primary rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
