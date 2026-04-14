import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import customBuildImg from '@/assets/custom-build.png';

export function CustomBuildSection() {
  return (
    <section id="custom" className="py-32 bg-background relative z-10 overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none" />
            <img
              src={customBuildImg}
              alt="Custom Build Process"
              className="w-full h-[600px] object-cover grayscale opacity-80"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-card border border-border flex items-center justify-center p-6 z-20">
              <p className="font-mono text-sm text-secondary uppercase tracking-widest text-center">
                Your Idea.<br />Our Hands.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Custom Build</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">Start a<br />Build.</h3>
            <p className="text-muted-foreground mb-10">
              Custom merch run? A one-of-a-kind piece? Collab on a collection? We work with individuals, organizations, and causes. Tell us what you need and we'll make it real — start to finish, in-house.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                  <Input className="bg-card border-border rounded-none focus-visible:ring-primary h-12" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input type="email" className="bg-card border-border rounded-none focus-visible:ring-primary h-12" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Project Type</label>
                <select className="flex h-12 w-full border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-foreground appearance-none">
                  <option>Custom Apparel / Merch</option>
                  <option>Chaos &amp; Control Collection</option>
                  <option>Fuck Addiction Collection</option>
                  <option>Surviving Just on the Pain Collection</option>
                  <option>Wood / Resin / Fabrication</option>
                  <option>Laser Engraving</option>
                  <option>Vinyl / Print</option>
                  <option>Custom Art Commission</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Tell Us About Your Project</label>
                <Textarea
                  className="bg-card border-border rounded-none focus-visible:ring-primary min-h-[120px]"
                  placeholder="What do you need built? Quantity, timeline, budget range, any details that matter..."
                />
              </div>

              <Button type="button" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest font-bold group">
                Submit Your Build Request
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
