import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Websites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="websites" className="py-24 bg-secondary/8">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Websites</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Flocare", url: "https://flocare.onrender.com" },
              { id: 2, title: "Recipe Blog", url: "https://indigin-with-react.onrender.com" },
              { id: 3, title: "Archsmart", url: "https://archsmart.indiginfoundation.com" },
              { id: 4, title: "Invoice App", url: "https://invoice-app-lbhx.onrender.com" },
              { id: 5, title: "Banking App", url: "https://banking-app-at7w.onrender.com" },              
            ].map((item) => (
              <a
                key={item.id}
                href={item.url}
                target={item.title === "Contact" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-48 p-6 border rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-card text-card-foreground"
              >
                <span className="text-3xl font-bold text-muted-foreground/20 mb-2">0{item.id}</span>
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};