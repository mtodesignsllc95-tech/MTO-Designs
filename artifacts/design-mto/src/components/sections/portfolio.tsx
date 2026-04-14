import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Flame, Shield } from 'lucide-react';

const collections = [
  {
    id: 'chaos-control',
    title: 'Chaos & Control',
    tagline: 'Mental Health Awareness',
    desc: 'Chaos is real. Control is earned. This collection exists for everyone who has fought their own mind — the breakdowns, the breakthroughs, and every quiet battle in between. Wear it. Mean it.',
    icon: <Heart className="w-5 h-5" />,
    color: 'text-primary',
    border: 'border-primary/40',
    badge: 'border-primary/30 text-primary bg-primary/10',
    cause: 'Mental Health',
    size: 'large'
  },
  {
    id: 'fuck-addiction',
    title: 'Fuck Addiction',
    tagline: 'Addiction Awareness',
    desc: 'No sugarcoating. No soft language. Addiction destroys lives and the people who love the ones in it. This collection says what a lot of people are thinking but afraid to say out loud.',
    icon: <Flame className="w-5 h-5" />,
    color: 'text-secondary',
    border: 'border-secondary/40',
    badge: 'border-secondary/30 text-secondary bg-secondary/10',
    cause: 'Addiction Recovery',
    size: 'small'
  },
  {
    id: 'sjop',
    title: 'Surviving Just on the Pain',
    tagline: 'Domestic Violence Awareness',
    desc: 'For survivors. For those still in it. For everyone who kept going when keeping going felt impossible. This collection honors the strength it takes just to make it through another day.',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-white',
    border: 'border-white/20',
    badge: 'border-white/20 text-white/70 bg-white/5',
    cause: 'Domestic Violence',
    size: 'small'
  }
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Collections</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Built with <span className="text-muted-foreground">Purpose.</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm">Three lines. Three causes. Every piece is a statement — crafted in-house, worn with intention.</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col, idx) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`group relative overflow-hidden bg-background border ${col.border} cursor-pointer ${col.size === 'large' ? 'md:row-span-2 min-h-[480px]' : 'min-h-[360px]'} flex flex-col justify-between p-10`}
            >
              {/* Background noise */}
              <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />

              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent to-${col.id === 'chaos-control' ? 'primary' : col.id === 'fuck-addiction' ? 'secondary' : 'white'}/5 pointer-events-none`} />

              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-3 py-1 border ${col.badge} rounded-full mb-6`}>
                  {col.icon}
                  <span className="text-xs font-mono uppercase tracking-widest">{col.cause}</span>
                </div>

                <h4 className={`text-3xl md:text-4xl font-display font-black uppercase text-white leading-tight mb-4 group-hover:${col.color} transition-colors duration-300`}>
                  {col.title}
                </h4>
                <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">{col.tagline}</p>
                <p className="text-muted-foreground leading-relaxed max-w-md">{col.desc}</p>
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between">
                <span className={`text-xs font-mono uppercase tracking-widest ${col.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Shop Collection &rarr;
                </span>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:${col.border} transition-colors duration-500 m-4`} />
              <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:${col.border} transition-colors duration-500 m-4`} />
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border border-border p-10 md:p-16 bg-background relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6 block">The Mission</span>
            <p className="text-2xl md:text-3xl text-white font-display font-bold leading-relaxed uppercase">
              Design MTO exists to create product that means something. Not trends. Not hype. <span className="text-muted-foreground">Product built around real human experiences.</span>
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
