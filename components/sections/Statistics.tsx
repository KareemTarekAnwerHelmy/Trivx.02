'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '500+', label: 'Healthcare Partners', icon: '🏥' },
  { value: '50+', label: 'Countries Served', icon: '🌍' },
  { value: '1000+', label: 'Products', icon: '💊' },
  { value: '99%', label: 'Quality Assurance', icon: '✅' },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-effect rounded-2xl p-8 text-center neon-border"
    >
      <div className="text-4xl mb-4">{stat.icon}</div>
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent mb-2"
      >
        {stat.value}
      </motion.div>
      <div className="text-white/70 text-lg font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Trusted by Healthcare Leaders
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and global reach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
