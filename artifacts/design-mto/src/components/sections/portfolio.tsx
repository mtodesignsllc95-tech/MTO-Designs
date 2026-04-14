import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import resinTable from '@/assets/portfolio-resin-table.png';
import vinylToy from '@/assets/portfolio-vinyl-toy.png';
import apparel from '@/assets/portfolio-apparel.png';

const projects = [
  {
    title: 'Neon River',
    category: 'Wood & Resin',
    image: resinTable,
    size: 'large'
  },
  {
    title: 'Cyber Mecha V1',
    category: 'Custom Vinyl',
    image: vinylToy,
    size: 'small'
  },
  {
    title: 'Void Weaver Heavyweight',
    category: 'Apparel & Embroidery',
    image: apparel,
    size: 'small'
  }
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Forged in <span className="text-muted-foreground">Darkness.</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm">From one-of-a-kind bespoke commissions to limited small production runs. Quality you can feel.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`group relative overflow-hidden bg-background border border-border ${project.size === 'large' ? 'md:row-span-2 h-[400px] md:h-auto' : 'h-[400px]'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-mono text-primary uppercase tracking-widest mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-display font-bold text-white uppercase">{project.title}</h4>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/100 transition-colors duration-500 m-4" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/100 transition-colors duration-500 m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
