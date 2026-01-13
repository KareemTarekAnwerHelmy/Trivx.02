'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const countries = [
    'Select Country',
    'Egypt', 'Saudi Arabia', 'UAE', 'South Africa', 'Nigeria', 'Kenya',
    'Morocco', 'Algeria', 'Tunisia', 'Sudan', 'Ethiopia', 'Ghana',
    'Tanzania', 'Uganda', 'Angola', 'Mozambique', 'Other',
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to partner with us? Fill out the form below or contact us directly.
            We're here to help you bring quality healthcare products to your region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 text-center neon-border"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <a href="mailto:info@trivx.com" className="text-neon-blue hover:text-neon-cyan transition-colors">
              info@trivx.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 text-center neon-border"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <a href="tel:+1234567890" className="text-neon-blue hover:text-neon-cyan transition-colors">
              +1 (234) 567-890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect rounded-2xl p-6 text-center neon-border"
          >
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Region</h3>
            <p className="text-neon-blue">Middle East & Africa</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 md:p-12 neon-border">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                Thank you! We'll get back to you soon.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="country" className="block text-white font-medium mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                >
                  {countries.map((country) => (
                    <option key={country} value={country} className="bg-dark-light">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
                placeholder="+1 (234) 567-890"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                placeholder="Tell us about your partnership interests or questions..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-neon-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-neon-blue/50 transition-shadow neon-border"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
