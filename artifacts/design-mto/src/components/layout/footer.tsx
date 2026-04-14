import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-card py-16 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold tracking-tighter text-white uppercase mb-4">
              Design<span className="text-primary">_MTO</span>
            </h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              A multicraft design and product studio turning ideas into physical reality. Forged in the dark.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-colors cursor-pointer">
                IG
              </div>
              <div className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-background transition-colors cursor-pointer">
                TW
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#custom" className="hover:text-primary transition-colors">Custom Build</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>build@designmto.com</li>
              <li>Sector 7, Industrial District</li>
              <li>Open by appointment only.</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Design_MTO Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
