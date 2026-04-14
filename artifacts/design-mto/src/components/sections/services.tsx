import { motion } from 'framer-motion';
import { PenTool, Hammer, Shirt, Zap, Layers, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Shirt className="w-6 h-6" />,
    title: 'Custom Apparel',
    desc: 'Premium blanks, custom embroidery, screen printing, and bespoke garment construction. Every piece built to spec.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Graphic Design',
    desc: 'Logos, brand systems, collection artwork, and print-ready files. From raw concept to finished visual identity.'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Wood & Fabrication',
    desc: 'Custom woodwork, resin pours, and hand-finished builds. Furniture, signage, display pieces — all in-house.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Laser Engraving',
    desc: 'High-detail etching on wood, acrylic, leather, and coated metals. Logos, memorial pieces, and production runs.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Vinyl & Print',
    desc: 'Stickers, decals, custom prints, and vinyl graphics. Small runs or large — precision every time.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Custom Art',
    desc: 'One-of-a-kind commissioned pieces across any medium. No templates, no shortcuts — built exactly for you.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Built <span className="text-transparent text-stroke">In-House.</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm">Custom products. Designed, fabricated, and finished right here. From idea to physical reality.</p>
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
