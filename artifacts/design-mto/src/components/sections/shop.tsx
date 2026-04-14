import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Shirt, Download, Palette, TreePine, Sticker, User, Wrench, Building2, Package, Leaf, PartyPopper, Coffee, Star } from 'lucide-react';
import chaosControlLogo from '@assets/1775856165441_1776130301757.png';
import sjopArtwork from '@assets/FB_IMG_1774509727181_1776130301749.jpg';
import fuckAddictionLogo from '@assets/fuck-addiction-logo_1776130396978.jpg';

const categories = [
  {
    id: 'awareness',
    icon: <Tag className="w-5 h-5" />,
    name: 'Awareness & Advocacy',
    desc: 'Tees, tumblers, and keychains tied to the three collections. 10% of every sale goes to the cause fund.',
    priceRange: '$8 – $45',
    badge: 'Most Popular',
    badgeColor: 'bg-primary/20 text-primary border-primary/40',
    borderColor: 'border-primary/30',
    accentColor: 'text-primary',
    image: chaosControlLogo,
    imageFit: 'object-contain p-4 bg-black'
  },
  {
    id: 'apparel',
    icon: <Shirt className="w-5 h-5" />,
    name: 'Apparel',
    desc: 'Graphic tees, hoodies, custom hats, and aprons. Premium blanks, in-house printing, sizes S–3XL.',
    priceRange: '$20 – $55',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: fuckAddictionLogo,
    imageFit: 'object-contain p-4 bg-black'
  },
  {
    id: 'tumblers',
    icon: <Coffee className="w-5 h-5" />,
    name: 'Tumblers & Drinkware',
    desc: 'Epoxy tumblers, glitter cups, engraved water bottles, wine tumblers — 20oz, 30oz, 40oz.',
    priceRange: '$25 – $65',
    badge: 'Premium',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/40',
    borderColor: 'border-secondary/30',
    accentColor: 'text-secondary',
    image: null,
    imageFit: ''
  },
  {
    id: 'decor',
    icon: <TreePine className="w-5 h-5" />,
    name: 'Decor',
    desc: 'Wood signs, resin coasters, wall hangings, and shelf art. Hand-finished in-house.',
    priceRange: '$15 – $85',
    badge: 'Premium',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/40',
    borderColor: 'border-secondary/30',
    accentColor: 'text-secondary',
    image: null,
    imageFit: ''
  },
  {
    id: 'personalized',
    icon: <User className="w-5 h-5" />,
    name: 'Personalized',
    desc: 'Name tumblers, monogram gifts, custom family signs. Made to order, made for someone specific.',
    priceRange: '$20 – $75',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: sjopArtwork,
    imageFit: 'object-cover object-top'
  },
  {
    id: 'stickers',
    icon: <Sticker className="w-5 h-5" />,
    name: 'Stickers & Decals',
    desc: 'Vinyl laptop stickers, car decals, planner stickers, and wall decals. Impulse-priced, cause-driven.',
    priceRange: '$3 – $15',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: null,
    imageFit: ''
  },
  {
    id: 'digital',
    icon: <Download className="w-5 h-5" />,
    name: 'Digital Downloads',
    desc: 'Printable planners, SVG files, wall art prints, and journal pages. Instant download. No wait, no shipping.',
    priceRange: '$3 – $25',
    badge: 'High Margin',
    badgeColor: 'bg-primary/20 text-primary border-primary/40',
    borderColor: 'border-primary/30',
    accentColor: 'text-primary',
    image: null,
    imageFit: ''
  },
  {
    id: 'custom',
    icon: <Palette className="w-5 h-5" />,
    name: 'Custom',
    desc: 'Bespoke art commissions, one-of-a-kind resin pieces, custom apparel runs. No templates. Built for you.',
    priceRange: '$40 – $200+',
    badge: 'Quote-Based',
    badgeColor: 'bg-white/10 text-white border-white/20',
    borderColor: 'border-white/20',
    accentColor: 'text-white',
    image: null,
    imageFit: ''
  },
  {
    id: 'bundles',
    icon: <Package className="w-5 h-5" />,
    name: 'Bundles',
    desc: '"Self-Care Sunday" bundle, "Teacher Appreciation" set, "New Mom" gift box. Curated, ready to gift.',
    priceRange: '$35 – $100',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: null,
    imageFit: ''
  },
  {
    id: 'seasonal',
    icon: <Leaf className="w-5 h-5" />,
    name: 'Seasonal & Holiday',
    desc: 'Christmas ornaments, Valentine\'s tumblers, Halloween decor, Easter gifts. Timed drops, limited runs.',
    priceRange: '$10 – $65',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: null,
    imageFit: ''
  },
  {
    id: 'party',
    icon: <PartyPopper className="w-5 h-5" />,
    name: 'Party & Event',
    desc: 'Custom party favors, event signage, themed decor packages, and cake toppers. Any occasion.',
    priceRange: '$10 – $150',
    badge: null,
    badgeColor: '',
    borderColor: 'border-border',
    accentColor: 'text-muted-foreground',
    image: null,
    imageFit: ''
  },
  {
    id: 'business',
    icon: <Building2 className="w-5 h-5" />,
    name: 'Business Solutions',
    desc: 'Branded merchandise, logo items, employee gift sets, event swag. B2B pricing available.',
    priceRange: '$50 – $500+',
    badge: 'B2B',
    badgeColor: 'bg-white/10 text-white border-white/20',
    borderColor: 'border-white/20',
    accentColor: 'text-white',
    image: null,
    imageFit: ''
  },
  {
    id: 'fundraiser',
    icon: <Wrench className="w-5 h-5" />,
    name: 'Fundraiser',
    desc: 'Custom team spirit wear, school logo items, nonprofit event merchandise. MOQ applies.',
    priceRange: '$15 – $45',
    badge: 'MOQ Required',
    badgeColor: 'bg-white/10 text-white border-white/20',
    borderColor: 'border-white/20',
    accentColor: 'text-white',
    image: null,
    imageFit: ''
  },
  {
    id: 'special',
    icon: <Star className="w-5 h-5" />,
    name: 'Special Occasion',
    desc: 'Wedding party gifts, graduation keepsakes, baby shower sets, memorial items. Made with intention.',
    priceRange: '$20 – $120',
    badge: 'Premium',
    badgeColor: 'bg-secondary/20 text-secondary border-secondary/40',
    borderColor: 'border-secondary/30',
    accentColor: 'text-secondary',
    image: null,
    imageFit: ''
  }
];

export function ShopSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Categories' },
    { id: 'awareness', label: 'Awareness' },
    { id: 'apparel', label: 'Apparel' },
    { id: 'gifts', label: 'Gifts & Decor' },
    { id: 'custom', label: 'Custom & B2B' },
  ];

  const filterMap: Record<string, string[]> = {
    all: categories.map(c => c.id),
    awareness: ['awareness', 'digital', 'stickers'],
    apparel: ['apparel', 'tumblers', 'personalized'],
    gifts: ['decor', 'bundles', 'seasonal', 'party', 'special'],
    custom: ['custom', 'business', 'fundraiser'],
  };

  const visible = filterMap[activeFilter];

  return (
    <section id="shop" className="py-32 bg-background relative z-10 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.2em] mb-4">Shop</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">
              Everything <span className="text-muted-foreground">Built In-House.</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm">
            70+ products across 14 categories. Apparel, art, decor, digital downloads, custom builds, and more — all designed and finished by Brittnay.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-primary text-background border-primary'
                  : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.filter(c => visible.includes(c.id)).map((cat, idx) => (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={`group relative bg-card border ${cat.borderColor} hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden`}
            >
              {/* Image area */}
              {cat.image ? (
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${cat.imageFit}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              ) : (
                <div className="h-20 bg-background/50 flex items-center justify-center">
                  <div className={`${cat.accentColor} opacity-30 group-hover:opacity-60 transition-opacity`}>
                    {cat.icon}
                  </div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {cat.badge && (
                  <span className={`self-start text-[10px] font-mono px-2 py-0.5 border uppercase tracking-widest mb-3 ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                )}

                <div className="flex items-start gap-2 mb-2">
                  <span className={`mt-0.5 shrink-0 ${cat.accentColor}`}>{cat.icon}</span>
                  <h4 className="text-sm font-display font-bold text-white uppercase leading-tight">{cat.name}</h4>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{cat.desc}</p>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className={`text-sm font-mono font-bold ${cat.accentColor}`}>{cat.priceRange}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Browse <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border"
        >
          <div>
            <p className="text-white font-display font-bold text-lg uppercase">Need something specific?</p>
            <p className="text-muted-foreground text-sm">Custom orders start with a quote. Turnaround 3–14 business days depending on complexity.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-background px-8 py-3 text-sm font-mono font-bold uppercase tracking-widest hover:bg-primary/80 transition-colors"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
