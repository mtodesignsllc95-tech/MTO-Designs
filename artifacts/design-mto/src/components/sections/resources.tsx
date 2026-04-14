import { motion } from 'framer-motion';
import { ExternalLink, Phone, Globe, Heart, Flame, Shield } from 'lucide-react';

const causes = [
  {
    id: 'mental-health',
    icon: <Heart className="w-6 h-6" />,
    collection: 'Chaos & Control',
    cause: 'Mental Health',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/5',
    accentBg: 'bg-primary',
    desc: 'Mental health affects 1 in 5 adults in the U.S. Chaos is real. Getting help is strength, not weakness.',
    stats: [
      { label: 'Adults affected annually', value: '~57 million' },
      { label: 'Receive treatment', value: 'Less than half' },
    ],
    resources: [
      {
        name: '988 Suicide & Crisis Lifeline',
        type: 'Hotline',
        contact: 'Call or text 988',
        url: 'https://988lifeline.org',
        note: '24/7 free, confidential support'
      },
      {
        name: 'NAMI Helpline',
        type: 'Support',
        contact: '1-800-950-6264',
        url: 'https://www.nami.org/help',
        note: 'National Alliance on Mental Illness'
      },
      {
        name: 'Crisis Text Line',
        type: 'Text',
        contact: 'Text HOME to 741741',
        url: 'https://www.crisistextline.org',
        note: 'Free, 24/7 crisis counseling'
      },
      {
        name: 'MentalHealth.gov',
        type: 'Education',
        contact: 'mentalhealth.gov',
        url: 'https://www.mentalhealth.gov',
        note: 'Resources, guidance, local services'
      }
    ]
  },
  {
    id: 'addiction',
    icon: <Flame className="w-6 h-6" />,
    collection: 'Fuck Addiction',
    cause: 'Addiction Recovery',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/5',
    accentBg: 'bg-secondary',
    desc: 'Addiction isn\'t a choice — recovery is possible. Whether you\'re in it or watching someone you love go through it, support exists.',
    stats: [
      { label: 'Affected by substance use disorder', value: '~48 million' },
      { label: 'Who seek treatment', value: '~10%' },
    ],
    resources: [
      {
        name: 'SAMHSA National Helpline',
        type: 'Hotline',
        contact: '1-800-662-4357',
        url: 'https://www.samhsa.gov/find-help/national-helpline',
        note: 'Free, confidential, 24/7'
      },
      {
        name: 'Narcotics Anonymous',
        type: 'Support Groups',
        contact: 'na.org',
        url: 'https://www.na.org',
        note: 'Find local NA meetings'
      },
      {
        name: 'Al-Anon / Alateen',
        type: 'Family Support',
        contact: '1-888-425-2666',
        url: 'https://al-anon.org',
        note: 'For families of people with addiction'
      },
      {
        name: 'SMART Recovery',
        type: 'Program',
        contact: 'smartrecovery.org',
        url: 'https://www.smartrecovery.org',
        note: 'Science-based addiction recovery'
      }
    ]
  },
  {
    id: 'dv',
    icon: <Shield className="w-6 h-6" />,
    collection: 'Surviving Just on the Pain',
    cause: 'Domestic Violence',
    color: 'text-white',
    borderColor: 'border-white/20',
    bgColor: 'bg-white/5',
    accentBg: 'bg-white',
    desc: 'You are not alone. Domestic violence is not your fault. Resources exist — confidential, free, and ready when you are.',
    stats: [
      { label: 'Affected by DV in the U.S.', value: '10 million/year' },
      { label: 'Calls to DV hotlines daily', value: '~20,000' },
    ],
    resources: [
      {
        name: 'National DV Hotline',
        type: 'Hotline',
        contact: '1-800-799-7233',
        url: 'https://www.thehotline.org',
        note: '24/7 confidential support & safety planning'
      },
      {
        name: 'Crisis Text Line',
        type: 'Text',
        contact: 'Text START to 88788',
        url: 'https://www.crisistextline.org',
        note: 'Confidential DV crisis text support'
      },
      {
        name: 'Virginia DCJS DV Resources',
        type: 'Local',
        contact: 'dcjs.virginia.gov',
        url: 'https://www.dcjs.virginia.gov/victims-services/victim-resources/domestic-violence',
        note: 'Virginia-specific resources & shelters'
      },
      {
        name: 'WomensLaw.org',
        type: 'Legal',
        contact: 'womenslaw.org',
        url: 'https://www.womenslaw.org',
        note: 'Legal info by state, chat support'
      }
    ]
  }
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-32 bg-card relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">Resources</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight">
            The Work <span className="text-muted-foreground">Goes Beyond the Product.</span>
          </h3>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Design MTO exists because these causes are real. These resources are here year-round — not just during awareness months. If you or someone you know needs help, start here.
          </p>
        </div>

        <div className="space-y-12">
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`border ${cause.borderColor} bg-background overflow-hidden`}
            >
              {/* Header */}
              <div className={`${cause.bgColor} border-b ${cause.borderColor} p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 justify-between`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 border ${cause.borderColor} flex items-center justify-center ${cause.color}`}>
                    {cause.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase tracking-widest ${cause.color} mb-0.5`}>{cause.collection}</p>
                    <h4 className="text-xl font-display font-black text-white uppercase">{cause.cause}</h4>
                  </div>
                </div>
                <div className="flex gap-6">
                  {cause.stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <p className={`text-lg font-display font-black ${cause.color}`}>{s.value}</p>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider max-w-[100px]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{cause.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cause.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group block border ${cause.borderColor} hover:${cause.bgColor} p-5 transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border ${cause.borderColor} ${cause.color}`}>
                          {res.type}
                        </span>
                        <ExternalLink className={`w-3 h-3 ${cause.color} opacity-0 group-hover:opacity-100 transition-opacity shrink-0`} />
                      </div>
                      <h5 className="text-sm font-display font-bold text-white uppercase leading-tight mb-2">{res.name}</h5>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Phone className="w-3 h-3 text-muted-foreground shrink-0" />
                        <span className={`text-xs font-mono ${cause.color}`}>{res.contact}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{res.note}</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border border-border bg-background p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">A Note from Brittnay</p>
            <p className="text-white leading-relaxed">
              "These causes are in my life. They're in the lives of people I love. Design MTO is how I use what I'm good at to do something that matters. Every piece sold puts money toward resources like these. That's the whole point."
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-background transition-all"
          >
            <Globe className="w-4 h-4" /> Get Involved
          </a>
        </motion.div>
      </div>
    </section>
  );
}
