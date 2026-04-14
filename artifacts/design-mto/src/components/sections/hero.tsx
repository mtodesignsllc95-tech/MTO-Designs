import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroBg} 
          alt="Industrial Workshop" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Sparks / Dust Particles Effect (Simple CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none noise-bg opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-3 py-1 border border-primary/30 bg-primary/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Digital Forge Active</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ideas built <br />
            <span className="text-stroke text-transparent">with raw</span> <br />
            precision.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are a multicraft design and product studio. Apparel, wood, resin, vinyl, print, and custom art. Everything designed, built, and finished in-house.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold group">
              Start a Build
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 hidden lg:block" />
      <div className="absolute bottom-10 left-12 animate-bounce hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
