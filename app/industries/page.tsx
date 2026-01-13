'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  {
    title: 'Hospitals',
    description: 'Comprehensive medical product solutions for large healthcare facilities. We supply hospitals with pharmaceuticals, medical equipment, and supplies essential for patient care and treatment.',
    features: ['Bulk procurement options', 'Customized product ranges', 'Dedicated account management', 'Emergency supply services'],
    icon: '🏥',
  },
  {
    title: 'Clinics',
    description: 'Tailored healthcare products for clinics and smaller medical facilities. Our flexible supply chains ensure clinics receive the products they need when they need them.',
    features: ['Flexible ordering', 'Competitive pricing', 'Fast delivery', 'Quality assurance'],
    icon: '⚕️',
  },
  {
    title: 'Distributors',
    description: 'Partner with us to distribute TRIVX products across Middle East & Africa. We offer comprehensive support, marketing materials, and competitive terms for our distribution partners.',
    features: ['Exclusive territories', 'Marketing support', 'Training programs', 'Competitive margins'],
    icon: '📦',
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-effect rounded-2xl p-8 md:p-10 neon-border group"
    >
      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
        {industry.icon}
      </div>
      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
        {industry.title}
      </h3>
      <p className="text-white/70 mb-6 leading-relaxed text-lg">
        {industry.description}
      </p>
      <ul className="space-y-3">
        {industry.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
            className="flex items-center text-white/80"
          >
            <span className="text-neon-blue mr-3">✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Dedicated solutions for healthcare providers, facilities, and distribution partners
            across Middle East & Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} industry={industry} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-6 text-lg">
            Ready to explore partnership opportunities?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-neon-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-neon-blue/50 transition-shadow neon-border"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
