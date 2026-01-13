'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-light border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent mb-4">
                TRIVX
              </h3>
              <p className="text-white/70 text-sm mb-4 max-w-md">
                Leading manufacturer of medicines and medical products serving
                Middle East & Africa with reliability, quality, and timely delivery.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-neon-blue transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="mailto:info@trivx.com" className="hover:text-neon-blue transition-colors">
                    info@trivx.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-neon-blue transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {currentYear} TRIVX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/50 hover:text-neon-blue transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-neon-blue transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
