import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Shop', href: '#shop' },
    { name: 'Custom Build', href: '#custom' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
          className="text-2xl font-display font-bold tracking-tighter text-white uppercase relative group"
        >
          Design<span className="text-primary">_MTO</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-border"></div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest rounded-none">
            Log In
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border p-6 shadow-2xl md:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="block text-lg font-display font-bold text-foreground hover:text-primary transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest rounded-none">
              Log In
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
