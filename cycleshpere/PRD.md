# Product Requirements Document (PRD)
## Project: CycleSphere – Cycling Club Website
## Tech Stack: Next.js (App Router), TypeScript, Tailwind CSS, Prismic CMS

---

## 1. Overview
CycleSphere is a modern, responsive cycling club website designed to promote events, publish news, present club information, and onboard new members through a clean, CMS-controlled interface powered by Prismic. The site aims to offer fast performance, strong UX, and SEO-friendly server-rendered pages.

---

## 2. Objectives
- Present the cycling club and its mission.
- Showcase upcoming events, community highlights, and stories.
- Publish news via Prismic CMS with dynamic routes.
- Provide membership and contact forms.
- Ensure a fully responsive, accessible, fast-loading experience.

---

## 3. Key Features
### 3.1 Home Page
- Hero section with CTA
- Highlights: events, stats, features
- Latest news preview
- Dynamic content from Prismic

### 3.2 About Page
- Club overview + values
- Team section
- Testimonials (if provided in CMS)

### 3.3 Community Page
- Events list
- Member stories
- Gallery (all CMS-driven)

### 3.4 Join Page
- Membership form (frontend only)
- Validations + success UI

### 3.5 News + News Detail
- Dynamic news listing via Prismic queries
- Dynamic route: `/news/[uid]`
- SEO-friendly SSR pages

### 3.6 Contact Page
- Frontend contact form
- Posts to API route (Next.js App Router)
- Returns success/failure messaging

---

## 4. Requirements

### 4.1 Technical Requirements
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prismic CMS for all text + images
- SSR for performance and SEO
- Reusable components: Navbar, Footer, Cards, Forms

### 4.2 Coding Standards
- PascalCase components  
- camelCase variables and functions  
- Clean folder structure  
- Modular, readable code  
- Consistent naming, indentation, accessibility  
- No redundant imports

---

## 5. Non-Functional Requirements

### 5.1 Performance
- Use Next/Image for optimization
- Lazy load heavy sections
- Optimize CMS images
- Aim for ≥ 90 Lighthouse score

### 5.2 Accessibility
- WCAG 2.1 AA alignment
- Keyboard-navigable UI
- Alt text required (from CMS)

### 5.3 SEO
- Meta tags + OpenGraph (dynamic)
- Server-rendered pages
- Clean URL structure

---

## 6. CMS Structure (Prismic)

### 6.1 Content Types / Slices (Final)
- Homepage slices  
- About slices  
- Community slices  
- News article slice  
- Reusable components slices  
- Gallery slices  

### 6.2 Constraints
- All images and text MUST come from Prismic.
- Slice names follow CamelCase ID conventions.
- Required alt text on every image field.

---

## 7. External Resources

### 7.1 Official Project Resources
- **Figma Design:** Provided by the client  
- **Next.js Documentation:** https://nextjs.org/docs  
- **Prismic Documentation:** https://prismic.io/docs  

### 7.2 Reference API (For Learning Only)
- **Twingly Blog API**  
  The link provided under “Blog API Detail” is **a reference for understanding REST APIs**—pagination, filtering, request/response structures.  
  It is **NOT used in this project**, but serves as an educational resource for understanding blog API patterns.

---

## 8. Project Scope Limitations
- No backend database  
- No admin panel  
- No deployment required (local demo only)  
- Only unit tests  
- Single-person development workflow

---

## 9. GitHub Flow
- `main` branch as the stable branch  
- Feature branches for new work  
- PR review process  
- Self-QA before merge  

---

## 10. Self-QA Checklist
- All content loads from Prismic  
- No console logs  
- No unused imports  
- Routes, navigation, and forms tested  
- Responsive & cross-browser  
- All CMS-driven images/text correct  

---

## 11. Deliverables
- Complete working project folder  
- Fully integrated Prismic CMS  
- All pages connected to Figma design  
- README + guideline.md + PRD.md  
