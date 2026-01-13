# TRIVX Corporate Portfolio Website

A modern, high-performance, futuristic corporate portfolio website for TRIVX, a medical products company serving Middle East & Africa.

## Features

- **Modern Design**: Futuristic 2077 aesthetic with clean, professional styling
- **Color Scheme**: White, Blue, and subtle Neon accents
- **Animations**: Smooth scrolling, hover effects, and Framer Motion interactions
- **Responsive**: Fully mobile-responsive design
- **Performance**: Optimized for fast loading

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 18** - UI library

## Pages

1. **Home** - Hero section, key statistics, and CTA
2. **Products** - Pharmaceuticals, Medical Equipment, Diapers, Gloves
3. **Industries** - Hospitals, Clinics, Distributors
4. **About** - Mission, Vision, Quality & Compliance
5. **Contact** - Partnership inquiry form with contact information

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Design System

### Colors
- **Primary Blue**: #0066FF
- **Neon Blue**: #00D9FF
- **Neon Cyan**: #00FFFF
- **Dark Background**: #0A0E27
- **Dark Light**: #1A1F3A

### Components

- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Full-screen hero section with animated background
- **Statistics** - Key numbers and metrics
- **ProductCard** - Product showcase cards
- **Footer** - Company information and links
- **CTA** - Call-to-action sections

## Customization

### Images/Icons

Currently using emoji icons as placeholders. Replace with:
- Professional medical product images
- SVG icons from libraries like Heroicons or Lucide
- Lottie animations for complex illustrations

### Animations

All animations use Framer Motion. Customize in:
- `components/sections/` - Section animations
- `components/ProductCard.tsx` - Card hover effects
- `app/globals.css` - Custom keyframes

### Contact Form

The contact form currently logs to console. Integrate with:
- Email service (SendGrid, Resend, etc.)
- Backend API
- Form handling service (Formspree, etc.)

## Performance Optimization

- Next.js automatic code splitting
- Optimized images (when added)
- CSS optimization via Tailwind
- Smooth scroll behavior
- Lazy loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - TRIVX Corporate Website
