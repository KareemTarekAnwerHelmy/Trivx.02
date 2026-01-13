# TRIVX Website Design Guide

## UI/UX Layout (Figma-Style Structure)

### Design Philosophy
- **Futuristic 2077 Aesthetic**: Clean, cyberpunk-inspired with professional medical trust
- **Color Psychology**: Blue (trust, reliability) + White (cleanliness, medical) + Neon (innovation, technology)
- **B2B Focus**: Corporate, professional, trust-building design elements

### Layout Structure

#### 1. Navigation Bar
- **Fixed Position**: Always visible, glassmorphism effect
- **Logo**: Left-aligned, gradient text (Primary → Neon Blue)
- **Navigation Items**: Center-aligned, hover effects with neon underline
- **CTA Button**: Right-aligned "Become a Distributor" (gradient background)
- **Mobile**: Hamburger menu with slide-down animation

#### 2. Hero Section
- **Full Viewport Height**: Immersive first impression
- **Background**: Animated gradient orbs (floating, glowing)
- **Typography**: Large, bold headline (80px+ on desktop)
  - Line 1: "Healthcare Excellence" (gradient text)
  - Line 2: "Across Middle East & Africa" (solid white)
- **Tagline**: Subheadline (20-24px) explaining value proposition
- **CTAs**: Two buttons side-by-side
  - Primary: "Become a Distributor" (gradient, glowing)
  - Secondary: "Explore Products" (outlined, glass effect)
- **Scroll Indicator**: Animated chevron at bottom

#### 3. Statistics Section
- **Grid Layout**: 4 columns (desktop), 2 rows (tablet), stacked (mobile)
- **Cards**: Glass morphism with neon border glow
- **Icons**: Large emoji/SVG (60px+) at top
- **Numbers**: Massive, gradient text (60-80px)
- **Labels**: Smaller text below (18px)

#### 4. Products Page
- **Page Header**: Centered title + description
- **Grid**: 2x2 layout (desktop), stacked (mobile)
- **Cards**: 
  - Large icon (80px)
  - Title (28px, bold)
  - Description (16-18px, 2-3 lines)
  - Hover: Scale up, slide up, neon border intensifies
  - Animated underline on hover

#### 5. Industries Page
- **Page Header**: Centered title + description
- **Grid**: 3 columns (desktop), stacked (mobile)
- **Cards**:
  - Icon (80px)
  - Title (32px)
  - Description paragraph (18px)
  - Feature list with checkmarks (16px)
  - Hover: Scale, lift, color transitions

#### 6. About Page
- **Page Header**: Centered title + description
- **Intro Card**: Full-width glass card with company description
- **Values Grid**: 3 columns (Mission, Vision, Quality)
  - Each card: Icon, Title, Description
- **Hover Effects**: Scale, glow, color shift

#### 7. Contact Page
- **Page Header**: Centered title + description
- **Contact Cards**: 3-column grid (Email, Phone, Region)
  - Icon (64px)
  - Title (20px)
  - Link/Text (16px, neon blue)
- **Form**: Full-width glass card
  - Grid layout: 2 columns for name/company, country/email
  - Single column for phone and message
  - Submit button: Gradient, full-width on mobile

#### 8. Footer
- **Layout**: 4-column grid (desktop), stacked (mobile)
- **Columns**: 
  1. Company info (2 cols)
  2. Quick Links
  3. Contact Info
- **Bottom Bar**: Copyright + Legal links

---

## Suggested Images & Icons

### Icons (Current: Emoji Placeholders)

**Recommended Icon Libraries:**
1. **Heroicons** (https://heroicons.com/)
   - Clean, modern, professional
   - Free, customizable
   - Perfect for medical/healthcare theme

2. **Lucide Icons** (https://lucide.dev/)
   - Extensive collection
   - Consistent style
   - Great for healthcare icons

3. **Custom SVG Icons**:
   - Pill/Capsule icon for Pharmaceuticals
   - Hospital/Medical Building for Medical Equipment
   - Baby/Diaper icon for Diapers
   - Hand/Glove icon for Gloves

**Icon Suggestions:**
- **Pharmaceuticals**: Pill/Capsule, Medicine Bottle, Prescription
- **Medical Equipment**: Stethoscope, Medical Cross, Hospital
- **Diapers**: Baby, Heart with Baby, Care
- **Gloves**: Hand, Shield, Protection
- **Statistics**: Hospital (🏥), Globe (🌍), Package (💊), Checkmark (✅)
- **Industries**: Hospital Building, Clinic, Distribution/Truck

### Images

**Hero Background:**
- Abstract medical/healthcare imagery
- Gradient overlays with neon accents
- Animated particles or geometric shapes
- Medical equipment silhouettes

**Product Images:**
- Professional product photography
- Clean white backgrounds
- Medical product close-ups
- Healthcare facility imagery

**About Section:**
- Manufacturing facility (if available)
- Quality control imagery
- Team photos (optional)
- Certifications/compliance badges

**Recommended Image Sources:**
- Unsplash (healthcare/medical theme)
- Pexels (professional medical imagery)
- Custom photography (preferred for products)
- Medical illustration libraries

### Lottie Animation Suggestions

**Recommended Animations:**
1. **Hero Section**:
   - Floating medical particles
   - Pulsing heartbeat animation
   - Geometric healthcare symbols

2. **Statistics Section**:
   - Counting numbers animation
   - Progress bars filling
   - Pulsing icons

3. **Loading States**:
   - Medical cross spinner
   - Pulse animation
   - Healthcare-themed loader

**Lottie Sources:**
- LottieFiles (https://lottiefiles.com/)
- Search: "medical", "healthcare", "pulse", "health"
- Free and premium options available

---

## Animation Specifications

### Page Transitions
- **Fade In**: 0.6s ease-out
- **Slide Up**: From y: 30 to y: 0
- **Stagger Delay**: 0.1s between items

### Hover Effects
- **Scale**: 1.02-1.05x
- **Lift**: -5px to -10px on Y-axis
- **Duration**: 0.3s ease-out
- **Glow**: Border/box-shadow intensifies

### Button Interactions
- **Hover**: Scale 1.05, shadow intensifies
- **Tap/Click**: Scale 0.95
- **Gradient Shift**: Subtle color animation
- **Neon Glow**: Pulsing effect on primary buttons

### Scroll Animations
- **Trigger**: Element enters viewport (once: true)
- **Offset**: -100px margin (triggers before fully visible)
- **Duration**: 0.6s
- **Easing**: ease-out

### Micro-interactions
- **Navbar Active State**: Animated underline (layoutId)
- **Form Focus**: Border color change + ring glow
- **Card Hover**: Background opacity change
- **Icon Hover**: Scale + rotation (subtle)

### Background Animations
- **Floating Orbs**: 6s infinite, ease-in-out
- **Gradient Shift**: Continuous, subtle
- **Particle Effects**: (if implemented) continuous movement

---

## Component Specifications

### Typography Scale
- **H1 (Hero)**: 64-80px (desktop), 40-48px (mobile)
- **H1 (Page)**: 48-56px (desktop), 32-40px (mobile)
- **H2**: 32-40px
- **H3**: 24-28px
- **Body Large**: 18-20px
- **Body**: 16px
- **Small**: 14px

### Spacing System
- **Section Padding**: 80px vertical (desktop), 60px (tablet), 40px (mobile)
- **Card Padding**: 32-48px (desktop), 24-32px (mobile)
- **Grid Gaps**: 32px (desktop), 24px (tablet), 16px (mobile)

### Border Radius
- **Cards**: 16-24px (rounded-2xl to rounded-3xl)
- **Buttons**: 8-12px (rounded-lg)
- **Form Inputs**: 8px (rounded-lg)

### Shadows & Glows
- **Card Shadow**: Subtle, colored (neon blue tint)
- **Button Glow**: 0 0 20px rgba(0, 217, 255, 0.5)
- **Neon Border**: Multi-layer box-shadow for glow effect

---

## Responsive Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: 1024px - 1280px (lg)
- **Large Desktop**: > 1280px (xl, 2xl)

### Mobile Optimizations
- Stacked layouts (1 column)
- Reduced font sizes
- Simplified navigation (hamburger menu)
- Full-width buttons
- Increased touch targets (min 44px)

---

## Accessibility Considerations

- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Focus States**: Visible outline/ring on interactive elements
- **Alt Text**: All images require descriptive alt text
- **ARIA Labels**: Interactive elements properly labeled
- **Keyboard Navigation**: All features accessible via keyboard
- **Screen Readers**: Semantic HTML structure

---

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Automatic via Next.js
- **Animation Performance**: GPU-accelerated (transform, opacity)

---

## Implementation Notes

### Current Status
✅ All core components implemented
✅ Responsive design in place
✅ Animations configured
⏳ Images/Icons using emoji placeholders (replace with professional assets)
⏳ Contact form backend integration needed
⏳ Analytics/SEO optimization (if needed)

### Next Steps
1. Replace emoji icons with professional SVG icons
2. Add high-quality product/background images
3. Integrate contact form with email service
4. Add meta tags for SEO
5. Implement analytics (if needed)
6. Performance testing and optimization
7. Accessibility audit
8. Cross-browser testing
