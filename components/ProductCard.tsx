'use client';

import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function ProductCard({ title, description, icon, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-effect rounded-2xl p-8 h-full neon-border group cursor-pointer"
    >
      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
        className="mt-6 h-0.5 bg-gradient-to-r from-primary to-neon-blue"
      />
    </motion.div>
  );
}
