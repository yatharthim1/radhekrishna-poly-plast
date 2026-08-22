# Radhekrishna Poly Plast - Corporate Website

🎉 **PRODUCTION READY** - All contact information integrated and verified.

A modern, production-ready corporate website for Radhekrishna Poly Plast, a fabric and poly-plastic manufacturing business based in Patna, Bihar, India.
## Project Overview

This website presents Radhekrishna Poly Plast as a professional B2B industrial supplier with:

- **180+ fabric varieties** - Diverse fabric inventory
- **Roll-based material management** - Organized inventory tracking
- **Flexible processing** - Direct sales and in-factory cutting services
- **Customer-focused supply** - Professional dispatch and documentation
- **Professional B2B approach** - Business-to-business focused solutions

## Technology Stack

- **React 19** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify Forms** - Form submission handling (no backend required)

## Features

✓ **Responsive Design** - Mobile, tablet, and desktop optimized
✓ **SEO Optimized** - Proper meta tags, structured data, sitemap, robots.txt
✓ **Accessibility** - Semantic HTML, keyboard navigation, ARIA labels
✓ **Performance** - Fast page load, lazy-loaded images, minimal JavaScript
✓ **Form Handling** - Netlify Forms integration with validation
✓ **Professional Sections**:
  - Sticky header with navigation
  - Hero section with clear value proposition
  - About company section
  - Products showcase
  - 180+ fabric varieties highlight
  - 5-step operational process
  - Capabilities showcase
  - Why choose us section
  - Industrial gallery
  - Enquiry form
  - Contact information
  - Footer with links

## Project Structure

```
RadhekrishnaPolyPlast/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── FabricVarieties.jsx
│   │   ├── Process.jsx
│   │   ├── Capabilities.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Enquiry.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation & Local Development

### Prerequisites

- Node.js 16+ or higher
- npm or yarn

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   
   This creates an optimized production build in the `dist/` folder.

4. **Preview Production Build Locally**
   ```bash
   npm run preview
   ```

## Content Updates & Configuration

### Updating Contact Information

Several TODO placeholders are used throughout the site. Replace them with actual information:

**Files to update:**
- Header.jsx
- Enquiry.jsx
- Contact.jsx
- Footer.jsx

**Search for and replace:**
- `[TODO:CLIENT PHONE]` - Company phone number
- `[TODO:CLIENT EMAIL]` - Company email address
- `[TODO:WHATSAPP NUMBER]` - WhatsApp number (with country code)
- `[TODO: COMPLETE BUSINESS ADDRESS]` - Full street address
- `[TODO: BUSINESS HOURS]` - Operating hours
- `[TODO: ADD GOOGLE MAPS URL]` - Google Maps embed link

### Adding Product Information

Product categories include TODO comments for customization:

```jsx
// TODO: Replace with actual product categories
// TODO: Add product images
// TODO: Add GSM/specification information
// TODO: Add available colours
// TODO: Add actual product applications
```

**To customize products:**
1. Open Products.jsx
2. Update the productCategories array with your actual products
3. Add product specifications, images, and details
4. Do NOT invent specifications - use only verified information

### Adding Images

**Image locations:**
- Product images → `src/assets/`
- Company photos → `src/assets/`
- Favicon → `public/favicon.svg`

**Image Best Practices:**
- Use high-quality, professional photos
- Optimize for web (compress, appropriate resolution)
- Use actual company/factory photography
- Avoid generic stock images
- Include alt text for accessibility

## Netlify Forms Setup

The website includes a Netlify Forms integration for the enquiry form.

### Step 1: Deploy to Netlify

```bash
# Build the project
npm run build

# The 'dist' folder will contain the production build
# Push to a Git repository (GitHub, GitLab, Bitbucket)
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 3: Configure Form Notifications

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Forms** → **Form notifications**
3. Click **Add notification** → **Email**
4. Select **Enquiry form notifications**
5. Enter the email address for submissions
6. Save

### Step 4: Test the Form

1. Visit your deployed website
2. Scroll to the enquiry section
3. Fill out and submit the form
4. Check the configured email for the submission
5. Verify all fields are captured correctly

**Note:** Form submissions will NOT work locally. Test after deploying to Netlify.

## Domain Configuration

### Connecting a Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add domain**
3. Enter your domain name
4. Follow the DNS configuration instructions

## SEO & Meta Tags

The website includes proper SEO optimization:

- **Title**: Radhekrishna Poly Plast | Fabric & Poly-Plastic Solutions | Patna
- **Meta Description**: Professional fabric and poly-plastic supplier information
- **Open Graph**: Social media preview tags
- **Twitter Card**: Twitter preview optimization
- **Robots.txt**: Included, optimized for search crawling
- **Sitemap.xml**: Complete site structure

## Performance Optimization

The website is optimized for performance:

- **Fast page load** - Vite optimized bundles
- **Lazy-loaded images** - Images load on scroll
- **Minimal JavaScript** - No unnecessary dependencies
- **CSS optimization** - Tailwind CSS purges unused styles
- **Responsive images** - Different sizes for different devices

## Accessibility

The website follows WCAG 2.1 AA standards:

- ✓ Semantic HTML structure
- ✓ Proper heading hierarchy
- ✓ Keyboard navigation support
- ✓ ARIA labels for interactive elements
- ✓ Good color contrast ratios
- ✓ Alt text for all images
- ✓ Form labels with proper associations
- ✓ Focus states visible

## Mobile Experience

The website includes a **fixed bottom action bar** on mobile with:
- ☎ Call button
- 💬 WhatsApp button
- ✉ Enquiry button

This provides easy access to key CTAs on mobile devices.

## Building for Production

```bash
# Install dependencies
npm install

# Build for production
npm run build

# This creates optimized files in the 'dist' folder
# Upload dist folder to Netlify or your hosting provider
```

## Troubleshooting

### Form not submitting
- Ensure you're on Netlify (forms don't work locally)
- Check the form has `data-netlify="true"` attribute
- Verify the form name matches in Netlify settings

### Images not loading
- Check file paths are relative (e.g., `/images/photo.jpg`)
- Verify images are in the `public/` folder
- Use lowercase filenames

### Styling issues
- Run `npm install` to ensure Tailwind CSS is installed
- Check Tailwind config paths match your file structure
- Clear browser cache (Ctrl+Shift+Delete)

### Build errors
- Delete `node_modules` and run `npm install` again
- Clear `dist` folder and rebuild: `npm run build`
- Check Node.js version: `node --version` (should be 16+)

## Important Notes

### What NOT to Do

❌ Do NOT invent company information (founder, establishment year, awards, certifications, etc.)
❌ Do NOT make unsupported claims ("India's leading", "Best quality", "Lowest prices")
❌ Do NOT add fake testimonials or reviews
❌ Do NOT include competitor branding in images
❌ Do NOT expose internal ERP/system requirements
❌ Do NOT add contact information that isn't verified

### Content Guidelines

✓ Use only verified, factual information
✓ Focus on actual capabilities and services
✓ Be honest about what you offer
✓ Update TODOs with real information before going live
✓ Replace placeholder images with professional photography
✓ Test all forms and links before deployment

## Regular Maintenance

- **Monthly**: Review contact form submissions
- **Quarterly**: Update product information as needed
- **Quarterly**: Monitor website performance metrics
- **Annually**: Refresh product images and content
- **Annually**: Review and update SEO strategy

---

**Status:** Ready for Production
**Built with:** React, Vite, Tailwind CSS, Netlify Forms

