import { motion } from 'framer-motion';
import { Heart, Percent, Hammer, Award } from 'lucide-react';
import businessCard from '@assets/file_00000000f09c71fdb760c7c7f59e64a1_1776130158276.png';

const pillars = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Born from Real Experiences',
    desc: 'Design MTO was built around causes that hit home — mental health, addiction, and domestic violence. This isn\'t advocacy for appearances. It\'s personal.'
  },
  {
    icon: <Percent className="w-5 h-5" />,
    title: '10% Goes to the Cause Fund',
    desc: 'Every single collection sale — 10% is set aside for the cause it represents. Mental health resources, recovery support, and DV survivor organizations.'
  },
  {
    icon: <Hammer className="w-5 h-5" />,
    title: 'Everything Built In-House',
    desc: 'Vinyl, resin, apparel, wood, digital, laser engraving — all of it done by hand, by Brittnay, in King William, VA. No outsourcing. No cutting corners.'
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Professional Background',
    desc: 'Years of design and fabrication experience before MTO became its own thing. The craft is real. The eye for detail is real.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">About</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight mb-6">
              The Maker<br />
              <span className="text-muted-foreground">Behind the Studio.</span>
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Mommy's Time Out Designs LLC was started by <span className="text-white font-semibold">Brittnay Upchurch</span> — a multicraft designer and fabricator based in King William, Virginia. MTO began as a creative outlet and became something much larger: a platform for causes that matter.
              </p>
              <p>
                Every collection at Design MTO is tied to a real cause. <span className="text-primary">Chaos & Control</span> speaks to mental health. <span className="text-secondary">Fuck Addiction</span> doesn't sugarcoat what addiction does to families. <span className="text-white">Surviving Just on the Pain</span> honors domestic violence survivors. These aren't themes. They're lived experiences.
              </p>
              <p>
                The studio handles vinyl, resin, apparel, wood fabrication, laser engraving, digital design, and custom builds — everything in-house. If you can imagine it, it can be made.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 border border-primary/30 bg-primary/5 mb-10">
              <span className="text-2xl font-display font-black text-primary">10%</span>
              <span className="text-sm text-muted-foreground">of every collection sale goes directly to the cause fund for that collection</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="shrink-0 w-8 h-8 border border-primary/30 flex items-center justify-center text-primary mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white uppercase mb-1">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Business Card + Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative border border-border bg-card p-2">
              <img
                src={businessCard}
                alt="Brittnay Upchurch — MTO Designs"
                className="w-full object-contain"
              />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1" />
            </div>

            {/* Info block below card */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="border border-border bg-card p-5">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Owner / Designer</p>
                <p className="text-white font-display font-bold uppercase">Brittnay Upchurch</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-display font-bold uppercase">King William, VA</p>
              </div>
              <div className="border border-border bg-card p-5">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Mediums</p>
                <p className="text-white font-display font-bold text-sm uppercase">Vinyl · Resin · Apparel · Wood · Digital</p>
              </div>
              <div className="border border-primary/30 bg-primary/5 p-5">
                <p className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Collections</p>
                <p className="text-primary font-display font-bold text-sm uppercase">3 Cause-Driven Lines</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
