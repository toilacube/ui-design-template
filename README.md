<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1y46-38new1w4Hki4k-txMEoSn8pQdNjG

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


| Style Category (Thể loại UI) | Keywords (Từ khóa) | Color Schemes (Màu sắc) | Effects/Features (Hiệu ứng/Tính năng) |
| :--- | :--- | :--- | :--- |
| **Minimalism & Swiss Style** | Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential. | Monochromatic, Black & White, Neutral Palette (Beige, Grey), Primary colors as accents. | Subtle hover effects, smooth transitions, sharp shadows (if any), clear typography hierarchy, fast loading. |
| **Neumorphism** | Soft UI, embossed, debossed, convex, concave, light source, subtle depth, rounded corners, monochromatic. | Light pastel colors, soft gradients, low-contrast colors, dominant single color with light/dark variations. | Soft box-shadows (multiple layers), smooth press/release animation, subtle inner shadow, no hard lines. |
| **Glassmorphism** | Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth. | Translucent colors, vibrant background colors (blue, purple, pink), white/light text. | Background blur (backdrop-filter), subtle border, light source reflection, layered Z-index structure. |
| **Brutalism** | Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, unstyled links, asymmetric. | Primary colors (Red, Blue, Yellow), Black & White, Neon accents, limited palette. | No smooth transitions, sharp corners, bold typography, visible grid lines, large block elements, intentional "broken" look. |
| **3D & Hyperrealism** | Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail. | Rich, deep colors, metallic, glossy, matte textures, complex gradients. | Interactive 3D elements (WebGL/Three.js), complex shadows, realistic lighting, physics-based motion, parallax scrolling. |
| **Vibrant & Block-based** | Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern. | Complementary colors, triadic schemes, vibrant contrasts (e.g., Neon Green on Dark Blue), bright pastels. | Large, distinct sections, animated background patterns, bold hover states, smooth scroll-snap, large typography. |
| **Dark Mode (OLED Optimized)** | Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED. | Deep black (#000000), dark grey (#121212), vibrant accent colors (Neon Green, Electric Blue, Gold) for highlights. | Minimal glow effects, smooth dark-to-light transitions, reduced white light emission, focus on readability. |
| **Accessible & Ethical** | High contrast, large text, keyboard navigation, screen reader friendly, WCAG compliant, focus state, clear feedback. | WCAG AA/AAA compliant color combinations, high luminosity contrast ratio, simple palette. | Clear focus rings, ARIA attributes, skip links, responsive design, reduced motion option. |
| **Claymorphism** | Soft 3D, chunky, playful, toy-like, bubbly, thick borders, double shadows, rounded edges. | Pastel colors, soft gradients, light background, dominant color with light/dark variations. | Inner and outer shadows (subtle), soft press/release animation, large, fluffy elements, no hard lines. |
| **Aurora UI** | Vibrant gradients, smooth blend, Northern Lights effect, mesh gradient, luminous, atmospheric, abstract background. | Complementary colors, vibrant colors (Blue, Purple, Pink, Teal), smooth color transitions. | Large, flowing background gradients (CSS/SVG), subtle animation of the gradient, depth effect via color layering. |
| **Retro-Futurism** | Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, vaporwave. | Neon colors (Electric Blue, Hot Pink, Cyan), deep black background, metallic silver/gold accents, duotone. | CRT screen effect (scanlines, distortion), neon glow text/borders, glitch effects, animated geometric patterns, monospace fonts. |
| **Bento Grid (Apple/Linear Style)** | Organized, modular, dashboard, card-based, content-first, hierarchical, rounded, structural. | Neutral backgrounds (Off-white, faint grey), soft distinct borders, brand colors used only in icons/graphs. | Strict grid layouts (like a Bento box), cards with distinct content (map, graph, text), unified corner radius, "squircle" shapes, very polished spacing. |
| **Y2K / Acid Graphics** | Nostalgic (late 90s/early 2000s), chaotic, chrome, liquid, tribal, playful, experimental. | Metallic chrome, hot pink, lime green, electric purple, high saturation, gradients that clash intentionally. | Chrome typography, liquid/melting shapes, starburst icons, jagged edges, Marquee scrolling text, "retro" browser window frames. |
| **Paper / Collage (Scrapbook)** | Hand-drawn, tactile, human, organic, rough edges, textured, artistic, DIY. | Earth tones, paper white, ink black, desaturated vintage colors (sepia, olive). | Paper textures (grain, noise), ragged edges (torn paper), tape overlays, handwriting fonts, doodles, overlapping elements without strict grids. |
| **Holographic / Iridescent** | Ethereal, shiny, spectrum, futuristic, clean, mesmerizing, fluid. | Silver base with rainbow gradients (pearl, oil slick), pastel neon overlay on white. | Shimmer effects, moving gradients that look like a CD reflection, metallic sheen, often combined with subtle noise or glass effects. |
| **Terminal / CLI (Hacker Style)** | Developer-focused, raw, command line, ASCII, technical, keyboard-centric, monochrome. | Pure Black (#000000) background, Bright Green (#00FF00) or Amber text. | Monospace fonts (Courier, Fira Code), blinking cursor block, typed-text animations, ASCII art borders, no shadows, no rounded corners. |
| **Material You (Material Design 3)** | Adaptive, dynamic, fluid, personalized, nature-inspired, touch-friendly, Google-standard. | Dynamic extraction: Colors are pulled from the user's wallpaper/system preferences. Pastel tones derived from a seed color. | Pill shapes, large floating action buttons (FAB), ripple effects, adaptive coloring, elevation changed by surface color tint rather than shadow depth. |

---

## **Standard Multi-Section Landing Page Structure**

### **1. Header / Navigation**

* **Elements:**

  * Logo / brand mark
  * Primary navigation links (Home, Features, Pricing, About, Contact)
  * Optional: CTA button (e.g., “Get Started”)
* **Notes:**

  * Keep it sticky or floating for better demo of interactive effects.
  * Can experiment with colors, typography, and spacing per style.

---

### **2. Hero Section**

* **Elements:**

  * Headline / tagline (main value proposition)
  * Subheadline / supporting text
  * Primary CTA button (e.g., “Sign Up”)
  * Optional illustration, product image, or animation
* **Notes:**

  * Big typography + visual hierarchy.
  * Great place to test style-specific fonts, gradients, and animation effects.

---

### **3. Features / Benefits Section**

* **Elements:**

  * 3–4 feature cards with icon or image, title, short description
  * Optional: interactive hover effects
* **Notes:**

  * Layout can be grid or horizontal carousel.
  * Card shape, shadow, or borders can define different UI/UX styles.

---

### **4. Showcase / Gallery Section**

* **Elements:**

  * Image gallery, product screenshots, or example projects
  * Optional: hover effects or lightbox interactions
* **Notes:**

  * Flexible section for experimenting with layouts: bento grid, masonry, or overlapping Y2K style.

---

### **5. Testimonials / Social Proof Section**

* **Elements:**

  * Quote cards or user reviews
  * User avatars or logos of clients
* **Notes:**

  * Can play with shapes, borders, shadows, or animation to show style variations.

---

### **6. Call-to-Action Section**

* **Elements:**

  * Headline
  * Supporting text
  * Primary CTA button
* **Notes:**

  * Usually at the bottom or sticky to show conversion-focused design.
  * Great for testing micro-interactions and hover effects per style.

---

### **7. Footer**

* **Elements:**

  * Navigation links (repeat or secondary)
  * Social media icons
  * Copyright / legal info
* **Notes:**

  * Can experiment with minimalistic bento style, gradient aurora style, or vibrant color style.

### **1. Header / Navigation**

*   **Logo:** dsAI
*   **Navigation Links:**
    *   Solutions
    *   Case Studies
    *   Methodology
    *   About Us
*   **Secondary Link:** Client Portal Login
*   **Primary CTA Button:** Book a Consultation

---

### **2. Hero Section**

*   **Eyebrow Text:** Intelligent Business Transformation
*   **Headline (H1):** Your Operations, Streamlined. Your Data, Centralized.
*   **Subheadline (H2):** dsAI delivers custom digital solutions that eliminate silos and elevate your customer support. We build the infrastructure your business needs to scale without the growing pains.
*   **Primary CTA Button:** Get Your Custom Strategy
*   **Secondary Link:** Explore Our Services →
*   **Social Proof Text:** Empowering enterprise teams at **LogisticsCo**, **FinTech Corp**, and **MedSafe**.

---

### **3. Features / Benefits Section**

*   **Section Heading:** The dsAI Advantage
*   **Feature 1:**
    *   **Title:** Streamlined Operations
    *   **Description:** We automate repetitive manual processes, reducing operational overhead by up to 40% and freeing your team for high-value work.
*   **Feature 2:**
    *   **Title:** Centralized Data
    *   **Description:** Stop jumping between tabs. We unify your disparate tools into a single source of truth for better decision-making.
*   **Feature 3:**
    *   **Title:** Elevated Support
    *   **Description:** Deploy intelligent AI agents that handle Tier-1 inquiries instantly, ensuring your customers feel heard 24/7.

---

### **4. Showcase / Gallery Section**

*   **Section Headline:** Proven Results
*   **Subheadline:** See how we’ve solved complex challenges for industry leaders.
*   **Project 1 Label:** **Global Logistics Dashboard** – Centralizing freight data across 3 continents.
*   **Project 2 Label:** **FinTech CRM Integration** – Streamlining client onboarding by 60%.
*   **Project 3 Label:** **Retail AI Support Bot** – Elevating customer response times to under 30 seconds.
*   **Project 4 Label:** **Healthcare Compliance Portal** – Automating internal operational audits.

---

### **5. Testimonials / Social Proof Section**

*   **Section Headline:** Partners in Growth
*   **Testimonial 1:**
    *   **Quote:** "Before dsAI, our customer data was scattered across five different tools. Now, it's centralized, and our response times dropped by half."
    *   **Author:** James T., COO at FinServe
*   **Testimonial 2:**
    *   **Quote:** "The custom automation solution dsAI built for us saved our team 20 hours a week on manual entry alone."
    *   **Author:** Linda K., Director of Operations at LogiMove
*   **Testimonial 3:**
    *   **Quote:** "Professional, technical, and deeply understanding of our business model. dsAI isn't just a vendor; they are partners."
    *   **Author:** Marcus R., CTO at HealthFlow

---

### **6. Call-to-Action Section**

*   **Headline:** Ready to modernize your business?
*   **Supporting Text:** Stop letting inefficiencies hold you back. Let’s build a custom roadmap to streamline your operations and unlock your data’s potential.
*   **Primary CTA Button:** Schedule a Discovery Call
*   **Micro-copy:** Free initial consultation. No commitment required.

---

### **7. Footer**

*   **Brand Column:**
    *   **Logo:** dsAI
    *   **Tagline:** Custom digital solutions for the modern enterprise.
    *   **Contact:** hello@dsai.com
*   **Services Column:**
    *   Operational Automation
    *   Data Warehousing
    *   AI Customer Support
    *   Legacy Modernization
*   **Company Column:**
    *   About dsAI
    *   Leadership
    *   Careers
    *   Case Studies
*   **Legal Column:**
    *   Privacy Policy
    *   Data Security
    *   Terms of Service
*   **Copyright:** © 2024 dsAI. All rights reserved.