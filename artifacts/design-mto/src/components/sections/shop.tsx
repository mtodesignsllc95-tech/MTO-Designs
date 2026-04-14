import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import chaosControlLogo from '@assets/1775856165441_1776130301757.png';
import sjopArtwork from '@assets/FB_IMG_1774509727181_1776130301749.jpg';
import fuckAddictionLogo from '@assets/fuck-addiction-logo_1776130396978.jpg';

const products = [
  {
    id: 1,
    name: 'Chaos & Control Heavyweight Tee',
    collection: 'Chaos & Control',
    price: '$45',
    image: chaosControlLogo,
    imageFit: 'object-contain p-6 bg-black',
    status: 'In Stock',
    collectionColor: 'text-primary',
    badgeColor: 'border-primary/30 text-primary'
  },
  {
    id: 2,
    name: 'Fuck Addiction — Statement Hoodie',
    collection: 'Fuck Addiction',
    price: '$85',
    image: fuckAddictionLogo,
    imageFit: 'object-contain p-6 bg-black',
    status: 'Low Stock',
    collectionColor: 'text-secondary',
    badgeColor: 'border-secondary/30 text-secondary'
  },
  {
    id: 3,
    name: 'SJOP — Survivor Pullover',
    collection: 'Surviving Just on the Pain',
    price: '$75',
    image: sjopArtwork,
    imageFit: 'object-cover object-top',
    status: 'Made to Order',
    collectionColor: 'text-white/70',
    badgeColor: 'border-white/20 text-white/60'
  },
];

export function ShopSection() {
  return (
    <section id="shop" className="py-32 bg-background relative z-10 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-sm font-mono text-secondary uppercase tracking-[0.2em] mb-4">Shop</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Wear the <span className="text-muted-foreground">Message.</span></h3>
          </div>
          <p className="text-muted-foreground max-w-sm">Every piece is designed and finished in-house. Apparel, art, and custom builds — all carrying a cause.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square bg-card border border-border mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 ${product.imageFit}`}
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-mono px-2 py-1 border ${product.badgeColor} bg-background/80 uppercase tracking-wider`}>
                    {product.collection}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur border border-border px-3 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {product.status}
                </div>

                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <Button className="bg-white text-black hover:bg-secondary rounded-none font-bold uppercase tracking-wider">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-display font-bold text-white uppercase leading-tight">{product.name}</h4>
                </div>
                <span className={`font-mono shrink-0 ml-4 ${product.collectionColor}`}>{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#" className="inline-flex items-center text-sm font-mono text-primary uppercase tracking-widest hover:text-white transition-colors group">
            View Full Store
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
