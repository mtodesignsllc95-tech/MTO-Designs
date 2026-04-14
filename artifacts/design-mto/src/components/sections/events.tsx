import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventBg from '@/assets/event-bg.png';

const events = [
  {
    id: 1,
    title: 'Neon Forge Pop-up',
    date: 'OCT 15',
    location: 'Sector 7 Workshop',
    type: 'Exhibition & Shop',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Resin Pour Masterclass',
    date: 'NOV 02',
    location: 'Main Studio Floor',
    type: 'Workshop',
    status: 'Limited Spots'
  },
  {
    id: 3,
    title: 'Winter Apparel Drop',
    date: 'DEC 10',
    location: 'Online & In-store',
    type: 'Product Launch',
    status: 'Announced'
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Transmission</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-6">Live <br/><span className="text-muted-foreground">Action.</span></h3>
            <p className="text-muted-foreground mb-8">
              Join us in the physical world. Workshops, product drops, and open studio nights. Experience the build process firsthand.
            </p>
            <div className="relative h-64 overflow-hidden hidden lg:block">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img 
                src={eventBg} 
                alt="Workshop Event" 
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span className="font-mono text-xs text-primary uppercase tracking-widest">Signal Active</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-6">
              {events.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-card border border-border hover:border-primary transition-colors duration-300 gap-6"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="text-center">
                      <span className="block text-3xl font-display font-bold text-white uppercase">{event.date.split(' ')[1]}</span>
                      <span className="block text-sm font-mono text-primary uppercase tracking-widest">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="w-px h-12 bg-border hidden md:block" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono px-2 py-0.5 bg-background border border-border text-muted-foreground uppercase">{event.type}</span>
                        <span className="text-xs font-mono text-secondary uppercase flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {event.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 font-mono">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full md:w-auto border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-none uppercase tracking-widest font-bold shrink-0">
                    RSVP
                  </Button>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center md:text-right"
            >
              <a href="#" className="inline-flex items-center text-sm font-mono text-primary uppercase tracking-widest hover:text-white transition-colors group">
                View Full Calendar
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
