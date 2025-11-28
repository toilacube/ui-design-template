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

*   **Logo:** dsAI (Alt Text: dsAI - Data Solutions & Artificial Intelligence)
*   **Navigation Links:**
    *   **Solutions** (Dropdown Menu: Operational Automation, Data Warehousing, AI Support, Legacy Modernization)
    *   **Case Studies** (Dropdown Menu: Fintech, Healthcare, Logistics, Retail)
    *   **Methodology**
    *   **Company** (About Us, Careers, Partners)
    *   **Resources** (Blog, Whitepapers, API Docs)
*   **Secondary Link:** Client Portal Login
*   **Utility Links:** Language (EN/ES/FR), Support
*   **Primary CTA Button:** Book a Consultation

---

### **2. Hero Section**

*   **Eyebrow Text:** Intelligent Business Transformation for the Modern Enterprise
*   **Headline (H1):** Your Operations, Streamlined. Your Data, Centralized. Your Future, Secured.
*   **Subheadline (H2):** dsAI delivers custom digital solutions that eliminate silos and elevate your customer support. We build the scalable infrastructure your business needs to grow without the growing pains—bridging the gap between legacy systems and AI-driven efficiency.
*   **Key Value Bullets (Under Subheadline):**
    *   ✓ Reduce operational overhead by 40%
    *   ✓ Unified data sources for real-time intelligence
    *   ✓ Enterprise-grade security & compliance
*   **Primary CTA Button:** Get Your Custom Strategy
*   **Secondary Link:** Explore Our Services →
*   **Visual Asset Description:** A dynamic, abstract 3D visualization showing data nodes connecting to form a central shield, representing protection and centralization.
*   **Social Proof Bar:**
    *   **Text:** Trusted by forward-thinking enterprise teams:
    *   **Logos:** LogisticsCo, FinTech Corp, MedSafe, RetailGiant, GlobalEnergy.

---

### **3. Problem & Solution (New Section)**

*   **Section Heading:** The Efficiency Gap
*   **Subheading:** Why high-growth companies hit a ceiling.
*   **Problem Grid:**
    *   **Item 1:** **Data Silos:** "Critical customer data is trapped in disconnected tools, leading to blind spots in decision-making."
    *   **Item 2:** **Manual Bottlenecks:** "Highly skilled talent is wasted on copy-paste data entry and repetitive admin tasks."
    *   **Item 3:** **Reactive Support:** "Customer support is overwhelmed, leading to slow response times and churn."
*   **Transition Element:** *“dsAI bridges the gap with intelligent architecture.”*

---

### **4. Features / Benefits Section**

*   **Section Heading:** The dsAI Advantage
*   **Intro Text:** We don't just patch software; we re-engineer your digital foundation using a three-pillar approach.
*   **Feature 1:**
    *   **Title:** Streamlined Operations & Workflow Automation
    *   **Detailed Description:** We automate repetitive manual processes using custom scripts and API integrations. This reduces operational overhead by up to 40% and frees your team for high-value strategic work.
    *   **Key Capabilities:**
        *   Custom API development
        *   Cross-platform synchronization
        *   Automated reporting & invoicing
*   **Feature 2:**
    *   **Title:** Centralized Data Warehousing
    *   **Detailed Description:** Stop jumping between tabs. We unify your disparate tools (CRM, ERP, Marketing) into a single source of truth (SSOT). Gain real-time visibility into KPIs for better decision-making.
    *   **Key Capabilities:**
        *   ETL (Extract, Transform, Load) pipelines
        *   Real-time dashboard visualization
        *   Legacy database migration
*   **Feature 3:**
    *   **Title:** Elevated AI Support Agents
    *   **Detailed Description:** Deploy intelligent, NLP-driven AI agents that handle Tier-1 inquiries instantly. Ensure your customers feel heard 24/7 while escalating complex issues to human agents seamlessly.
    *   **Key Capabilities:**
        *   Natural Language Processing (NLP)
        *   Multi-channel deployment (Web, SMS, Email)
        *   Sentiment analysis & routing

---

### **5. Methodology / How We Work (New Section)**

*   **Section Headline:** From Chaos to Clarity in 4 Steps
*   **Step 1:** **Discovery & Audit:** We dive deep into your current stack to identify bottlenecks and security vulnerabilities.
*   **Step 2:** **Architecture Strategy:** We design a custom roadmap, selecting the right tech stack that fits your budget and scalability goals.
*   **Step 3:** **Agile Implementation:** We build in two-week sprints, giving you visibility and the ability to pivot as the solution takes shape.
*   **Step 4:** **Training & Handoff:** We don't just leave; we train your team and provide documentation to ensure long-term adoption.

---

### **6. Showcase / Gallery Section**

*   **Section Headline:** Proven Results
*   **Subheadline:** See how we’ve solved complex challenges for industry leaders.
*   **Case Study 1:**
    *   **Label:** **Global Logistics Dashboard**
    *   **Challenge:** Fragmented freight data across 3 continents.
    *   **Solution:** Unified data lake with predictive shipping analytics.
    *   **Result:** **32% reduction in shipping delays.**
    *   **Link:** Read Case Study →
*   **Case Study 2:**
    *   **Label:** **FinTech CRM Integration**
    *   **Challenge:** Slow client onboarding (avg. 4 days).
    *   **Solution:** Automated KYC and document verification pipeline.
    *   **Result:** **Streamlined onboarding by 60% (down to 1.5 days).**
    *   **Link:** Read Case Study →
*   **Case Study 3:**
    *   **Label:** **Retail AI Support Bot**
    *   **Challenge:** Overwhelmed support during holiday peaks.
    *   **Solution:** AI agent handling FAQs and order tracking.
    *   **Result:** **Response times under 30 seconds; 70% ticket deflection.**
    *   **Link:** Read Case Study →
*   **Case Study 4:**
    *   **Label:** **Healthcare Compliance Portal**
    *   **Challenge:** Manual risk of HIPAA non-compliance.
    *   **Solution:** Automated internal operational audits and reporting.
    *   **Result:** **100% Audit Readiness Score.**
    *   **Link:** Read Case Study →

---

### **7. Testimonials / Social Proof Section**

*   **Section Headline:** Partners in Growth
*   **Review Platform Badges:** 4.9/5 on Clutch | 5/5 on G2 Crowd
*   **Testimonial 1:**
    *   **Quote:** "Before dsAI, our customer data was scattered across five different tools. Now, it's centralized, and our response times dropped by half. The ROI was evident within the first 3 months."
    *   **Author:** James T., COO at FinServe
    *   **Project Context:** Data Centralization Project
*   **Testimonial 2:**
    *   **Quote:** "The custom automation solution dsAI built for us saved our team 20 hours a week on manual entry alone. It allowed us to scale our headcount without sacrificing quality."
    *   **Author:** Linda K., Director of Operations at LogiMove
    *   **Project Context:** Workflow Automation
*   **Testimonial 3:**
    *   **Quote:** "Professional, technical, and deeply understanding of our business model. dsAI isn't just a vendor; they are partners who care about the outcome as much as we do."
    *   **Author:** Marcus R., CTO at HealthFlow
    *   **Project Context:** Legacy System Modernization

---

### **8. FAQ Section (New Section)**

*   **Headline:** Common Questions
*   **Q1:** How long does a typical implementation take?
    *   **A:** Most initial pilot projects are live within 4-6 weeks, with full enterprise rollouts taking 3-4 months depending on complexity.
*   **Q2:** Do you work with legacy on-premise systems?
    *   **A:** Yes. We specialize in "wrapping" legacy systems with modern APIs so you can innovate without a full rewrite.
*   **Q3:** How do you handle data security?
    *   **A:** We are SOC2 compliant and design all architectures with "Security by Design" principles, ensuring end-to-end encryption and strict access controls.

---

### **9. Call-to-Action Section**

*   **Headline:** Ready to modernize your business?
*   **Supporting Text:** Stop letting inefficiencies hold you back. Let’s build a custom roadmap to streamline your operations and unlock your data’s potential.
*   **Primary CTA Button:** Schedule a Discovery Call
*   **Secondary Action:** Join our "Future of Ops" Newsletter.
*   **Input Field:** [ Enter your work email ] [ Subscribe ]
*   **Micro-copy:** Free initial consultation. No commitment required. You will receive a response within 24 hours.

---

### **10. Footer**

*   **Brand Column:**
    *   **Logo:** dsAI
    *   **Tagline:** Custom digital solutions for the modern enterprise.
    *   **Address:** 123 Innovation Dr, Tech City, TC 94000
    *   **Contact:** hello@dsai.com | +1 (555) 123-4567
*   **Services Column:**
    *   Operational Automation
    *   Data Warehousing
    *   AI Customer Support
    *   Legacy Modernization
    *   Cloud Migration
*   **Company Column:**
    *   About dsAI
    *   Leadership Team
    *   Careers (We're Hiring!)
    *   Case Studies
    *   Press Kit
*   **Legal Column:**
    *   Privacy Policy
    *   Data Security & Compliance
    *   Terms of Service
    *   Cookie Preferences
*   **Social Icons:** LinkedIn, Twitter/X, GitHub, YouTube
*   **Certifications:** SOC2 Certified Badge, ISO 27001 Badge
*   **Copyright:** © 2025 dsAI. All rights reserved.