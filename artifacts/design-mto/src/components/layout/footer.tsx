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
            <p className="text-muted-foreground max-w-sm mb-4">
              A multicraft design and fabrication studio — and a platform for causes that matter. Every piece is built in-house. Every collection carries a purpose.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono px-2 py-1 border border-primary/30 text-primary">Chaos &amp; Control</span>
              <span className="text-xs font-mono px-2 py-1 border border-secondary/30 text-secondary">Fuck Addiction</span>
              <span className="text-xs font-mono px-2 py-1 border border-white/20 text-white/60">Surviving Just on the Pain</span>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-border flex items-center justify-center text-xs font-mono text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-colors cursor-pointer">
                IG
              </div>
              <div className="w-10 h-10 border border-border flex items-center justify-center text-xs font-mono text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-colors cursor-pointer">
                TW
              </div>
              <div className="w-10 h-10 border border-border flex items-center justify-center text-xs font-mono text-muted-foreground hover:bg-primary hover:text-background hover:border-primary transition-colors cursor-pointer">
                TK
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Navigate</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#collections" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#custom" className="hover:text-primary transition-colors">Custom Build</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-muted-foreground font-mono text-sm">
              <li>build@designmto.com</li>
              <li className="mt-4 text-xs leading-relaxed text-muted-foreground/70">
                If you or someone you know needs help:<br />
                <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SAMHSA Helpline: 1-800-662-4357</a><br />
                <a href="https://www.thehotline.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DV Hotline: 1-800-799-7233</a><br />
                <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Crisis Line: 988</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Design_MTO Studio. Built with purpose.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Always Building</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
