import { motion } from 'framer-motion';
import { PenTool, Hammer, Shirt, Zap, Layers, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Industrial Design',
    desc: 'From concept sketches to 3D CAD modeling. We bring raw ideas into buildable reality.'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Fabrication',
    desc: 'Wood, metal, resin. Precision cutting, welding, and hand-finished craftsmanship.'
  },
  {
    icon: <Shirt className="w-6 h-6" />,
    title: 'Custom Apparel',
    desc: 'Premium blanks, custom embroidery, screen printing, and bespoke garment construction.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Vinyl & Art Toys',
    desc: 'Small batch designer toys, resin casting, and hand-painted finishing.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Laser Engraving',
    desc: 'High-detail etching on wood, acrylic, leather, and coated metals.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Brand Identity',
    desc: 'Logo design, packaging, and visual systems that match the physical product.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Full Spectrum <span className="text-transparent text-stroke">Creation.</span></h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-white uppercase mb-3">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
