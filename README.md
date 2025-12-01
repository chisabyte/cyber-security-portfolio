# Cyber Security Portfolio - Daniel Chisasura

A professional, modern React portfolio website showcasing cyber security skills, projects, and experience. Built specifically for entry-level to early-career cyber security roles in Australia and globally.

## 🎯 Overview

This is a fully functional, production-ready portfolio website built with modern web technologies. It features a responsive design, smooth animations, and a working contact form integrated with EmailJS for direct email delivery.

### Key Features

- ✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Modern UI/UX** - Clean, professional design with smooth scrolling animations
- ✅ **Working Contact Form** - Integrated with EmailJS to send emails directly to your inbox
- ✅ **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Cards
- ✅ **Fast Performance** - Optimized build (~200KB gzipped)
- ✅ **Accessible** - Keyboard navigation, focus indicators, and semantic HTML
- ✅ **Easy to Update** - Content stored in separate data files for easy maintenance

---

## 🏗️ Website Structure & Architecture

### **Tech Stack**

- **React 18.2.0** - Modern UI library for building component-based interfaces
- **Vite 5.0.8** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.3.6** - Utility-first CSS framework for styling
- **React Icons 4.11.0** - Comprehensive icon library
- **EmailJS 4.4.1** - Email service integration for contact form

### **Architecture Overview**

```
User Browser
    ↓
index.html (Entry Point)
    ↓
main.jsx (React Entry Point)
    ↓
App.jsx (Main Application Component)
    ↓
┌─────────────────────────────────────┐
│  Component Tree (Rendered Order)    │
├─────────────────────────────────────┤
│  1. Header (Fixed Navigation)       │
│  2. Hero (Landing Section)          │
│  3. About (Introduction)            │
│  4. Skills (Technical Skills)       │
│  5. Experience (Work History)       │
│  6. Projects (Portfolio Projects)   │
│  7. Education (Academic Background) │
│  8. Certifications (Credentials)    │
│  9. Labs & Challenges (Hands-on)    │
│ 10. GRC (Governance Section)        │
│ 11. Contact (Contact Form)          │
│ 12. Footer (Site Footer)            │
└─────────────────────────────────────┘
    ↓
Data Files (Content Management)
├── skills.js
├── projects.js
├── certifications.js
├── labs.js
└── education.js
```

---

## 📁 Complete File Structure

```
cyber-security-portfolio/
├── public/                           # Static assets
│   ├── Resume.pdf                   # CV/Resume PDF file
│   └── robots.txt                   # Search engine directives
│
├── src/
│   ├── components/                  # React Components
│   │   ├── Header.jsx              # Fixed navigation bar with mobile menu
│   │   ├── Hero.jsx                # Hero/landing section with intro
│   │   ├── About.jsx               # About me section
│   │   ├── Skills.jsx              # Technical skills display
│   │   ├── Experience.jsx          # Work experience timeline
│   │   ├── Projects.jsx            # Portfolio projects grid
│   │   ├── Education.jsx           # Academic background
│   │   ├── Certifications.jsx      # Certifications list
│   │   ├── LabsAndChallenges.jsx   # Hands-on labs and CTFs
│   │   ├── GovernanceRiskCompliance.jsx  # GRC section
│   │   ├── Contact.jsx             # Contact form with EmailJS
│   │   └── Footer.jsx              # Site footer with links
│   │
│   ├── data/                       # Content Data Files
│   │   ├── skills.js               # Skills categories and items
│   │   ├── projects.js             # Project information
│   │   ├── certifications.js       # Certification details
│   │   ├── labs.js                 # Labs and challenges
│   │   └── education.js            # Education details
│   │
│   ├── App.jsx                     # Main app component (orchestrates all sections)
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles and Tailwind imports
│
├── .env                            # Environment variables (EmailJS config)
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # This file
```

---

## 🎨 Component Breakdown

### **1. Header Component** (`src/components/Header.jsx`)

**Purpose:** Fixed navigation bar that stays at the top while scrolling

**Features:**
- Fixed positioning (stays at top on scroll)
- Dynamic styling based on scroll position (changes from transparent to white)
- Responsive mobile menu with hamburger icon
- Smooth anchor links to all sections
- Color transitions on scroll

**Key Functionality:**
- Uses `useState` and `useEffect` hooks to detect scroll position
- Toggles mobile menu visibility
- Changes text color based on background (white when transparent, dark when scrolled)

**Navigation Links:**
- Home (#hero)
- About (#about)
- Skills (#skills)
- Experience (#experience)
- Projects (#projects)
- Education (#education)
- Certifications (#certifications)
- Labs (#labs)
- Contact (#contact)

---

### **2. Hero Component** (`src/components/Hero.jsx`)

**Purpose:** Main landing section - first thing visitors see

**Features:**
- Full-screen height with gradient background
- Animated background pattern
- Introduction text and title
- Call-to-action buttons:
  - "Download CV" - Scrolls to contact form
  - "View Projects" - Scrolls to projects section
  - "Contact Me" - Scrolls to contact section
- Animated scroll indicator

**Content:**
- Name: Daniel Chisasura
- Title: Cyber Security Graduate
- University: Edith Cowan University
- Specializations listed
- Skills highlighted

---

### **3. About Component** (`src/components/About.jsx`)

**Purpose:** Personal introduction and professional summary

**Features:**
- Brief personal introduction
- Professional background
- Career goals and objectives
- Styled with cards and icons

---

### **4. Skills Component** (`src/components/Skills.jsx`)

**Purpose:** Display technical skills in organized categories

**Data Source:** `src/data/skills.js`

**Features:**
- Skills organized by category
- Skill level indicators (Beginner, Intermediate, Advanced)
- Visual skill bars or badges
- Responsive grid layout

**Skill Categories:**
- Programming Languages
- Security Tools
- Operating Systems
- Frameworks & Libraries
- Certifications & Training

---

### **5. Experience Component** (`src/components/Experience.jsx`)

**Purpose:** Work experience and professional history

**Features:**
- Timeline-style layout
- Job titles and companies
- Date ranges
- Responsibilities and achievements
- Icon-based visual elements

---

### **6. Projects Component** (`src/components/Projects.jsx`)

**Purpose:** Showcase portfolio projects and work samples

**Data Source:** `src/data/projects.js`

**Features:**
- Project cards in responsive grid
- Project descriptions and outcomes
- Technology stack tags
- Links to GitHub repositories
- Links to project reports (PDFs)
- Category filtering (if implemented)

**Project Structure:**
- Title and outcome
- Detailed description (bullet points)
- Tech stack array
- GitHub link (optional)
- Report link (optional)
- Category classification

---

### **7. Education Component** (`src/components/Education.jsx`)

**Purpose:** Academic background and qualifications

**Data Source:** `src/data/education.js`

**Features:**
- Degree information
- Institution details
- Key units/courses
- Learning outcomes
- Graduation date
- Location

---

### **8. Certifications Component** (`src/components/Certifications.jsx`)

**Purpose:** Display professional certifications and credentials

**Data Source:** `src/data/certifications.js`

**Features:**
- Certification cards
- Status indicators (completed, in-progress, planned)
- Issuing organization
- Completion dates
- Description and relevance

**Status Types:**
- `completed` - Certification obtained
- `in-progress` - Currently working on
- `planned` - Future certification goal

---

### **9. LabsAndChallenges Component** (`src/components/LabsAndChallenges.jsx`)

**Purpose:** Showcase hands-on practice and learning platforms

**Data Source:** `src/data/labs.js`

**Features:**
- Platform cards (TryHackMe, CTF competitions, Home Lab)
- Completion status
- Skills developed
- Profile links (if available)
- Setup descriptions

**Platforms Included:**
- TryHackMe (SOC Level 1 Path)
- CTF Competitions
- Home Lab environment

---

### **10. GovernanceRiskCompliance Component** (`src/components/GovernanceRiskCompliance.jsx`)

**Purpose:** Highlight GRC knowledge and experience

**Features:**
- GRC principles explained
- Risk management experience
- Compliance knowledge
- Policy understanding

---

### **11. Contact Component** (`src/components/Contact.jsx`)

**Purpose:** Contact form and contact information display

**Features:**
- **Contact Information Panel:**
  - Email address (clickable mailto link)
  - Location
  - LinkedIn profile link
  - GitHub profile link

- **Contact Form:**
  - Name field (required)
  - Email field (required, validated)
  - Message field (required)
  - Form validation
  - Loading states during submission
  - Success/error messages
  - **EmailJS Integration** - Sends emails directly to your inbox

**EmailJS Configuration:**
- Uses environment variables from `.env` file
- Service ID: `service_b51yg9b`
- Template ID: `template_4mld5lx`
- Public Key: Configured in `.env`
- Sends to: `roscoechisas@gmail.com`

**Form Functionality:**
1. User fills out form
2. Validates all required fields
3. Shows loading state ("Sending...")
4. Sends email via EmailJS API
5. Shows success message and clears form
6. Displays error message if submission fails

**Error Handling:**
- Field validation errors
- EmailJS configuration errors
- Network errors
- Specific error messages for debugging

---

### **12. Footer Component** (`src/components/Footer.jsx`)

**Purpose:** Site footer with copyright and social links

**Features:**
- Copyright notice (dynamic year)
- Professional tagline
- Social media icons (LinkedIn, GitHub, Email)
- Consistent styling with site theme

---

## 🔄 Data Flow & State Management

### **Component Communication**

```
Static Data Files
    ↓
Import into Components
    ↓
Map over data arrays
    ↓
Render UI elements
```

**Example Flow:**
1. `projects.js` exports array of project objects
2. `Projects.jsx` imports the array
3. Uses `.map()` to iterate over projects
4. Renders a card for each project
5. Each card displays project data (title, description, links)

### **State Management**

The website uses **local component state** with React hooks:

- **useState** - For form data, menu toggles, scroll detection
- **useEffect** - For scroll listeners, EmailJS initialization
- **No global state** - Each component manages its own state

**State Examples:**
- Header: `isScrolled`, `isMobileMenuOpen`
- Contact: `formData`, `isSubmitting`, `submitStatus`, `errors`

---

## 📧 EmailJS Integration

### **How It Works**

1. **Form Submission:**
   - User fills out contact form
   - Clicks "Send Message"
   - Form validates inputs

2. **EmailJS Processing:**
   - Form data sent to EmailJS API
   - EmailJS uses configured service (Gmail)
   - EmailJS uses template to format email
   - Email sent through your Gmail account

3. **Email Delivery:**
   - Email arrives at `roscoechisas@gmail.com`
   - Reply-To header set to sender's email
   - Subject includes sender's name
   - Body includes all form data

### **Configuration**

**Environment Variables (`.env`):**
```env
VITE_EMAILJS_SERVICE_ID=service_b51yg9b
VITE_EMAILJS_TEMPLATE_ID=template_4mld5lx
VITE_EMAILJS_PUBLIC_KEY=kVOFIc8LamS88ga7Q
```

**Template Variables:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - Message content
- `{{subject}}` - Email subject

**Important Notes:**
- Emails are sent FROM your Gmail account (roscoechisas@gmail.com)
- Sender's email appears in email body, not "From" field
- Reply-To header set to sender's email for easy replies
- See `EMAILJS_FROM_ADDRESS_EXPLANATION.md` for details

---

## 🎨 Styling & Design System

### **Tailwind CSS Configuration**

**Custom Colors** (`tailwind.config.js`):
- `cyber-blue`: #0ea5e9 (Primary brand color)
- `cyber-green`: #10b981 (Success/accent color)
- `cyber-dark`: #0f172a (Dark background)
- `cyber-gray`: #1e293b (Secondary dark)

**Custom Utility Classes** (`src/index.css`):

```css
.section-container    /* Consistent max-width and padding */
.section-title        /* Large centered headings */
.btn-primary          /* Primary button style */
.btn-secondary        /* Secondary button style */
.card                 /* Card component styling */
```

### **Responsive Design**

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Responsive Features:**
- Mobile menu for navigation
- Stacked layouts on mobile
- Grid layouts on desktop
- Flexible typography scaling
- Touch-friendly button sizes

### **Accessibility**

- Semantic HTML elements
- ARIA labels on icons
- Keyboard navigation support
- Focus indicators (2px blue outline)
- Alt text for images (when added)
- Proper heading hierarchy

---

## 🔧 Development Workflow

### **Local Development**

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   - Runs on `http://localhost:5173`
   - Hot Module Replacement (HMR) enabled
   - Auto-reloads on file changes

3. **Make Changes:**
   - Edit component files in `src/components/`
   - Edit data files in `src/data/`
   - Changes reflect immediately

4. **Preview Build:**
   ```bash
   npm run build
   npm run preview
   ```

### **Content Updates**

**To Update Projects:**
1. Open `src/data/projects.js`
2. Edit or add project objects
3. Save file
4. Changes appear immediately in dev server

**To Update Skills:**
1. Open `src/data/skills.js`
2. Modify skill categories or items
3. Adjust skill levels if needed
4. Save file

**Similar process for:**
- Certifications (`certifications.js`)
- Labs (`labs.js`)
- Education (`education.js`)

---

## 🚀 Build & Deployment

### **Production Build**

```bash
npm run build
```

**Build Output:**
- Creates `dist/` folder
- Optimized and minified files
- Assets with hash filenames for caching
- Size: ~200KB gzipped

**Build Process:**
1. React components compiled to JavaScript
2. Tailwind CSS purged (unused styles removed)
3. Assets optimized and hashed
4. HTML generated with correct asset references

### **Deployment Options**

#### **Option 1: Netlify** (Recommended)

**Manual Deploy:**
1. Build: `npm run build`
2. Drag `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

**GitHub Integration:**
1. Push code to GitHub repository
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard
6. Automatic deployments on git push

**Environment Variables in Netlify:**
- Go to Site Settings → Environment Variables
- Add all `VITE_EMAILJS_*` variables from `.env`

#### **Option 2: Vercel**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Add environment variables in Vercel dashboard

#### **Option 3: GitHub Pages**

1. Install: `npm install --save-dev gh-pages`
2. Update `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`
4. Site available at: `https://username.github.io/repo-name`

**Note:** Environment variables need special handling for GitHub Pages.

---

## 📝 Content Management

### **Data Files Structure**

All content is stored in separate data files for easy updates:

#### **Projects** (`src/data/projects.js`)

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Title',
    outcome: 'One-line outcome',
    description: ['Point 1', 'Point 2'],
    techStack: ['Tech1', 'Tech2'],
    github: 'https://github.com/...', // or null
    report: '/path/to/report.pdf',    // or null
    category: 'Category Name',
  },
  // ... more projects
];
```

#### **Skills** (`src/data/skills.js`)

```javascript
export const skills = [
  {
    name: 'Category Name',
    items: [
      { name: 'Skill Name', level: 'Intermediate' },
      // level: 'Beginner' | 'Intermediate' | 'Advanced'
    ],
  },
  // ... more categories
];
```

#### **Certifications** (`src/data/certifications.js`)

```javascript
export const certifications = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    status: 'completed', // 'completed' | 'in-progress' | 'planned'
    date: '2025', // or null
    description: 'Brief description',
  },
  // ... more certifications
];
```

---

## 🎯 Key Features Explained

### **1. Smooth Scrolling**

Implemented via CSS:
```css
html {
  scroll-behavior: smooth;
}
```
All anchor links (`#section-id`) scroll smoothly instead of jumping.

### **2. Dynamic Header**

Header changes appearance on scroll:
- **Top of page:** Transparent background, white text
- **Scrolled:** White background with shadow, dark text

Uses scroll event listener to detect position.

### **3. Mobile Menu**

- Hamburger icon on mobile
- Slide-down menu animation
- Closes when link is clicked
- Responsive breakpoint: < 768px

### **4. Form Validation**

Contact form validates:
- All fields required
- Email format validation
- Real-time error clearing
- Disabled button during submission

### **5. Error Handling**

Comprehensive error handling:
- Network errors
- EmailJS configuration errors
- Validation errors
- User-friendly error messages

---

## 🔍 SEO & Meta Tags

**Configured in `index.html`:**

- Meta description
- Keywords
- Author information
- Open Graph tags (Facebook/LinkedIn sharing)
- Twitter Card tags
- Canonical URL

**Current Configuration:**
- Title: "Daniel Chisasura - Cyber Security Portfolio"
- Description: Includes keywords for cyber security roles
- OG Image: (Can be added)
- Twitter Card: Large image format

---

## 🐛 Troubleshooting

### **Contact Form Not Working**

1. **Check Environment Variables:**
   - Verify `.env` file exists
   - Check variable names start with `VITE_`
   - Restart dev server after creating `.env`

2. **Check EmailJS Configuration:**
   - Service is connected in EmailJS dashboard
   - Template exists and is saved
   - Template variables match form data

3. **Check Browser Console:**
   - Look for error messages
   - Check network tab for API calls
   - Verify EmailJS credentials are loaded

See `CONTACT_FORM_TROUBLESHOOTING.md` for detailed help.

### **Build Errors**

- **Import errors:** Check file paths and exports
- **Tailwind errors:** Verify `tailwind.config.js` content paths
- **Missing dependencies:** Run `npm install`

### **Styling Issues**

- **Styles not applying:** Check Tailwind classes are correct
- **Colors not working:** Verify `tailwind.config.js` color names
- **Responsive not working:** Check breakpoint classes (`md:`, `lg:`)

---

## 📚 Additional Documentation

**Setup Guides:**
- `EMAILJS_SETUP_SUMMARY.md` - EmailJS configuration guide
- `EMAILJS_TEMPLATE_SETUP.md` - Template setup instructions
- `EMAILJS_FROM_ADDRESS_EXPLANATION.md` - Why emails show your address
- `FIX_GMAIL_AUTHENTICATION.md` - Gmail OAuth setup
- `CONTACT_FORM_TROUBLESHOOTING.md` - Form debugging guide

**Configuration Files:**
- `.env` - Environment variables (EmailJS credentials)
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI component library |
| Vite | 5.0.8 | Build tool and dev server |
| Tailwind CSS | 3.3.6 | Utility-first CSS framework |
| React Icons | 4.11.0 | Icon library (Font Awesome) |
| EmailJS | 4.4.1 | Email service integration |
| PostCSS | 8.4.32 | CSS processing |
| Autoprefixer | 10.4.16 | CSS vendor prefixes |

---

## 📋 Development Checklist

### **Before Deployment**

- [ ] All content updated and accurate
- [ ] Contact form tested and working
- [ ] All links verified (GitHub, LinkedIn, etc.)
- [ ] Resume.pdf file in public folder
- [ ] Environment variables configured
- [ ] EmailJS template configured
- [ ] Test form submission end-to-end
- [ ] Check responsive design on mobile
- [ ] Verify all sections render correctly
- [ ] Check browser console for errors
- [ ] Test smooth scrolling navigation
- [ ] Verify SEO meta tags
- [ ] Test on multiple browsers

### **Post-Deployment**

- [ ] Add environment variables to hosting platform
- [ ] Test contact form on live site
- [ ] Verify email delivery
- [ ] Check mobile responsiveness
- [ ] Test all external links
- [ ] Monitor for errors

---

## 🔐 Security Considerations

### **EmailJS**

- Public key is safe to expose (client-side)
- Service and template IDs are not sensitive
- EmailJS handles email delivery securely

### **Environment Variables**

- `.env` file is in `.gitignore` (not committed)
- Never commit credentials to Git
- Use hosting platform environment variables in production

### **Content**

- No sensitive data in codebase
- Resume PDF is publicly accessible
- Contact information is intentionally public

---

## 📊 Performance

### **Bundle Size**

- **HTML:** ~1.75 KB
- **CSS:** ~18 KB (gzipped: ~4 KB)
- **JavaScript:** ~200 KB (gzipped: ~62 KB)
- **Total:** ~66 KB gzipped

### **Optimizations**

- Code splitting by Vite
- Tree shaking (unused code removed)
- CSS purging (unused Tailwind classes removed)
- Asset optimization and hashing
- Lazy loading (can be added for images)

### **Loading Performance**

- Fast initial load
- Smooth animations
- No blocking resources
- Efficient React rendering

---

## 🎓 Learning Resources

### **React**

- [React Documentation](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)

### **Tailwind CSS**

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### **EmailJS**

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

### **Vite**

- [Vite Documentation](https://vitejs.dev/)
- [Vite Configuration](https://vitejs.dev/config/)

---

## 🤝 Contributing

This is a personal portfolio project. Feel free to:
- Fork for your own portfolio
- Customize the design
- Add new features
- Improve the code

---

## 📄 License

This portfolio is for personal use. Feel free to customize it for your own portfolio needs.

---

## 👨‍💻 Author

**Daniel Chisasura**
- Email: roscoechisas@gmail.com
- LinkedIn: [daniel-chisasura-a87b1147](https://www.linkedin.com/in/daniel-chisasura-a87b1147)
- GitHub: [chisabyte](https://github.com/chisabyte)

---

## 📞 Support

If you have questions about:
- **Portfolio customization:** Check component files and data files
- **Contact form issues:** See `CONTACT_FORM_TROUBLESHOOTING.md`
- **EmailJS setup:** See `EMAILJS_SETUP_SUMMARY.md`
- **Deployment:** Check deployment section above

---

## 🎉 Current Status

✅ **Production Ready**
- All features implemented
- Contact form working
- EmailJS integrated
- Responsive design complete
- SEO optimized
- Performance optimized
- Ready to deploy

**Last Updated:** December 2024  
**Version:** 1.0.0

---

**Built with ❤️ for cyber security professionals**

*This portfolio showcases modern web development practices and is designed to help land your dream cyber security role.*
