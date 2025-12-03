# CycleSphere – Project Guidelines
Modern Cycling Club Website  
Tech Stack: **Next.js (App Router) • TypeScript • Tailwind CSS • Prismic CMS**

---

## 1. Environment & Setup

### 1.1 Requirements
- **Node.js:** 18+
- **Package Manager:** npm
- **Editor:** VS Code (recommended)
- **Required Extensions:**
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Prismic

### 1.2 Install Dependencies
```bash
npm install
1.3 Environment Variables
Create .env.local:

bash
Copy code
NEXT_PUBLIC_PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
⚠️ Never commit .env.local to GitHub.

2. GitHub Workflow (GitHub Flow)
2.1 Branching
main — stable production-ready branch

feature/<name> — feature development
Examples:

feature/home-hero

feature/news-dynamic-route

2.2 Pull Requests
Each PR must include:

Clear title (e.g., feat: add homepage hero slice)

Description of changes

Screenshots (desktop + mobile)

Self-QA checklist completed

2.3 Merge Rules
Merge only when Self-QA is passed

Keep PRs small and focused

3. Project Structure
bash
Copy code
/app
  /(pages)
  /news
  /community
  /join
  /about
  /contact

/components
  /ui
  /shared

/prismic
  /slices

/lib
/styles
/assets
4. Coding Standards
4.1 Naming
Components → PascalCase

Functions, variables → camelCase

Files → kebab-case

Slices → camelCase IDs

4.2 General Rules
No unused imports

No console logs in final PR

Add comments to complex logic

Keep Tailwind classes readable:

Layout → Spacing → Colors → Typography → Others

5. Prismic CMS Guidelines
5.1 Content Rules
No hard-coded text or images

All content must come from Prismic

5.2 Slices
Create one slice per section in Figma

Slice IDs use camelCase

Avoid unnecessary fields

Required for images:

alt text

responsive sizes

5.3 Queries
Use createClient() from Prismic

Prefer server components for fetching

Use revalidate for caching content

6. UI Component Rules
6.1 Reusable Components
Navbar

Footer

Buttons

Cards

Form inputs

Section wrappers

6.2 Component Expectations
Small, focused, reusable

Extract repeated UI into separate components

Follow Figma spacing + colors

7. Next.js App Router Guidelines
7.1 Server Components (default)
Use for:

Pages

Prismic queries

SEO metadata

Non-interactive content

7.2 Client Components
Use only when:

Form handling

Interactivity (dropdowns, sliders)

State management is required

8. Performance Standards
Use next/image for all images

Lazy load below-the-fold content

Optimize CMS images

Use font optimization (next/font)

Final Lighthouse target: 90+ performance

9. Accessibility Requirements
Follow WCAG 2.1 AA

All images must have alt text (from CMS)

Keyboard navigability required

Visible focus states

Semantic HTML (header, main, footer, etc.)

10. SEO Standards
Use generateMetadata() for each page

Add:

Title

Description

OpenGraph tags

Use clean URLs (/news/[uid])

Semantic HTML structure

Server-rendered pages for better SEO

11. Forms
11.1 Contact Form
Uses Next.js API route (app/api/contact/route.ts)

Must show success/failure message

Validate input fields

No backend database required

11.2 Membership Form
Client component

Only frontend validation required

12. Testing
12.1 Unit Tests (basic)
Write tests for:

Utility functions

Reusable components

Data formatting logic

Full integration testing not required.

13. Self-QA Checklist (Before PR)
 All text + images come from Prismic

 Matches Figma design (pixel-perfect)

 Fully responsive (mobile → tablet → desktop)

 No console logs

 No unused imports

 Forms validated

 CMS slices integrated correctly

 Cross-browser check (Chrome + Firefox)

 Lighthouse performance ≥ 90

14. Resources
Official Documentation
Next.js Docs

Prismic CMS Docs

Figma Design Link

Reference API (Learning Only)
Twingly Blog API
Included under the “Blog API Detail” resource list.

Purpose:

Understand REST API request/response structures

Learn pagination, filtering, authentication

Compare traditional blog APIs vs CMS-driven content

⚠️ Not part of the project implementation
All blog/news content must come from Prismic CMS, not Twingly.

15. Task Execution Strategy

15.1 Section-Based Workflow
Break each page by Figma, section by section:

Home:

Hero

Highlights

Stats/Features

News preview

About:

Club info

Values

Team

Testimonials

…and so on.

15.2 Development Flow
Create slice in Prismic

Style according to Figma

Fetch from CMS

Integrate into page

Perform Self-QA

Open PR

16. Deliverables
Complete Next.js project folder

Fully integrated Prismic CMS slices

Pixel-perfect design (Figma)








