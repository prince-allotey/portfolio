import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Network, Code } from "lucide-react";

const certifications = [
  {
    title: "PCAP - Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    year: "2023",
    icon: Code,
  },
  {
    title: "Enterprise Networking, Security and Automation",
    issuer: "Cisco Networking Academy",
    year: "2021",
    icon: Network,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2021",
    icon: Shield,
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2021",
    icon: Network,
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2021",
    icon: Network,
  },
];

const awards = [
  {
    title: "Vice President - Ghanaian Student Association",
    organization: "Lovely Professional University, India",
    year: "2021-2022",
  },
  {
    title: "Quiz Contest Coordinator",
    organization: "Division of Youth Affairs",
    year: "2021",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Certifications & Awards</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <span className="text-xs text-primary font-mono">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <Award className="w-5 h-5" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{award.title}</h4>
                        <p className="text-muted-foreground">{award.organization}</p>
                        <span className="text-sm text-primary font-mono">{award.year}</span>
                      </div>
                    </div>
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

export default CertificationsSection;
