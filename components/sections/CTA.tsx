'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neon-blue/20" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center neon-border"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Ready to Partner with Us?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Join our network of distributors and bring quality healthcare products
            to your region. Let's build a healthier future together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-primary to-neon-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-neon-blue/50 transition-shadow neon-border"
            >
              <Link href="/contact">Become a Distributor</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
