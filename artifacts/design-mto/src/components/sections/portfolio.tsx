import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Flame, Shield } from 'lucide-react';
import chaosControlLogo from '@assets/1775856165441_1776130301757.png';
import sjopArtwork from '@assets/FB_IMG_1774509727181_1776130301749.jpg';
import fuckAddictionLogo from '@assets/fuck-addiction-logo_1776130396978.jpg';

const collections = [
  {
    id: 'chaos-control',
    title: 'Chaos & Control',
    tagline: 'Mental Health Awareness',
    desc: 'Chaos is real. Control is earned. This collection exists for everyone who has fought their own mind — the breakdowns, the breakthroughs, and every quiet battle in between. Wear it. Mean it.',
    icon: <Heart className="w-5 h-5" />,
    color: 'text-primary',
    borderClass: 'border-primary/40',
    badgeClass: 'border-primary/30 text-primary bg-primary/10',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]',
    cause: 'Mental Health',
    image: chaosControlLogo,
    imageBg: 'bg-black',
    size: 'large'
  },
  {
    id: 'fuck-addiction',
    title: 'Fuck Addiction',
    tagline: 'Addiction Awareness',
    desc: 'No sugarcoating. No soft language. Addiction destroys lives and the people who love the ones in it. This collection says what a lot of people are thinking but afraid to say out loud.',
    icon: <Flame className="w-5 h-5" />,
    color: 'text-secondary',
    borderClass: 'border-secondary/40',
    badgeClass: 'border-secondary/30 text-secondary bg-secondary/10',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]',
    cause: 'Addiction Recovery',
    image: fuckAddictionLogo,
    imageBg: 'bg-black',
    size: 'small'
  },
  {
    id: 'sjop',
    title: 'Surviving Just on the Pain',
    tagline: 'Domestic Violence Awareness',
    desc: 'For survivors. For those still in it. For everyone who kept going when keeping going felt impossible. This collection honors the strength it takes just to make it through another day.',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-white',
    borderClass: 'border-white/20',
    badgeClass: 'border-white/20 text-white/70 bg-white/5',
    hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]',
    cause: 'Domestic Violence',
    image: sjopArtwork,
    imageBg: 'bg-zinc-800',
    size: 'small'
  }
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
              className={`group relative overflow-hidden bg-background border ${col.borderClass} cursor-pointer transition-all duration-500 ${col.hoverGlow} ${col.size === 'large' ? 'md:row-span-2' : ''} flex flex-col`}
            >
              {/* Collection artwork / logo */}
              {col.image ? (
                <div className={`relative w-full overflow-hidden ${col.size === 'large' ? 'h-72 md:h-96' : 'h-56'} ${col.imageBg}`}>
                  <img
                    src={col.image}
                    alt={col.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                      col.id === 'sjop'
                        ? 'object-cover object-center opacity-80 group-hover:opacity-100'
                        : 'object-contain p-8 opacity-90 group-hover:opacity-100'
                    }`}
                  />
                  {/* Gradient fade into card body */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
                </div>
              ) : (
                /* Fuck Addiction — no image yet, use styled placeholder */
                <div className="relative w-full h-56 bg-gradient-to-br from-secondary/5 to-background flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <Flame className="w-16 h-16 text-secondary/30 mx-auto mb-3" />
                    <span className="text-xs font-mono text-secondary/50 uppercase tracking-widest">Artwork Coming Soon</span>
                  </div>
                </div>
              )}

              {/* Text content */}
              <div className="flex flex-col flex-1 justify-between p-8 md:p-10 relative z-10">
                <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 border ${col.badgeClass} rounded-full mb-5`}>
                    {col.icon}
                    <span className="text-xs font-mono uppercase tracking-widest">{col.cause}</span>
                  </div>

                  <h4 className={`text-2xl md:text-3xl font-display font-black uppercase text-white leading-tight mb-2 group-hover:${col.color} transition-colors duration-300`}>
                    {col.title}
                  </h4>
                  <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">{col.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{col.desc}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                  <span className={`text-xs font-mono uppercase tracking-widest ${col.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Shop Collection &rarr;
                  </span>
                </div>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-current group-hover:${col.color} transition-all duration-500 m-4`} />
              <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-current group-hover:${col.color} transition-all duration-500 m-4`} />
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
