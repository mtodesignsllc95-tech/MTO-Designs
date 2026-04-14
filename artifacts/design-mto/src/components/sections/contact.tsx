import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Clock, Instagram, Facebook, Tag } from 'lucide-react';

const productCategories = [
  'Awareness & Advocacy',
  'Apparel (Tees, Hoodies, Hats)',
  'Tumblers & Drinkware',
  'Decor (Wood, Resin, Wall Art)',
  'Personalized Items',
  'Stickers & Decals',
  'Digital Downloads',
  'Custom Commission',
  'Business Solutions / Branded Merch',
  'Bundles & Gift Sets',
  'Seasonal & Holiday',
  'Party & Event',
  'Fundraiser Order',
  'Special Occasion',
  'Not sure — help me decide'
];

const budgetRanges = [
  'Under $25',
  '$25 – $75',
  '$75 – $150',
  '$150 – $300',
  '$300 – $500',
  '$500+',
  'Let\'s talk — flexible'
];

const hearOptions = [
  'Instagram',
  'TikTok',
  'Facebook',
  'Etsy',
  'Word of mouth / referral',
  'Craft fair / in-person event',
  'Google search',
  'Other'
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    description: '',
    deadline: '',
    budget: '',
    hearAbout: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Contact & Quote</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight">
              Let's Build <span className="text-muted-foreground">Something.</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm">
            Custom orders, bulk requests, collaboration ideas — send the details and Brittnay will get back to you personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
              </div>
              <a href="mailto:build@designmto.com" className="text-white font-mono hover:text-primary transition-colors">
                build@designmto.com
              </a>
            </div>

            <div className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Location</span>
              </div>
              <p className="text-white font-mono">King William, VA</p>
              <p className="text-xs text-muted-foreground mt-1">Local pickup available</p>
            </div>

            <div className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Turnaround</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ready-made</span>
                  <span className="text-white font-mono">3–5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Custom orders</span>
                  <span className="text-white font-mono">7–14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rush available</span>
                  <span className="text-secondary font-mono">+fee</span>
                </div>
              </div>
            </div>

            <div className="border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Find Us</span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Instagram className="w-4 h-4 group-hover:text-primary" />
                  <span className="text-sm font-mono">@designmto</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Facebook className="w-4 h-4 group-hover:text-primary" />
                  <span className="text-sm font-mono">Design MTO</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-4 h-4 text-center text-xs font-bold group-hover:text-primary">TK</span>
                  <span className="text-sm font-mono">@designmto</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="border border-primary/30 bg-primary/5 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 border border-primary flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white uppercase mb-3">Request Received</h4>
                <p className="text-muted-foreground max-w-sm">
                  Brittnay will review your request and reach out personally — usually within 24–48 hours. Thank you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-mono text-primary uppercase tracking-widest hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border bg-card p-8 md:p-10 space-y-6">
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-2">Request a Quote</h4>
                <p className="text-xs text-muted-foreground mb-6">Fill in as much detail as you can. The more Brittnay knows, the better she can help.</p>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(optional)"
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Product Type *</label>
                    <select
                      name="productType"
                      required
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a category</option>
                      {productCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Description of Request *</label>
                  <textarea
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell Brittnay what you have in mind — colors, text, size, quantity, occasion, etc."
                    className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 resize-none"
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Deadline / Event Date</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">How Did You Hear About Us?</label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full bg-background border border-border text-white px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select one</option>
                    {hearOptions.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-background py-4 text-sm font-mono font-bold uppercase tracking-widest hover:bg-primary/80 transition-colors flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" /> Submit Quote Request
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Brittnay responds personally within 24–48 hours. Custom orders require a 50% deposit to begin.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
