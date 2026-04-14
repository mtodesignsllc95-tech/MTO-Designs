import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Heart, Flame, Shield, TrendingUp } from 'lucide-react';

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const collections = [
  {
    id: 'chaos',
    name: 'Chaos & Control',
    cause: 'Mental Health Awareness',
    icon: <Heart className="w-5 h-5" />,
    raised: 1840,
    goal: 5000,
    directed: 'National Alliance on Mental Illness (NAMI) & local crisis resources',
    accent: 'primary',
    barColor: 'bg-primary'
  },
  {
    id: 'addiction',
    name: 'Fuck Addiction',
    cause: 'Addiction Recovery',
    icon: <Flame className="w-5 h-5" />,
    raised: 1120,
    goal: 5000,
    directed: 'Local recovery centers & SAMHSA community programs',
    accent: 'secondary',
    barColor: 'bg-secondary'
  },
  {
    id: 'sjop',
    name: 'Surviving Just on the Pain',
    cause: 'Domestic Violence',
    icon: <Shield className="w-5 h-5" />,
    raised: 760,
    goal: 5000,
    directed: 'Local DV shelters & National DV Hotline',
    accent: 'white',
    barColor: 'bg-white'
  }
];

const totalRaised = collections.reduce((sum, c) => sum + c.raised, 0);
const totalGoal = collections.reduce((sum, c) => sum + c.goal, 0);

export function DonationTrackerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" className="py-32 bg-card relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.2em] mb-4">10% Fund</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">
              Real Money. <span className="text-muted-foreground">Real Impact.</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            10% of every sale goes directly into the cause fund for that collection. No vague promises. This is the running total — updated as we sell.
          </p>
        </motion.div>

        {/* Total Fund Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 p-10 md:p-14 bg-background border border-border overflow-hidden"
        >
          <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-white/40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">
            <div className="md:col-span-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-3">Total Raised to Date</p>
              <div className="text-6xl md:text-8xl font-display font-black text-white leading-none mb-4">
                {isInView && <AnimatedNumber value={totalRaised} prefix="$" />}
              </div>
              <div className="w-full h-2 bg-border rounded-none mt-6 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-white/60"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(totalRaised / totalGoal) * 100}%` } : { width: 0 }}
                  transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                />
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2 uppercase tracking-wider">
                ${totalRaised.toLocaleString()} of ${totalGoal.toLocaleString()} combined goal
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 bg-card border border-border">
                <TrendingUp className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Commitment</p>
                  <p className="text-white font-display font-bold uppercase text-lg">10% of Every Sale</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card border border-border">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Status</p>
                  <p className="text-primary font-mono uppercase text-sm tracking-widest">Actively Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Per-Collection Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, idx) => {
            const pct = Math.round((col.raised / col.goal) * 100);
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-background border border-border p-8 relative overflow-hidden group hover:border-current transition-colors duration-300"
              >
                <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />

                {/* Collection badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 border border-${col.accent}/30 text-${col.accent} bg-${col.accent}/10 rounded-full mb-6 text-xs font-mono uppercase tracking-widest`}>
                  {col.icon}
                  {col.cause}
                </div>

                <h4 className="text-lg font-display font-bold uppercase text-white mb-1">{col.name}</h4>

                <div className={`text-4xl font-display font-black text-${col.accent} mb-1`}>
                  {isInView && <AnimatedNumber value={col.raised} prefix="$" />}
                </div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6">
                  of ${col.goal.toLocaleString()} goal
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-border overflow-hidden mb-2">
                  <motion.div
                    className={`h-full ${col.barColor}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${pct}%` } : { width: 0 }}
                    transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 + idx * 0.15 }}
                  />
                </div>
                <p className={`text-xs font-mono text-${col.accent} uppercase tracking-widest mb-6`}>{pct}% funded</p>

                {/* Where it goes */}
                <div className="border-t border-border pt-6">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Directed toward</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{col.directed}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accountability note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mt-12"
        >
          Figures updated monthly. Receipts available on request.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
}
