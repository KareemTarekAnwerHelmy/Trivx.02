'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    title: 'Mission',
    description: 'To provide high-quality, reliable medical products that improve healthcare outcomes across Middle East & Africa, ensuring accessibility and excellence in every delivery.',
    icon: '🎯',
  },
  {
    title: 'Vision',
    description: 'To become the most trusted healthcare product manufacturer and distributor in the region, recognized for innovation, quality, and unwavering commitment to healthcare excellence.',
    icon: '🌟',
  },
  {
    title: 'Quality & Compliance',
    description: 'We adhere to the highest international standards and regulatory requirements. Our quality assurance processes ensure that every product meets stringent safety and efficacy standards.',
    icon: '✅',
  },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
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
        {value.icon}
      </div>
      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
        {value.title}
      </h3>
      <p className="text-white/70 leading-relaxed text-lg">
        {value.description}
      </p>
    </motion.div>
  );
}

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
              About TRIVX
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Leading the future of healthcare product manufacturing and distribution
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-16 neon-border"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Who We Are
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            TRIVX is a leading manufacturer of medicines and medical products serving
            healthcare providers, hospitals, clinics, and distributors across Middle East & Africa.
            With a commitment to excellence, quality, and timely delivery, we have established
            ourselves as a trusted partner in the healthcare industry.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Our comprehensive product portfolio includes pharmaceuticals, medical equipment,
            diapers, and medical gloves—all manufactured to the highest international standards.
            We understand the critical importance of reliable healthcare products and work
            tirelessly to ensure that healthcare providers have access to the quality supplies
            they need to serve their communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/70 mb-6 text-lg">
            Want to learn more about partnering with us?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-neon-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-neon-blue/50 transition-shadow neon-border"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
