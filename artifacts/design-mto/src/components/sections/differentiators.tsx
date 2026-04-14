import { motion } from 'framer-motion';
import { Target, Layers, PenTool, Award, MapPin } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="w-7 h-7" />,
    number: '01',
    title: 'Advocacy with Real Accountability',
    body: `Our collections aren't just named after causes — they're tied to them. A portion of every sale from Chaos & Control, Fuck Addiction, and Surviving Just on the Pain goes back toward awareness, community resources, and real support. We put our product where our values are. No vague "we give back" — actual accountability, built into the brand from day one.`,
    accent: 'primary'
  },
  {
    icon: <Layers className="w-7 h-7" />,
    number: '02',
    title: 'Multi-Medium Maker',
    body: `Most studios do one thing. We do all of it — apparel, wood, resin, vinyl, laser engraving, print, custom art. Every medium is handled in-house by the same hands that designed it. That means fewer handoffs, tighter quality control, and a finished product that actually matches the vision. If it can be made, we make it.`,
    accent: 'secondary'
  },
  {
    icon: <PenTool className="w-7 h-7" />,
    number: '03',
    title: 'Custom Design Services',
    body: `We don't sell templates. Every custom build starts from scratch — your idea, your spec, your product. Whether you need a single commissioned piece, a merch run for your organization, or a full collection concept, we work directly with you from ideation through delivery. No middlemen. No outsourcing. Just us.`,
    accent: 'primary'
  },
  {
    icon: <Award className="w-7 h-7" />,
    number: '04',
    title: 'Professional Background',
    body: `Design MTO isn't a hobby turned hustle — it's built on years of real design and fabrication experience. The craft knowledge, the design thinking, the production discipline — it all comes from a professional foundation. You get studio-quality results without the corporate price tag or the runaround.`,
    accent: 'secondary'
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    number: '05',
    title: 'Local Maker Story',
    body: `We are not a warehouse. We are not a drop shipper. We are a local studio making real things for real people in the community we live in. Every piece is touched by human hands before it reaches yours. When you buy from Design MTO, you're supporting a maker — not a machine, not a multinational. That matters to us, and we think it matters to you too.`,
    accent: 'primary'
  }
];

export function DifferentiatorsSection() {
  return (
    <section id="about" className="py-32 bg-background relative z-10 border-y border-border overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Why Design MTO</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase text-white leading-tight mb-6">
              What Makes <br /><span className="text-transparent text-stroke">Us Different.</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              There are a lot of custom studios. There is only one that builds product around mental health, addiction, and domestic violence awareness — and makes it with their own hands.
            </p>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="space-y-0 divide-y divide-border">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-12 hover:bg-card/40 transition-colors duration-300 px-0 md:px-2"
            >
              {/* Number + Icon */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">{pillar.number}</span>
                <div className={`text-${pillar.accent} group-hover:text-${pillar.accent} transition-colors`}>
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <div className="flex items-center">
                <h4 className={`text-xl md:text-2xl font-display font-bold uppercase text-white leading-tight group-hover:text-${pillar.accent} transition-colors duration-300`}>
                  {pillar.title}
                </h4>
              </div>

              {/* Body */}
              <div className="flex items-center">
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
